STEP 4.1 — JIRA + CONFLUENCE UI SIMULATION

PROJECT:
HealthCare-AI-QA / CareFlow Health

IMPORTANT PROJECT RULE:
We are continuing the existing HealthCare-AI-QA project.

Before making changes:
1. Inspect the complete repository structure.
2. Read README.md.
3. Read docs/IMPLEMENTATION_INDEX.md.
4. Read docs/ROADMAP_RESTRUCTURE.md if present.
5. Read docs/architecture/JIRA_ARCHITECTURE.md.
6. Read docs/architecture/CONFLUENCE_ARCHITECTURE.md.
7. Read docs/architecture/JIRA_CONFLUENCE_INTEGRATION.md.
8. Read docs/architecture/JIRA_CONFLUENCE_AI_ARCHITECTURE.md.
9. Read knowledge/requirements-traceability.md.
10. Inspect the existing frontend implementation from STEP 1.12.
11. Inspect the existing Jira/Confluence foundation from STEP 4.
12. Inspect existing Playwright + Cucumber automation from STEPS 1.13–1.15.
13. Inspect docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md.
14. Inspect existing AI agent, RAG, MCP, observability and governance documentation.

Do NOT blindly overwrite existing architecture.

==================================================
OBJECTIVE
==================================================

Implement STEP 4.1 as the UI simulation layer for the Jira and Confluence ecosystem.

The goal is to provide a production-like enterprise QA experience inside the CareFlow Health frontend without requiring live Atlassian Jira or Confluence connectivity.

This UI must use the existing local/mock Jira and Confluence foundation from STEP 4 wherever practical.

The implementation must make the project visually demonstrate:

CareFlow Health UI
        |
        +--> Jira-style QA Management UI
        |
        +--> Confluence-style Knowledge UI
        |
        +--> Traceability UI
        |
        +--> RAG-ready Knowledge UI
        |
        +--> Future MCP/Agent integration boundary

IMPORTANT:
This is NOT the real Jira or real Confluence product.

Create a realistic local simulation inspired by enterprise Jira/Confluence workflows.

Do NOT copy Atlassian proprietary UI pixel-for-pixel.
Use our own CareFlow Health design system.

==================================================
SCOPE
==================================================

Implement:

1. Jira-style UI
2. Confluence-style UI
3. Jira ↔ Confluence relationship UI
4. Traceability visualization
5. Search/filter functionality
6. Role-aware access
7. Stable automation selectors
8. Synthetic data only
9. AI-ready metadata
10. RAG-ready knowledge presentation
11. Documentation
12. Limited Playwright/Cucumber automation

DO NOT implement:

- real Jira API integration
- real Confluence API integration
- real Atlassian authentication
- real PHI
- production credentials
- backend
- external database
- full 96-test-case automation
- MCP runtime
- RAG runtime
- LangGraph runtime
- agent runtime
- multi-agent runtime
- LLM runtime

Those belong to later steps.

==================================================
ARCHITECTURE
==================================================

Use the existing frontend architecture.

Do NOT create a second frontend application.

Reuse:

frontend/
  src/
    app/
    components/
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

Integrate Jira/Confluence functionality into the existing CareFlow application.

Prefer reusable components over duplicated page-specific code.

Use TypeScript.

Follow existing lint/build conventions.

==================================================
JIRA UI
==================================================

Create a Jira-style QA management area.

Suggested route:

/jira

Child routes:

/jira/dashboard
/jira/projects
/jira/backlog
/jira/board
/jira/issues
/jira/issues/:issueKey
/jira/test-cases
/jira/defects
/jira/sprints
/jira/releases

Do not implement every route as a complex feature if unnecessary.

At minimum implement the following functional pages:

1. Jira Dashboard
2. Jira Issues
3. Jira Issue Detail
4. Jira Test Cases
5. Jira Defects
6. Jira Sprint/Board view

==================================================
JIRA DASHBOARD
==================================================

Display synthetic metrics:

- Total Issues
- Epics
- User Stories
- Test Cases
- Defects
- Open Defects
- Closed Defects
- Sprint Progress
- Automation Coverage
- Regression Coverage
- AI Candidate Tests
- AI Agent Candidate Tests

Add sections:

- Recent Issues
- Active Sprint
- High Priority Defects
- Recently Updated Stories
- AI Automation Candidates

Use deterministic mock data.

==================================================
JIRA ISSUE LIST
==================================================

Create enterprise-style issue table.

Columns:

- Key
- Type
- Summary
- Status
- Priority
- Assignee
- Reporter
- Sprint
- Labels
- Updated

Support:

- search
- issue type filter
- status filter
- priority filter
- assignee filter
- label filter
- sorting
- pagination if appropriate

Example synthetic issues:

CFH-101
CFH-102
CFH-103
CFH-104

Use existing project key:

CFH

==================================================
JIRA ISSUE DETAIL
==================================================

Create detailed issue page.

Show:

- Issue key
- Issue type
- Summary
- Description
- Status
- Priority
- Assignee
- Reporter
- Sprint
- Release
- Components
- Labels
- Acceptance Criteria
- Linked Issues
- Test Scenarios
- Test Cases
- Test Data
- Automation Status
- Execution Results
- Defects
- Confluence Knowledge Page

Example relationship:

CFH-101
User Story
   |
   +--> AC-101-01
   +--> AC-101-02
   |
   +--> TS-101
   |
   +--> TC-101-01
   +--> TC-101-02
   |
   +--> TD-001
   |
   +--> BDD-001
   |
   +--> Automation Result
   |
   +--> Confluence Page
   |
   +--> RAG Knowledge Document

Make these relationships visually understandable.

==================================================
JIRA TEST CASE UI
==================================================

Create Test Case management page.

Display:

- Test Case ID
- Title
- Scenario
- Priority
- Type
- Test Data
- Automation Status
- AI Classification
- Last Execution
- Result

AI Classification values:

DETERMINISTIC_AUTOMATION
AI_ASSISTED_AUTOMATION
AI_AGENT_CANDIDATE
MANUAL
BACKEND_DEPENDENCY
UI_GAP
FUTURE

Reuse the classification strategy from STEP 1.15.

Add filters.

==================================================
JIRA DEFECT UI
==================================================

Create defect page.

Display:

- Defect ID
- Summary
- Severity
- Priority
- Status
- Environment
- Linked Test Case
- Linked User Story
- Failure Artifact
- Root Cause
- AI Failure Analysis Status
- Evidence

AI Failure Analysis Status examples:

NOT_ANALYZED
ANALYSIS_READY
AI_ANALYZED
HUMAN_REVIEW_REQUIRED
CONFIRMED

Do not implement actual AI analysis yet.

Clearly label it as future/placeholder state where applicable.

==================================================
JIRA BOARD
==================================================

Create a simple Kanban/Scrum-style board.

Columns:

BACKLOG
SELECTED
IN_PROGRESS
IN_REVIEW
DONE

Allow basic local UI interaction if consistent with existing architecture.

Do not build a complex drag-and-drop system unless it is easy and stable.

==================================================
CONFLUENCE UI
==================================================

Create a Confluence-style knowledge management area.

Suggested routes:

/confluence
/confluence/spaces
/confluence/pages
/confluence/pages/:pageId
/confluence/search

At minimum implement:

1. Confluence Home
2. Spaces
3. Page list
4. Page detail
5. Search

==================================================
CONFLUENCE HOME
==================================================

Display:

- QA Knowledge
- Product Documentation
- Requirements
- Test Strategy
- Test Data
- Automation
- AI QA
- RAG
- MCP
- Agents
- Release Knowledge
- Interview Knowledge

Use cards/navigation.

==================================================
CONFLUENCE SPACES
==================================================

Create synthetic spaces:

CFH-PRODUCT
CFH-QA
CFH-AI
CFH-AUTOMATION
CFH-RELEASE

Display:

- Space Key
- Space Name
- Description
- Page Count
- Last Updated

==================================================
CONFLUENCE PAGE LIST
==================================================

Display:

- Page ID
- Title
- Space
- Labels
- Version
- Author
- Last Updated
- Source System

Allow search and filtering.

==================================================
CONFLUENCE PAGE DETAIL
==================================================

Create realistic knowledge page.

Display:

- Page title
- Breadcrumb
- Space
- Version
- Labels
- Author
- Last Updated
- Content
- Related Jira Issues
- Related Test Cases
- Related Test Data
- Traceability IDs
- Knowledge metadata

Include a metadata panel:

documentId
sourceSystem
sourceId
traceabilityIds
labels
version
timestamp
accessScope
sensitivity
checksum

These fields must align with the existing STEP 4 knowledge export contract.

==================================================
JIRA ↔ CONFLUENCE UI
==================================================

Implement visible relationships.

Example:

Jira Story:
CFH-101

Linked Knowledge:

CFH-QA / Patient Registration Test Strategy

Clicking the link should navigate to the local Confluence page.

Confluence page should show:

Linked Jira:
CFH-101

This demonstrates bidirectional traceability.

==================================================
TRACEABILITY UI
==================================================

Create a dedicated traceability view.

Suggested route:

/traceability

Display:

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
Jira Issue
 ↓
Confluence Knowledge
 ↓
Test Scenario
 ↓
Test Case
 ↓
Test Data
 ↓
BDD Scenario
 ↓
Automation
 ↓
