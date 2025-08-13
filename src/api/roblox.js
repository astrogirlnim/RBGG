/**
 * Roblox Open Cloud API Integration
 *
 * Handles all interactions with Roblox Open Cloud APIs including:
 * - Universe and Place management
 * - Rate limiting (100 req/min)
 * - Retry logic with exponential backoff
 * - Error handling for quota scenarios
 */

import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs-extra';
import winston from 'winston';
import config from '../config/environment.js';

const logger = winston.createLogger({
  level: config.logging.level,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'roblox-api' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

class RobloxAPIClient {
  constructor(options = {}) {
    // Use configuration system with override options
    this.apiKey = options.apiKey || config.roblox.apiKey;
    this.baseURL = options.baseURL || 'https://apis.roblox.com';
    this.groupId = options.groupId || config.roblox.groupId;
    this.universeId = options.universeId || config.roblox.universeId;
    this.placeId = options.placeId || config.roblox.placeId;

    // Rate limiting configuration from config system
    this.rateLimitPerMinute = options.rateLimitPerMinute || config.api.rateLimitPerMinute;
    this.requestTimes = [];

    // Retry configuration from config system
    this.maxRetries = options.maxRetries || config.api.retryMaxAttempts;
    this.baseDelay = options.baseDelay || config.api.retryBaseDelayMs;
    this.requestTimeout = options.requestTimeout || config.api.requestTimeoutMs;

    // Validate essential configuration
    if (!this.apiKey) {
      throw new Error('❌ ROBLOX_API_KEY is required for Open Cloud integration');
    }

    if (!this.groupId) {
      throw new Error('❌ ROBLOX_GROUP_ID is required for publishing to Prompted Playgrounds group');
    }

    logger.info('🔗 Roblox Open Cloud API Client initialized', {
      baseURL: this.baseURL,
      groupId: this.groupId,
      universeId: this.universeId || 'Not set',
      rateLimit: `${this.rateLimitPerMinute}/min`,
      maxRetries: this.maxRetries,
      requestTimeout: `${this.requestTimeout}ms`,
    });
  }

  /**
   * Rate limiting check - ensures we don't exceed Roblox's limits
   */
  async checkRateLimit() {
    const now = Date.now();
    const oneMinuteAgo = now - 60000;

    // Remove requests older than 1 minute
    this.requestTimes = this.requestTimes.filter(time => time > oneMinuteAgo);

    if (this.requestTimes.length >= this.rateLimitPerMinute) {
      const oldestRequest = Math.min(...this.requestTimes);
      const waitTime = 60000 - (now - oldestRequest) + 100; // Add 100ms buffer

      logger.warn('⏳ Rate limit reached, waiting...', {
        waitTimeMs: waitTime,
      });
      await new Promise(resolve => setTimeout(resolve, waitTime));

      // Recursive call to check again after waiting
      return this.checkRateLimit();
    }

    this.requestTimes.push(now);
  }

  /**
   * Retry logic with exponential backoff
   */
  async withRetry(operation, context = '') {
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        await this.checkRateLimit();
        const result = await operation();

        if (attempt > 1) {
          logger.info('✅ Operation succeeded after retry', {
            context,
            attempt,
            maxRetries: this.maxRetries,
          });
        }

        return result;
      } catch (error) {
        const isLastAttempt = attempt === this.maxRetries;
        const shouldRetry = this.shouldRetry(error);

        if (isLastAttempt || !shouldRetry) {
          logger.error('❌ Operation failed after all retries', {
            context,
            attempt,
            maxRetries: this.maxRetries,
            error: error.message,
            status: error.response?.status,
          });
          throw error;
        }

        const delay = this.baseDelay * Math.pow(2, attempt - 1);
        const jitter = Math.random() * 0.1 * delay; // Add jitter to prevent thundering herd
        const totalDelay = delay + jitter;

        logger.warn('🔄 Retrying operation', {
          context,
          attempt,
          nextAttempt: attempt + 1,
          delayMs: Math.round(totalDelay),
          error: error.message,
          status: error.response?.status,
        });

        await new Promise(resolve => setTimeout(resolve, totalDelay));
      }
    }
  }

  /**
   * Determine if an error should trigger a retry
   */
  shouldRetry(error) {
    const status = error.response?.status;
    const errorCode = error.response?.data?.error?.code;

    // Retry on network errors, timeouts, and certain HTTP status codes
    if (!status) return true; // Network error

    // Handle specific Roblox error codes
    if (errorCode) {
      // Quota exceeded - always retry with longer delay
      if (errorCode === 'QUOTA_EXCEEDED' || errorCode === 'RATE_LIMITED') {
        logger.warn('📊 API quota exceeded, will retry with backoff', {
          errorCode,
          status,
          message: error.response?.data?.error?.message
        });
        return true;
      }

      // Temporary server issues - retry
      if (['INTERNAL_ERROR', 'SERVICE_UNAVAILABLE', 'TIMEOUT'].includes(errorCode)) {
        return true;
      }

      // Authentication/authorization issues - don't retry
      if (['INVALID_API_KEY', 'INSUFFICIENT_SCOPE', 'FORBIDDEN'].includes(errorCode)) {
        logger.error('🔐 Authentication/authorization error - check API key and permissions', {
          errorCode,
          message: error.response?.data?.error?.message
        });
        return false;
      }
    }

    // Rate limiting (429), server errors (5xx), and some 4xx errors
    const retryableStatuses = [408, 429, 500, 502, 503, 504];
    const shouldRetry = retryableStatuses.includes(status);

    if (status === 429) {
      logger.warn('⚠️ Rate limit hit - retrying with exponential backoff', { status });
    } else if (status >= 500) {
      logger.warn('🔧 Server error detected - retrying', { status });
    }

    return shouldRetry;
  }

  /**
   * Create authenticated request headers
   */
  getHeaders(contentType = 'application/json') {
    return {
      'x-api-key': this.apiKey,
      'Content-Type': contentType,
      'User-Agent': 'RBGG-Pipeline/1.0.0',
    };
  }

  /**
   * Test API connection and permissions
   */
  async testConnection() {
    logger.info('🧪 Testing Roblox API connection...');

    return this.withRetry(async () => {
      const response = await axios.get(`${this.baseURL}/cloud/v2/users/me`, {
        headers: this.getHeaders(),
        timeout: this.requestTimeout,
      });

      logger.info('✅ API connection test successful', {
        userId: response.data.id,
        displayName: response.data.displayName,
      });

      return response.data;
    }, 'API connection test');
  }

  /**
   * Publish a place file to Roblox
   */
  async publishPlace(placeFilePath, placeId, metadata = {}) {
    logger.info('📤 Publishing place to Roblox', {
      placeFilePath,
      placeId,
      metadata,
    });

    if (!(await fs.pathExists(placeFilePath))) {
      throw new Error(`Place file not found: ${placeFilePath}`);
    }

    return this.withRetry(async () => {
      const formData = new FormData();
      formData.append(
        'request',
        JSON.stringify({
          publishRequest: metadata,
        })
      );
      formData.append('content', fs.createReadStream(placeFilePath));

      const response = await axios.post(
        `${this.baseURL}/cloud/v2/places/${placeId}/versions`,
        formData,
        {
          headers: {
            ...this.getHeaders('multipart/form-data'),
            ...formData.getHeaders(),
          },
          timeout: this.requestTimeout,
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        }
      );

      logger.info('✅ Place published successfully', {
        placeId,
        versionNumber: response.data.versionNumber,
        status: response.data.status,
      });

      return response.data;
    }, `Publishing place ${placeId}`);
  }

  /**
   * Get place information
   */
  async getPlaceInfo(placeId) {
    logger.info('📋 Getting place information', { placeId });

    return this.withRetry(async () => {
      const response = await axios.get(
        `${this.baseURL}/cloud/v2/places/${placeId}`,
        {
          headers: this.getHeaders(),
          timeout: this.requestTimeout,
        }
      );

      logger.info('✅ Place information retrieved', {
        placeId,
        displayName: response.data.displayName,
        description: response.data.description,
      });

      return response.data;
    }, `Getting place info ${placeId}`);
  }

  /**
   * Update place metadata (title, description, etc.)
   */
  async updatePlaceMetadata(placeId, updates) {
    logger.info('📝 Updating place metadata', { placeId, updates });

    return this.withRetry(async () => {
      const response = await axios.patch(
        `${this.baseURL}/cloud/v2/places/${placeId}`,
        updates,
        {
          headers: this.getHeaders(),
          timeout: this.requestTimeout,
        }
      );

      logger.info('✅ Place metadata updated', {
        placeId,
        updates,
      });

      return response.data;
    }, `Updating place metadata ${placeId}`);
  }

  /**
   * Create a new place in the group
   */
  async createPlace(templateType = 'standard', metadata = {}) {
    logger.info('🏗️ Creating new place in Prompted Playgrounds group', {
      templateType,
      metadata,
      groupId: this.groupId
    });

    const placeData = {
      templatePlaceId: metadata.templatePlaceId || null,
      name: metadata.name || `Generated ${templateType} Game`,
      description: metadata.description || `AI-generated ${templateType} game created by the RBGG Pipeline`,
      ...metadata
    };

    return this.withRetry(async () => {
      const response = await axios.post(
        `${this.baseURL}/cloud/v2/groups/${this.groupId}/places`,
        placeData,
        {
          headers: this.getHeaders(),
          timeout: this.requestTimeout,
        }
      );

      logger.info('✅ Place created successfully', {
        placeId: response.data.placeId,
        name: response.data.name,
        universeId: response.data.universeId
      });

      return response.data;
    }, `Creating place in group ${this.groupId}`);
  }

  /**
   * Get group information and verify permissions
   */
  async getGroupInfo() {
    logger.info('🏢 Getting Prompted Playgrounds group information', {
      groupId: this.groupId
    });

    return this.withRetry(async () => {
      const response = await axios.get(
        `${this.baseURL}/cloud/v2/groups/${this.groupId}`,
        {
          headers: this.getHeaders(),
          timeout: this.requestTimeout,
        }
      );

      logger.info('✅ Group information retrieved', {
        groupId: this.groupId,
        name: response.data.name,
        description: response.data.description
      });

      return response.data;
    }, `Getting group info ${this.groupId}`);
  }

  /**
   * List places in the group
   */
  async listGroupPlaces(limit = 10, cursor = null) {
    logger.info('📋 Listing places in Prompted Playgrounds group', {
      groupId: this.groupId,
      limit
    });

    const params = new URLSearchParams({
      maxPageSize: limit.toString()
    });

    if (cursor) {
      params.append('pageToken', cursor);
    }

    return this.withRetry(async () => {
      const response = await axios.get(
        `${this.baseURL}/cloud/v2/groups/${this.groupId}/places?${params}`,
        {
          headers: this.getHeaders(),
          timeout: this.requestTimeout,
        }
      );

      logger.info('✅ Group places retrieved', {
        groupId: this.groupId,
        placesCount: response.data.places?.length || 0,
        hasNextPage: !!response.data.nextPageToken
      });

      return response.data;
    }, `Listing group places ${this.groupId}`);
  }

  /**
   * Comprehensive game publishing with attribution and metadata
   */
  async publishGameToGroup(placeFilePath, gameMetadata = {}) {
    logger.info('🚀 Publishing game to Prompted Playgrounds group', {
      placeFilePath,
      gameMetadata
    });

    // Step 1: Create the place if placeId not provided
    let placeId = gameMetadata.placeId;
    let universeId = gameMetadata.universeId;

    if (!placeId) {
      logger.info('📝 Creating new place for game publication');
      const placeInfo = await this.createPlace(gameMetadata.templateType, {
        name: gameMetadata.title || 'Generated Game',
        description: this.formatGameDescription(gameMetadata),
        templatePlaceId: gameMetadata.templatePlaceId
      });

      placeId = placeInfo.placeId;
      universeId = placeInfo.universeId;

      logger.info('✅ Place created', { placeId, universeId });
    }

    // Step 2: Upload the game file
    logger.info('📤 Uploading game file to place', { placeId });
    const publishResult = await this.publishPlace(
      placeFilePath,
      placeId,
      {
        versionType: 'Published',
        comment: `Generated ${gameMetadata.templateType || 'game'} - ${new Date().toISOString()}`
      }
    );

    // Step 3: Update place metadata with attribution
    logger.info('📝 Updating place metadata with attribution');
    await this.updatePlaceMetadata(placeId, {
      name: gameMetadata.title || 'Generated Game',
      description: this.formatGameDescription(gameMetadata)
    });

    const gameUrl = `https://www.roblox.com/games/${placeId}/`;

    logger.info('🎉 Game published successfully to Prompted Playgrounds', {
      placeId,
      universeId,
      gameUrl,
      templateType: gameMetadata.templateType,
      submittedBy: gameMetadata.submittedBy
    });

    return {
      placeId,
      universeId,
      gameUrl,
      versionNumber: publishResult.versionNumber,
      publishedAt: new Date().toISOString(),
      metadata: gameMetadata
    };
  }

  /**
   * Format game description with proper attribution
   */
  formatGameDescription(metadata) {
    const parts = [];

    // Main description
    if (metadata.description) {
      parts.push(metadata.description);
      parts.push(''); // Empty line
    }

    // Attribution
    if (metadata.submittedBy) {
      parts.push(`💡 Idea by ${metadata.submittedBy} from Discord`);
    }

    // Template information
    if (metadata.templateType) {
      parts.push(`🎮 Template: ${metadata.templateType.charAt(0).toUpperCase() + metadata.templateType.slice(1)}`);
    }

    // Generation information
    parts.push(`🤖 Generated by RBGG Pipeline`);
    parts.push(`📅 Created: ${new Date().toLocaleDateString()}`);

    // Prompted Playgrounds attribution
    parts.push('');
    parts.push('🏰 Part of the Prompted Playgrounds collection');
    parts.push('Join our Discord to submit your own game ideas!');

    return parts.join('\n');
  }

  /**
   * Get current API usage statistics
   */
  getUsageStats() {
    const now = Date.now();
    const oneMinuteAgo = now - 60000;
    const recentRequests = this.requestTimes.filter(
      time => time > oneMinuteAgo
    );

    return {
      requestsInLastMinute: recentRequests.length,
      rateLimitPerMinute: this.rateLimitPerMinute,
      utilizationPercent: Math.round(
        (recentRequests.length / this.rateLimitPerMinute) * 100
      ),
      quotaRemaining: this.rateLimitPerMinute - recentRequests.length,
      nextResetTime: new Date(Math.max(...this.requestTimes, now - 60000) + 60000).toISOString()
    };
  }
}

export default RobloxAPIClient;
