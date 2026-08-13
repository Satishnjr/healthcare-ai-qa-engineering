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

## Current Boundary
Implemented:
- Frontend runtime and UI simulation layer (Step 1.12)
- Automation foundation + initial smoke scenarios (Step 1.13)

Not implemented yet:
- Backend
- API
- API automation
- Full regression suite conversion
- RAG runtime
- MCP runtime
- Agent runtime
