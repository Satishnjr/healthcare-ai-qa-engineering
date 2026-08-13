# ============================================================
# STEP 1.4 — EPIC DEFINITION
# ============================================================

You are continuing the Healthcare AI QA Engineering Platform.

Completed and verified:

STEP 0.1 — Environment Discovery — PASS
STEP 0.2 — Repository Foundation — PASS
STEP 0.3 — Engineering Standards & Architecture Contract — PASS
STEP 1.1 — Healthcare Product Vision & Requirements Strategy — PASS
STEP 1.2 — Business Requirements Document — PASS
STEP 1.3 — Product Requirements Document — PASS

The latest Step 1.3 Git verification has been completed successfully.

Repository:

https://github.com/Satishnjr/healthcare-ai-qa-engineering.git

Branch:

main

Product:

CareFlow Health

Project:

Healthcare AI QA Engineering Platform


============================================================
1. OBJECTIVE
============================================================

Create the enterprise-style Epic Definition layer for
CareFlow Health.

The Epic layer must translate the approved PRD into
logical business/product capabilities that can later be
decomposed into:

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
Playwright + Cucumber BDD

The Epic layer will also become an important knowledge
source for the future:

RAG
MCP
LangGraph Agent

IMPORTANT:

This step is DOCUMENTATION AND REQUIREMENTS DECOMPOSITION ONLY.

Do NOT:

- Build the frontend
- Install frontend dependencies
- Create React components
- Create Playwright tests
- Create Cucumber scenarios
- Create API tests
- Create backend services
- Create APIs
- Implement RAG
- Implement MCP
- Implement Agent
- Create real Jira integration
- Create real Confluence integration
- Create real Jenkins integration
- Create CI/CD pipelines

Do not skip ahead to Step 1.5 or later.


============================================================
2. SOURCE DOCUMENTS
============================================================

Before creating the Epic definitions, inspect and use:

knowledge/brd/CAREFLOW_HEALTH_BRD.md

knowledge/prd/CAREFLOW_HEALTH_PRD.md

knowledge/requirements-traceability.md

Also inspect:

docs/architecture/PRODUCT_VISION.md
docs/architecture/PRODUCT_SCOPE.md
docs/architecture/USER_ROLES.md
docs/architecture/APPLICATION_MODULES.md
docs/architecture/USER_JOURNEYS.md
docs/architecture/REQUIREMENTS_STRATEGY.md
docs/architecture/PRODUCT_QA_STRATEGY.md
docs/architecture/SYNTHETIC_DATA_STRATEGY.md
docs/architecture/AI_REQUIREMENTS_RELEVANCE.md

Inspect:

docs/architecture/ARCHITECTURE_DECISION_RECORD.md
docs/architecture/ENGINEERING_STANDARDS.md
docs/architecture/AI_ENGINEERING_ARCHITECTURE.md
docs/architecture/QA_AUTOMATION_ARCHITECTURE.md

The Epic layer MUST remain consistent with the approved
BRD and PRD.


============================================================
3. EPIC LOCATION
============================================================

Create:

knowledge/epics/CAREFLOW_HEALTH_EPICS.md

Also create:

knowledge/epics/README.md


============================================================
4. EPIC METADATA
============================================================

Use:

Document ID:
CFH-EPIC-001

Product:
CareFlow Health

Project:
Healthcare AI QA Engineering Platform

Version:
1.0

Status:
BASELINE / APPROVED FOR USER STORY DECOMPOSITION

Source:

CFH-PRD-001


============================================================
5. EPIC DESIGN PRINCIPLES
============================================================

Epics must represent meaningful business/product
capabilities.

An Epic must NOT be:

- A technical task
- A single UI button
- A single test case
- A single API
- A backend component
- An automation script

Each Epic should represent a coherent product capability
that can contain multiple user stories.


============================================================
6. EPIC IDENTIFICATION
============================================================

Use stable IDs:

EPIC-001
EPIC-002
EPIC-003
...

Do not reuse IDs.

Each Epic must have:

