# RBGG Project File Structure

## Root Directory Structure

```
RBGG/
├── .env                          # Environment variables (secrets, API keys)
├── .env.example                  # Template for environment variables
├── .gitignore                    # Git ignore patterns
├── package.json                  # Node.js dependencies and scripts
├── README.md                     # Project documentation
├── 
├── src/                          # Main application source code
│   ├── index.js                  # Application entry point
│   ├── api/                      # API integrations
│   │   ├── roblox.js            # Roblox Open Cloud API client
│   │   └── openai.js            # OpenAI API client for processing
│   ├── config/                   # Configuration files
│   │   ├── database.js          # Database configuration
│   │   ├── logging.js           # Winston logging setup
│   │   └── security.js          # Security and rate limiting
│   ├── pipeline/                 # Game generation pipeline
│   │   ├── generator.js         # Main generation orchestrator
│   │   ├── templates.js         # Template management
│   │   ├── validator.js         # Game validation checks
│   │   └── publisher.js         # Roblox publishing logic
│   ├── utils/                    # Utility functions
│   │   ├── retry.js             # Retry logic with exponential backoff
│   │   ├── queue.js             # Job queue management
│   │   └── helpers.js           # Common helper functions
│   └── tests/                    # Test files
│       ├── api.test.js          # API integration tests
│       ├── pipeline.test.js     # Pipeline tests
│       └── utils.test.js        # Utility function tests
├── 
├── roblox/                       # Roblox-specific files
│   ├── default.project.json     # Rojo project configuration
│   ├── templates/                # Game templates
│   │   ├── obby/                # Obby template
│   │   ├── tycoon/              # Tycoon template
│   │   └── simulator/           # Simulator template
│   ├── scripts/                  # Shared Lua scripts
│   │   ├── common/              # Common utilities
│   │   └── modules/             # Reusable modules
│   └── builds/                   # Built game files (.rbxlx)
├── 
├── documentation/                # Project documentation
│   ├── PRD.md                   # Product Requirements Document
│   ├── PRD_checklist.md         # Implementation checklist
│   ├── research_questions.md    # Research and planning
│   └── research/                # Research documents
├── 
└── docs/                        # Generated documentation
    ├── file_structure.md        # This file
    └── api/                     # API documentation
```

## Key File Purposes

### Core Application (`src/`)
- **index.js**: Main application entry point, sets up Express server and pipeline
- **api/roblox.js**: Handles all Roblox Open Cloud API interactions with rate limiting
- **pipeline/generator.js**: Orchestrates the entire game generation process
- **config/**: Centralized configuration management for all services

### Roblox Integration (`roblox/`)
- **default.project.json**: Rojo configuration for syncing local files to Roblox Studio
- **templates/**: Curated game templates for each genre (Obby, Tycoon, Simulator)
- **builds/**: Output directory for generated .rbxlx files

### Development & Testing
- **tests/**: Comprehensive test suite covering API, pipeline, and utilities
- **documentation/**: Project planning and requirements documentation

## Git Ignore Strategy
The `.gitignore` file excludes:
- Environment files (`.env`)
- Node modules and build artifacts
- Roblox build files (`.rbxl`, `.rbxm`)
- IDE and OS temporary files
- Security-sensitive files

## Security Notes
- All API keys and secrets are stored in `.env` (never committed)
- Roblox API key has limited scope (Universe/Place management only)
- Rate limiting enforced to respect Roblox's 100 req/min limit
- Input validation on all user-generated content
