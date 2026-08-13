# STEP 1.9 — TEST DATA & TEST MANAGEMENT STRATEGY
# Healthcare AI QA Engineering — CareFlow Health
# EXECUTION MODE: IMPLEMENT THIS STEP ONLY

You are acting as a Senior QA Architect, Test Automation Architect, AI-QA Engineer, Product Analyst, and Technical Documentation Engineer.

You are working inside the existing repository:

HealthCare-AI-QA

Product:
CareFlow Health

Repository:
https://github.com/Satishnjr/healthcare-ai-qa-engineering.git

============================================================
1. PROJECT CONTEXT — DO NOT CHANGE
============================================================

This project is being built from scratch as an enterprise-style,
production-like healthcare QA engineering project.

The project MUST contain:

1. A production-like FRONTEND healthcare application
2. UI automation using:
   - Playwright
   - TypeScript
   - Cucumber BDD
   - Page Object Model
3. RAG implementation
4. MCP implementation
5. Multiple specialized AI Agents
6. Agentic AI orchestration
7. Jira project/tool simulation or project-management layer
8. Confluence knowledge/documentation simulation or project-management layer
9. Jenkins CI/CD simulation/configuration
10. GitHub repository
11. Complete QA traceability
12. Interview-ready documentation

IMPORTANT ARCHITECTURE CONSTRAINTS:

- FRONTEND ONLY application
- NO backend application
- NO REST API implementation
- NO API automation
- NO real healthcare integrations
- NO real PHI
- NO clinical decision support
- NO medical diagnosis
- NO medical recommendations
- Use synthetic healthcare data only
- The frontend should behave like a realistic enterprise healthcare application.

AI implementation planned:

RAG:
- Python
- ChromaDB or approved vector store
- Configurable embedding provider
- Configurable LLM provider

MCP:
- Python
- FastMCP

Agent:
- LangGraph

Agentic AI:
- Multiple specialized agents
- Orchestrated workflow
- Human-readable decisions and outputs
- No autonomous high-risk medical decisions

Existing project foundation and architecture documents MUST be respected.

============================================================
2. PREVIOUS IMPLEMENTATION STATUS
============================================================

The following steps are already COMPLETE and MUST NOT be unnecessarily recreated:

STEP 0.1 — Environment Discovery
STEP 0.2 — Repository Foundation
STEP 0.3 — Engineering Standards & Architecture Contract

STEP 1.1 — Product Vision & Requirements Strategy
STEP 1.2 — BRD
STEP 1.3 — PRD
STEP 1.4 — Epic Definition
STEP 1.5 — User Story Definition
STEP 1.6 — Acceptance Criteria
STEP 1.7 — Test Scenario Definition
STEP 1.8 — Test Case Definition

Current project status:

- Git repository initialized
- GitHub remote configured
- Branch: main
- Previous work pushed successfully
- Working tree should be clean before starting
- Requirements traceability exists
- BRD exists
- PRD exists
- Epics exist
- User Stories exist
- Acceptance Criteria exist
- Test Scenarios exist
- Test Cases exist

IMPORTANT:

Before implementing Step 1.9, READ the existing project documentation.

At minimum inspect:

README.md

CHANGELOG.md

docs/IMPLEMENTATION_INDEX.md

docs/INTERVIEW_GUIDE.md

docs/architecture/ARCHITECTURE_DECISION_RECORD.md

docs/architecture/ENGINEERING_STANDARDS.md

docs/architecture/AI_ENGINEERING_ARCHITECTURE.md

docs/architecture/QA_AUTOMATION_ARCHITECTURE.md

docs/architecture/PRODUCT_VISION.md

docs/architecture/PRODUCT_SCOPE.md

docs/architecture/USER_ROLES.md

docs/architecture/APPLICATION_MODULES.md

docs/architecture/USER_JOURNEYS.md

docs/architecture/REQUIREMENTS_STRATEGY.md

docs/architecture/PRODUCT_QA_STRATEGY.md

docs/architecture/SYNTHETIC_DATA_STRATEGY.md

knowledge/brd/CAREFLOW_HEALTH_BRD.md

knowledge/prd/CAREFLOW_HEALTH_PRD.md

knowledge/epics/CAREFLOW_HEALTH_EPICS.md

knowledge/user-stories/CAREFLOW_HEALTH_USER_STORIES.md

knowledge/acceptance-criteria/CAREFLOW_HEALTH_ACCEPTANCE_CRITERIA.md