Epic ID
Epic Name
Epic Objective
Business Value
Priority
Status
Primary Actors
PRD References
BRD References
Scope
Out of Scope
Capabilities
Dependencies
Business Rules
Risks
QA Relevance
RAG Relevance
MCP Relevance
Agent Relevance
Definition of Done


============================================================
7. EXPECTED EPIC STRUCTURE
============================================================

Create logical epics covering the approved PRD.

At minimum evaluate these capabilities:

1. Authentication & Access
2. Dashboard
3. Patient Management
4. Patient Search
5. Patient Profile
6. Appointment Management
7. Doctor Management
8. Medical Records
9. Clinical Notes Simulation
10. Prescriptions
11. Billing & Insurance
12. Notifications
13. Reports
14. User Management
15. Settings
16. Activity History / Audit Simulation

IMPORTANT:

Do not blindly create one Epic for every item above.

Review the PRD and determine whether some capabilities
should be grouped into a larger Epic.

The final Epic structure should be:

- Business meaningful
- Testable
- Maintainable
- Suitable for Jira-style tracking
- Suitable for future user stories
- Suitable for future AI/RAG retrieval


============================================================
8. EPIC-001 AUTHENTICATION & ACCESS
============================================================

If supported by the PRD, define an Epic covering:

- Login
- Logout
- Simulated authentication
- Role selection
- Role-based UI
- Session-like state
- Access behavior

Clarify:

Authentication is frontend simulation only.

No real identity provider exists.

No backend authentication exists.


============================================================
9. DASHBOARD EPIC
============================================================

Define the appropriate Epic for:

- Dashboard
- Summary cards
- Upcoming appointments
- Notifications
- Quick actions
- Recent activity
- Role-specific information
- Synthetic statistics


============================================================
10. PATIENT MANAGEMENT EPIC
============================================================

Define the appropriate Epic(s) covering:

- Patient list
- Patient registration
- Patient search
- Patient profile
- Patient update
- Patient status
- Contact details
- Emergency contact
- Insurance information

Use synthetic healthcare information only.


============================================================
11. APPOINTMENT EPIC
============================================================

Define capabilities including:

- Appointment creation
- Appointment viewing
- Appointment update
- Rescheduling
- Cancellation
- Appointment status
- Doctor selection
- Patient selection
- Date/time
- Appointment type
- Notes
- Conflict simulation


============================================================
12. DOCTOR EPIC
============================================================

Define:

- Doctor list
- Doctor profile
- Specialty
- Availability
- Schedule
- Status
- Assigned appointments

All doctor information must be fictional/synthetic.


============================================================
13. MEDICAL RECORDS EPIC
============================================================

Define:

- Medical record list
- Record details
- Record type
- Date
- Author
- Summary
- Attachment indicator
- Search/filter


============================================================
14. CLINICAL NOTES SIMULATION EPIC
============================================================

Define:

View patient
    ↓
Review history
    ↓
Create note
    ↓
Save note
    ↓
Confirmation

This must remain a UI simulation.

No clinical decision support.

No medical recommendations.


============================================================
15. PRESCRIPTION EPIC
============================================================

Define UI-level capabilities:

- Prescription list
- Prescription details
- Prescribing doctor
- Date
- Status
- Medication display
- Dosage display
- Instructions display

All information is synthetic.

Do not generate medical recommendations.


============================================================
16. BILLING & INSURANCE EPIC
============================================================

Define:

- Billing summary
- Invoice-like information
- Insurance details
- Coverage status
- Claim-like status

Clearly state:

No real payment processing.

No real insurance integration.


============================================================
17. NOTIFICATIONS EPIC
============================================================

Define:

- Notification list
- Read/unread state
- Notification type
- Timestamp
- Mark as read
- Notification filtering if supported
- Empty state


============================================================
18. REPORTING EPIC
============================================================

Define:

- Appointment summary
- Patient statistics
- Doctor schedule summary
- Cancellation summary
- Activity summary

All reporting data must be synthetic.


============================================================
19. USER MANAGEMENT EPIC
============================================================

For administrators define:

- User list
- User search
- User details
- Role
- Status
- Activate/deactivate simulation

No backend authorization.


============================================================
20. SETTINGS EPIC
============================================================

Define:

- Profile settings
- Notification preferences
- Display preferences
- Application preferences


