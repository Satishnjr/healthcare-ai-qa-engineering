STEP 1.12 - CAREFLOW HEALTH FRONTEND APPLICATION IMPLEMENTATION

ROLE

You are the lead frontend architect and senior software engineer working on the
Healthcare AI QA Engineering Platform.

You must implement STEP 1.12 only.

Do not automatically continue to STEP 1.13 or any later step.

============================================================
PROJECT CONTEXT
============================================================

Project:
Healthcare AI QA Engineering Platform

Product:
CareFlow Health

Repository:
healthcare-ai-qa-engineering

GitHub:
https://github.com/Satishnjr/healthcare-ai-qa-engineering.git

Local project:
HealthCare-AI-QA

Purpose:

Build a production-like frontend-only healthcare application that will become
the System Under Test (SUT) for the complete QA + AI engineering ecosystem.

The final project will contain:

1. Production-like healthcare frontend
2. Playwright + Cucumber BDD automation
3. Test management ecosystem
4. Jira-like dashboard/application
5. Confluence-like knowledge application
6. Jenkins-like CI/CD dashboard/application
7. RAG
8. RAG evaluation using RAGAS or an equivalent evaluation layer
9. AI evaluation datasets
10. AI observability
11. MCP
12. MCP tools
13. Tool calling
14. LangGraph
15. Agentic AI
16. Multi-agent architecture
17. Human-in-the-loop
18. Guardrails
19. Prompt-injection protection
20. AI security
21. LLMOps concepts
22. AI quality gates
23. AI failure analysis
24. AI defect management
25. Agent evaluation
26. Model/prompt/version tracking
27. Experiment tracking
28. AI-powered QA workflows
29. Jenkins-style CI/CD execution
30. Complete traceability and interview documentation

However, only the scope of STEP 1.12 must be implemented now.

============================================================
IMPORTANT PROJECT RULE
============================================================

This project MUST be built step-by-step.

Never implement future steps prematurely.

Before making changes:

1. Read the existing repository.
2. Read the relevant architecture documents.
3. Read the BRD.
4. Read the PRD.
5. Read the Epic definitions.
6. Read the User Stories.
7. Read Acceptance Criteria.
8. Read Test Scenarios.
9. Read Test Cases.
10. Read Test Data Strategy.
11. Read UI Architecture documents.
12. Read Engineering Standards.
13. Read AI Engineering Architecture.
14. Read QA Automation Architecture.
15. Read docs/IMPLEMENTATION_INDEX.md.

Use those documents as the source of truth.

Do not invent requirements that contradict them.

============================================================
CURRENT PROJECT STATUS
============================================================

Completed:

STEP 0.1 - Environment Discovery
STEP 0.2 - Repository Foundation
STEP 0.3 - Engineering Standards & Architecture
STEP 1.1 - Product Vision & Requirements Strategy
STEP 1.2 - BRD
STEP 1.3 - PRD
STEP 1.4 - Epics
STEP 1.5 - User Stories
STEP 1.6 - Acceptance Criteria
STEP 1.7 - Test Scenarios
STEP 1.8 - Test Cases
STEP 1.9 - Test Data & Test Management Strategy
STEP 1.11 - UI Architecture

STEP 1.10 may already exist in the repository. Inspect the repository and
implementation index before proceeding.

Do not assume its contents.

============================================================
STEP 1.12 OBJECTIVE
============================================================

Implement the actual production-like CareFlow Health frontend application
according to the approved architecture and requirements.

This is the first major runtime implementation step.

The application must be realistic enough to demonstrate enterprise-level
healthcare UI development and QA engineering practices during interviews.

============================================================
FRONTEND TECHNOLOGY
============================================================

Use:

- React
- TypeScript
- Vite
- React Router

Use a clean reusable component architecture.

Prefer lightweight dependencies.

Do not introduce unnecessary libraries.

Follow the architecture already defined in:

docs/architecture/UI_ARCHITECTURE.md
docs/architecture/UI_DESIGN_SYSTEM.md
docs/architecture/UI_NAVIGATION_ARCHITECTURE.md
docs/architecture/UI_PAGE_SPECIFICATIONS.md
docs/architecture/UI_COMPONENT_ARCHITECTURE.md
docs/architecture/UI_ROLE_BASED_ACCESS.md
docs/architecture/UI_FORM_VALIDATION_ARCHITECTURE.md
docs/architecture/UI_RESPONSIVE_ACCESSIBILITY.md
docs/architecture/UI_TESTABILITY_ARCHITECTURE.md
docs/architecture/UI_AI_INTEGRATION_BOUNDARY.md

============================================================
FRONTEND SCOPE
============================================================

Implement the CareFlow Health frontend as a frontend-only application.