Execution Result
 ↓
Defect
 ↓
RAG Knowledge
 ↓
Future MCP Tool
 ↓
Future AI Agent

Make the chain visually clear.

Allow users to select an entity and see related entities.

==================================================
AI-READY UI
==================================================

The UI must prepare for future AI functionality.

Do NOT implement actual AI yet.

Add clearly labelled sections such as:

AI Automation Classification
AI Analysis Status
RAG Knowledge Status
Agent Candidate
Evaluation Status
Observability Status

Example:

RAG Status:
READY_FOR_INGESTION

MCP Status:
TOOL_BOUNDARY_DEFINED

Agent Status:
AGENT_CANDIDATE

Evaluation Status:
EVALUATION_DATASET_READY

Observability:
TELEMETRY_READY

These must reflect actual project contracts/statuses.

Do not falsely claim runtime AI functionality.

==================================================
RAG KNOWLEDGE VIEW
==================================================

Create a lightweight RAG knowledge explorer UI.

Suggested route:

/knowledge

Display:

- Document ID
- Source
- Title
- Chunk readiness
- Metadata completeness
- Access Scope
- Sensitivity
- Traceability IDs
- Ingestion Status

Possible statuses:

READY
PENDING
EXCLUDED
FAILED

No embeddings or vector search yet.

This is only a visualization of RAG-ready knowledge.

==================================================
ROLE-BASED ACCESS
==================================================

Reuse existing CareFlow role model.

At minimum support:

ADMIN
QA_MANAGER
QA_ENGINEER
DOCTOR
NURSE
PATIENT

Jira/Confluence access should be role-aware.

Example:

ADMIN:
full access

QA_MANAGER:
Jira + Confluence + traceability + QA dashboards

QA_ENGINEER:
Jira + test cases + defects + Confluence QA knowledge

DOCTOR:
limited knowledge access

NURSE:
limited operational knowledge access

PATIENT:
no Jira access
limited public/help knowledge

Do not implement backend authorization.

This is UI simulation only.

==================================================
DESIGN
==================================================

Follow existing CareFlow design system.

Do NOT introduce an unrelated visual theme.

Use:

- existing typography
- existing spacing
- existing cards
- existing tables
- existing buttons
- existing status badges
- existing layout
- existing responsive rules

Create reusable components where necessary:

JiraSidebar
JiraIssueTable
JiraIssueDetail
JiraBoard
JiraStatusBadge
ConfluenceSidebar
ConfluencePageTree
ConfluencePage
KnowledgeMetadataPanel
TraceabilityGraph
AIStatusBadge

Only create components that are actually useful.

==================================================
TESTABILITY
==================================================

Every important interactive element must have stable selectors.

Use:

data-testid

Examples:

jira-dashboard
jira-issue-list
jira-issue-row-CFH-101
jira-filter-status
jira-search
jira-issue-detail
confluence-home
confluence-space-CFH-QA
confluence-page
confluence-search
traceability-view
knowledge-explorer
ai-status-panel

Do NOT use dynamic CSS selectors as primary automation selectors.

==================================================
RESPONSIVE
==================================================

Support:

Desktop
Tablet
Mobile

At minimum verify:

1280x720
1024x768
768x1024
390x844

Do not over-engineer.

==================================================
ACCESSIBILITY
==================================================

Ensure:

- semantic headings
- accessible buttons
- labels
- keyboard navigation
- visible focus
- meaningful link names
- sufficient structure for screen readers
- tables with proper headers

==================================================
AUTOMATION
==================================================

IMPORTANT:

Do NOT run the entire regression suite.

Do NOT automate all 96 test cases.

Automate only a small number of high-value scenarios.

Target approximately 5–8 scenarios.

Suggested scenarios:

1. QA Manager can access Jira dashboard
2. QA Engineer can search Jira issues
3. User can open Jira issue and view traceability
4. User can navigate from Jira issue to Confluence page
5. User can search Confluence knowledge
6. User can open Confluence page and view metadata
7. User can open traceability chain
8. Patient cannot access Jira

Use existing Playwright + Cucumber architecture.

Reuse existing:

POM
World
Hooks
Steps
Configuration
Reporting

Do not create a second automation framework.

Do NOT run the full regression suite after implementation.

Run only:

- frontend lint
- frontend build
- automation typecheck
- targeted Step 4.1 scenarios

If the frontend development server is required, start it using the existing project mechanism.

==================================================
AI INDUSTRY CONCEPTS
==================================================

Because this project is explicitly an AI QA engineering project, Step 4.1 documentation MUST include the following concepts.

Do not claim runtime implementation unless actually implemented.

Document their current status:

RAG
RAGAS
RAG evaluation
Retrieval evaluation
Groundedness
Faithfulness
Context precision
Context recall
Answer relevance
AI observability
MCP
MCP tools
Tool calling
Agentic AI
LangGraph
Multi-agent systems
Agent evaluation
Human-in-the-loop
Guardrails
Prompt injection protection
AI security
LLMOps
AI quality gates
AI failure analysis
AI defect management
Evaluation datasets
Evaluation runs
Model versioning
Prompt versioning
Experiment tracking
AI-assisted test generation
AI-assisted test prioritization
AI-assisted regression selection
AI-assisted failure triage
AI-assisted defect clustering
AI-assisted test-data generation
AI governance
Auditability
Explainability
Evidence-based AI decisions
Confidence scoring
No-fabrication policies

For each, explain:

- relevance to this UI
- current status
- future implementation step
- interview explanation

==================================================
JIRA + CONFLUENCE TRACEABILITY
==================================================

Update:

knowledge/requirements-traceability.md

Preserve all existing traceability.

Add:

User Story
   -> Jira Issue
   -> Confluence Page
   -> Test Scenario
   -> Test Case
   -> Test Data
   -> BDD
   -> Automation
   -> Execution
   -> Defect
   -> RAG Knowledge
   -> MCP Tool
   -> AI Agent

==================================================
DOCUMENTATION
==================================================

Create:

docs/implementations/4.1-jira-confluence-ui/

Files:

prompt.md
README.md
interview-notes.md
response.md

Do NOT create a PDF unless the existing project documentation convention requires it.

README must contain:

- objective
- architecture
- implemented UI
- routes
- Jira UI
- Confluence UI
- traceability UI
- RAG readiness
- MCP readiness
- Agent readiness
- role-based access
- testability
- automation
- validation
- limitations
- AI industry concepts
- interview explanation

INTERVIEW NOTES must explain how to answer:

"How did you integrate Jira and Confluence into your AI QA platform?"

"Did you use real Jira and Confluence?"

"How does Jira data become RAG knowledge?"

"How do you maintain traceability?"

"How would an AI agent use Jira?"

"How would an MCP server expose Jira tools?"

"How would you prevent an agent from modifying Jira without approval?"

==================================================
ROOT DOCUMENTATION
==================================================

Update:

README.md
CHANGELOG.md
docs/IMPLEMENTATION_INDEX.md
docs/INTERVIEW_GUIDE.md
docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md
knowledge/requirements-traceability.md

IMPORTANT:

Update docs/IMPLEMENTATION_INDEX.md according to the project's new numbering convention.

Do NOT incorrectly create another unrelated 1.x step.

This is STEP 4.1 because it is directly related to STEP 4.

If roadmap documentation says Step 4 is complete and Step 5 is next, update the roadmap/index clearly to show:

STEP 4
Jira + Confluence Enterprise QA Foundation
PASS

STEP 4.1
Jira + Confluence UI Simulation
CURRENT/PASS

STEP 5
RAG Knowledge System Runtime
NEXT

==================================================
IMPLEMENTATION DISCIPLINE
==================================================

Before coding:

Inspect existing implementation.

During coding:

Reuse existing contracts.

After coding:

Run validation.

Do not fabricate results.

Do not claim anything passed unless actually executed.

If a test cannot run, mark it BLOCKED and explain why.

Do not modify unrelated functionality.

Do not remove existing tests.

Do not remove existing AI architecture.

Do not remove existing traceability.

Do not remove existing Jira/Confluence mock foundation.

==================================================
GIT
==================================================

After successful implementation:

1. git status
2. git diff
3. run required validations
4. commit changes

Commit message:

feat(step-4.1): implement jira confluence ui simulation

Push to origin/main only if repository workflow allows it.

Verify remote HEAD after push.

If push requires elevated permissions or network approval, report that clearly.

==================================================
FINAL RESPONSE
==================================================

Return a detailed implementation report containing:

## Status

Implementation Status: PASS / PARTIAL / BLOCKED

## Objective

## Architecture

## Jira UI

## Confluence UI

## Traceability UI

## RAG Readiness

## MCP Readiness

## Agent Readiness

## Role-Based Access

## AI Industry Concepts

For every AI concept clearly state:

IMPLEMENTED / FOUNDATION / PLANNED / BLOCKED

## Automation

List exact scenarios automated.

## Validation

List exact commands and actual results.

Do NOT claim full regression was executed.

## Files Created

## Files Modified

## Traceability

## Documentation

## Git

Include:

branch
commit
commit message
push status
remote verification
working tree status

## Known Issues

## Next Recommended Step

After Step 4.1, the next major phase is:

STEP 5 — RAG KNOWLEDGE SYSTEM RUNTIME

STOP AFTER STEP 4.1.

Do not automatically implement Step 5.