============================================================
21. ACTIVITY HISTORY EPIC
============================================================

Define simulated activity events:

- Login
- Logout
- Patient viewed
- Patient updated
- Appointment created
- Appointment updated
- Appointment cancelled
- Note created
- Profile updated

Clearly distinguish this from a real regulatory audit system.


============================================================
22. EPIC PRIORITIZATION
============================================================

Assign:

Priority:

P0 — Critical
P1 — High
P2 — Medium
P3 — Low

Prioritize according to:

- Business value
- User impact
- Dependency
- Product criticality
- Testability


============================================================
23. EPIC DEPENDENCIES
============================================================

Document dependencies.

Example:

Authentication
      ↓
Dashboard
      ↓
Patient Management
      ↓
Appointments
      ↓
Medical Records
      ↓
Prescriptions

Do not create artificial dependencies.

Only document meaningful product dependencies.


============================================================
24. EPIC TRACEABILITY
============================================================

Create a complete mapping:

BRD
 ↓
PRD
 ↓
EPIC

Create:

knowledge/requirements-traceability.md

Add Epic mapping columns:

| BRD ID | PRD ID | Epic ID | Requirement | Status |
|---|---|---|---|---|

Do not remove existing BRD → PRD mappings.

Add Epic references to them.


============================================================
25. EPIC-TO-PRD TRACEABILITY
============================================================

Create a dedicated table:

| Epic ID | Epic Name | PRD References | BRD References |
|---|---|---|---|

Every Epic must map to one or more PRD requirements.

Avoid orphan Epics.

Avoid orphan PRD requirements where practical.

If a PRD requirement cannot be mapped cleanly, document
the reason rather than inventing an unrelated Epic.


============================================================
26. EPIC SCOPE
============================================================

For every Epic define:

### In Scope

What the Epic covers.

### Out of Scope

What it explicitly does not cover.

This is especially important because the application is:

FRONTEND ONLY.

Therefore explicitly exclude:

- Backend
- APIs
- Database
- Real authentication
- Real payment processing
- Real insurance integrations
- Real healthcare integrations


============================================================
27. EPIC BUSINESS VALUE
============================================================

For each Epic explain:

Why does this capability exist?

What user/business problem does it solve?

What value does it provide?


============================================================
28. EPIC QA RELEVANCE
============================================================

For every Epic document future QA relevance.

Include:

- Functional testing
- UI testing
- Validation testing
- Negative testing
- Accessibility testing
- Responsive testing
- Cross-browser testing
- Regression testing

Do not implement tests yet.


============================================================
29. EPIC PLAYWRIGHT RELEVANCE
============================================================

Document how each Epic will eventually map to:

Epic
 ↓
User Story
 ↓
Acceptance Criteria
 ↓
Gherkin Scenario
 ↓
Step Definition
 ↓
Page Object
 ↓
Playwright Test


============================================================
30. EPIC CUCUMBER RELEVANCE
============================================================

Document future BDD structure.

Example:

Feature:
Patient Management

Scenario:
Search patient by patient ID

Given the user is logged in
And the patient management page is displayed
When the user searches for patient "PAT-10001"
Then the patient should be displayed

IMPORTANT:

This is only an example.

Do not create actual feature files in this step.


============================================================
31. RAG RELEVANCE
============================================================

Structure Epic documentation for future RAG ingestion.

Each Epic must have:

- Stable ID
- Clear title
- Atomic sections
- PRD references
- BRD references
- Business value
- Capabilities
- Dependencies

Document how future RAG will use:

BRD
PRD
Epics
User Stories
Acceptance Criteria
Test Scenarios
Test Cases

as a connected knowledge hierarchy.


============================================================
32. MCP RELEVANCE
============================================================

Document future MCP use cases.

Potential future tools:

search_epics
get_epic
search_requirements
get_requirement_traceability
search_user_stories
create_jira_issue
update_jira_issue
create_confluence_page
trigger_jenkins_job

IMPORTANT:

These are future planned capabilities only.

Do not implement MCP yet.


============================================================
33. LANGGRAPH AGENT RELEVANCE
============================================================

