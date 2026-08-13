# STEP 1.13 — PLAYWRIGHT + CUCUMBER BDD AUTOMATION FRAMEWORK FOUNDATION

You are implementing STEP 1.13 of the CareFlow Health AI-QA engineering project.

Repository:
HealthCare-AI-QA

Current project state:

- STEP 0.1 — Environment Discovery: PASS
- STEP 0.2 — Repository Foundation: PASS
- STEP 1.3 — PRD: PASS
- STEP 1.4 — Epic Definition: PASS
- STEP 1.5 — User Story Definition: PASS
- STEP 1.6 — Acceptance Criteria: PASS
- STEP 1.7 — Test Scenario Definition: PASS
- STEP 1.8 — Test Case Definition: PASS
- STEP 1.9 — Test Data & Test Management Strategy: PASS
- STEP 1.10 — [use the actual repository status/documentation; do not assume]
- STEP 1.11 — UI Architecture: PASS
- STEP 1.12 — Frontend Implementation: PASS

The frontend is implemented under:

frontend/

The frontend uses:

- React
- TypeScript
- Vite
- React Router
- deterministic mock data/service
- role-aware navigation
- reusable components
- validation
- loading/empty/error states
- responsive/accessibility basics
- stable data-testid selectors

The frontend has already passed:

- npm run lint
- npm run build

IMPORTANT PROJECT CONSTRAINTS

1. This is a synthetic healthcare QA engineering project.
2. Do NOT introduce real PHI.
3. Do NOT introduce real healthcare integrations.
4. Do NOT introduce clinical decision support.
5. Do NOT create a backend.
6. Do NOT create APIs.
7. Do NOT create API automation.
8. Do NOT replace the frontend mock-service architecture with a backend.
9. Do NOT implement RAG runtime in this step.
10. Do NOT implement MCP runtime in this step.
11. Do NOT implement LangGraph runtime in this step.
12. Do NOT implement autonomous agents in this step.
13. Do NOT implement multi-agent runtime in this step.
14. AI concepts must be documented as implemented, enabled, or planned accurately. Never claim a future capability is implemented.
15. Preserve all existing functionality.
16. Do not delete or rewrite existing project documentation unnecessarily.

PRIMARY OBJECTIVE

Implement STEP 1.13:

"Playwright + Cucumber BDD Automation Framework Foundation"

The goal is to create a production-quality UI automation framework that can execute against the existing CareFlow Health frontend.

The framework must be designed so the remaining approved test cases can be automated incrementally in later steps.

SOURCE DOCUMENTS TO REVIEW FIRST

Before making changes, inspect:

1. README.md
2. CHANGELOG.md
3. docs/IMPLEMENTATION_INDEX.md
4. docs/INTERVIEW_GUIDE.md
5. knowledge/requirements-traceability.md
6. knowledge/test-scenarios/CAREFLOW_HEALTH_TEST_SCENARIOS.md
7. knowledge/test-cases/CAREFLOW_HEALTH_TEST_CASES.md
8. knowledge/test-data/CAREFLOW_HEALTH_TEST_DATA_STRATEGY.md
9. knowledge/test-data/CAREFLOW_HEALTH_TEST_DATA_CATALOG.md
10. docs/qa/TEST_MANAGEMENT_STRATEGY.md
11. docs/architecture/UI_ARCHITECTURE.md
12. docs/architecture/UI_TESTABILITY_ARCHITECTURE.md
13. docs/architecture/UI_PAGE_SPECIFICATIONS.md
14. docs/architecture/UI_COMPONENT_ARCHITECTURE.md
15. docs/architecture/UI_ROLE_BASED_ACCESS.md
16. docs/architecture/UI_AI_INTEGRATION_BOUNDARY.md
17. Existing frontend source code
18. Existing package.json files and configuration

Do not assume a previous step's exact implementation details. Inspect the repository and adapt to what actually exists.

--------------------------------------------------
PART 1 — AUTOMATION PROJECT STRUCTURE
--------------------------------------------------

Create a clean automation framework under:

automation/

Recommended structure:

automation/
  package.json
  tsconfig.json
  playwright.config.ts
  cucumber.js
  README.md

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

  features/
    smoke/
    regression/
    functional/

  reports/
  screenshots/
  videos/
  traces/
  test-results/

Adapt the structure if the existing repository already contains automation conventions.

Do not create unnecessary duplicate frameworks.

--------------------------------------------------
PART 2 — PLAYWRIGHT
--------------------------------------------------

Implement Playwright with TypeScript.

Configure:

- Chromium
- Firefox
- WebKit

Configure:

- baseURL
- timeout
- expect timeout
- retries
- workers
- parallel execution readiness
- trace
- screenshot
- video
- artifact retention
- CI-friendly behavior

Use environment/configuration values rather than hardcoding environment-specific values.

Example concept:

BASE_URL=http://localhost:<frontend-port>

Do not assume a port without inspecting the frontend configuration.

--------------------------------------------------
PART 3 — CUCUMBER BDD
--------------------------------------------------

Implement Cucumber BDD integration.

Create:

- feature files
- step definitions
- hooks
- world/context if required
- tag support

Support tags such as:

@smoke
@regression
@functional
@negative
@validation
@accessibility
@responsive
@cross-browser
@role-based

Use clean Given/When/Then syntax.

Avoid putting implementation logic directly inside feature files.

--------------------------------------------------
PART 4 — PAGE OBJECT MODEL
--------------------------------------------------

Implement Page Object Model.

Create reusable page objects based on the actual frontend pages.

At minimum inspect and support pages such as:

- Login
- Dashboard
- Patients
- Patient Search
- Patient Detail
- Appointments
- Appointment Detail
- Providers
- Medical Records
- Prescriptions
- Billing/Insurance
- Claims
- Notifications
- Reports
- Settings
- Profile
- Help
- Admin
- Logout

Only create page objects for pages that actually exist.

Each page object should:

- expose meaningful actions
- expose meaningful assertions
- use stable locators
- avoid brittle CSS selectors
- prefer data-testid
- avoid arbitrary waits
- encapsulate page implementation details

--------------------------------------------------
PART 5 — TEST DATA
--------------------------------------------------

Integrate the existing synthetic test-data strategy.

Do not create real healthcare data.

Use deterministic synthetic data.

Create a clean mechanism for:

- test users
- roles
- patients
- appointments
- providers
- prescriptions
- insurance
- billing
- claims
- notifications

Use existing test-data IDs wherever possible.

Maintain traceability:

Test Case -> Test Data -> Automation

Do not invent conflicting identifiers.

--------------------------------------------------
PART 6 — FIRST AUTOMATED TESTS
--------------------------------------------------

Do NOT attempt to automate all 96 test cases in Step 1.13.

This step is framework foundation.

Automate a representative initial smoke suite.

At minimum implement scenarios covering:

1. Successful login
2. Dashboard access after login
3. Patient navigation/search
4. Appointment navigation
5. Role-based navigation/access
6. Logout

Use the existing UI and actual selectors.

Verify that these tests genuinely execute against the running frontend.

Do not create fake test execution or placeholder PASS results.

--------------------------------------------------
PART 7 — ROLE-BASED TESTING
--------------------------------------------------

Inspect the existing roles in the frontend.

Implement reusable role/session handling.

Do not create a backend authentication system.

Use the frontend's existing deterministic/mock role mechanism.

Validate role-specific navigation and unauthorized behavior where supported.

--------------------------------------------------
PART 8 — ASSERTION STRATEGY
--------------------------------------------------

Implement meaningful assertions.

Avoid assertions such as:

expect(page).toBeTruthy()

Prefer observable business/UI assertions:

- URL
- page heading
- visible navigation item
- table/list content
- status
- validation message
- role-specific control
- success/error state

Assertions should map back to acceptance criteria/test cases.

--------------------------------------------------
PART 9 — WAIT STRATEGY
--------------------------------------------------

Do not use:

- page.waitForTimeout()

unless there is an explicitly documented exceptional reason.

Prefer:

- locator assertions
- waitForURL
- waitForLoadState
- web-first assertions
- deterministic application state

The framework must be reliable rather than timing-dependent.

--------------------------------------------------
PART 10 — REPORTING
--------------------------------------------------

Implement test result reporting suitable for QA engineering.

At minimum support:

- Cucumber HTML report
- JSON results
- Playwright traces
- screenshots on failure
- video on failure or retry
- machine-readable result artifacts

Create an Allure-ready structure if practical.

Do not claim full AI observability yet.

--------------------------------------------------
PART 11 — FAILURE EVIDENCE
--------------------------------------------------

Create a standardized failure artifact structure.

For failed tests collect:

- scenario name
- feature
- tags
- browser
- environment
- URL
- error message
- screenshot
- trace
- video if enabled
- timestamp
- test case ID
- test scenario ID
- acceptance criteria ID where available

This is important because future AI failure-analysis agents will consume these artifacts.

--------------------------------------------------
PART 12 — TRACEABILITY
--------------------------------------------------

Extend:

knowledge/requirements-traceability.md

Maintain:

BRD
 -> PRD
 -> Epic
 -> User Story
 -> Acceptance Criteria
 -> Test Scenario
 -> Test Case
 -> Test Data
 -> Automation

