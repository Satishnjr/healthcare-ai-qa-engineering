# Interview Guide

## Project Overview
Healthcare AI QA Engineering Platform built incrementally with architecture governance, requirement traceability, and AI-ready implementation planning.

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

## Step 1.12 Highlights
- Built production-like frontend-only CareFlow Health app with React + TypeScript + Vite + React Router.
- Implemented role-aware navigation, route-access simulation, and guarded pages.
- Implemented deterministic mock service/data layer for healthcare entities and workflows.
- Implemented reusable common components, validation behavior, and deterministic UX states.
- Implemented stable automation selectors (`data-testid`) for upcoming Playwright+Cucumber steps.

## Interview Quick Answers
- Why React + TypeScript + Vite: fast enterprise UI iteration with maintainable typed contracts.
- Why role-aware routing: deterministic UX permissions and clear QA coverage boundaries.
- Why mock service abstraction: realistic UI now, low-friction API replacement later.
- Why testability-first selectors: avoids flaky automation and reduces maintenance cost.
- Why no AI runtime yet: strict step discipline; AI runtime is planned for later roadmap steps.

## Current Boundary
Implemented:
- Frontend runtime and UI simulation layer (Step 1.12)

Not implemented yet:
- Backend
- API
- API automation
- Playwright/Cucumber runtime
- RAG runtime
- MCP runtime
- Agent runtime