The project's selected Agent framework is:

LANGGRAPH

Document how future LangGraph Agent workflows may use
Epic information.

Example:

User request
    ↓
LangGraph Agent
    ↓
Identify Epic
    ↓
Retrieve PRD
    ↓
Retrieve User Story
    ↓
Retrieve Acceptance Criteria
    ↓
Retrieve Test Cases
    ↓
Analyze coverage

Possible future tasks:

- Requirement analysis
- Coverage analysis
- Test recommendation
- Regression impact analysis
- Defect analysis
- Requirement traceability


============================================================
34. JIRA RELEVANCE
============================================================

We will eventually create a Jira-style project/workflow.

For this step:

DO NOT connect to a real Jira instance.

Instead define:

Epic ID
Epic Name
Priority
Owner/Role
Status
Dependencies

The Epic structure should be directly convertible into Jira
Epics later.

The future flow will be:

Epic Definition
      ↓
Jira Epic
      ↓
Jira User Story
      ↓
Acceptance Criteria


============================================================
35. CONFLUENCE RELEVANCE
============================================================

Document how the Epic information will eventually be
published to Confluence-style project documentation.

Possible hierarchy:

Healthcare AI QA Engineering
    |
    +-- Product Vision
    +-- BRD
    +-- PRD
    +-- Epics
    +-- User Stories
    +-- QA Strategy
    +-- RAG
    +-- MCP
    +-- Agent


============================================================
36. JENKINS RELEVANCE
============================================================

Document future CI/CD relevance.

Eventually:

Git Push
   ↓
Jenkins
   ↓
Build
   ↓
Frontend validation
   ↓
Playwright
   ↓
Cucumber
   ↓
Reports

Do not create Jenkins pipelines in this step.


============================================================
37. DEFINITION OF DONE
============================================================

Define a generic Epic Definition of Done.

Example:

- Epic objective documented
- Business value documented
- Scope documented
- Out of scope documented
- PRD references documented
- BRD references documented
- Dependencies documented
- Risks documented
- QA relevance documented
- Future automation relevance documented
- Future AI relevance documented
- Ready for user-story decomposition


============================================================
38. EPIC QUALITY CHECK
============================================================

Validate:

[ ] Epic document exists
[ ] Epic README exists
[ ] Every Epic has a stable ID
[ ] Every Epic has a meaningful name
[ ] Every Epic has an objective
[ ] Every Epic has business value
[ ] Every Epic has priority
[ ] Every Epic has actors
[ ] Every Epic maps to PRD
[ ] Every Epic maps to BRD where applicable
[ ] Scope is defined
[ ] Out of scope is defined
[ ] Dependencies are documented
[ ] Risks are documented
[ ] QA relevance is documented
[ ] Playwright relevance is documented
[ ] Cucumber relevance is documented
[ ] RAG relevance is documented
[ ] MCP relevance is documented
[ ] LangGraph relevance is documented
[ ] Jira relevance is documented
[ ] Confluence relevance is documented
[ ] Jenkins relevance is documented
[ ] No backend
[ ] No API
[ ] No API automation
[ ] No real PHI
[ ] No clinical decision support
[ ] No real healthcare integrations


============================================================
39. STEP 1.4 DOCUMENTATION
============================================================

Create:

docs/implementations/1.04-epics/

Inside:

prompt.md
README.md
implementation-report.pdf
interview-notes.md

Optionally create:

response.md

if consistent with previous project steps.


============================================================
40. prompt.md
============================================================

Save this exact Step 1.4 prompt into:

docs/implementations/1.04-epics/prompt.md


============================================================
41. README.md
============================================================

Create a detailed implementation README containing:

# Step 1.4 — Epic Definition

## Objective

## Source Documents

## Epic Strategy

## Epic Inventory

## Epic Traceability

## Dependencies

## Scope

## QA Relevance

## Playwright Relevance

## Cucumber Relevance

## RAG Relevance

## MCP Relevance

## LangGraph Relevance

## Jira Relevance

## Confluence Relevance

## Jenkins Relevance

## Validation

## Files Created

## Files Modified

## Lessons Learned

## Interview Preparation

## Status