Add automation identifiers where appropriate.

Do not break existing mappings.

--------------------------------------------------
PART 13 — AI INDUSTRY CONCEPTS
--------------------------------------------------

This project must progressively incorporate industry-relevant AI-QA concepts.

For STEP 1.13 document the following clearly:

1. AI-assisted test automation
2. Structured automation metadata
3. Failure evidence collection
4. AI failure-analysis readiness
5. AI observability readiness
6. RAG integration readiness
7. MCP integration readiness
8. Agent integration readiness
9. Multi-agent integration readiness
10. AI quality-gate readiness

Clearly classify each as:

- IMPLEMENTED IN STEP 1.13
- ENABLED / FOUNDATION
- PLANNED

Do NOT claim RAG, MCP, agents, LangGraph, RAGAS, or AI observability runtime is implemented unless it actually is.

Explain how future AI components will consume:

- feature files
- test cases
- test results
- screenshots
- traces
- videos
- error logs
- traceability IDs

--------------------------------------------------
PART 14 — DOCUMENTATION
--------------------------------------------------

Create:

docs/implementations/1.13-playwright-cucumber/

Files:

- prompt.md
- README.md
- implementation-report.pdf
- interview-notes.md
- response.md

The documentation must explain:

- objective
- architecture
- framework structure
- Playwright configuration
- Cucumber architecture
- Page Object Model
- fixtures
- hooks
- test data
- tagging
- reporting
- failure artifacts
- traceability
- first automated scenarios
- CI readiness
- AI-QA readiness
- limitations
- known issues
- next step

The interview notes must explain how to describe this implementation in an AI SDET / AI QA Engineer interview.

--------------------------------------------------
PART 15 — ROOT DOCUMENTATION
--------------------------------------------------

Update:

README.md
CHANGELOG.md
docs/INTERVIEW_GUIDE.md
docs/IMPLEMENTATION_INDEX.md
knowledge/requirements-traceability.md

IMPORTANT:

docs/IMPLEMENTATION_INDEX.md MUST be updated every time.

For Step 1.13:

- mark Step 1.13 as PASS only after successful implementation and validation
- identify completed steps
- identify current step
- identify remaining steps
- preserve the roadmap through STEP 11.6
- include AI industry concepts introduced in this step
- include implementation status
- do not remove future steps
- do not mark future steps as complete
- maintain accurate overall progress

--------------------------------------------------
PART 16 — VALIDATION
--------------------------------------------------

Run appropriate validation.

At minimum:

1. Install automation dependencies.
2. Verify TypeScript compilation.
3. Verify Playwright configuration.
4. Verify Cucumber configuration.
5. Start the frontend.
6. Execute the smoke suite.
7. Execute against Chromium.
8. If practical, execute Firefox and WebKit.
9. Verify reports.
10. Verify screenshots/traces for failures.
11. Verify no fake PASS results.
12. Verify existing frontend tests/build still pass.
13. Verify traceability.
14. Verify documentation.
15. Verify IMPLEMENTATION_INDEX.md.

If network restrictions prevent dependency installation, diagnose accurately and document the limitation. Do not fabricate successful execution.

--------------------------------------------------
PART 17 — GIT
--------------------------------------------------

Before committing:

- inspect git status
- review changed files
- verify no secrets
- verify no generated sensitive artifacts
- verify no real PHI
- verify no unnecessary files

Create a focused commit:

test(step-1.13): establish playwright cucumber automation foundation

Push to origin/main.

Verify remote HEAD matches local HEAD.

Working tree must be clean after completion.

If sandbox restrictions require approved unsandboxed execution for git push or remote verification, handle that correctly and document it.

--------------------------------------------------
PART 18 — RESPONSE RECORD
--------------------------------------------------

Create:

docs/implementations/1.13-playwright-cucumber/response.md

The response must contain:

- Status
- Objective
- Implementation Summary
- Architecture
- Automation statistics
- Scenarios automated
- Test execution results
- Browser results
- Files created
- Files modified
- Validation
- AI industry concepts
- Traceability
- Git
- Documentation
- Known Issues
- Next Recommended Step

Do not omit important implementation details.

--------------------------------------------------
IMPORTANT FINAL RULE
--------------------------------------------------

Do not automatically proceed to STEP 1.14.

Stop after STEP 1.13.

Return the complete Step 1.13 implementation response only after:

- implementation is complete
- validation is complete
- documentation is complete
- IMPLEMENTATION_INDEX.md is updated
- git commit is created
- push is successful
- remote verification is complete
- working tree is clean

If something cannot be completed, clearly report it as BLOCKED/PARTIAL rather than claiming PASS.