knowledge/test-scenarios/CAREFLOW_HEALTH_TEST_SCENARIOS.md

knowledge/test-cases/CAREFLOW_HEALTH_TEST_CASES.md

knowledge/requirements-traceability.md

Also inspect the previous implementation folders under:

docs/implementations/

Do not assume their contents.

Use the actual repository documents as the source of truth.

============================================================
3. STEP 1.9 OBJECTIVE
============================================================

Implement:

STEP 1.9 — Test Data & Test Management Strategy

The objective is to establish a comprehensive enterprise-style test-data
strategy and QA test-management strategy that will support:

- the future CareFlow Health frontend
- Playwright automation
- Cucumber BDD
- regression execution
- future Jira workflow
- future Confluence knowledge base
- future RAG
- future MCP tools
- future AI agents
- future agentic QA workflows
- Jenkins CI/CD
- interview demonstrations

This is a STRATEGY/DOCUMENTATION step.

DO NOT build the frontend in this step.

DO NOT implement Playwright in this step.

DO NOT implement Cucumber in this step.

DO NOT implement RAG in this step.

DO NOT implement MCP in this step.

DO NOT implement agents in this step.

DO NOT install unnecessary dependencies.

============================================================
4. TEST DATA STRATEGY
============================================================

Create a comprehensive synthetic healthcare test-data strategy.

The strategy must cover realistic data required by the CareFlow Health
frontend.

Include at minimum:

A. Patient Data

Examples of fields:

- patient ID
- synthetic medical record number
- first name
- last name
- date of birth
- gender
- contact information
- address
- emergency contact
- insurance information
- account status
- registration status

All data MUST be synthetic.

B. Provider Data

Include:

- provider ID
- provider name
- specialty
- department
- location
- availability status
- provider role

C. Appointment Data

Include:

- appointment ID
- patient
- provider
- date
- time
- appointment type
- appointment status
- reason
- location
- confirmation status

Include realistic statuses such as:

- Scheduled
- Confirmed
- Checked-In
- Completed
- Cancelled
- No-Show
- Rescheduled

D. Prescription / Medication UI Data

Only represent UI/demo data.

Do NOT provide medical recommendations.

Include safe synthetic fields such as:

- medication display name
- dosage display text
- frequency display text
- status
- start date
- end date
- prescribing provider

E. Insurance Data

Include:

- insurance provider
- policy number
- member ID
- plan type
- coverage status
- effective date
- expiry date

Use obviously synthetic identifiers.

F. Billing Data

Include:

- invoice ID
- patient
- service
- amount
- payment status
- invoice date
- due date

G. Claims Data

Include:

- claim ID
- patient
- provider
- claim type
- claim status
- submitted date
- processed date
- amount
- denial reason where applicable

H. Notifications

Include:

- notification ID
- type
- title
- message
- timestamp
- read/unread state
- priority

I. User / Role Data

Include synthetic users for:

- Patient
- Physician
- Nurse
- Receptionist
- Billing Staff
- Healthcare Administrator
- QA/Test User

Define what each role can see or interact with at UI level.

============================================================
5. TEST DATA CATEGORIES
============================================================

Define and document:

1. Positive data
2. Negative data
3. Boundary data
4. Empty data
5. Missing data
6. Invalid data
7. Duplicate data
8. Long-value data
9. Special-character data
10. Unicode data
11. Role-specific data
12. Permission-related UI data
13. Loading-state data
14. Error-state data
15. Responsive UI data
16. Accessibility-related data
17. Search/filter/sort data
18. Pagination data
19. Date/time boundary data
20. Regression baseline data

For every category explain:

- purpose
- examples
- expected usage
- automation relevance
- risks

============================================================
6. TEST DATA VOLUME STRATEGY
============================================================

Define realistic data-volume tiers.

At minimum:

SMALL:
- smoke testing

MEDIUM:
- functional/regression testing

LARGE:
- search/filter/pagination/performance-oriented UI testing

The project remains frontend-only.

Therefore, do NOT create a backend data-generation service.

Instead define a strategy using:

- static JSON
- TypeScript fixtures
- local seed files
- deterministic synthetic datasets
- factory/helper patterns where appropriate

Recommend the most suitable approach for this project.

============================================================
7. DATA GENERATION STRATEGY
============================================================

Define how synthetic data should eventually be generated.

Consider:

- deterministic data
- random-but-reproducible data
- fixture factories
- scenario-specific datasets
- role-specific datasets
- negative datasets
- boundary datasets

Explain when each approach should be used.

Do NOT implement the actual generator yet unless a small documentation-only
example is required.

============================================================
8. DATA PRIVACY & SECURITY
============================================================

Create strict rules:

- Never use real PHI
- Never copy real patient information
- Never use real insurance numbers
- Never use real medical record numbers
- Never use real addresses
- Never use real contact details
- Never store secrets in test data
- Never commit credentials
- Never use production datasets
- Never connect to real healthcare systems

Clearly state:

This is an educational/engineering demonstration project using synthetic
data only.

Do NOT claim HIPAA compliance.

============================================================
9. TEST DATA LIFECYCLE
============================================================

Define:

- data creation
- data selection
- data usage
- data reset
- data cleanup
- data versioning
- data ownership
- data review
- data deprecation

Since the application is frontend-only, explain how the test data will
remain deterministic across automation runs.

============================================================
10. TRACEABILITY
============================================================

Extend the traceability strategy to include:

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
 ↓
Test Case
 ↓
Test Data

Define how a test case can identify the required test-data dataset.

Create stable IDs for datasets.

Example naming convention:

TD-PATIENT-001
TD-PATIENT-NEG-001
TD-APPOINTMENT-001
TD-APPOINTMENT-BOUNDARY-001

Use a consistent naming convention across all entities.

============================================================
11. TEST MANAGEMENT STRATEGY
============================================================

Create an enterprise-style QA test-management strategy.

Define:

- Test Case management
- Test Suite management
- Regression suite
- Smoke suite
- Sanity suite
- Functional suite
- Negative suite
- Accessibility suite
- Responsive suite
- Cross-browser suite
- Role-based suite

Define test execution lifecycle:

Not Run
→ In Progress
→ Passed
→ Failed
→ Blocked
→ Retest
→ Closed

Also define defect lifecycle:

New
→ Triaged
→ Assigned
→ In Progress
→ Fixed
→ Ready for QA
→ Retest
→ Closed

Include Reopened flow.

============================================================
12. JIRA STRATEGY
============================================================

IMPORTANT:

We previously discussed creating a Jira dashboard/application for this
project.

Do NOT create the Jira implementation in Step 1.9.

Instead, define the JIRA TEST MANAGEMENT STRATEGY that the later Jira
implementation will follow.

Document:

- Jira project structure
- project key recommendation
- Epic hierarchy
- Story hierarchy
- task/sub-task structure
- test-case tracking strategy
- defect tracking
- sprint structure
- release/version structure
- labels
- components
- priorities
- statuses
- workflows
- QA dashboard requirements

The later Jira implementation should support our actual project artifacts.

Recommend a project key such as:

CFH

unless existing project documentation specifies another key.

Define future dashboard widgets such as:

- Total User Stories
- Test Cases
- Passed
- Failed
- Blocked
- Defects by severity
- Defects by status
- Automation coverage
- Regression execution
- Sprint progress
- Requirement coverage
- AI-generated test insights

DO NOT build the dashboard now.

Only define the strategy and requirements.

============================================================
13. CONFLUENCE STRATEGY
============================================================

Do NOT build Confluence now.

Define the future Confluence information architecture.

Include spaces/pages for:

- Product Overview
- BRD
- PRD
- Architecture
- QA Strategy
- Test Data
- Test Scenarios
- Test Cases
- Automation
- RAG
- MCP
- AI Agents
- Agentic AI
- Jenkins
- Release Notes
- Defect Knowledge
- Interview Preparation

Define how Confluence will eventually consume project documentation.

============================================================
14. JENKINS STRATEGY
============================================================

Do NOT implement Jenkins now.

Define the future Jenkins QA pipeline.

Example conceptual pipeline:

Checkout
→ Install Dependencies
→ Build Frontend
→ Start Frontend
→ Run Smoke Tests
→ Run Regression Tests
→ Generate Reports
→ Publish Artifacts
→ AI QA Analysis
→ Archive Results

Explain where RAG/MCP/Agents can eventually participate.

Do not create a real Jenkins server.

============================================================
15. PLAYWRIGHT + CUCUMBER RELEVANCE
============================================================

For each major test-data category explain how it will eventually be
consumed by:

- Playwright
- Cucumber BDD
- Page Objects
- Fixtures
- Hooks
- Scenario tags

