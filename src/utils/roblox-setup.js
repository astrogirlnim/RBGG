/**
 * Roblox Setup and Validation Utilities
 *
 * Helper script to validate Open Cloud integration and guide setup process.
 */

import RobloxAPIClient from '../api/roblox.js';
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()]
});

/**
 * Comprehensive setup validation for Roblox Open Cloud integration
 */
export async function validateRobloxSetup() {
  logger.info('🧪 Running comprehensive Roblox Open Cloud setup validation...\n');

  const results = {
    configurationValid: false,
    apiConnectionWorking: false,
    groupAccessible: false,
    permissionsValid: false,
    overallStatus: 'failed'
  };

  try {
    // Step 1: Load and validate configuration
    logger.info('📋 Step 1: Loading and validating configuration...');

    let config;
    try {
      config = (await import('../config/environment.js')).default;
    } catch (configError) {
      throw new Error(`Configuration loading failed: ${configError.message}`);
    }

    if (!config.roblox.apiKey) {
      throw new Error('ROBLOX_API_KEY is required');
    }

    if (!config.roblox.groupId) {
      throw new Error('ROBLOX_GROUP_ID is required');
    }

    logger.info('✅ Configuration validation passed');
    results.configurationValid = true;

    // Step 2: Test API connection
    logger.info('\n🔗 Step 2: Testing API connection...');
    const apiClient = new RobloxAPIClient();

    const userInfo = await apiClient.testConnection();
    logger.info(`✅ API connection successful - Connected as: ${userInfo.displayName} (${userInfo.id})`);
    results.apiConnectionWorking = true;

    // Step 3: Test group access
    logger.info('\n🏢 Step 3: Testing group access...');
    try {
      const groupInfo = await apiClient.getGroupInfo();
      logger.info(`✅ Group access successful - Group: ${groupInfo.name}`);
      logger.info(`   Description: ${groupInfo.description || 'No description'}`);
      results.groupAccessible = true;
    } catch (error) {
      logger.error(`❌ Group access failed: ${error.message}`);
      logger.error('   Make sure your API key has access to the specified group');
      logger.error(`   Group ID: ${config.roblox.groupId}`);
    }

    // Step 4: Test permissions by listing places
    logger.info('\n🔐 Step 4: Testing permissions...');
    try {
      const places = await apiClient.listGroupPlaces(5);
      logger.info(`✅ Permissions validation successful - Found ${places.places?.length || 0} places in group`);

      if (places.places && places.places.length > 0) {
        logger.info('   Recent places:');
        places.places.slice(0, 3).forEach((place, i) => {
          logger.info(`   ${i + 1}. ${place.displayName} (ID: ${place.path.split('/').pop()})`);
        });
      }

      results.permissionsValid = true;
    } catch (error) {
      logger.error(`❌ Permissions validation failed: ${error.message}`);
      logger.error('   Your API key may not have sufficient permissions for place management');
    }

    // Step 5: API usage statistics
    logger.info('\n📊 API Usage Statistics:');
    const stats = apiClient.getUsageStats();
    logger.info(`   Rate limit: ${stats.requestsInLastMinute}/${stats.rateLimitPerMinute} requests/min (${stats.utilizationPercent}%)`);
    logger.info(`   Quota remaining: ${stats.quotaRemaining} requests`);
    logger.info(`   Next reset: ${new Date(stats.nextResetTime).toLocaleTimeString()}`);

    // Overall status
    const allChecksPass = results.configurationValid &&
                         results.apiConnectionWorking &&
                         results.groupAccessible &&
                         results.permissionsValid;

    if (allChecksPass) {
      results.overallStatus = 'success';
      logger.info('\n🎉 All validation checks passed! Roblox Open Cloud integration is ready.');
      logger.info('   You can now use the RBGG Pipeline to publish games to Prompted Playgrounds.');
    } else {
      results.overallStatus = 'partial';
      logger.warn('\n⚠️ Some validation checks failed. Please address the issues above before proceeding.');
    }

  } catch (error) {
    logger.error(`\n❌ Validation failed: ${error.message}`);
    logger.error('\nSetup Help:');
    logger.error('1. Create a Roblox group named "Prompted Playgrounds"');
    logger.error('2. Generate an Open Cloud API key with Universe/Place management scope');
    logger.error('3. Configure your .env file with the required values');
    logger.error('4. Ensure your API key has permissions to manage the group');
  }

  return results;
}

/**
 * Setup guide for creating the Prompted Playgrounds group
 */
export function printGroupSetupGuide() {
  console.log('\n🏗️ PROMPTED PLAYGROUNDS GROUP SETUP GUIDE');
  console.log('═══════════════════════════════════════════════\n');

  console.log('📋 Step 1: Create Roblox Group');
  console.log('   1. Go to https://www.roblox.com/groups/create');
  console.log('   2. Group Name: "Prompted Playgrounds"');
  console.log('   3. Description: "AI-generated games created from Discord community ideas"');
  console.log('   4. Set group to Public');
  console.log('   5. Note the Group ID from the URL after creation\n');

  console.log('🔑 Step 2: Generate Open Cloud API Key');
  console.log('   1. Go to https://create.roblox.com/dashboard/credentials');
  console.log('   2. Click "Create API Key"');
  console.log('   3. Name: "RBGG Pipeline"');
  console.log('   4. Select your Prompted Playgrounds group');
  console.log('   5. Enable these permissions:');
  console.log('      - universe-messaging-service:publish');
  console.log('      - universe:read');
  console.log('      - place:read');
  console.log('      - place:write');
  console.log('      - place-configuration:read');
  console.log('      - place-configuration:write');
  console.log('   6. Copy the generated API key\n');

  console.log('📝 Step 3: Configure Environment');
  console.log('   1. Copy .env.example to .env');
  console.log('   2. Set ROBLOX_API_KEY=your_api_key_here');
  console.log('   3. Set ROBLOX_GROUP_ID=your_group_id_here');
  console.log('   4. Run: npm run validate-setup\n');

  console.log('🎯 Important Notes:');
  console.log('   - Use limited-scope API keys for security');
  console.log('   - Never commit API keys to version control');
  console.log('   - Test permissions before production use');
  console.log('   - Monitor API usage to stay within rate limits\n');
}

/**
 * Setup command line interface
 */
export async function runSetupCLI() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log('RBGG Roblox Setup Utilities\n');
    console.log('Commands:');
    console.log('  validate     Run comprehensive setup validation');
    console.log('  guide        Show group setup guide');
    console.log('  --help, -h   Show this help message\n');
    return;
  }

  if (args.includes('guide')) {
    printGroupSetupGuide();
    return;
  }

  // Default: run validation
  try {
    await validateRobloxSetup();
  } catch (error) {
    logger.error('❌ Setup validation failed. Run "npm run setup-guide" for help setting up your environment.');
  }
}

// If run directly, execute CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  runSetupCLI();
}
