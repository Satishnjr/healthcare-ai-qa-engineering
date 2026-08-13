# UI Architecture

## Objective
Define the complete frontend architecture blueprint for the future CareFlow Health React + TypeScript + Vite implementation.

## Scope Classification
- IMPLEMENTED IN FUTURE FRONTEND PHASE: UI runtime, routing, components, state, forms, validations, role-based screens.
- PLANNED AI / QA / DEVOPS INTEGRATION: Playwright/Cucumber automation, RAG/MCP/Agent integrations, CI/CD quality gates, observability.

## Frontend Architecture Model
- Feature-modular SPA with React Router.
- Synthetic/mock local data only.
- UI-level role simulation (not security-grade authorization).

## Application Layers
1. App Shell Layer: layout, navigation, breadcrumbs, notifications.
2. Route Layer: route configuration, metadata, role visibility.
3. Page Layer: page composition and states.
4. Component Layer: shared design-system primitives and composites.
5. State/Data Layer: local state, context, deterministic mock repositories.
6. Utility Layer: validation, formatting, filtering/sorting/pagination helpers.

## Routing Architecture
- Public route: `/login`.
- Protected app shell routes grouped by modules.
- Route metadata: title, breadcrumb label, allowed roles, test hook namespace.

## UI Architecture Standards
- Form architecture: controlled fields, reusable validation adapters.
- Validation architecture: required, format, boundary, cross-field checks.
- Error/loading/empty architecture: standard reusable components.
- Modal/dialog architecture: confirmation, form dialog, detail dialog patterns.
- Notification/toast architecture: transient toasts + persistent in-page alerts.
- Search/filter/sort architecture: consistent panel + URL query-state conventions.
- Pagination architecture: shared component and behavior rules.
- Role-based behavior: hide/disable/readonly based on role matrix.
- Responsive architecture: desktop-first with tablet/mobile adaptation.
- Accessibility architecture: semantic HTML, keyboard support, focus management.
- Browser compatibility: Chromium, Edge, Firefox, WebKit-equivalent targets.

## Testability Architecture
- Stable `data-testid` strategy for critical controls.
- Prefer semantic locators (`role`, `label`) first.
- Deterministic data IDs, URL patterns, and error strings.
- Route root hook convention: `data-testid="page-<route-key>-root"`.

## Automation Hooks Strategy
- Naming: `<module>-<entity>-<element>-<type>`.
- Add hooks only on stable functional elements, not decorative elements.

## Future AI Integration Boundaries
Frontend responsibilities:
- Capture user intent/context.
- Display AI outputs, evidence links, warnings, and approval controls.

Future AI responsibilities:
- RAG retrieval, tool calling, agent orchestration, evaluation, observability, guardrails.

No AI runtime implementation in Step 1.11.

