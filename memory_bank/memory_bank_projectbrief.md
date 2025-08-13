# RBGG (Roblox Battle Game Generator) Project Brief

## Core Mission
Build a safe, template-first AI-powered pipeline that converts approved game ideas into playable Roblox experiences. The system assembles games from curated templates, runs automated and human quality checks, and publishes under the "Prompted Playgrounds" Roblox Group with proper attribution.

## Target Product
**Prompt2Play** - A Discord-integrated game generation pipeline that transforms community ideas into published Roblox games within minutes.

## Key Requirements

### Primary Goals
1. **Template-First Assembly**: Use curated, safe templates (Obby, Tycoon, Simulator) as foundations
2. **Community-Driven**: Accept game ideas from Discord community members
3. **Automated Pipeline**: Handle generation, validation, and publishing with minimal human intervention
4. **Safe Content**: Comprehensive moderation and content filtering at every stage
5. **Attribution**: Clear credit to idea originators with splash screens and descriptions

### Technical Constraints
- **Age Compliance**: 13+ only (Discord TOS + COPPA compliance)
- **Rate Limiting**: 90 requests/minute to Roblox API (safety buffer from 100/min limit)
- **Template Scope**: Start with 3 genres, expand based on success
- **Quality Gates**: Automated playability checks + human playtesting before publish

### Success Metrics
- Successful game generation and publication
- Community engagement and submission volume
- Template reusability and safety record
- User satisfaction with generated games

## Current Status
**Phase 1: Foundation** - Development environment and core API integration complete. Roblox group creation deferred pending budget approval (100 Robux requirement). Pipeline ready for local testing and template development.

## Next Priorities
1. Game template system development
2. Local pipeline testing and validation
3. Content generation and assembly engine
4. Automated quality checks implementation
5. Discord bot integration (Phase 2)
