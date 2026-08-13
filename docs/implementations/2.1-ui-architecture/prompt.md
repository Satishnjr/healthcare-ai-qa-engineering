You are working on the Healthcare AI QA Engineering project.

Repository:
HealthCare-AI-QA

Product:
CareFlow Health

Current status:
STEP 1.10 is PASS.

You MUST work strictly on STEP 1.11 only.

============================================================
STEP 1.11 — UI ARCHITECTURE & DESIGN SYSTEM
============================================================

OBJECTIVE

Create the complete UI architecture, UX structure, navigation architecture,
design system, reusable component strategy, page/screen specifications,
responsive behavior, accessibility strategy, testability strategy, and
frontend implementation blueprint for the production-like frontend-only
CareFlow Health healthcare application.

IMPORTANT:

This step is primarily an architecture/design specification step.

Do NOT implement the complete frontend application yet.

The actual React/Vite frontend implementation will be performed in a later
dedicated implementation step.

The goal of this step is to create a sufficiently detailed blueprint so that
a future developer/AI agent can implement the frontend consistently without
having to invent requirements.

============================================================
PROJECT BOUNDARIES
============================================================

The project is:

CareFlow Health — a production-like frontend-only healthcare application
used as the System Under Test (SUT) for:

1. Playwright UI automation
2. Cucumber BDD
3. QA engineering
4. RAG
5. MCP
6. Agentic AI
7. Multi-agent AI
8. AI evaluation
9. AI observability
10. RAGAS evaluation
11. AI quality gates
12. AI failure analysis
13. AI defect management
14. Jenkins-style CI/CD
15. Jira-like project management
16. Confluence-like knowledge management

The frontend must look and behave like a realistic enterprise healthcare
application.

However:

- No real healthcare integrations
- No real patient data
- No real PHI
- No medical diagnosis
- No clinical decision support
- No real payment processing
- No real insurance integration
- No backend
- No REST API
- No GraphQL API
- No API automation
- No external healthcare services

Use synthetic/mock data only.

============================================================
APPROVED TECHNOLOGY DIRECTION
============================================================

Frontend target stack:

- React
- TypeScript
- Vite
- React Router
- Component-based architecture
- Responsive design
- Accessibility-first implementation

Future automation:

- Playwright
- TypeScript
- Cucumber BDD
- Page Object Model
- reusable fixtures/utilities
- trace/video/screenshot support
- cross-browser testing

AI stack planned for later phases:

- Python
- RAG
- ChromaDB/vector store
- embeddings
- configurable LLM provider
- RAGAS
- AI evaluation datasets
- AI observability
- MCP
- FastMCP
- tool calling
- LangGraph
- Agentic AI
- Multi-agent architecture
- Human-in-the-loop
- Guardrails
- Prompt-injection protection
- AI security
- LLMOps
- AI quality gates
- AI failure analysis
- AI defect management
- model/prompt versioning
- experiment tracking

============================================================
SOURCE DOCUMENTS TO READ FIRST
============================================================

Before making changes, inspect and understand:

1. README.md

2. docs/IMPLEMENTATION_INDEX.md

3. docs/INTERVIEW_GUIDE.md

4. docs/architecture/ARCHITECTURE_DECISION_RECORD.md

5. docs/architecture/ENGINEERING_STANDARDS.md

6. docs/architecture/AI_ENGINEERING_ARCHITECTURE.md

7. docs/architecture/QA_AUTOMATION_ARCHITECTURE.md

8. docs/architecture/PRODUCT_VISION.md

9. docs/architecture/PRODUCT_SCOPE.md

10. docs/architecture/USER_ROLES.md

11. docs/architecture/APPLICATION_MODULES.md

12. docs/architecture/USER_JOURNEYS.md

13. docs/architecture/REQUIREMENTS_STRATEGY.md

14. docs/architecture/PRODUCT_QA_STRATEGY.md

15. docs/architecture/SYNTHETIC_DATA_STRATEGY.md

16. knowledge/brd/CAREFLOW_HEALTH_BRD.md

17. knowledge/prd/CAREFLOW_HEALTH_PRD.md

18. knowledge/epics/CAREFLOW_HEALTH_EPICS.md

19. knowledge/user-stories/CAREFLOW_HEALTH_USER_STORIES.md

20. knowledge/acceptance-criteria/CAREFLOW_HEALTH_ACCEPTANCE_CRITERIA.md

21. knowledge/test-scenarios/CAREFLOW_HEALTH_TEST_SCENARIOS.md

22. knowledge/test-cases/CAREFLOW_HEALTH_TEST_CASES.md