There must be NO real backend.

There must be NO real API.

There must be NO database.

There must be NO external healthcare integration.

Use deterministic in-memory/mock data.

The UI should behave like a production application even though the data layer
is simulated.

============================================================
PRODUCTION-LIKE UI REQUIREMENTS
============================================================

The UI must NOT look like a toy/demo application.

Create a realistic enterprise healthcare portal.

It should include:

- professional application shell
- header
- sidebar/navigation
- breadcrumbs where appropriate
- page titles
- role/user indicator
- notification area
- search/filter controls
- cards
- tables
- forms
- modals/drawers where appropriate
- pagination where appropriate
- status badges
- confirmation dialogs
- loading states
- empty states
- error states
- validation messages
- responsive layouts
- accessibility support

Use consistent design tokens.

Use reusable components instead of duplicating UI markup.

============================================================
CORE APPLICATION MODULES
============================================================

Implement the modules/pages defined by the approved PRD and UI architecture.

At minimum, inspect the approved documents and implement the applicable
CareFlow Health areas such as:

- Login
- Dashboard
- Patient Management
- Patient Details
- Appointments
- Appointment Details
- Providers
- Prescriptions
- Insurance
- Billing
- Claims
- Notifications
- User/Profile
- Search
- Reports where defined
- Administration where defined

Do NOT blindly add modules.

The approved PRD/UI architecture is the source of truth.

============================================================
ROLE-BASED UI
============================================================

Implement the approved UI role model.

The application should support simulated role switching using deterministic
frontend state.

Role permissions must control:

- visible navigation
- available actions
- page access
- buttons/actions
- edit permissions
- administrative functions

This is UI-level role simulation only.

Do NOT claim this is real security or backend authorization.

============================================================
MOCK DATA
============================================================

Create deterministic synthetic healthcare data.

Never use real patient information.

Never use real PHI.

Never use real healthcare records.

Create realistic synthetic entities such as:

Patient
Provider
Appointment
Prescription
Insurance
Billing
Claim
Notification
User

Use stable IDs.

Keep mock data centralized and reusable.

Do not scatter large mock datasets throughout components.

============================================================
STATE MANAGEMENT
============================================================

Follow the architecture defined in the repository.

Keep state management simple and maintainable.

Use local React state where appropriate.

If global state is required, use the approved lightweight approach.

Avoid unnecessary Redux-style complexity unless the architecture explicitly
requires it.

============================================================
ROUTING
============================================================

Implement the approved route structure.

Use React Router.

Routes should be:

- deterministic
- readable
- maintainable
- easy to automate

Implement:

- protected/simulated role-aware routes where applicable
- not-found route
- appropriate navigation behavior

============================================================
FORMS AND VALIDATION
============================================================

Implement realistic frontend validation.

Include:

- required fields
- format validation
- length validation
- date validation
- numeric validation
- invalid input handling
- duplicate handling where required
- boundary values
- clear validation messages

Follow:

docs/architecture/UI_FORM_VALIDATION_ARCHITECTURE.md

============================================================
LOADING / EMPTY / ERROR STATES
============================================================

Every major data-driven page should have appropriate states:

Loading
Success
Empty
Error

Use deterministic mock delays only where they improve realism and testability.

Do NOT create flaky random behavior.

============================================================
RESPONSIVE DESIGN
============================================================

Support:

- desktop
- tablet
- mobile

Follow the approved responsive architecture.

Ensure:

- navigation works on smaller screens
- tables remain usable
- forms remain readable
- buttons remain accessible
- no unnecessary horizontal overflow

============================================================
ACCESSIBILITY
============================================================

Implement accessibility fundamentals:

- semantic HTML
- labels
- keyboard navigation
- visible focus
- accessible buttons
- accessible form errors
- appropriate ARIA attributes where needed
- meaningful headings
- accessible dialogs/modals
- sufficient text clarity

Follow:

docs/architecture/UI_RESPONSIVE_ACCESSIBILITY.md

============================================================
TESTABILITY IS MANDATORY
============================================================

The application is being built specifically to become the System Under Test
for our QA automation framework.

Therefore automation-friendly design is mandatory.

Follow:

docs/architecture/UI_TESTABILITY_ARCHITECTURE.md

Use stable selectors.

Prefer:

data-testid

or another agreed stable automation attribute.

Do NOT rely on:

- CSS implementation details
- generated class names
- nth-child selectors
- fragile DOM hierarchy
- visible text when a stable semantic identifier is appropriate

Use predictable identifiers such as:

data-testid="login-email"
data-testid="login-password"
data-testid="login-submit"
data-testid="patient-search"
data-testid="patient-table"
data-testid="patient-row-{id}"
data-testid="appointment-create"
etc.