Example tags:

@smoke
@regression
@negative
@boundary
@accessibility
@responsive
@role-patient
@role-provider

Do not implement the automation framework in Step 1.9.

============================================================
16. RAG RELEVANCE
============================================================

Define how test-data and test-management documentation will eventually
become RAG knowledge.

Potential knowledge sources:

- BRD
- PRD
- Epics
- User Stories
- Acceptance Criteria
- Test Scenarios
- Test Cases
- Test Data Catalog
- QA Strategy
- Defect Knowledge
- Architecture documents

Explain example future RAG questions:

- "What test cases cover appointment cancellation?"
- "Which test data is required for insurance validation?"
- "Which requirements are covered by this test case?"
- "What regression scenarios exist for patient search?"

Do not implement RAG now.

============================================================
17. MCP RELEVANCE
============================================================

Define future MCP tools that may interact with project knowledge.

Examples:

- search_requirements
- search_test_cases
- search_test_data
- get_user_story
- get_acceptance_criteria
- get_test_scenario
- get_test_case
- get_defect
- get_execution_summary
- get_traceability

Do NOT implement MCP now.

Only define the tool contracts conceptually.

============================================================
18. MULTI-AGENT / AGENTIC AI RELEVANCE
============================================================

We will eventually create multiple specialized AI agents.

Do NOT implement them now.

Define how test management and test data will support future agents such as:

1. Requirement Analysis Agent
2. Test Scenario Agent
3. Test Case Agent
4. Test Data Agent
5. Automation Agent
6. Test Failure Analysis Agent
7. Defect Analysis Agent
8. Regression Selection Agent
9. QA Reporting Agent

Also define future orchestration:

Requirement
→ Analysis
→ Test Design
→ Test Data
→ Automation
→ Execution
→ Failure Analysis
→ Defect Recommendation
→ QA Report

Keep all decisions explainable and auditable.

============================================================
19. DOCUMENTS TO CREATE
============================================================

Create the following canonical project documents:

1. knowledge/test-data/CAREFLOW_HEALTH_TEST_DATA_STRATEGY.md

2. knowledge/test-data/CAREFLOW_HEALTH_TEST_DATA_CATALOG.md

3. knowledge/test-data/README.md

4. docs/qa/TEST_MANAGEMENT_STRATEGY.md

5. docs/qa/JIRA_TEST_MANAGEMENT_STRATEGY.md

6. docs/qa/CONFLUENCE_KNOWLEDGE_STRATEGY.md

7. docs/qa/JENKINS_QA_PIPELINE_STRATEGY.md

8. docs/qa/TEST_DATA_LIFECYCLE.md

9. docs/qa/TEST_DATA_TRACEABILITY.md

If directories do not exist, create them.

============================================================
20. TEST DATA CATALOG
============================================================

Create a catalog containing representative synthetic datasets.

Do not create thousands of records.

Create a manageable catalog specification with examples for:

- patients
- providers
- appointments
- insurance
- prescriptions
- billing
- claims
- notifications
- users/roles

Every dataset should have:

- Dataset ID
- Entity
- Purpose
- Scenario Type
- Related Test Cases
- Related User Stories
- Data characteristics
- Automation relevance

============================================================
21. STEP DOCUMENTATION
============================================================

Create:

docs/implementations/1.09-test-data-management/prompt.md

This file must contain the COMPLETE prompt used for this step.

Create:

docs/implementations/1.09-test-data-management/README.md

Include:

- objective
- scope
- implementation summary
- documents created
- architecture decisions
- test data strategy
- Jira strategy
- Confluence strategy
- Jenkins strategy
- RAG relevance
- MCP relevance
- Agent relevance
- validation
- known limitations
- interview talking points

Create:

docs/implementations/1.09-test-data-management/interview-notes.md

Include interview-ready explanations for:

- How do you design synthetic healthcare test data?
- How do you prevent PHI leakage?
- How do you manage test data in frontend-only applications?
- How do you make test data deterministic?
- How do you manage regression suites?
- How would Jira integrate with this framework?
- How would Confluence integrate with this project?
- How would Jenkins execute the QA pipeline?
- How would RAG use test-management documents?
- How would MCP expose QA tools?
- How would multiple AI agents use test data?

Create:

docs/implementations/1.09-test-data-management/implementation-report.pdf

The PDF must summarize what was implemented in Step 1.9.

Create:

docs/implementations/1.09-test-data-management/response.md

