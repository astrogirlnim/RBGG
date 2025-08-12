#!/usr/bin/env node

/**
 * RBGG - Roblox Game Generation Pipeline
 * Main application entry point
 *
 * This serves as the orchestration layer for the entire pipeline:
 * - API server for receiving generation requests
 * - Pipeline management for game generation
 * - Integration with Roblox Open Cloud for publishing
 */

import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import winston from 'winston';

// Load environment variables
console.log('🔧 Loading environment configuration...');
dotenv.config();

// ES Module path resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize logging
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'rbgg-pipeline' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

// Validate critical environment variables
const requiredEnvVars = [
  'ROBLOX_API_KEY',
  'DATABASE_URL',
  'NODE_ENV'
];

console.log('🔍 Validating environment variables...');
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  logger.error('❌ Missing required environment variables:', { missingVars });
  console.error('❌ Critical environment variables missing. Please check your .env file.');
  process.exit(1);
}

logger.info('✅ Environment validation passed');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Basic health check endpoint
app.get('/health', (req, res) => {
  logger.info('Health check requested');
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV,
    uptime: process.uptime()
  });
});

// Pipeline status endpoint
app.get('/api/status', (req, res) => {
  logger.info('Pipeline status requested');
  res.json({
    pipeline: 'operational',
    roblox_api: 'connected',
    database: 'connected',
    queue_length: 0, // TODO: Implement queue monitoring
    last_generation: null // TODO: Track last successful generation
  });
});

// Main pipeline endpoint (placeholder for Phase 2)
app.post('/api/generate', (req, res) => {
  logger.info('Game generation requested', { body: req.body });
  res.json({
    message: 'Game generation pipeline not yet implemented',
    phase: 'Phase 1 - Foundation Setup',
    status: 'coming_soon'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  logger.error('Unhandled error:', error);
  res.status(500).json({
    error: 'Internal server error',
    message: 'An unexpected error occurred'
  });
});

// 404 handler
app.use((req, res) => {
  logger.warn('404 - Route not found', { path: req.path, method: req.method });
  res.status(404).json({
    error: 'Not found',
    message: 'The requested endpoint does not exist'
  });
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  logger.info('🛑 SIGTERM received, shutting down gracefully...');
  server.close(() => {
    logger.info('✅ Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('🛑 SIGINT received, shutting down gracefully...');
  server.close(() => {
    logger.info('✅ Server closed');
    process.exit(0);
  });
});

// Start the server
const server = app.listen(PORT, () => {
  logger.info(`🚀 RBGG Pipeline Server started on port ${PORT}`);
  logger.info(`📊 Environment: ${process.env.NODE_ENV}`);
  logger.info(`🔗 Health check: http://localhost:${PORT}/health`);
  logger.info(`📈 Status: http://localhost:${PORT}/api/status`);
  console.log(`
🎮 Prompt2Play RBGG Pipeline
=============================
✅ Server running on port ${PORT}
✅ Environment: ${process.env.NODE_ENV}
✅ Logging level: ${process.env.LOG_LEVEL || 'info'}

Ready for Phase 1 implementation!
  `);
});

export default app;
