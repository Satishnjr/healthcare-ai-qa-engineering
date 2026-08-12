# STEP 1.7 — TEST SCENARIO DEFINITION
# Healthcare AI QA Engineering — CareFlow Health

You are acting as a Senior QA Architect + Test Analyst + BDD Architect + AI-QA Engineer for the Healthcare AI QA Engineering project.

Repository:
HealthCare-AI-QA

Product:
CareFlow Health

============================================================
PROJECT OBJECTIVE
============================================================

Build a production-like, frontend-only healthcare application and a complete AI-powered QA engineering ecosystem around it.

The project will eventually contain:

1. CareFlow Health frontend application
2. Playwright + TypeScript + Cucumber BDD UI automation framework
3. Own Jira-like frontend application
4. Own Confluence-like frontend application
5. Own Jenkins-like frontend application
6. RAG knowledge system
7. MCP tool layer
8. LangGraph-based AI Agent
9. AI-assisted QA workflows
10. End-to-end requirements-to-test traceability

============================================================
NON-NEGOTIABLE CONSTRAINTS
============================================================

- Frontend-only healthcare application.
- NO backend.
- NO REST APIs.
- NO API automation.
- NO real patient data.
- NO real PHI.
- NO real healthcare integrations.
- NO clinical decision support.
- NO medical recommendations.
- All application data must be synthetic/demo data.
- Playwright + TypeScript + Cucumber BDD will be used later for UI automation.
- LangGraph is the selected AI Agent framework.
- RAG will be implemented later.
- MCP will be implemented later.
- Jira, Confluence and Jenkins will be built as our own simulated frontend tools later.
- Do NOT connect to real Jira, Confluence or Jenkins unless explicitly instructed.
- Do NOT install unnecessary dependencies.
- Do NOT modify global machine configuration.
- Respect office laptop/admin restrictions.
- Do NOT implement product functionality in this step.

============================================================
CURRENT PROJECT STATUS
============================================================

Completed and pushed:

STEP 0.1 — Environment Discovery
STEP 0.2 — Repository Foundation
STEP 0.3 — Engineering Standards & Architecture
STEP 1.1 — Product Vision & Requirements Strategy
STEP 1.2 — BRD
STEP 1.3 — PRD
STEP 1.4 — Epics
STEP 1.5 — User Stories
STEP 1.6 — Acceptance Criteria

Current requirements chain:

BRD
 ↓
PRD
 ↓
Epic
 ↓
User Story
 ↓
Acceptance Criteria
 ↓
THIS STEP: Test Scenario

============================================================
SOURCE DOCUMENTS
============================================================

Before implementation, READ the following documents completely:

knowledge/brd/CAREFLOW_HEALTH_BRD.md

knowledge/prd/CAREFLOW_HEALTH_PRD.md

knowledge/epics/CAREFLOW_HEALTH_EPICS.md

knowledge/user-stories/CAREFLOW_HEALTH_USER_STORIES.md

knowledge/acceptance-criteria/CAREFLOW_HEALTH_ACCEPTANCE_CRITERIA.md

knowledge/requirements-traceability.md

Also read:

docs/architecture/ARCHITECTURE_DECISION_RECORD.md
docs/architecture/ENGINEERING_STANDARDS.md
docs/architecture/QA_AUTOMATION_ARCHITECTURE.md
docs/architecture/AI_ENGINEERING_ARCHITECTURE.md
docs/architecture/PRODUCT_QA_STRATEGY.md
docs/architecture/SYNTHETIC_DATA_STRATEGY.md

Do not skip source-document review.

Do not invent requirements that conflict with approved documentation.

============================================================
STEP 1.7 OBJECTIVE
============================================================

Create the canonical Test Scenario Definition layer for CareFlow Health.

Translate approved Acceptance Criteria into meaningful, business-level QA Test Scenarios.

The scenarios must eventually become the foundation for:

- Manual testing
- Cucumber BDD scenarios
- Playwright automation
- Test case design
- Regression testing
- Smoke testing
- Functional testing
- Negative testing
- Validation testing
- Accessibility testing
- Responsive testing
- Cross-browser testing
- RAG knowledge
- MCP operations
- AI Agent reasoning
- Jira-like test/QA tracking

IMPORTANT:

This step defines TEST SCENARIOS only.

Do NOT create executable automation.

Do NOT create Playwright code.

Do NOT create Cucumber `.feature` files.

Do NOT create Page Objects.

Do NOT implement the frontend.

Do NOT implement RAG.

Do NOT implement MCP.