Do not add random IDs.

Automation selectors must be deterministic.

============================================================
CROSS-BROWSER
============================================================

The application must be compatible with the browsers defined in the PRD:

- Chromium
- Firefox
- WebKit

Avoid browser-specific implementation.

============================================================
AI INTEGRATION BOUNDARY
============================================================

Do NOT implement RAG, MCP, LangGraph or agents in this step.

However, structure the frontend so future AI functionality can be integrated
without redesigning the application.

Follow:

docs/architecture/UI_AI_INTEGRATION_BOUNDARY.md

Future AI features may include:

- AI QA assistant
- requirement search
- test case search
- failure analysis
- defect analysis
- regression recommendations
- test generation
- RAG-powered knowledge assistant
- MCP-powered QA tools
- Agentic QA workflows

For this step, only create clean boundaries/placeholders if the architecture
requires them.

Do not create fake AI responses and claim they are AI.

============================================================
AI INDUSTRY CONCEPT TRACKING
============================================================

The project must continue documenting industry AI concepts throughout the
implementation.

Relevant concepts for this step should be documented as:

IMPLEMENTED
PLANNED
NOT APPLICABLE YET

Important concepts include:

- RAG
- RAGAS
- RAG evaluation
- AI observability
- MCP
- MCP tools
- tool calling
- Agentic AI
- LangGraph
- multi-agent systems
- agent evaluation
- human-in-the-loop
- guardrails
- prompt injection protection
- AI security
- LLMOps
- AI quality gates
- AI failure analysis
- AI defect management
- evaluation datasets
- evaluation runs
- model versioning
- prompt versioning
- experiment tracking

For Step 1.12, most AI runtime concepts should remain PLANNED.

Clearly document why.

============================================================
NO PREMATURE AI IMPLEMENTATION
============================================================

Do NOT:

- install LangGraph just because it is planned
- install ChromaDB just because RAG is planned
- create fake MCP servers
- create fake agents
- create fake RAG
- create fake RAGAS scores
- create fake observability
- create fake LLM calls

Those belong to later implementation steps.

============================================================
CODE QUALITY
============================================================

Follow the engineering standards.

Requirements:

- TypeScript strict mode
- meaningful names
- reusable components
- small components
- no unnecessary duplication
- no hard-coded business logic inside UI components where avoidable
- centralized constants
- centralized mock data
- clean imports
- no dead code
- no unused dependencies
- no console errors
- no secrets

============================================================
SUGGESTED FRONTEND STRUCTURE
============================================================

Adapt this to the existing architecture rather than blindly replacing it:

frontend/
  src/
    app/
    components/
    layouts/
    pages/
    routes/
    features/
    hooks/
    services/
    data/
    models/
    utils/
    constants/
    styles/
    types/

Use feature-oriented organization where appropriate.

Keep business/UI/data responsibilities separated.

============================================================
NO BACKEND
============================================================

The frontend must simulate operations such as:

- login
- search
- filtering
- sorting
- pagination
- create
- edit
- cancel
- status updates
- notifications

using deterministic local state/mock services.

Make the abstraction realistic enough that a future API layer could replace the
mock service without rewriting the UI.

For example:

UI
 ↓
service interface
 ↓
mock service

Later:

UI
 ↓
service interface
 ↓
real API

Do NOT implement the real API now.

============================================================
TEST DATA REUSE
============================================================

Use the datasets defined in:

knowledge/test-data/

Where practical, connect the frontend mock data to the canonical test-data
strategy.

Maintain stable dataset IDs where appropriate.

This will later allow:

Test Case
   ↓
Test Data
   ↓
UI
   ↓
Playwright

============================================================
TRACEABILITY
============================================================

Maintain traceability.

Where practical, associate UI features/components/pages with:

BRD
PRD
Epic
User Story
Acceptance Criteria
Test Scenario
Test Case
Test Data

Do not invent IDs.

Use the existing traceability document.

============================================================
DOCUMENTATION REQUIREMENTS
============================================================

This is mandatory.

Create:

docs/implementations/1.12-frontend-implementation/

Inside it create:

prompt.md
README.md
implementation-report.pdf
interview-notes.md
response.md

IMPORTANT:

prompt.md must contain this complete prompt.

README.md must explain:

- objective
- architecture
- technologies
- implementation
- folder structure
- major pages
- components
- mock data
- routing
- state management
- validation
- accessibility
- responsive behavior
- testability
- AI boundary
- what was implemented
- what remains planned
- how to run
- how to build
- how to validate
- interview talking points

implementation-report.pdf must contain a professional implementation report.

interview-notes.md must explain how to discuss this implementation in an
interview, including:

- why React
- why TypeScript
- why Vite
- why React Router
- frontend architecture
- component architecture
- mock service architecture
- role-based UI
- testability
- accessibility
- responsive design
- production-like design
- why no backend
- why AI was not implemented yet
- how this UI will connect to Playwright
- how this UI will eventually connect to RAG/MCP/Agents

response.md must contain the complete final implementation response.

============================================================
PDF QUALITY
============================================================

The PDF must be professional and readable.

Include:

- project name
- step
- objective
- architecture
- implementation summary
- technologies
- pages/modules
- validation
- testability
- AI boundary
- risks/known issues
- interview summary

Do not create an empty or minimal PDF.

============================================================
ROOT DOCUMENTATION
============================================================

Update:

README.md
CHANGELOG.md
docs/INTERVIEW_GUIDE.md
docs/IMPLEMENTATION_INDEX.md
knowledge/requirements-traceability.md

IMPORTANT:

docs/IMPLEMENTATION_INDEX.md MUST be updated.

It must clearly show:

COMPLETED STEPS
STEP 0.1 through current completed step

CURRENT STEP
STEP 1.12

REMAINING STEPS
All future steps from the existing roadmap

Do NOT delete previous steps.

Do NOT mark future steps as completed.

Do NOT change the existing roadmap numbering.

The implementation index must remain the single source of truth for project
progress.

============================================================
IMPLEMENTATION INDEX RULE
============================================================

For EVERY future step in this project:

1. Mark the completed step PASS.
2. Record its implementation date/status.
3. Record the major deliverables.
4. Record Git commit information.
5. Record push/remote verification.
6. Clearly identify the next step.
7. Maintain the full remaining roadmap.

Never remove historical steps.

Never overwrite the project history.

============================================================
GIT REQUIREMENTS
============================================================

After implementation:

1. Check git status.
2. Review changed files.
3. Ensure no secrets.
4. Ensure no generated junk.
5. Ensure no unnecessary files.
6. Run validation.
7. Run frontend build.
8. Run available lint/type checks.
9. Commit changes.
10. Push to origin/main.
11. Verify remote HEAD.
12. Verify working tree is clean.

Use commit message:

feat(step-1.12): implement careflow health frontend

If additional documentation synchronization requires another commit, use a
clear docs commit.

============================================================
VALIDATION
============================================================

At minimum execute:

- npm install if required
- npm run build
- npm run lint if configured
- TypeScript validation if configured
- available unit/component checks if configured

Do not install unnecessary packages.

If network restrictions prevent installation, report exactly what failed.

Do not fake successful validation.

============================================================
APPLICATION STARTUP
============================================================

Ensure the project has a clear startup command.

Prefer:

npm run dev

Document the exact command in README.

If a different command is required by the generated Vite structure, document
that command.

============================================================
SECURITY
============================================================

Never create:

- real PHI
- credentials
- API keys
- tokens
- passwords stored in source
- production connection strings

Use synthetic/demo credentials only where required for UI demonstration and
make them clearly non-production.

============================================================
IMPORTANT: DO NOT STOP TOO EARLY
============================================================

Do not create only the project shell.

Implement the actual UI functionality defined by the approved PRD and UI
architecture within the scope of STEP 1.12.

However, do not expand beyond the approved requirements.

============================================================
FINAL RESPONSE FORMAT
============================================================

After implementation, provide a structured response exactly in this style:

# Step 1.12 Response

## Status

Implementation Status: PASS / PARTIAL / BLOCKED

## Objective

...

## Implementation Summary

...

## Frontend Architecture

...

## Pages / Modules Implemented

...

## Components Implemented

...

## Mock Data

...

## Routing

...

## Role-Based UI

...

## Validation

...

## Accessibility

...

## Responsive Design

...

## Automation Testability

...

## AI Industry Concepts

For each major AI concept:

- Status: IMPLEMENTED / PLANNED / NOT APPLICABLE
- Why
- Future step

Do not claim future AI functionality is implemented.

## Traceability

...

## Files Created

...

## Files Modified

...

## Tests / Validation

...

## Git

Branch:
Commit:
Commit Message:
Push:
Remote Verification:
Working Tree:

## Documentation

Prompt:
README:
PDF:
Interview Notes:
Response:

## Known Issues

...

## Next Recommended Step

STEP 1.13

IMPORTANT:

Only report PASS if the implementation and validation actually succeeded.

If something failed, report PARTIAL or BLOCKED honestly.

Do not fabricate test results.

============================================================
FINAL STOP CONDITION
============================================================

After completing STEP 1.12:

STOP.

Do not implement STEP 1.13.

Wait for the next explicit user prompt.