/**
 * Environment Configuration for RBGG Pipeline
 *
 * Manages all environment variables and configuration validation
 * for Roblox Open Cloud integration and other services.
 */

import dotenv from 'dotenv';
import fs from 'fs-extra';
import path from 'path';

// Load environment variables
dotenv.config();

/**
 * Configuration schema with validation and defaults
 */
const configSchema = {
  // Roblox Open Cloud API Configuration
  roblox: {
    apiKey: {
      key: 'ROBLOX_API_KEY',
      required: true,
      description: 'Roblox Open Cloud API key with Universe/Place management scope',
      validation: (value) => value && value.length > 10,
      errorMessage: 'ROBLOX_API_KEY must be a valid Open Cloud API key'
    },
    groupId: {
      key: 'ROBLOX_GROUP_ID',
      required: true,
      description: 'Prompted Playgrounds Roblox Group ID',
      validation: (value) => value && !isNaN(parseInt(value)),
      errorMessage: 'ROBLOX_GROUP_ID must be a valid numeric group ID'
    },
    universeId: {
      key: 'ROBLOX_UNIVERSE_ID',
      required: false, // Optional for MVP
      description: 'Universe ID for game publishing',
      validation: (value) => !value || !isNaN(parseInt(value)),
      errorMessage: 'ROBLOX_UNIVERSE_ID must be a valid numeric universe ID if provided'
    },
    placeId: {
      key: 'ROBLOX_PLACE_ID',
      required: false, // Will be set per-game or generated
      description: 'Default Place ID for publishing',
      validation: (value) => !value || !isNaN(parseInt(value)),
      errorMessage: 'ROBLOX_PLACE_ID must be a valid numeric place ID if provided'
    }
  },

  // API Rate Limiting & Retry Configuration
  api: {
    rateLimitPerMinute: {
      key: 'API_RATE_LIMIT_PER_MINUTE',
      required: false,
      default: 90, // Conservative limit (Roblox allows 100)
      description: 'API requests per minute limit',
      validation: (value) => !value || (!isNaN(parseInt(value)) && parseInt(value) > 0 && parseInt(value) <= 100),
      errorMessage: 'API_RATE_LIMIT_PER_MINUTE must be between 1 and 100'
    },
    retryMaxAttempts: {
      key: 'API_RETRY_MAX_ATTEMPTS',
      required: false,
      default: 3,
      description: 'Maximum retry attempts for failed API calls',
      validation: (value) => !value || (!isNaN(parseInt(value)) && parseInt(value) >= 1 && parseInt(value) <= 10),
      errorMessage: 'API_RETRY_MAX_ATTEMPTS must be between 1 and 10'
    },
    retryBaseDelayMs: {
      key: 'API_RETRY_BASE_DELAY_MS',
      required: false,
      default: 1000,
      description: 'Base delay in milliseconds for exponential backoff',
      validation: (value) => !value || (!isNaN(parseInt(value)) && parseInt(value) >= 100),
      errorMessage: 'API_RETRY_BASE_DELAY_MS must be at least 100'
    },
    requestTimeoutMs: {
      key: 'API_REQUEST_TIMEOUT_MS',
      required: false,
      default: 30000,
      description: 'Request timeout in milliseconds',
      validation: (value) => !value || (!isNaN(parseInt(value)) && parseInt(value) >= 5000),
      errorMessage: 'API_REQUEST_TIMEOUT_MS must be at least 5000'
    }
  },

  // Logging Configuration
  logging: {
    level: {
      key: 'LOG_LEVEL',
      required: false,
      default: 'info',
      description: 'Logging level (error, warn, info, debug)',
      validation: (value) => !value || ['error', 'warn', 'info', 'debug'].includes(value.toLowerCase()),
      errorMessage: 'LOG_LEVEL must be one of: error, warn, info, debug'
    },
    enableApiLogs: {
      key: 'ENABLE_API_LOGS',
      required: false,
      default: true,
      description: 'Enable detailed API request/response logging',
      validation: (value) => !value || ['true', 'false', '1', '0'].includes(value.toLowerCase()),
      errorMessage: 'ENABLE_API_LOGS must be true, false, 1, or 0'
    }
  },

  // Application Configuration
  app: {
    port: {
      key: 'PORT',
      required: false,
      default: 3000,
      description: 'Application server port',
      validation: (value) => !value || (!isNaN(parseInt(value)) && parseInt(value) > 0 && parseInt(value) <= 65535),
      errorMessage: 'PORT must be a valid port number between 1 and 65535'
    },
    nodeEnv: {
      key: 'NODE_ENV',
      required: false,
      default: 'development',
      description: 'Node.js environment',
      validation: (value) => !value || ['development', 'test', 'production'].includes(value.toLowerCase()),
      errorMessage: 'NODE_ENV must be one of: development, test, production'
    }
  }
};

/**
 * Validate and parse a configuration value
 */
function parseConfigValue(schema, category, key) {
  const config = schema[category][key];
  const envValue = process.env[config.key];

  // Check if required value is missing
  if (config.required && !envValue) {
    throw new Error(`❌ Required environment variable ${config.key} is missing: ${config.description}`);
  }

  // Use default if no value provided
  const value = envValue || config.default;

  // Skip validation if no value and not required
  if (!value && !config.required) {
    return config.default;
  }

  // Validate the value
  if (config.validation && !config.validation(value)) {
    throw new Error(`❌ Invalid ${config.key}: ${config.errorMessage}`);
  }

  return value;
}