23. knowledge/test-data/CAREFLOW_HEALTH_TEST_DATA_STRATEGY.md

24. knowledge/test-data/CAREFLOW_HEALTH_TEST_DATA_CATALOG.md

25. knowledge/requirements-traceability.md

26. docs/qa/PROJECT_MANAGEMENT_FOUNDATION.md

27. docs/qa/JIRA_PROJECT_MODEL.md

28. docs/qa/JIRA_DASHBOARD_SPECIFICATION.md

29. docs/qa/JIRA_WORKFLOW_AND_GOVERNANCE.md

30. docs/qa/CONFLUENCE_INFORMATION_ARCHITECTURE.md

31. docs/qa/CONFLUENCE_GOVERNANCE.md

32. docs/qa/JENKINS_PIPELINE_ARCHITECTURE.md

33. docs/qa/AI_QUALITY_GATES.md

34. docs/qa/AI_DEFECT_MANAGEMENT.md

35. docs/qa/AI_PROJECT_DELIVERY_MODEL.md

36. docs/IMPLEMENTATION_INDEX.md

Treat the approved BRD, PRD, user stories, acceptance criteria and test cases
as the source of truth.

Do not silently invent functionality that conflicts with those documents.

============================================================
STEP 1.11 DELIVERABLES
============================================================

Create a complete UI architecture package.

Create:

------------------------------------------------------------
1. UI ARCHITECTURE
------------------------------------------------------------

Create:

docs/architecture/UI_ARCHITECTURE.md

Include:

- frontend architecture
- application layers
- routing architecture
- page architecture
- component architecture
- state management strategy
- data/mock-data strategy
- form architecture
- validation architecture
- error-state architecture
- loading-state architecture
- empty-state architecture
- modal/dialog architecture
- notification/toast architecture
- search/filter/sort architecture
- pagination architecture
- role-based UI behavior
- responsive architecture
- accessibility architecture
- browser compatibility
- testability architecture
- automation hooks strategy
- future AI integration boundaries

Clearly distinguish:

IMPLEMENTED IN FUTURE FRONTEND PHASE

from:

PLANNED AI / QA / DEVOPS INTEGRATION

------------------------------------------------------------
2. UI DESIGN SYSTEM
------------------------------------------------------------

Create:

docs/architecture/UI_DESIGN_SYSTEM.md

Define:

- typography
- spacing
- layout
- grid
- containers
- buttons
- inputs
- dropdowns
- checkboxes
- radio buttons
- date controls
- tables
- cards
- tabs
- breadcrumbs
- badges
- alerts
- notifications
- modals
- drawers
- tooltips
- pagination
- loading indicators
- skeletons
- empty states
- error states
- confirmation dialogs

Do not rely on copyrighted commercial UI designs.

Use a clean enterprise healthcare SaaS visual language.

------------------------------------------------------------
3. NAVIGATION ARCHITECTURE
------------------------------------------------------------

Create:

docs/architecture/UI_NAVIGATION_ARCHITECTURE.md

Define the complete navigation structure.

Include:

- login
- dashboard
- patient management
- patient search
- patient profile
- appointments
- appointment details
- provider management
- prescriptions UI
- insurance
- billing
- claims
- notifications
- reports
- administration
- user/profile
- settings
- help
- logout

Only include modules that are supported by the approved PRD/product scope.

For each route define:

- route
- page
- role access
- purpose
- major components
- expected states
- automation relevance

------------------------------------------------------------
4. PAGE/SCR​EEN SPECIFICATIONS
------------------------------------------------------------

Create:

docs/architecture/UI_PAGE_SPECIFICATIONS.md

For every major page define:

- page name
- route
- purpose
- actors
- layout
- header
- navigation
- content
- actions
- forms
- tables
- filters
- validation
- error states
- loading states
- empty states
- responsive behavior
- accessibility requirements
- testability requirements
- relevant user stories
- relevant acceptance criteria
- relevant test scenarios
- relevant test cases

Do not create actual React code in this step.

------------------------------------------------------------
5. COMPONENT ARCHITECTURE
------------------------------------------------------------

Create:

docs/architecture/UI_COMPONENT_ARCHITECTURE.md

Define:

- shared components
- layout components
- navigation components
- form components
- data-display components
- feedback components
- healthcare-domain components

Define component responsibilities and reuse strategy.

Include a proposed folder structure such as:

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
    state/
    types/
    utils/
    data/
    constants/
    styles/
    test-utils/

Do not create the complete implementation yet.

------------------------------------------------------------
6. ROLE-BASED UI ARCHITECTURE
------------------------------------------------------------

