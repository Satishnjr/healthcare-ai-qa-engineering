# Step 1.12 Interview Notes

## What was implemented?
A production-like frontend-only CareFlow Health application was implemented using React, TypeScript, Vite, and React Router with deterministic mock data and role-aware UI behavior.

## Why React?
- Component model suits modular healthcare screens.
- Ecosystem maturity for enterprise UI and automation integration.
- Strong support for predictable state and reusable architecture.

## Why TypeScript?
- Compile-time safety for complex domain models (patients, appointments, billing, claims).
- Better maintainability for role-aware routing and mutation contracts.
- Reduced runtime defects during rapid feature growth.

## Why Vite?
- Fast local startup and hot reload for iterative UI development.
- Lightweight build pipeline with modern defaults.
- Strong TypeScript and React developer experience.

## Why React Router?
- Clear route composition for module-level healthcare workflows.
- Enables deterministic route guards and role-aware restrictions.
- Easy mapping to test cases and page object abstractions.

## Frontend Architecture
- Shell + routed pages + reusable common components.
- Centralized app context for simulation state.
- Service abstraction boundary separating UI from data source implementation.
- Centralized constants/types/utils to avoid scattered logic.

## Component Architecture
- Common primitives (`PageTitle`, `StatePanel`, `StatusBadge`, `ConfirmDialog`) prevent duplication.
- Page-level components focus on feature behavior.
- Shared styles and tokens maintain consistency.

## Mock Service Architecture
- `mock-service.ts` acts as data access layer.
- `mock-data.ts` provides deterministic synthetic entities.
- UI consumes service/context contracts, not raw hardcoded page datasets.
- Future backend/API replacement can occur behind service boundaries.

## Role-Based UI
- Role switch/login simulation controls visible modules and actions.
- Route-level and action-level checks enforce UI permissions.
- Explicitly UI simulation only, not security authorization.

## Testability
- Stable `data-testid` naming implemented across login, search, tables, rows, and action buttons.
- Deterministic IDs and dataset behavior reduce flaky selectors.
- Route and state model map cleanly to Playwright page-object design.

## Accessibility
- Semantic forms/headings.
- Label associations and alert semantics for errors.
- Keyboard-friendly controls and visible action affordances.

## Responsive Design
- Responsive layout grid and card/table wrappers.
- Readable form and table behavior across desktop/tablet/mobile.
- Navigation and content remain functional without layout breakage.

## Production-like Design
- Professional shell/navigation patterns.
- Meaningful module decomposition and operational views.
- Realistic status indicators, confirmation dialogs, and state handling.

## Why no backend in this step?
Step 1.12 scope is frontend runtime implementation with deterministic simulation. Backend, API integration, and real security are intentionally deferred to later steps to preserve roadmap control.

## Why AI was not implemented yet?
RAG, MCP, agents, observability, and evaluation pipelines are roadmap items for future steps. This step establishes frontend boundaries so those capabilities can be integrated cleanly later.

## How this UI connects to Playwright
- Deterministic routes and selectors support stable page objects.
- Predictable mock data allows repeatable scenario execution.
- Role-aware behavior enables positive/negative authorization-like UI tests.

## How this UI connects to RAG/MCP/Agents later
- Service and route boundaries allow additional AI-driven modules.
- Existing architecture can host AI assistant panels and evidence views.
- Traceability and deterministic UX states are ready for AI-quality workflows.