This must contain the complete final implementation response.

============================================================
22. IMPLEMENTATION INDEX — MANDATORY
============================================================

This requirement is VERY IMPORTANT.

Update:

docs/IMPLEMENTATION_INDEX.md

Every time a step is implemented, the implementation index MUST be updated.

For Step 1.9:

- Mark Steps 0.1 through 1.8 as COMPLETED/PASS based on actual repository
  state.
- Mark Step 1.9 as COMPLETED/PASS only after all validations pass.
- Clearly identify the NEXT step.
- Maintain the REMAINING STEPS roadmap.
- Do not remove completed steps.
- Do not mark future steps as completed.
- Keep status accurate.

The implementation index must clearly separate:

COMPLETED STEPS
CURRENT STEP
NEXT STEP
REMAINING ROADMAP

Also update:

README.md
CHANGELOG.md
docs/INTERVIEW_GUIDE.md

============================================================
23. TRACEABILITY UPDATE
============================================================

Update:

knowledge/requirements-traceability.md

Add:

Test Case → Test Data mapping.

Ensure existing traceability is preserved.

Final chain:

BRD
→ PRD
→ Epic
→ User Story
→ Acceptance Criteria
→ Test Scenario
→ Test Case
→ Test Data

Do NOT break existing mappings.

============================================================
24. VALIDATION REQUIREMENTS
============================================================

Before declaring PASS, validate:

[x] Existing documentation was reviewed
[x] Test data strategy exists
[x] Test data catalog exists
[x] Test data lifecycle exists
[x] Test data traceability exists
[x] Test management strategy exists
[x] Jira strategy exists
[x] Confluence strategy exists
[x] Jenkins strategy exists
[x] Synthetic data rules exist
[x] No real PHI exists
[x] No secrets exist
[x] No backend created
[x] No API created
[x] No API automation created
[x] No frontend created
[x] No Playwright implementation created
[x] No Cucumber implementation created
[x] No RAG implementation created
[x] No MCP implementation created
[x] No Agent implementation created
[x] Existing traceability preserved
[x] Test Case → Test Data mapping exists
[x] Step prompt created
[x] Step README created
[x] Step PDF created
[x] Interview notes created
[x] Response file created
[x] README updated
[x] CHANGELOG updated
[x] IMPLEMENTATION_INDEX updated
[x] INTERVIEW_GUIDE updated

Also validate:

- No duplicate IDs
- No orphan dataset IDs
- No broken references
- No accidental credentials
- No production data
- No unnecessary dependencies
- Working tree clean before finalization

============================================================
25. GIT REQUIREMENTS
============================================================

Before starting:

Check:

git status

Confirm repository and branch.

After implementation:

1. Review git diff
2. Validate all files
3. Commit changes

Recommended commit message:

docs(step-1.9): define test data and test management strategy

Then push to:

origin/main

Verify remote HEAD matches local HEAD.

Working tree must be clean.

If network restrictions prevent push:

- do not fake success
- clearly report the limitation
- provide the exact git commands required

============================================================
26. IMPORTANT EXECUTION RULES
============================================================

DO NOT:

- jump to Step 1.10
- build the frontend
- install unnecessary packages
- create backend code
- create API endpoints
- create API automation
- implement RAG
- implement MCP
- implement agents
- implement Jenkins server
- create a real external Jira integration
- create a real external Confluence integration
- use real healthcare data
- claim HIPAA compliance

DO:

- inspect existing files first
- preserve existing architecture
- preserve existing traceability
- create production-quality documentation
- create interview-quality documentation
- maintain implementation index
- create prompt/README/PDF/interview/response artifacts
- commit and push
- stop after Step 1.9

============================================================
27. FINAL RESPONSE FORMAT
============================================================

At the end, provide a structured response exactly in this style:

# Step 1.9 Response

## Status

Implementation Status: PASS or FAIL

## Objective

...

## Implementation Summary

...

## Test Data Strategy

...

## Test Management Strategy

...

## Jira Strategy

...

## Confluence Strategy

...

## Jenkins Strategy

...

## RAG Relevance

...

## MCP Relevance

...

## Multi-Agent / Agentic AI Relevance

...

## Traceability

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

STEP 1.10

IMPORTANT:

Do not claim anything as PASS unless you actually validated it.

Do not fabricate commit SHA, push status, file existence, test results,
or remote verification.

Stop after completing STEP 1.9.
