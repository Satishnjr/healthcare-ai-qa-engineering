# Step 1.13 - Playwright + Cucumber BDD Automation Framework Foundation

## Objective
Establish a production-quality UI automation foundation for the existing CareFlow Health frontend using Playwright + Cucumber BDD with TypeScript, deterministic selectors, structured reporting, and traceability-aware artifacts.

## Architecture
The automation framework is implemented under `automation/` with clear separation of concerns:
- `features/`: BDD feature files by suite type (`smoke`, `regression`, `functional`)
- `src/pages/`: Page Object Model (POM) abstractions
- `src/steps/`: Cucumber step definitions
- `src/hooks/`: scenario lifecycle, browser/session setup, artifact capture
- `src/data/`: deterministic synthetic test users/roles aligned to dataset IDs
- `src/config/`: runtime configuration from environment
- `src/utils/`: browser factory, path helpers, failure metadata writer
- `src/reporters/`: Cucumber HTML report generator

## Framework Structure
```text
automation/
  package.json
  tsconfig.json
  playwright.config.ts
  cucumber.js
  .env.example
  README.md
  features/
    smoke/
    regression/
    functional/
  src/
    config/
    constants/
    fixtures/
    hooks/
    pages/
    steps/
    support/
    utils/
    data/
    reporters/
    types/
  reports/
    cucumber/
    html/
    failure-artifacts/
  screenshots/
  videos/
  traces/
  test-results/
```

## Playwright Configuration
`playwright.config.ts` provides foundational multi-browser configuration for:
- Chromium
- Firefox
- WebKit

Configured capabilities:
- `baseURL`
- scenario/action/navigation/expect timeouts
- retries and worker strategy
- trace/screenshot/video retention behavior
- CI-readiness toggles

Environment-driven runtime values are centralized in `src/config/env.ts`.

## Cucumber Architecture
Implemented Cucumber BDD integration with:
- `cucumber.js` runner configuration
- typed custom world (`src/support/world.ts`)
- global hooks (`src/hooks/hooks.ts`)
- tagged feature scenarios (`@smoke`, `@functional`, `@regression`, `@role-based`)

## Page Object Model
Implemented concrete POM classes for core smoke flow and module coverage:
- `LoginPage`
- `LayoutPage`
- `DashboardPage`
- `PatientSearchPage`
- `AppointmentsPage`
- module wrapper classes for additional routes (`module-pages.ts`)

POM design principles applied:
- stable `data-testid` locators
- no arbitrary static waits
- URL and observable UI assertions
- route behavior encapsulation in page classes

## Fixtures and Test Data
`src/data/test-users.ts` defines deterministic role credentials and dataset linkage.

Dataset linkage references from existing strategy/catalog include:
- `TD-USERS-ROLE-001`
- `TD-PATIENT-BASE-001`
- `TD-APPOINTMENT-BASE-001`
- `TD-PROVIDER-BASE-001`
- `TD-NOTIFICATION-BASE-001`

No real PHI or real integrations are introduced.

## Tagging
Implemented tags on smoke scenarios for execution slicing and future expansion:
- `@smoke`
- `@functional`
- `@regression`
- `@role-based`
- traceability tags (`@tc-*`, `@ts-*`, `@ac-*`)

## Reporting and Artifacts
Implemented reporting and failure evidence foundation:
- Cucumber JSON report (`reports/cucumber`)
- Cucumber HTML report (`reports/html/index.html`)
- Playwright trace capture (`traces/`)
- screenshot-on-failure (`screenshots/`)
- video capture directory (`videos/`)
- structured failure metadata JSON (`reports/failure-artifacts/`)

Failure metadata model includes:
- scenario name
- tags
- browser
- environment/baseURL
- URL
- error message
- timestamp
- mapped `testCaseIds`, `testScenarioIds`, `acceptanceCriteriaIds`
- artifact paths (screenshot/trace/video)

## First Automated Scenarios (Smoke)
Implemented and executed initial representative smoke scenarios:
1. Successful login
2. Dashboard access after login
3. Patient search navigation and row assertion
4. Appointments module navigation
5. Role-based restricted nav visibility (Patient)
6. Logout redirect to login

## Validation Executed
- `automation`: `npm install`, `npm run typecheck`
- `automation`: `npm run smoke:chromium` (PASS)
- `automation`: `npm run smoke:firefox` (FAILED - missing Playwright Firefox browser binary)
- `automation`: `npm run smoke:webkit` (FAILED - missing Playwright WebKit browser binary)
- `automation`: `npm run report:html` (PASS)
- `frontend`: `npm run lint` (PASS)
- `frontend`: `npm run build` (PASS)

## CI Readiness
Framework is CI-ready at foundation level with:
- deterministic config via env
- non-flaky wait strategy (web-first assertions)
- machine-readable reports
- artifact directories
- browser-specific runs via scripts

## AI-QA Readiness
Step 1.13 introduces strong AI-readiness signals without implementing AI runtime systems:
- structured scenario metadata
- traceability tags in BDD scenarios
- structured failure artifact JSON
- evidence-oriented output layout for future AI failure analysis

## Limitations
- Firefox and WebKit browser binaries are not installed in the current environment (`npx playwright install` required).
- Full 96 test case coverage is intentionally deferred; only foundation smoke scenarios are automated in this step.

## Known Issues
- Node v24 warning from Cucumber compatibility matrix (tests still execute).
- Multi-browser execution blocked by missing browser binaries.

## Next Step
Proceed to incremental automation expansion (Step 1.14 or next approved step) using this framework foundation.