Create:

docs/architecture/UI_ROLE_BASED_ACCESS.md

Use the approved roles from the existing project documents.

For each role define:

- accessible pages
- accessible actions
- read/write behavior
- restricted actions
- UI visibility rules
- unauthorized behavior
- test automation relevance

Ensure this is UI authorization simulation only.

Do not create real authentication infrastructure.

------------------------------------------------------------
7. FORM & VALIDATION ARCHITECTURE
------------------------------------------------------------

Create:

docs/architecture/UI_FORM_VALIDATION_ARCHITECTURE.md

Define:

- field validation
- required fields
- format validation
- boundary validation
- invalid input handling
- duplicate input
- special characters
- Unicode
- long values
- date/time validation
- cross-field validation
- error messages
- validation timing
- accessibility of validation errors

Ensure alignment with existing test cases.

------------------------------------------------------------
8. RESPONSIVE & ACCESSIBILITY STRATEGY
------------------------------------------------------------

Create:

docs/architecture/UI_RESPONSIVE_ACCESSIBILITY.md

Define:

Desktop:

- 1440px
- 1280px

Tablet:

- approximately 768px+

Mobile:

- approximately 375px+
- approximately 390px+

Include:

- responsive navigation
- responsive tables
- responsive forms
- responsive cards
- responsive modals
- keyboard navigation
- focus management
- labels
- ARIA where appropriate
- semantic HTML
- contrast
- screen-reader considerations

------------------------------------------------------------
9. UI TESTABILITY ARCHITECTURE
------------------------------------------------------------

Create:

docs/architecture/UI_TESTABILITY_ARCHITECTURE.md

This document is extremely important.

Define how the future Playwright + Cucumber framework will interact
with the frontend.

Include:

- stable data-testid strategy
- semantic locator strategy
- accessible role strategy
- locator hierarchy
- avoiding brittle CSS/XPath
- deterministic test data
- deterministic UI states
- predictable URLs
- predictable error messages
- test hooks
- page object boundaries
- fixture boundaries
- browser isolation
- test cleanup

Example:

data-testid="patient-search-input"

data-testid="patient-search-submit"

data-testid="patient-result-row"

Do not add test IDs randomly. Define naming conventions.

------------------------------------------------------------
10. UI TO AI INTEGRATION BOUNDARY
------------------------------------------------------------

Create:

docs/architecture/UI_AI_INTEGRATION_BOUNDARY.md

Explain how the frontend will later interact conceptually with:

RAG
MCP
Agents
Multi-Agent system
AI evaluation
AI observability
RAGAS
AI quality gates

IMPORTANT:

Do not implement these AI components now.

Define only the future integration boundary.

Example future architecture:

User
  |
  v
CareFlow UI
  |
  v
AI Assistant UI
  |
  v
Agent Orchestrator
  |
  +--> RAG
  |
  +--> MCP Tools
  |
  +--> Specialized Agents
  |
  +--> Evaluation
  |
  +--> Observability

Explain which responsibilities remain in the frontend and which belong
to the future AI layer.

------------------------------------------------------------
11. UI -> QA -> AI TRACEABILITY
------------------------------------------------------------

Update:

knowledge/requirements-traceability.md

Preserve the existing chain:

BRD
 -> PRD
 -> Epic
 -> User Story
 -> Acceptance Criteria
 -> Test Scenario
 -> Test Case
 -> Test Data

Extend it with the UI layer where appropriate:

Requirement
 -> UI Page
 -> UI Component
 -> Test Case
 -> Automation Test
 -> Execution Result
 -> Failure Analysis
 -> Defect

Also define future AI traceability:

Requirement
 -> AI Use Case
 -> AI Component
 -> Evaluation Dataset
 -> Evaluation Run
 -> AI Quality Gate
 -> AI Defect
 -> Remediation

Do not break existing mappings.

============================================================
STEP 1.11 AI INDUSTRY CONCEPT REQUIREMENT
============================================================

From this step onward, EVERY implementation must include an
"AI Industry Concepts" section in its documentation.

For Step 1.11 document how the UI architecture prepares for:

1. RAG
2. RAGAS
3. RAG evaluation
4. AI observability
5. MCP
6. MCP tools
7. Tool calling
8. Agentic AI
9. LangGraph
10. Multi-agent systems
11. Agent evaluation
12. Human-in-the-loop
13. Guardrails
14. Prompt injection protection
15. AI security
16. LLMOps
17. AI quality gates
18. AI failure analysis
19. AI defect management
20. Evaluation datasets
21. Evaluation runs
22. Model/prompt versioning
23. AI experiment tracking