Do NOT implement LangGraph.

============================================================
SCENARIO VS TEST CASE
============================================================

Maintain a clear distinction.

A Test Scenario describes:

"What needs to be validated?"

A Test Case describes:

"Exactly how do we validate it, including detailed test data and step-by-step execution?"

Therefore, Test Scenarios must remain business-focused and reasonably high level.

Example:

Scenario:
"Verify that a Receptionist can search for an existing patient using a valid patient identifier."

Do NOT turn this into a detailed manual test case yet.

Test Cases will be created in a later step.

============================================================
TEST SCENARIO ID
============================================================

Use stable unique IDs.

Recommended format:

TS-<EPIC>-<SEQUENCE>

Examples:

TS-001-001
TS-001-002
TS-002-001

Every scenario MUST have a unique ID.

Do not reuse IDs.

============================================================
SCENARIO STRUCTURE
============================================================

For every Test Scenario include:

### Scenario ID

### Scenario Title

Clear and concise.

### Epic

Epic ID and name.

### User Story

User Story ID and title.

### Acceptance Criteria

One or more Acceptance Criteria IDs.

### Requirement Traceability

Include:

- BRD ID(s)
- PRD ID(s)
- Epic ID
- User Story ID
- Acceptance Criteria ID(s)

### Scenario Type

Choose one or more:

- Functional
- Positive
- Negative
- Validation
- Boundary
- Error Handling
- Role/Authorization UI
- Navigation
- Search
- Filter
- Sort
- Pagination
- Form
- State Management
- Empty State
- Loading State
- Success State
- Accessibility
- Responsive
- Cross-Browser
- Usability
- Security-Oriented UI
- Session
- Regression
- Smoke

Only use applicable categories.

### Priority

Use:

- Critical
- High
- Medium
- Low

Align with the source User Story/PRD priority.

### Preconditions

Describe the business/UI state required before execution.

### Scenario Objective

Explain what behavior is being validated.

### Expected Business Outcome

Describe the expected result at business level.

### Test Data Requirements

Describe synthetic data required.

Do NOT include real PHI.

### Automation Candidate

Classify:

- Excellent candidate
- Good candidate
- Manual/Exploratory candidate

Provide a short reason.

### Automation Notes

Describe what the future Playwright/Cucumber implementation would need to observe.

Do NOT create automation code.

============================================================
SCENARIO DESIGN PRINCIPLES
============================================================

Do NOT create scenarios mechanically.

Do NOT assume:

1 Acceptance Criterion = 1 Test Scenario.

Instead:

- Multiple related acceptance criteria may be covered by one scenario.
- One acceptance criterion may require multiple scenarios.
- Negative conditions may require separate scenarios.
- Boundary conditions may require separate scenarios.
- Role-specific behavior may require separate scenarios.

Use professional QA judgment.

The goal is meaningful coverage, not artificial scenario count.

============================================================
REQUIRED COVERAGE
============================================================

Review all 32 User Stories and 109 Acceptance Criteria.

Ensure appropriate coverage for:

1. Happy Path
2. Negative flows
3. Validation
4. Boundary conditions
5. Required fields
6. Error handling
7. Empty states
8. Loading states
9. Success states
10. Role-based UI behavior
11. Navigation
12. Search
13. Filtering
14. Sorting
15. Pagination
16. Form behavior
17. Confirmation dialogs
18. Unsaved changes
19. Session behavior
20. Accessibility
21. Responsive behavior
22. Browser compatibility
23. Security-oriented UI behavior
24. Regression candidates
25. Smoke candidates

Do NOT force every category into every User Story.

Use professional QA judgment.

============================================================
HEALTHCARE APPLICATION COVERAGE
============================================================

CareFlow Health is a production-like healthcare frontend.

Where applicable, scenarios should cover:

- Login
- Role-based dashboards
- Patient search
- Patient registration
- Patient profile
- Doctor information
- Appointment scheduling
- Appointment rescheduling
- Appointment cancellation
- Medical record display
- Prescription display
- Billing
- Insurance
- Notifications
- Reports
- User management
- Settings
- Activity/audit history

All data remains synthetic.

Do NOT introduce:

- Diagnosis
- Treatment recommendations
- Clinical decision support
- Real medical advice
- Real patient information

============================================================
ROLE-BASED SCENARIOS
============================================================

Where the PRD/User Stories define roles, validate the UI behavior for the relevant roles.

Examples may include:

- Admin
- Doctor
- Nurse
- Receptionist
- Patient
- Billing/Finance user

Do not invent roles that are not present in the approved project documentation.

