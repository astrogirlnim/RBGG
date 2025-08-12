# Project Name
Prompt2Play (Roblox Game Generation Pipeline)

## Project Description
A safe, template-first AI-powered pipeline that converts approved game ideas into playable Roblox experiences. The pipeline assembles games from curated templates, runs automated and human quality checks, and publishes under the “Prompted Playgrounds” Roblox Group with splash-screen attribution. While initial ideas may come from Discord or other sources, the focus is on building the Roblox generation and publishing system first; Discord bot integration will be added in a later phase.

## Target Audience
- Teens ages 13–17 interested in Roblox game creation
- Parents/educators observing teen creativity
- Internal moderators and pipeline operators

---

## Desired Features

### Game Generation Pipeline

#### Template-First Assembly
- [ ] Start with 1 curated template per genre:
    - **Obby:** checkpoints + varied obstacles (disappearing parts, crushers)
    - **Tycoon:** income/upgrade cycle (2–3 tiers) + customization
    - **Simulator:** 2–3 tier upgrade loop + collection + leveling
- [ ] Prompt→parameter mapping
    - [ ] Difficulty, progression speed, collectible types

#### Code Synthesis & Safety
- [ ] Use vetted modules; sanitize asset IDs; ensure data store safety; anti-exploit basics
- [ ] Automated playability checks
    - [ ] Spawn, movement, core loop, error logs
- [ ] Human playtest step (2–5 min) before publish

#### Failure Handling
- [ ] Up to 3 automated retries with refined prompts
- [ ] Safe-mode fallback template if still failing
- [ ] Escalate to manual fix; notify user via chosen communication channel (Discord, email, etc.)

#### Roblox Publishing
- [ ] Group-based Open Cloud publishing
    - [ ] Group name: Prompted Playgrounds
    - [ ] Limited-scope API key; Universe/Place updates; retry with backoff
- [ ] Game metadata & attribution
    - [ ] Splash-screen “Idea by @User from Discord” + end credits + game description
- [ ] Iteration flow
    - [ ] Support v2+ updates from feedback while preserving earlier versions

#### Community Feedback (Optional MVP+)
- [ ] Showcase feed (Discord, web, or in-game board)
    - [ ] Auto-embed with game link + thumbnail
    - [ ] Voting or feedback collection
- [ ] Auto-generated thumbnails
    - [ ] Scene staging + capture; trailers post-MVP

---

## Compliance & Privacy
- [ ] Age scope 13+ only
- [ ] Data minimization
    - [ ] Store only user ID, submission text, decision logs, game links
- [ ] Retention & deletion
    - [ ] User-initiated erasure command; periodic log pruning

---

## Monetization (Freemium)
- [ ] Premium roles or accounts (future integration with Discord/web)
    - [ ] Queue priority + extra daily submissions
- [ ] Transparent fairness
    - [ ] Caps to prevent premium starvation of free users

---

## Design Requests
- [ ] Kid-friendly, accessible UI in any web or Roblox-based touchpoints
    - [ ] Clear status badges, progress indicators
- [ ] Template cards per genre
    - [ ] Icons + 1-sentence loop summary; safe color palette; accessibility contrast

---

## Other Notes
- Persistent compute environment required for running the pipeline and interacting with Roblox Open Cloud.
- Secrets stored in managed vault; least-privilege Open Cloud scopes.
- MVP target: ASAP; 4–6 week build feasible if templates, API integration, and playability checks are developed in parallel.