For each concept explain:

- Why it matters
- How it connects to the UI
- What is implemented now
- What is planned later
- How it will be tested
- How it will be explained in an interview

Do not falsely claim runtime implementation.

============================================================
STEP 1.11 DOCUMENTATION REQUIREMENTS
============================================================

Create:

docs/implementations/1.11-ui-architecture/

Inside it MUST contain:

1. prompt.md
2. README.md
3. implementation-report.pdf
4. interview-notes.md
5. response.md

The prompt.md must contain the complete Step 1.11 prompt used for this
implementation.

README.md must explain:

- objective
- architecture
- decisions
- files created
- files modified
- validation
- limitations
- future implementation

implementation-report.pdf must contain the complete implementation report
for Step 1.11.

interview-notes.md must contain interview preparation including:

- what was implemented
- why it was designed this way
- architecture explanation
- important technical decisions
- Playwright relevance
- Cucumber relevance
- AI relevance
- RAG relevance
- MCP relevance
- Agent relevance
- RAGAS relevance
- observability relevance
- sample interview questions and answers

response.md must contain the complete final Step 1.11 response.

============================================================
ROOT DOCUMENTATION
============================================================

Update:

README.md
CHANGELOG.md
docs/INTERVIEW_GUIDE.md
docs/IMPLEMENTATION_INDEX.md

IMPORTANT:

IMPLEMENTATION_INDEX.md MUST ALWAYS be maintained.

Update it with:

1. Completed steps
2. Current step
3. Remaining steps
4. Step status
5. Step description
6. Major deliverables
7. AI concepts introduced
8. Next recommended step

Do NOT remove previous completed steps.

Do NOT mark future steps as completed.

Keep the roadmap consistent.

============================================================
GIT REQUIREMENTS
============================================================

At the end:

1. Check git status.
2. Review all changed files.
3. Ensure no secrets.
4. Ensure no PHI.
5. Ensure no unnecessary dependencies.
6. Commit all Step 1.11 changes.

Commit message:

docs(step-1.11): define careflow health ui architecture

Push to:

origin/main

Then verify:

git status
git log -1
git remote -v
git ls-remote origin refs/heads/main

Verify local HEAD equals remote main.

Working tree must be clean.

============================================================
STRICT SCOPE CONTROL
============================================================

DO NOT:

- build the React application
- install frontend dependencies unless absolutely required for documentation validation
- create backend
- create APIs
- create API automation
- implement Playwright
- implement Cucumber
- implement RAG
- implement MCP
- implement agents
- implement LangGraph
- implement RAGAS runtime
- implement observability runtime
- create real Jira
- create real Confluence
- create real Jenkins

This step is the UI architecture/design blueprint.

============================================================
QUALITY REQUIREMENTS
============================================================

Before finishing, validate:

[x] UI architecture exists
[x] UI design system exists
[x] navigation architecture exists
[x] page specifications exist
[x] component architecture exists
[x] role-based UI strategy exists
[x] form validation architecture exists
[x] responsive/accessibility strategy exists
[x] UI testability architecture exists
[x] UI/AI integration boundary exists
[x] traceability updated
[x] AI industry concepts documented
[x] RAG relevance documented
[x] RAGAS relevance documented
[x] AI observability relevance documented
[x] MCP relevance documented
[x] Agentic AI relevance documented
[x] Multi-agent relevance documented
[x] LangGraph relevance documented
[x] AI security documented
[x] Guardrails documented
[x] HITL documented
[x] LLMOps documented
[x] AI quality gates documented
[x] AI failure analysis documented
[x] AI defect management documented
[x] Step prompt created
[x] Step README created
[x] Step PDF created
[x] Step interview notes created
[x] Step response created
[x] README updated
[x] CHANGELOG updated
[x] INTERVIEW_GUIDE updated
[x] IMPLEMENTATION_INDEX updated
[x] No frontend runtime implementation
[x] No backend
[x] No API
[x] No API automation
[x] No real PHI
[x] No secrets
[x] Git commit created
[x] Git push successful
[x] Remote verification successful
[x] Working tree clean

============================================================
FINAL RESPONSE FORMAT
============================================================

At the end provide:

# Step 1.11 Response

## Status

Implementation Status: PASS/FAIL

## Objective

...

## Implementation Summary

...

## Architecture Delivered

...

## AI Industry Concepts

...

## Files Created

...

## Files Modified

...

## Validation

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

STEP 1.12

IMPORTANT:

Do not proceed automatically to Step 1.12.

Stop after Step 1.11.