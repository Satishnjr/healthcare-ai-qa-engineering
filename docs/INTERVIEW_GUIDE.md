# Interview Guide

## Project Overview
Healthcare AI QA Engineering Platform built incrementally with architecture governance, requirement traceability, frontend runtime implementation, and automation foundation.

## Implemented Steps
- 0.1 Environment discovery
- 0.2 Repository foundation
- 0.3 Engineering standards and ADRs
- 1.1 Product vision and strategy
- 1.2 BRD creation (CFH-BRD-001)
- 1.3 PRD creation (CFH-PRD-001)
- 1.4 Epic definition (CFH-EPIC-001)
- 1.5 User story definition (CFH-US-001)
- 1.6 Acceptance criteria definition (CFH-AC-001)
- 1.7 Test scenario definition (CFH-TS-001)
- 1.8 Test case definition (CFH-TC-001)
- 1.9 Test data and test management strategy
- 1.10 Project management and delivery foundation
- 1.11 UI architecture and design system
- 1.12 CareFlow frontend runtime implementation
- 1.13 Playwright + Cucumber automation foundation
- 1.14 Full regression automation expansion
- 1.15 AI-ready automation governance and agent handoff foundation

## Step 1.13 Highlights
- Implemented TypeScript Playwright + Cucumber framework architecture under `automation/`.
- Implemented BDD smoke features with traceability-aware tags (`@tc-*`, `@ts-*`, `@ac-*`).
- Implemented page objects, world/hook lifecycle, and deterministic role-based test data.
- Implemented artifact foundation: Cucumber JSON/HTML, screenshot/trace/video directories, failure metadata JSON.
- Executed smoke suite successfully on Chromium against running frontend.
- Verified cross-browser readiness by attempting Firefox/WebKit runs (blocked by missing local Playwright binaries in this environment).

## Interview Quick Answers
- Why Playwright: fast, reliable web-first assertions and strong artifact capabilities.
- Why Cucumber: executable requirements and readable BDD collaboration model.
- Why POM + hooks: maintainability, reuse, and consistent setup/teardown.
- Why structured failure metadata: prepares for AI-assisted failure triage and quality gates.
- Why only smoke now: Step 1.13 is framework foundation before full 96-case automation expansion.

## Step 1.14 Highlights
- Expanded from smoke baseline to broader regression coverage with BDD suites for authentication, module navigation, role access, patient search, validation, accessibility, and responsive checks.
- Preserved POM-first architecture by introducing a dedicated regression page object and reusable regression step library.
- Added execution-summary JSON artifact to support AI-ready failure analysis and observability ingestion in future steps.
- Executed Chromium smoke and regression successfully (`5/5`, `39/39`) with honest Firefox/WebKit blocked reporting due missing browser binaries.
- Updated traceability to connect Test Case IDs to BDD scenarios, step definitions, page objects, execution results, and artifact paths.

## Step 1.14 Interview Quick Answers
- Why expand in Step 1.14 instead of rewriting: preserve deterministic baseline and scale safely by adding suite modules.
- How you ensure reliability: semantic/data-testid selectors, reusable steps, deterministic test users, and isolated hooks.
- How this supports AI roadmap: structured JSON outputs and stable traceability IDs can be consumed by future RAG/MCP/agent workflows.
- What is still pending: full 96-case automation completion, cross-browser binary setup, and future AI runtime implementations.

## Step 1.15 Highlights
- Established governance-first QA automation strategy instead of forcing full 96-case deterministic automation.
- Classified all 96 test cases into deterministic, AI-assisted, AI-agent-candidate, manual, backend dependency, UI gap, and future buckets.
- Defined agent handoff contracts, agent output contracts, role model, workflow, AI/Playwright boundary, and observability contract.
- Added RAGAS/evaluation strategy and AI quality gate extension as foundations only (no runtime AI system implemented).

## Step 1.15 Interview Quick Answers
- Why not automate all tests now: deterministic quality drops when UI/API dependencies and variability are unresolved; governance-first keeps signal quality high.
- When should AI agents automate tests: high-variation, retrieval-heavy, or reasoning-heavy workflows where deterministic scripts alone are inefficient.
- Deterministic vs agentic automation:
  - Deterministic: fixed script, fixed assertions, predictable input.
  - Agentic: planning + retrieval + tool selection + evidence-based reasoning under guardrails.
- How an AI agent selects a test: uses classification matrix, risk/priority, change scope, and policy constraints.
- How RAG helps QA agents: retrieves BRD/PRD/US/AC/TS/TC/test-data context to reduce blind generation and improve traceable reasoning.
- Why MCP: standardizes safe tool interfaces for retrieval, execution, evidence, and defect workflows.
- What is tool calling: constrained invocation of approved operations with typed inputs/outputs and policy controls.
- How LangGraph fits: orchestration layer for multi-step, multi-agent workflow state and approval gates.
- How multiple agents collaborate: specialized agents produce bounded outputs that are coordinated by QA orchestrator with handoff contracts.
- How hallucinations are controlled: strict no-fabrication rules, evidence-required outputs, policy validation, and mandatory human review for sensitive cases.
- Prompt injection handling: treat instructions as untrusted unless policy-approved; enforce tool permissions and approval gates.
- How agents are evaluated: task success, tool correctness, reasoning consistency, evidence quality, hallucination rate, policy compliance, override rate.
- How agents are observed: task/trace/model/prompt/tool/token/failure telemetry in observability contract.
- Where human approval is required: healthcare-sensitive, security-sensitive, destructive, ambiguous, low-confidence, or conflicting-evidence actions.
- Playwright integration with AI agents: agents decide *what* within policy; Playwright remains deterministic executor of approved steps.

## Current Boundary
Implemented:
- Frontend runtime and UI simulation layer (Step 1.12)
- Automation foundation + expanded regression suite (Step 1.13/1.14)
- Governance and agent handoff foundation for AI-ready QA automation (Step 1.15)

Not implemented yet:
- Backend
- API
- API automation
- Full regression suite conversion
- RAG runtime
- MCP runtime
- Agent runtime
