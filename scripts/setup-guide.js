#!/usr/bin/env node

/**
 * Standalone Setup Guide for RBGG Pipeline
 *
 * This script provides setup guidance without requiring environment configuration.
 */

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

console.log('📁 Files Created:');
console.log('   - .env.example (template configuration file)');
console.log('   - src/config/environment.js (configuration system)');
console.log('   - src/api/roblox.js (enhanced Open Cloud integration)');
console.log('   - src/utils/roblox-setup.js (validation utilities)\n');

console.log('🚀 Next Steps:');
console.log('   1. Complete Steps 1-3 above');
console.log('   2. Run "npm run validate-setup" to test your configuration');
console.log('   3. Proceed to Phase 1, Step 4 in the PRD checklist\n');
