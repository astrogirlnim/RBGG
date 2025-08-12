Got it — here’s your **Prompt2Play MVP Implementation Checklist** converted into a pure developer-facing build order, organized strictly by dependency order and ready to be executed step-by-step.

---

# Prompt2Play (Roblox Game Generation Pipeline) — MVP Development Checklist

---

## **Phase 1: Foundation**

Criteria: Essential core systems, no dependencies, must exist before any other layer can function.

### **1. Development Environment Setup**

* [ ] Set up persistent compute environment for pipeline execution.
* [ ] Configure Roblox Studio CLI (Rojo, Open Cloud SDK, etc.) for local + automated builds.
* [ ] Store secrets securely: `.env` locally, GitHub Actions Secrets for deployment.
* [ ] Create version control repository with branch protections for stable build deployment.
* [ ] Implement CI/CD base for automated build and test runs.

### **2. Local Development Toolchain**

* [ ] Install and configure Rojo for external script synchronization.
* [ ] Set up Visual Studio Code with essential extensions:
  * [ ] Luau Language Server (autocompletion, type checking)
  * [ ] Selene (Lua linting for common issues)
  * [ ] StyLua (code formatting)
* [ ] (Optional MVP) Configure Wally if third-party Luau packages are needed.
* [ ] Implement TestEZ testing framework for automated unit tests.
* [ ] Set up proper `.gitignore` for Roblox development projects.

### **3. Roblox Open Cloud Integration**

* [ ] Create Roblox group **"Prompted Playgrounds"** with publishing permissions.
* [ ] Generate limited-scope Open Cloud API key for Universe/Place management.
* [ ] (Optional MVP) Install and configure `@roblox/cloud` npm package if automating publish via Node now; otherwise defer to Phase 2.
* [ ] Implement API connection handler for publishing games to Roblox via Open Cloud.
* [ ] Add API retry logic with exponential backoff and rate limiting (100 req/min).
* [ ] Set up proper error handling for quota exceeded scenarios.
* [ ] (Post-MVP) Configure Universe Publishing API for versioned releases and richer rollback support.

### **4. API Security & Monitoring**

* [ ] **Local Development**: Create `.env` file with API keys (add to `.gitignore`).
* [ ] **Production Deployment**: Store secrets in GitHub Actions Secrets for CI/CD.
* [ ] Set up rate limiting and quota monitoring with alerts.
* [ ] Add comprehensive API request logging and error tracking.
* [ ] (Post-MVP) Configure backup authentication methods for CI failover.
* [ ] **Future Scale**: Plan migration to cloud secrets manager (AWS/GCP) when needed.

### **5. Asset & Module Curation**

* [ ] Vet and store approved Roblox modules for each template type (Obby, Tycoon, Simulator).
  * [ ] Use only "Endorsed" or verified creator content from Roblox Creator Marketplace.
  * [ ] Source from verified DevForum community modules and open-source GitHub repositories.
* [ ] (Post-MVP) Implement automated asset safety scanning for malicious content.
* [ ] Sanitize all asset IDs for safe use and prevent injection attacks.
* [ ] Store curated assets in secure, accessible repository:
  * [ ] Private Roblox group inventory for immediate access.
  * [ ] (Post-MVP) Cloud backup storage with version control.
* [ ] Create asset validation pipeline with approval workflow.
* [ ] Maintain asset library documentation with safety ratings.

---

## **Phase 2: Data Layer**

Criteria: Systems for storing, retrieving, and managing application data.

### **6. Submission Data Handling**

* [ ] Implement secure storage for:

  * User ID
  * Submission text
  * Decision logs
  * Generated game links
* [ ] Create interface for retrieving pending submissions for processing.
* [ ] Add periodic log pruning routine.
* [ ] Implement user-initiated erasure endpoint.

### **7. Prompt → Parameter Mapping**

* [ ] Implement parser to extract difficulty, progression speed, collectible types from incoming prompts.
* [ ] Store extracted parameters alongside raw prompt in submission record.
* [ ] Map parameters to template configuration files.

---

## **Phase 3: Interface Layer**

Criteria: Interfaces for operators or developers (minimal for MVP since no player-facing UI yet).

### **8. Operator Dashboard (CLI/Web Minimal)**

* [ ] Provide command-line or simple web UI to:

  * View submission queue
  * Trigger generation manually
  * Trigger re-run on failure
* [ ] Show status badges (pending, processing, failed, published).

---

## **Phase 4: Implementation Layer**

Criteria: Main functionality — game generation, safety checks, publishing, and iteration.

### **9. Template-First Assembly Engine**

* [ ] Load correct template based on parsed parameters.
* [ ] Inject configured gameplay elements:

  * **Obby:** checkpoints, disappearing parts, crushers.
  * **Tycoon:** income/upgrade cycle (2–3 tiers), customization.
  * **Simulator:** upgrade loop (2–3 tiers), collection, leveling.
* [ ] Output playable `.rbxlx` or `.rbxm` package.

### **10. Automated Playability Checks**

* [ ] Spawn test: ensure player can spawn without errors.
* [ ] Movement test: verify basic walking/jumping.
* [ ] Core loop trigger test (collectible pickup, upgrade purchase, etc.).
* [ ] Scan logs for runtime errors.

### **11. Failure Handling System**

* [ ] Implement up to 3 automated retries with refined prompts.
* [ ] Build safe-mode fallback: publish base template if retries fail.
* [ ] Escalate to manual fix and log for operator review.

### **12. Human Playtest Step**

* [ ] Generate short-lived test link for operator to playtest in Roblox Studio.
* [ ] Provide 2–5 min play window to confirm core loop.
* [ ] Require pass/fail flag before publishing.

### **13. Roblox Publishing**

* [ ] Push generated game to Roblox Group using Open Cloud.
* [ ] Set metadata: title, description, end credits.
* [ ] Add splash-screen attribution: “Idea by @User from Discord.”
* [ ] Implement v2+ update support without overwriting older versions.

---

If you want, I can also **add estimated build times and parallelization notes** so your AI developer can work on multiple independent items simultaneously without blocking. That would make this even more efficient to execute. Would you like me to do that next?

---

## Deferred (Post-MVP)

- Universe Publishing API integration for versioned releases and streamlined rollback
- Automated asset safety scanning pipeline at scale
- Cloud backup storage for curated assets with version control
- CI backup authentication methods and multi-tenant credential strategy
- Full secrets manager migration (AWS/GCP) with rotation policies