Validate:

- Visible navigation
- Accessible modules
- Restricted UI actions
- Role-specific dashboards
- Appropriate messages/states

Remember:

This is frontend-only.

We are validating UI-level authorization behavior, not backend security.

============================================================
BDD READINESS
============================================================

Every scenario must be suitable for future Cucumber BDD.

For each scenario include a short:

"BDD Intent"

section.

Example:

Feature:
Patient Search

Scenario:
Search for an existing patient using a valid identifier

BDD Intent:

Given the user is logged in with the required role
And the patient exists in synthetic data
When the user searches using the patient identifier
Then the matching patient should be displayed

Do NOT create `.feature` files yet.

Do NOT create step definitions.

============================================================
PLAYWRIGHT READINESS
============================================================

For each scenario, identify:

- Important page/module
- Main user action
- Expected UI state
- Important validation
- Navigation expectation
- Potential stable locator
- Required synthetic data

Do not write selectors.

Do not write Playwright code.

Do not create Page Objects.

============================================================
REGRESSION CLASSIFICATION
============================================================

Each scenario must include:

Regression Priority:

- P0
- P1
- P2
- P3

Guidelines:

P0:
Critical business journey / application unusable if broken.

P1:
Important core functionality.

P2:
Normal functional coverage.

P3:
Lower-risk or less frequently used behavior.

Use professional judgment.

============================================================
SMOKE CLASSIFICATION
============================================================

Mark:

Smoke Candidate: Yes / No

Only critical end-to-end journeys should be smoke candidates.

Examples might include:

- Login
- Dashboard access
- Patient search
- Appointment workflow

Do not mark everything as smoke.

============================================================
TRACEABILITY
============================================================

Update:

knowledge/requirements-traceability.md

Extend the traceability chain:

BRD
 ↓
PRD
 ↓
Epic
 ↓
User Story
 ↓
Acceptance Criteria
 ↓
Test Scenario

Do NOT remove or rewrite existing traceability unnecessarily.

Every Test Scenario must map to at least one Acceptance Criterion.

Every Acceptance Criterion should have appropriate scenario coverage.

Identify:

- Acceptance Criteria covered
- Acceptance Criteria without scenario coverage
- Orphan scenarios
- Duplicate scenarios
- Unmapped scenarios

If some acceptance criteria are not suitable for a standalone scenario because they are cross-cutting constraints, document the reason and coverage strategy.

============================================================
COVERAGE MATRIX
============================================================

Create a scenario coverage summary.

Include at least:

- Total BRD requirements
- Total PRD requirements
- Total Epics
- Total User Stories
- Total Acceptance Criteria
- Total Test Scenarios
- Acceptance Criteria with scenario coverage
- Acceptance Criteria without scenario coverage
- Orphan Test Scenarios
- Duplicate/overlapping scenarios
- Smoke scenarios
- Regression P0 scenarios
- Regression P1 scenarios
- Positive scenarios
- Negative scenarios
- Validation scenarios
- Accessibility scenarios
- Responsive scenarios
- Cross-browser scenarios

Do not artificially inflate numbers.

============================================================
TEST SCENARIO PRIORITIZATION
============================================================

Create a summary by priority:

P0
P1
P2
P3

Explain how prioritization was determined.

Use:

Business criticality
+
User impact
+
Risk
+
Frequency
+
Regression importance

============================================================
JIRA-LIKE APPLICATION PREPARATION
============================================================

Later we will build our OWN Jira-like frontend application.

The Jira-like application should eventually support:

- Project Dashboard
- Backlog
- Epics
- User Stories
- Acceptance Criteria
- Test Scenarios
- Test Cases
- Bugs
- Sprints
- Reports
- Traceability

Therefore structure Test Scenario data so that it can later be represented as Jira-style QA artifacts.

Do NOT build Jira now.

Do NOT build React components now.

============================================================
CONFLUENCE-LIKE APPLICATION PREPARATION
============================================================

Later we will build our OWN Confluence-like frontend.

Test Scenario documentation should therefore be suitable for:

- QA strategy pages
- Test scenario pages
- Requirement traceability pages
- Regression documentation
- Test planning pages

Do NOT build Confluence now.

============================================================
JENKINS-LIKE APPLICATION PREPARATION
============================================================

Later we will build our OWN Jenkins-like frontend.

Test Scenarios should eventually support classifications such as:

- Smoke
- Regression
- Functional
- Negative

This will later help demonstrate how a CI pipeline could conceptually select test suites.

Do NOT build Jenkins now.