/**
 * Parse boolean values from environment
 */
function parseBoolean(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return ['true', '1', 'yes', 'on'].includes(value.toLowerCase());
  }
  return false;
}

/**
 * Load and validate all configuration
 */
function loadConfiguration() {
  console.log('🔧 Loading RBGG Pipeline configuration...');

  try {
    const config = {
      roblox: {
        apiKey: parseConfigValue(configSchema, 'roblox', 'apiKey'),
        groupId: parseInt(parseConfigValue(configSchema, 'roblox', 'groupId')),
        universeId: parseConfigValue(configSchema, 'roblox', 'universeId') ?
                   parseInt(parseConfigValue(configSchema, 'roblox', 'universeId')) : null,
        placeId: parseConfigValue(configSchema, 'roblox', 'placeId') ?
                 parseInt(parseConfigValue(configSchema, 'roblox', 'placeId')) : null,
      },

      api: {
        rateLimitPerMinute: parseInt(parseConfigValue(configSchema, 'api', 'rateLimitPerMinute')),
        retryMaxAttempts: parseInt(parseConfigValue(configSchema, 'api', 'retryMaxAttempts')),
        retryBaseDelayMs: parseInt(parseConfigValue(configSchema, 'api', 'retryBaseDelayMs')),
        requestTimeoutMs: parseInt(parseConfigValue(configSchema, 'api', 'requestTimeoutMs')),
      },

      logging: {
        level: parseConfigValue(configSchema, 'logging', 'level').toLowerCase(),
        enableApiLogs: parseBoolean(parseConfigValue(configSchema, 'logging', 'enableApiLogs')),
      },

      app: {
        port: parseInt(parseConfigValue(configSchema, 'app', 'port')),
        nodeEnv: parseConfigValue(configSchema, 'app', 'nodeEnv').toLowerCase(),
        isDevelopment: parseConfigValue(configSchema, 'app', 'nodeEnv').toLowerCase() === 'development',
        isProduction: parseConfigValue(configSchema, 'app', 'nodeEnv').toLowerCase() === 'production',
      }
    };

    console.log('✅ Configuration loaded successfully');
    console.log(`📊 API Rate Limit: ${config.api.rateLimitPerMinute}/min`);
    console.log(`🔁 Max Retries: ${config.api.retryMaxAttempts}`);
    console.log(`📝 Log Level: ${config.logging.level}`);
    console.log(`🌐 Environment: ${config.app.nodeEnv}`);

    return config;

  } catch (error) {
    console.error('❌ Configuration validation failed:', error.message);
    console.error('\n📋 Configuration Help:');
    console.error('Create a .env file in the project root with the following variables:\n');

    // Print configuration help
    Object.entries(configSchema).forEach(([category, configs]) => {
      console.error(`# ${category.toUpperCase()} CONFIGURATION`);
      Object.entries(configs).forEach(([key, config]) => {
        const required = config.required ? ' (REQUIRED)' : ` (default: ${config.default})`;
        console.error(`${config.key}=your_value_here${required}`);
        console.error(`# ${config.description}`);
        console.error('');
      });
    });

    process.exit(1);
  }
}

/**
 * Create example .env file if it doesn't exist
 */
async function createExampleEnvFile() {
  const envPath = '.env';
  const envExamplePath = '.env.example';

  if (!(await fs.pathExists(envPath)) && !(await fs.pathExists(envExamplePath))) {
    console.log('📝 Creating .env.example file...');

    let envContent = `# RBGG Pipeline Environment Configuration
# Copy this file to .env and fill in your values

# ==============================================
# ROBLOX OPEN CLOUD CONFIGURATION (REQUIRED)
# ==============================================

# Your Roblox Open Cloud API key with Universe/Place management permissions
# Get this from: https://create.roblox.com/dashboard/credentials
ROBLOX_API_KEY=your_api_key_here

# Prompted Playgrounds Roblox Group ID
# Find this in your group's URL: https://www.roblox.com/groups/GROUP_ID/
ROBLOX_GROUP_ID=your_group_id_here

# Optional: Specific Universe ID for publishing (can be set per-game)
# ROBLOX_UNIVERSE_ID=your_universe_id_here

# Optional: Default Place ID for publishing (can be set per-game)
# ROBLOX_PLACE_ID=your_place_id_here

# ==============================================
# API CONFIGURATION (OPTIONAL)
# ==============================================

# API rate limiting (Roblox allows 100 req/min, we default to 90 for safety)
API_RATE_LIMIT_PER_MINUTE=90

# Retry configuration for failed API calls
API_RETRY_MAX_ATTEMPTS=3
API_RETRY_BASE_DELAY_MS=1000
API_REQUEST_TIMEOUT_MS=30000

# ==============================================
# LOGGING CONFIGURATION (OPTIONAL)
# ==============================================

# Logging level: error, warn, info, debug
LOG_LEVEL=info

# Enable detailed API request/response logging
ENABLE_API_LOGS=true

# ==============================================
# APPLICATION CONFIGURATION (OPTIONAL)
# ==============================================

# Server port
PORT=3000

# Node.js environment
NODE_ENV=development
`;

    await fs.writeFile(envExamplePath, envContent);
    console.log('✅ Created .env.example file');
    console.log('📋 Copy .env.example to .env and configure your API keys');
  }
}

// Initialize configuration
await createExampleEnvFile();
const config = loadConfiguration();

export default config;
export { configSchema, loadConfiguration, createExampleEnvFile };
