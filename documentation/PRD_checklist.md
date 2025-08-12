Got it — here’s your **Prompt2Play MVP Implementation Checklist** converted into a pure developer-facing build order, organized strictly by dependency order and ready to be executed step-by-step.

---

# Prompt2Play (Roblox Game Generation Pipeline) — MVP Development Checklist

---

## **Phase 1: Foundation**

Criteria: Essential core systems, no dependencies, must exist before any other layer can function.

### **1. Development Environment Setup**

* [ ] Set up persistent compute environment for pipeline execution.
* [ ] Configure Roblox Studio CLI (Rojo, Open Cloud SDK, etc.) for local + automated builds.
* [ ] Store all secrets in a managed vault (e.g., AWS Secrets Manager, GCP Secret Manager) with least-privilege access.
* [ ] Create version control repository with branch protections for stable build deployment.
* [ ] Implement CI/CD base for automated build and test runs.

### **2. Roblox Open Cloud Integration**

* [ ] Create Roblox group **"Prompted Playgrounds"** with publishing permissions.
* [ ] Generate limited-scope Open Cloud API key for Universe/Place management.
* [ ] Implement API connection handler for publishing games to Roblox via Open Cloud.
* [ ] Add API retry logic with exponential backoff.

### **3. Asset & Module Curation**

* [ ] Vet and store approved Roblox modules for each template type (Obby, Tycoon, Simulator).
* [ ] Sanitize all asset IDs for safe use.
* [ ] Store curated assets in a secure, accessible repository (cloud or Roblox inventory).

---

## **Phase 2: Data Layer**

Criteria: Systems for storing, retrieving, and managing application data.

### **4. Submission Data Handling**

* [ ] Implement secure storage for:

  * User ID
  * Submission text
  * Decision logs
  * Generated game links
* [ ] Create interface for retrieving pending submissions for processing.
* [ ] Add periodic log pruning routine.
* [ ] Implement user-initiated erasure endpoint.

### **5. Prompt → Parameter Mapping**

* [ ] Implement parser to extract difficulty, progression speed, collectible types from incoming prompts.
* [ ] Store extracted parameters alongside raw prompt in submission record.
* [ ] Map parameters to template configuration files.

---

## **Phase 3: Interface Layer**

Criteria: Interfaces for operators or developers (minimal for MVP since no player-facing UI yet).

### **6. Operator Dashboard (CLI/Web Minimal)**

* [ ] Provide command-line or simple web UI to:

  * View submission queue
  * Trigger generation manually
  * Trigger re-run on failure
* [ ] Show status badges (pending, processing, failed, published).

---

## **Phase 4: Implementation Layer**

Criteria: Main functionality — game generation, safety checks, publishing, and iteration.

### **7. Template-First Assembly Engine**

* [ ] Load correct template based on parsed parameters.
* [ ] Inject configured gameplay elements:

  * **Obby:** checkpoints, disappearing parts, crushers.
  * **Tycoon:** income/upgrade cycle (2–3 tiers), customization.
  * **Simulator:** upgrade loop (2–3 tiers), collection, leveling.
* [ ] Output playable `.rbxlx` or `.rbxm` package.

### **8. Automated Playability Checks**

* [ ] Spawn test: ensure player can spawn without errors.
* [ ] Movement test: verify basic walking/jumping.
* [ ] Core loop trigger test (collectible pickup, upgrade purchase, etc.).
* [ ] Scan logs for runtime errors.

### **9. Failure Handling System**

* [ ] Implement up to 3 automated retries with refined prompts.
* [ ] Build safe-mode fallback: publish base template if retries fail.
* [ ] Escalate to manual fix and log for operator review.

### **10. Human Playtest Step**

* [ ] Generate short-lived test link for operator to playtest in Roblox Studio.
* [ ] Provide 2–5 min play window to confirm core loop.
* [ ] Require pass/fail flag before publishing.

### **11. Roblox Publishing**

* [ ] Push generated game to Roblox Group using Open Cloud.
* [ ] Set metadata: title, description, end credits.
* [ ] Add splash-screen attribution: “Idea by @User from Discord.”
* [ ] Implement v2+ update support without overwriting older versions.

---

If you want, I can also **add estimated build times and parallelization notes** so your AI developer can work on multiple independent items simultaneously without blocking. That would make this even more efficient to execute. Would you like me to do that next?
