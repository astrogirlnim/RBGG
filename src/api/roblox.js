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

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'roblox-api' }
});

class RobloxAPIClient {
  constructor() {
    this.apiKey = process.env.ROBLOX_API_KEY;
    this.baseURL = 'https://apis.roblox.com';
    this.groupId = process.env.ROBLOX_GROUP_ID;
    this.universeId = process.env.ROBLOX_UNIVERSE_ID;

    // Rate limiting: Roblox allows 100 req/min, we'll use 90 to be safe
    this.rateLimitPerMinute = parseInt(process.env.API_RATE_LIMIT_PER_MINUTE) || 90;
    this.requestTimes = [];

    // Retry configuration
    this.maxRetries = parseInt(process.env.API_RETRY_MAX_ATTEMPTS) || 3;
    this.baseDelay = parseInt(process.env.API_RETRY_BASE_DELAY_MS) || 1000;

    if (!this.apiKey) {
      throw new Error('ROBLOX_API_KEY environment variable is required');
    }

    logger.info('🔗 Roblox API Client initialized', {
      baseURL: this.baseURL,
      rateLimit: this.rateLimitPerMinute
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

      logger.warn('⏳ Rate limit reached, waiting...', { waitTimeMs: waitTime });
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
            maxRetries: this.maxRetries
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
            status: error.response?.status
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
          status: error.response?.status
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

    // Retry on network errors, timeouts, and certain HTTP status codes
    if (!status) return true; // Network error

    // Rate limiting (429), server errors (5xx), and some 4xx errors
    const retryableStatuses = [408, 429, 500, 502, 503, 504];
    return retryableStatuses.includes(status);
  }

  /**
   * Create authenticated request headers
   */
  getHeaders(contentType = 'application/json') {
    return {
      'x-api-key': this.apiKey,
      'Content-Type': contentType,
      'User-Agent': 'RBGG-Pipeline/1.0.0'
    };
  }

  /**
   * Test API connection and permissions
   */
  async testConnection() {
    logger.info('🧪 Testing Roblox API connection...');

    return this.withRetry(async () => {
      const response = await axios.get(
        `${this.baseURL}/cloud/v2/users/me`,
        {
          headers: this.getHeaders(),
          timeout: parseInt(process.env.API_REQUEST_TIMEOUT_MS) || 30000
        }
      );

      logger.info('✅ API connection test successful', {
        userId: response.data.id,
        displayName: response.data.displayName
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
      metadata
    });

    if (!await fs.pathExists(placeFilePath)) {
      throw new Error(`Place file not found: ${placeFilePath}`);
    }

    return this.withRetry(async () => {
      const formData = new FormData();
      formData.append('request', JSON.stringify({
        publishRequest: metadata
      }));
      formData.append('content', fs.createReadStream(placeFilePath));

      const response = await axios.post(
        `${this.baseURL}/cloud/v2/places/${placeId}/versions`,
        formData,
        {
          headers: {
            ...this.getHeaders('multipart/form-data'),
            ...formData.getHeaders()
          },
          timeout: parseInt(process.env.API_REQUEST_TIMEOUT_MS) || 30000,
          maxContentLength: Infinity,
          maxBodyLength: Infinity
        }
      );

      logger.info('✅ Place published successfully', {
        placeId,
        versionNumber: response.data.versionNumber,
        status: response.data.status
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
          timeout: parseInt(process.env.API_REQUEST_TIMEOUT_MS) || 30000
        }
      );

      logger.info('✅ Place information retrieved', {
        placeId,
        displayName: response.data.displayName,
        description: response.data.description
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
          timeout: parseInt(process.env.API_REQUEST_TIMEOUT_MS) || 30000
        }
      );

      logger.info('✅ Place metadata updated', {
        placeId,
        updates
      });

      return response.data;
    }, `Updating place metadata ${placeId}`);
  }

  /**
   * Get current API usage statistics
   */
  getUsageStats() {
    const now = Date.now();
    const oneMinuteAgo = now - 60000;
    const recentRequests = this.requestTimes.filter(time => time > oneMinuteAgo);

    return {
      requestsInLastMinute: recentRequests.length,
      rateLimitPerMinute: this.rateLimitPerMinute,
      utilizationPercent: Math.round((recentRequests.length / this.rateLimitPerMinute) * 100)
    };
  }
}

export default RobloxAPIClient;