============================================================
42. IMPLEMENTATION PDF
============================================================

Create:

docs/implementations/1.04-epics/implementation-report.pdf

The PDF must be professional and interview-ready.

Include:

- Project overview
- Epic strategy
- Epic inventory
- Epic descriptions
- Business value
- Traceability
- Dependencies
- QA relevance
- Playwright relevance
- Cucumber relevance
- RAG relevance
- MCP relevance
- LangGraph relevance
- Jira relevance
- Confluence relevance
- Jenkins relevance
- Interview talking points

Only document what was actually implemented.


============================================================
43. INTERVIEW NOTES
============================================================

Create:

docs/implementations/1.04-epics/interview-notes.md

Include:

## What is an Epic?

## Epic vs User Story

## Epic vs BRD

## Epic vs PRD

## Why do we need Epics?

## How were Epics derived from the PRD?

## How did you avoid creating technical Epics?

## How does Epic traceability work?

## How does Epic structure help QA?

## How does Epic structure support Playwright?

## How does Epic structure support Cucumber BDD?

## How does Epic structure support RAG?

## How does Epic structure support MCP?

## Why LangGraph for the Agent?

## How will Epics map to Jira?

## How will Epics map to Confluence?

## How will Epics eventually relate to Jenkins?

## How does this support enterprise QA?

## Common Interview Questions

## Suggested Answers

## 30-second explanation

## 1-minute explanation

## 2-minute explanation

## Resume Bullet Suggestions


============================================================
44. UPDATE ROOT DOCUMENTATION
============================================================

Update:

README.md
CHANGELOG.md
docs/IMPLEMENTATION_INDEX.md
docs/INTERVIEW_GUIDE.md

Add:

STEP 1.4 — Epic Definition

Status:

PASS

Clearly state:

Epic Definition = IMPLEMENTED

Frontend = NOT IMPLEMENTED

Automation = NOT IMPLEMENTED

RAG = NOT IMPLEMENTED

MCP = NOT IMPLEMENTED

Agent = NOT IMPLEMENTED


============================================================
45. GIT SAFETY
============================================================

Before committing:

Review:

git status

Check for:

- Secrets
- API keys
- Tokens
- Passwords
- PHI
- Personal credentials
- Corporate confidential information

Do not commit any sensitive information.


============================================================
46. GIT COMMIT
============================================================

Stage only Step 1.4 changes.

Commit message:

docs(step-1.4): define careflow health epics

Push:

git push origin main


============================================================
47. REMOTE VERIFICATION
============================================================

After push execute:

git rev-parse HEAD

git ls-remote origin refs/heads/main

Verify:

Local HEAD == Remote main


============================================================
48. WORKING TREE
============================================================

Run:

git status --short

Expected:

clean


============================================================
49. FINAL RESPONSE
============================================================

Return:

Implementation Status:
PASS / FAIL / BLOCKED / PARTIAL

Step:
STEP 1.4 — Epic Definition

Objective:

Implementation Summary:

Epic Document:
<path>

Epic Version:
1.0

Epic Status:
BASELINE / APPROVED FOR USER STORY DECOMPOSITION

Epic Count:
<number>

BRD Requirements Mapped:
<number>

PRD Requirements Mapped:
<number>

Files Created:

Files Modified:

Validation:

Git:

Branch:
Commit:
Commit Message:
Push:
Remote Verification:

Working Tree:

Documentation:

Prompt:
<path>

README:
<path>

PDF:
<path>

Interview Notes:
<path>

Known Issues:

Next Recommended Step:


============================================================
50. CRITICAL STOP CONDITION
============================================================

DO NOT execute STEP 1.5 automatically.

DO NOT create user stories.

DO NOT create acceptance criteria.

DO NOT create Jira issues.

DO NOT create Confluence pages.

DO NOT create Jenkins pipelines.

DO NOT build frontend.

DO NOT install frontend dependencies.

DO NOT create Playwright tests.

DO NOT create Cucumber feature files.

DO NOT implement RAG.

DO NOT implement MCP.

DO NOT implement Agent.

WAIT FOR MY NEXT PROMPT.


============================================================
END OF STEP 1.4
============================================================