============================================================
RAG PREPARATION
============================================================

Test Scenarios will later become RAG knowledge.

Therefore:

- Stable IDs
- Clear titles
- Self-contained descriptions
- Explicit traceability
- Consistent terminology
- Minimal unnecessary duplication

must be maintained.

Potential future RAG questions include:

"Which scenarios validate appointment cancellation?"

"Which P1 scenarios cover patient search?"

"Which acceptance criteria are not covered by regression scenarios?"

"Which test scenarios are related to EPIC-005?"

Do NOT implement RAG now.

============================================================
MCP PREPARATION
============================================================

Later MCP tools may expose operations such as:

- Search test scenarios
- Get scenario by ID
- Get scenarios for a User Story
- Get scenarios for Acceptance Criteria
- Find P0/P1 regression scenarios
- Find smoke scenarios
- Find uncovered acceptance criteria

Structure the documentation so these operations are possible later.

Do NOT implement MCP now.

============================================================
AI AGENT PREPARATION
============================================================

The future LangGraph Agent may perform:

- Requirement analysis
- Scenario generation
- Coverage analysis
- Regression impact analysis
- Missing coverage detection
- Test prioritization
- Defect impact analysis

Test Scenarios must therefore contain sufficient structured metadata for Agent reasoning.

Do NOT implement LangGraph now.

============================================================
DOCUMENTATION
============================================================

Create:

knowledge/test-scenarios/CAREFLOW_HEALTH_TEST_SCENARIOS.md

Create:

knowledge/test-scenarios/README.md

The main document must contain:

1. Document Control
2. Purpose
3. Scope
4. Source Documents
5. Test Scenario Definition
6. Scenario ID Convention
7. Scenario Design Principles
8. Test Scenario Coverage
9. All Test Scenarios
10. Priority Classification
11. Smoke Classification
12. Regression Classification
13. BDD Readiness
14. Playwright Readiness
15. Cross-Browser Strategy
16. Accessibility Strategy
17. Responsive Strategy
18. RAG/MCP/LangGraph Readiness
19. Traceability Summary
20. Coverage Gaps
21. Assumptions
22. Open Questions
23. Out-of-Scope Items

============================================================
STEP IMPLEMENTATION DOCUMENTATION
============================================================

Create:

docs/implementations/1.7-test-scenarios/

Inside it create exactly:

prompt.md
README.md
implementation-report.pdf
interview-notes.md
response.md

IMPORTANT:

prompt.md must contain the COMPLETE prompt used for Step 1.7.

README.md must explain:

- Objective
- Why test scenarios are needed
- Difference between test scenarios and test cases
- Scenario structure
- Scenario ID convention
- Prioritization approach
- Smoke strategy
- Regression strategy
- BDD readiness
- Playwright readiness
- Traceability
- RAG relevance
- MCP relevance
- LangGraph relevance
- Validation performed
- Interview talking points

implementation-report.pdf must be professional and interview-friendly.

Include:

- Objective
- Architecture/context
- Requirements-to-test lifecycle
- Test scenario design approach
- Scenario categories
- Prioritization model
- Smoke vs regression
- BDD relationship
- Playwright relationship
- Traceability
- RAG/MCP/LangGraph relevance
- Coverage results
- Validation results
- Interview questions and answers
- Lessons learned
- Future steps

interview-notes.md must include concise but meaningful interview preparation.

Include:

- What is a test scenario?
- Test scenario vs test case
- Test scenario vs acceptance criterion
- Why scenario-level design before detailed test cases?
- How do you decide scenario coverage?
- How do you prioritize P0/P1/P2/P3?
- What makes a test suitable for smoke?
- What makes a test suitable for regression?
- How does BDD relate to test scenarios?
- How does Playwright consume these scenarios later?
- How can RAG use test scenarios?
- How can MCP expose test scenarios?
- How can a LangGraph Agent use them?
- How is traceability maintained?
- How does frontend-only architecture change the QA strategy?

response.md must contain the COMPLETE implementation response for this step.

============================================================
ROOT DOCUMENTATION
============================================================

Update as appropriate:

README.md
CHANGELOG.md
docs/IMPLEMENTATION_INDEX.md
docs/INTERVIEW_GUIDE.md

Do not destroy unrelated content.

Mark:

STEP 1.7 = PASS

only if all quality gates pass.

============================================================
QUALITY GATES
============================================================

Before marking PASS, verify:

[ ] BRD reviewed
[ ] PRD reviewed
[ ] Epic document reviewed
[ ] User Story document reviewed
[ ] Acceptance Criteria document reviewed
[ ] Traceability reviewed
[ ] Engineering standards reviewed
[ ] QA architecture reviewed
[ ] AI architecture reviewed

[ ] All 32 User Stories reviewed
[ ] All 109 Acceptance Criteria reviewed
[ ] Test Scenarios created from approved requirements
[ ] Every scenario has unique ID
[ ] Every scenario maps to Acceptance Criteria
[ ] No orphan scenarios
[ ] Coverage gaps identified
[ ] Duplicate/overlapping scenarios reviewed
[ ] Positive coverage exists
[ ] Negative coverage exists where applicable
[ ] Validation coverage exists where applicable
[ ] Boundary coverage exists where applicable
[ ] Error handling coverage exists where applicable
[ ] Role-based coverage exists where applicable
[ ] Accessibility coverage exists where applicable
[ ] Responsive coverage exists where applicable
[ ] Cross-browser expectations preserved
[ ] Smoke classification completed
[ ] Regression classification completed
[ ] P0/P1/P2/P3 prioritization completed
[ ] BDD intent exists
[ ] Playwright readiness notes exist
[ ] Synthetic-data requirements preserved
[ ] Traceability updated
[ ] Coverage matrix created

[ ] No frontend implementation
[ ] No Playwright code
[ ] No Cucumber feature files
[ ] No Page Objects
[ ] No backend
[ ] No API
[ ] No API automation
[ ] No RAG implementation
[ ] No MCP implementation
[ ] No LangGraph implementation
[ ] No real PHI
[ ] No clinical decision support
[ ] No medical recommendations
[ ] No real healthcare integration
[ ] No unnecessary dependencies
[ ] No secrets

[ ] prompt.md created
[ ] README.md created
[ ] implementation-report.pdf created
[ ] interview-notes.md created
[ ] response.md created
[ ] Root documentation updated

[ ] Git commit created
[ ] Git push successful
[ ] Remote SHA verified
[ ] Working tree clean

============================================================
GIT REQUIREMENTS
============================================================

Use the existing repository.

Branch:

main

Remote:

origin

Push changes to:

origin/main

Commit message:

docs(step-1.7): define careflow health test scenarios

After commit and push:

1. Verify local HEAD.
2. Verify origin/main.
3. Confirm both SHA values match.
4. Confirm working tree is clean.

If sandbox/network restrictions occur:

- Follow the same safe approach used in previous steps.
- Do not weaken security.
- Do not change global Git configuration unnecessarily.
- Use per-command safe-directory handling if required.

============================================================
NO UNAUTHORIZED SCOPE
============================================================

Do NOT:

- Build CareFlow Health frontend
- Initialize React/Vite
- Install Playwright
- Install Cucumber
- Create `.feature` files
- Create step definitions
- Create Page Objects
- Build Jira-like application
- Build Confluence-like application
- Build Jenkins-like application
- Implement RAG
- Implement MCP
- Implement LangGraph
- Implement backend
- Implement APIs
- Implement API automation
- Add real healthcare integrations
- Add real PHI
- Add clinical decision support
- Add medical recommendations

This step is strictly:

ACCEPTANCE CRITERIA → TEST SCENARIOS

============================================================
FINAL RESPONSE FORMAT
============================================================

At the end provide:

# Step 1.7 Response

## Status

Implementation Status: PASS / FAIL

## Objective

## Implementation Summary

## Scenario Statistics

Include:

- Total User Stories
- Total Acceptance Criteria
- Total Test Scenarios
- Acceptance Criteria Covered
- Acceptance Criteria Without Scenario Coverage
- Orphan Scenarios
- Smoke Scenarios
- P0 Scenarios
- P1 Scenarios
- P2 Scenarios
- P3 Scenarios

## Coverage

- Positive
- Negative
- Validation
- Boundary
- Error
- Role-based
- Accessibility
- Responsive
- Cross-browser
- Regression

## Traceability

BRD → PRD → Epic → User Story → Acceptance Criteria → Test Scenario

## Files Created

List all files.

## Files Modified

List all files.

## Validation

List all validations with PASS/FAIL.

## Git

- Branch
- Commit SHA
- Commit Message
- Push Status
- Remote Verification
- Working Tree Status

## Documentation

- Prompt
- README
- PDF
- Interview Notes
- Response

## Known Issues

Only genuine issues.

## Next Recommended Step

STEP 1.8 — Test Case Definition

IMPORTANT:

Do NOT automatically proceed to Step 1.8.

Stop after Step 1.7 and wait for explicit user instruction.