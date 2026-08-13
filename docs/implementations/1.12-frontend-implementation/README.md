# Step 1.12 - CareFlow Health Frontend Implementation

## Objective
Implement the first production-like runtime frontend for CareFlow Health using React + TypeScript + Vite + React Router, aligned to approved BRD/PRD/UI architecture contracts.

## Architecture
The frontend follows a layered structure:
- `app/`: route registration and application composition
- `layouts/`: application shell (header, navigation, outlet)
- `pages/`: role-aware feature screens
- `components/common/`: reusable UI primitives (title, state panels, status badge, dialogs)
- `state/`: centralized lightweight app state and role/session simulation
- `services/`: mock service abstraction
- `data/`: deterministic synthetic healthcare datasets
- `constants/`, `types/`, `utils/`: shared contracts
- `styles/`: design tokens and global styles

## Technologies
- React
- TypeScript (strict)
- Vite
- React Router
- Oxlint (configured by scaffold)

## Implementation
Implemented a frontend-only healthcare portal with deterministic mock behavior and no backend/API/database.

### Core Runtime Features
- Login with deterministic demo credentials by role
- Role-based navigation and route guarding
- Application shell with sidebar/header and role indicator
- Dashboard, patient, appointment, provider, records, prescription, billing/insurance, claims, notification, report, admin, profile, settings, help, global search pages
- Reusable loading/empty/error panels
- Status badges and confirmation dialogs
- Form validation and error messaging
- Deterministic state mutation for create/edit/update/cancel actions

## Folder Structure
```text
frontend/
  src/
    app/
    components/common/
    constants/
    data/
    hooks/
    layouts/
    pages/
    routes/
    services/
    state/
    styles/
    types/
    utils/
```

## Major Pages
- Login
- Dashboard
- Patients / Patient Search / Patient Detail
- Appointments / Appointment Detail
- Providers
- Medical Records
- Prescriptions
- Billing and Insurance
- Claims
- Notifications
- Reports
- Administration
- Profile
- Settings
- Help
- Search
- Unauthorized
- Not Found

## Components
Reusable common components:
- `PageTitle`
- `LoadingState`, `EmptyState`, `ErrorState`
- `StatusBadge`
- `ConfirmDialog`

## Mock Data
Synthetic deterministic entities are centralized in `src/data/mock-data.ts`:
- User
- Patient
- Provider
- Appointment
- Prescription
- Insurance
- Billing
- Claim
- Notification
- Preferences
- Demo credential map

No real PHI or production credentials are present.

## Routing
React Router routes are declared in `src/app/app.tsx`.
- Public routes: `/login`, `/unauthorized`, fallback `*`
- Protected shell routes under `/`
- Role-aware protection via `RequireAuth` + `RequireRoleAccess`
- Deterministic route-access matrix in `src/constants/route-access.ts`

## State Management
A lightweight context provider (`AppStateProvider`) manages:
- authentication simulation
- current role/user
- feature datasets
- notifications/preferences
- mutations for patient/appointment lifecycle

Mock service contracts isolate data access for future API replacement.

## Validation
Form and action validation implemented for realistic negative paths:
- required fields
- email format checks
- phone/length constraints
- appointment collision checks
- role-based action restrictions

## Accessibility
- semantic headings and form labels
- role alerts for validation errors
- deterministic button/input semantics
- keyboard-friendly standard controls

## Responsive Behavior
- responsive shell and content layout through CSS design tokens
- adaptable grid/form/table wrappers for desktop/tablet/mobile
- compact-friendly spacing and scalable container widths

## Automation Testability
Automation-friendly deterministic selectors are implemented with `data-testid` across flows such as:
- login (`login-email`, `login-password`, `login-submit`)
- patient flows (`patient-search`, `patient-table`, `patient-row-{id}`)
- appointment flows (`appointment-create`, `appointment-row-{id}`)

Selectors are stable and avoid fragile CSS/DOM coupling.

## AI Boundary
Step 1.12 intentionally does not implement runtime AI systems.
The UI architecture preserves boundary points for future integration of RAG, MCP, tool-calling, agent flows, and observability without redesigning the frontend.

## Implemented vs Planned
Implemented in this step:
- production-like frontend runtime
- role-aware UI simulation
- deterministic mock service/data layer
- testability-first selectors

Planned in later steps:
- backend and APIs
- Playwright/Cucumber runtime automation
- RAG/RAGAS runtime
- MCP runtime and tools
- agentic orchestration (LangGraph/multi-agent/HITL)

## How to Run
From `frontend/`:
- `npm install`
- `npm run dev`

## How to Build
From `frontend/`:
- `npm run build`

## How to Validate
From `frontend/`:
- `npm run lint`
- `npm run build`

## Interview Talking Points
- Why React + TypeScript + Vite for fast, typed enterprise UI iteration
- Why route and role policies are centralized for maintainability
- Why deterministic mock service abstraction improves QA and future API migration
- Why testability-first selectors reduce Playwright flakiness
- Why AI was deferred to preserve phase-based engineering discipline

## Status
PASS
