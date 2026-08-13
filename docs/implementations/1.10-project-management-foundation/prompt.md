# CAREFLOW HEALTH — CODEX MASTER IMPLEMENTATION PROMPT
# STEP 1.10 — PROJECT MANAGEMENT & DELIVERY FOUNDATION
# Execute ONLY this step. Do not proceed automatically to Step 1.11.

You are acting as a Senior QA Automation Architect, AI QA Engineer, Product Engineer, DevOps Engineer, and Technical Documentation Engineer.

You are working inside the existing Git repository:

HealthCare-AI-QA

Project:
CareFlow Health — Healthcare AI QA Engineering Platform

============================================================
1. PROJECT CONTEXT
============================================================

This project is being built from scratch as an enterprise-style healthcare QA + AI engineering portfolio project.

The system contains TWO major areas:

A. CareFlow Health
   A production-like FRONTEND-ONLY healthcare application.

B. Healthcare AI QA Engineering Platform
   The QA automation + AI engineering ecosystem around CareFlow Health.

Important architectural constraints:

- CareFlow Health frontend only.
- NO backend.
- NO real database.
- NO real healthcare integrations.
- NO API implementation.
- NO API automation.
- NO real PHI.
- NO clinical decision support.
- NO medical recommendations.
- Use synthetic healthcare data only.
- The frontend will eventually be automated using:
  Playwright + TypeScript + Cucumber BDD.
- AI engineering capabilities will eventually include:
  RAG
  RAG evaluation / RAGAS
  AI observability
  MCP
  LangGraph
  Agentic AI
  Multi-agent orchestration
  AI guardrails
  AI security
  AI evaluation
  AI quality gates
  Human-in-the-loop workflows.

Existing approved project hierarchy:

BRD
  ->
PRD
  ->
Epics
  ->
User Stories
  ->
Acceptance Criteria
  ->
Test Scenarios
  ->
Test Cases
  ->
Test Data

Completed steps:

STEP 0.1 Environment Discovery
STEP 0.2 Repository Foundation
STEP 0.3 Engineering Standards & Architecture Contract
STEP 1.1 Product Vision & Requirements Strategy
STEP 1.2 BRD
STEP 1.3 PRD
STEP 1.4 Epic Definition
STEP 1.5 User Story Definition
STEP 1.6 Acceptance Criteria
STEP 1.7 Test Scenario Definition
STEP 1.8 Test Case Definition
STEP 1.9 Test Data & Test Management Strategy

The next implementation is:

STEP 1.10 — Project Management & Delivery Foundation

============================================================
2. IMPORTANT — READ EXISTING PROJECT DOCUMENTATION FIRST
============================================================

Before modifying anything, inspect and understand:

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

docs/architecture/APPLICATION_MODULES.md

docs/architecture/REQUIREMENTS_STRATEGY.md

knowledge/brd/CAREFLOW_HEALTH_BRD.md

knowledge/prd/CAREFLOW_HEALTH_PRD.md

knowledge/epics/CAREFLOW_HEALTH_EPICS.md

knowledge/user-stories/CAREFLOW_HEALTH_USER_STORIES.md

knowledge/acceptance-criteria/CAREFLOW_HEALTH_ACCEPTANCE_CRITERIA.md

knowledge/test-scenarios/CAREFLOW_HEALTH_TEST_SCENARIOS.md

knowledge/test-cases/CAREFLOW_HEALTH_TEST_CASES.md

knowledge/test-data/CAREFLOW_HEALTH_TEST_DATA_STRATEGY.md

knowledge/test-data/CAREFLOW_HEALTH_TEST_DATA_CATALOG.md

docs/qa/TEST_MANAGEMENT_STRATEGY.md

docs/qa/JIRA_TEST_MANAGEMENT_STRATEGY.md

docs/qa/CONFLUENCE_KNOWLEDGE_STRATEGY.md

docs/qa/JENKINS_QA_PIPELINE_STRATEGY.md

docs/qa/TEST_DATA_LIFECYCLE.md

docs/qa/TEST_DATA_TRACEABILITY.md

Also inspect:

docs/implementations/

to understand the documentation conventions used by previous steps.

Do NOT replace or rewrite existing approved documentation unnecessarily.

Preserve previous traceability and architecture decisions.

============================================================
3. STEP 1.10 OBJECTIVE
============================================================

Create the enterprise-style project management and delivery foundation for CareFlow Health.

The project must now have a clearly defined implementation model for:

1. Jira-like project management
2. Confluence-like documentation management
3. Jenkins-like CI/CD management

These should be designed specifically for our CareFlow Health project.

The goal is NOT to install Jira, Confluence, or Jenkins.

The goal is to establish our own project-specific management layer and implementation contracts so that later steps can build demonstrable project tooling around them.

Because this project is being developed on an office laptop with potentially restricted administrator access:

- Do NOT require Docker.
- Do NOT require global installations.
- Do NOT install system-level applications.
- Do NOT modify system configuration.
- Prefer repository-local implementations.
- Keep the architecture portable.

============================================================
4. JIRA-LIKE PROJECT MANAGEMENT MODEL
============================================================

Create a complete Jira-like project management model for CareFlow Health.

Project:

Name:
CareFlow Health

Project Key:
CFH

Project Type:
Software / QA / AI Engineering

Define:

A. Issue Types

At minimum:

- Epic
- Story
- Task
- Sub-task
- Bug
- Test
- Test Execution
- Improvement
- AI Evaluation
- AI Defect
- AI Experiment

B. Issue Hierarchy

Define clearly:

Epic
  ->
Story
  ->
Task/Sub-task

And QA relationships:

Story
  ->
Acceptance Criteria
  ->
Test Scenario
  ->
Test Case
  ->
Test Data
  ->
Test Execution
  ->
Defect

AI relationships:

Requirement
  ->
AI Use Case
  ->
AI Component
  ->
Evaluation Dataset
  ->
Evaluation Run
  ->
AI Defect
  ->
Remediation

C. Workflow

Define realistic statuses:

BACKLOG
READY
IN PROGRESS
CODE REVIEW
READY FOR QA
QA IN PROGRESS
BLOCKED
FAILED
RETEST
DONE
CLOSED

Define valid transitions.

D. Priorities

P0 — Critical
P1 — High
P2 — Medium
P3 — Low

E. Components

Create components relevant to the project:

- Frontend
- UX
- Accessibility
- Playwright
- Cucumber
- Test Data
- Test Management
- RAG
- RAG Evaluation
- AI Observability
- MCP
- Agent
- Multi-Agent
- AI Security
- AI Guardrails
- Jenkins
- Reporting
- Documentation

F. Labels

Define consistent labels such as:

frontend
healthcare
qa
automation
playwright
cucumber
bdd
regression
smoke
accessibility
responsive
rag
ragas
observability
mcp
agent
agentic-ai
multi-agent
langgraph
ai-security
guardrails
llmops
jenkins
release
defect

G. Sprint Model

Define:

- Sprint duration
- Sprint naming convention
- Sprint goal
- Sprint planning
- Daily tracking
- Review
- Retrospective
- Carry-over handling

Use a realistic 2-week sprint model unless existing project documentation specifies otherwise.

H. Release Model

Define release naming such as:

CFH Release 1.0
CFH Release 1.1
CFH AI-QA Release 1.0

Include:

- Release objective
- Scope
- Entry criteria
- Exit criteria
- QA sign-off
- Automation status
- AI evaluation status
- Known defects
- Release notes

============================================================
5. JIRA-LIKE TRACEABILITY
============================================================

Create a project management traceability model.

The traceability must support:

BRD
 ->
PRD
 ->
Epic
 ->
Story
 ->
Acceptance Criteria
 ->
Test Scenario
 ->
Test Case
 ->
Test Data
 ->
Test Execution
 ->
Defect

Also define:

Story
 ->
Automation Test
 ->
Execution Result
 ->
Failure Analysis
 ->
Defect

And AI:

Requirement
 ->
AI Use Case
 ->
Agent/Workflow
 ->
Tool/MCP
 ->
Evaluation Dataset
 ->
Evaluation
 ->
AI Quality Result

Define how stable IDs will be used.

Do NOT invent conflicting IDs for existing requirements.

============================================================
6. JIRA-LIKE DASHBOARD DESIGN
============================================================

Define a realistic enterprise QA dashboard.

Include dashboard widgets/metrics for:

Product:

- Open Stories
- Completed Stories
- Sprint Progress
- Release Progress

QA:

- Total Test Cases
- Executed
- Passed
- Failed
- Blocked
- Pass Percentage
- Automation Coverage
- Regression Status
- Smoke Status

Defects:

- Open Defects
- Critical Defects
- High Defects
- Reopened Defects
- Defect Aging
- Defect Leakage

Automation:

- Total Automated Tests
- Automation Pass Rate
- Automation Failure Rate
- Flaky Tests
- Execution Duration
- Browser-wise results

AI:

- AI Use Cases
- RAG Evaluation Score
- RAGAS Metrics
- Retrieval Quality
- Faithfulness
- Answer Relevancy
- Context Precision
- Context Recall
- Agent Success Rate
- Tool Success Rate
- Agent Failure Rate
- AI Defect Count
- Guardrail Violations
- Prompt Injection Attempts
- Human Escalations
- AI Observability Alerts

CI/CD:

- Build Success Rate
- Failed Builds
- Average Pipeline Duration
- Latest Build
- Latest Regression
- Latest AI QA Evaluation

Clearly distinguish:

CURRENTLY IMPLEMENTED

from:

PLANNED FUTURE METRICS

Do not pretend future metrics already have runtime data.

============================================================
7. CONFLUENCE-LIKE KNOWLEDGE MANAGEMENT
============================================================

Create a realistic Confluence-style documentation architecture.

Define the following logical spaces/pages:

SPACE: CFH — Product

Pages:

- Product Vision
- Product Scope
- User Roles
- Application Modules
- User Journeys
- Release Roadmap

SPACE: CFH — Requirements

Pages:

- BRD
- PRD
- Epics
- User Stories
- Acceptance Criteria
- Requirements Traceability

SPACE: CFH — QA

Pages:

- QA Strategy
- Test Scenarios
- Test Cases
- Test Data
- Test Management
- Defect Management
- Regression Strategy
- Accessibility Strategy
- Cross Browser Strategy

SPACE: CFH — Automation

Pages:

- Playwright Architecture
- Cucumber BDD
- Page Object Model
- Test Data Management
- Reporting
- CI/CD
- Flaky Test Management

SPACE: CFH — AI

Pages:

- AI Engineering Architecture
- RAG Architecture
- RAG Evaluation
- RAGAS
- AI Observability
- MCP Architecture
- Agent Architecture
- LangGraph
- Multi-Agent Architecture
- Agent Evaluation
- Guardrails
- AI Security
- Human-in-the-loop

SPACE: CFH — DevOps

Pages:

- Jenkins Architecture
- Pipeline
- Build Strategy
- Test Execution
- Reporting
- Quality Gates
- Release Process

SPACE: CFH — Interview

Pages:

- Project Overview
- Architecture Explanation
- QA Interview Questions
- Playwright Questions
- RAG Questions
- MCP Questions
- Agentic AI Questions
- AI Evaluation Questions
- AI Observability Questions
- CI/CD Questions

Define:

- Page hierarchy
- Ownership
- Versioning
- Review process
- Naming conventions
- Traceability rules
- Search metadata
- Knowledge lifecycle

============================================================
8. JENKINS-LIKE CI/CD FOUNDATION
============================================================

Create the conceptual Jenkins pipeline architecture for the project.

Pipeline:

Checkout
 ->
Environment Validation
 ->
Install Dependencies
 ->
Lint
 ->
Build Frontend
 ->
Start Frontend
 ->
Smoke Tests
 ->
Functional Tests
 ->
Regression Tests
 ->
Accessibility Tests
 ->
Cross Browser Tests
 ->
Generate Reports
 ->
AI QA Analysis
 ->
RAG Evaluation
 ->
Agent Evaluation
 ->
Quality Gates
 ->
Publish Reports
 ->
Archive Artifacts

IMPORTANT:

At Step 1.10 this is an architecture/configuration foundation.

Do NOT implement the complete runtime pipeline yet unless required by existing project architecture.

Do NOT install Jenkins globally.

Do NOT require Docker.

Clearly mark each stage as:

IMPLEMENTED NOW

or

PLANNED FUTURE.

============================================================
9. AI INDUSTRY CONCEPTS — MANDATORY
============================================================

Review the project's AI Industry Concepts/master AI engineering documentation.

For Step 1.10, explicitly analyze how the following concepts fit into project management and delivery:

1. RAG
2. RAGAS
3. RAG Evaluation
4. AI Observability
5. MCP
6. Tool Calling
7. LangGraph
8. Agentic AI
9. Multi-Agent Systems
10. Agent Evaluation
11. Human-in-the-loop
12. Guardrails
13. Prompt Injection Protection
14. AI Security
15. LLMOps
16. AI Quality Gates
17. AI Failure Analysis
18. AI Defect Management
19. Evaluation Datasets
20. Evaluation Runs
21. Model/Prompt Versioning
22. AI Experiment Tracking

For each concept:

- Explain its relevance to Step 1.10.
- Define what is implemented now.
- Define what is planned later.
- Define how it will appear in Jira-like management.
- Define how it will be documented in Confluence-like knowledge management.
- Define how Jenkins-like CI/CD will eventually execute or validate it.
- Add interview explanation.

DO NOT implement unrelated AI runtime functionality in this step.

============================================================
10. AI QUALITY GATES
============================================================

Define future quality gates such as:

Functional QA Gate
- Smoke pass rate
- Regression pass rate
- Critical defects

Automation Gate
- Automation pass rate
- Flaky test threshold

RAG Gate
- Retrieval quality
- Faithfulness
- Context precision
- Context recall
- Answer relevancy

Agent Gate
- Task success rate
- Tool-call success rate
- Failure rate
- Escalation rate

Security Gate
- Prompt injection detection
- Sensitive data leakage detection
- Unauthorized tool usage
- Guardrail violations

Observability Gate
- Error rate
- Latency
- Token usage
- Cost
- Trace completeness

Clearly define these as future quality gates unless runtime implementation already exists.

============================================================
11. DEFECT MANAGEMENT
============================================================

Define enterprise-style defect management.

Bug fields:

- Bug ID
- Summary
- Description
- Environment
- Browser
- Build
- Severity
- Priority
- Component
- Steps to reproduce
- Expected result
- Actual result
- Evidence
- Test Case ID
- Requirement ID
- Root Cause
- Fix Version
- Regression Impact
- Status

AI Defect fields:

- AI Defect ID
- AI Component
- Prompt Version
- Model
- Retrieval Configuration
- Evaluation Dataset
- Evaluation Run
- Expected Behavior
- Actual Behavior
- Failure Category
- RAG/Agent/MCP classification
- Guardrail status
- Severity
- Reproducibility
- Root Cause
- Remediation
- Evaluation Before Fix
- Evaluation After Fix

============================================================
12. PROJECT MANAGEMENT ARTIFACTS
============================================================

Create appropriate documentation under:

docs/qa/

At minimum create:

docs/qa/PROJECT_MANAGEMENT_FOUNDATION.md

docs/qa/JIRA_PROJECT_MODEL.md

docs/qa/JIRA_DASHBOARD_SPECIFICATION.md

docs/qa/JIRA_WORKFLOW_AND_GOVERNANCE.md

docs/qa/CONFLUENCE_INFORMATION_ARCHITECTURE.md

docs/qa/CONFLUENCE_GOVERNANCE.md

docs/qa/JENKINS_PIPELINE_ARCHITECTURE.md

docs/qa/AI_QUALITY_GATES.md

docs/qa/AI_DEFECT_MANAGEMENT.md

docs/qa/AI_PROJECT_DELIVERY_MODEL.md

Update existing Jira/Confluence/Jenkins strategy documents rather than creating conflicting duplicates if appropriate.

============================================================
13. PROJECT METADATA / CONFIGURATION
============================================================

If appropriate, create a repository-local configuration representing the project management model.

Example:

config/project-management/

or another architecture-approved location.

It may contain:

- project metadata
- issue types
- workflows
- priorities
- components
- labels
- sprint configuration
- dashboard configuration
- release configuration
- AI quality gate definitions

Use JSON/YAML/Markdown only where appropriate.

Do not introduce unnecessary dependencies.

============================================================
14. NO REAL JIRA / CONFLUENCE / JENKINS INSTALLATION
============================================================

Do NOT:

- Install Jira.
- Install Confluence.
- Install Jenkins globally.
- Install Docker.
- Modify Windows system configuration.
- Require admin privileges.
- Connect to external enterprise systems.
- Require external credentials.

We are building a repository-local enterprise simulation/project management foundation.

Actual project-specific UI/tooling can be implemented in later approved steps.

============================================================
15. FRONTEND BOUNDARY
============================================================

DO NOT build the CareFlow frontend in Step 1.10.

Do not create:

- React application
- API
- backend
- database
- API automation

The frontend implementation will happen in its designated future step.

============================================================
16. AUTOMATION BOUNDARY
============================================================

Do NOT implement the complete Playwright/Cucumber framework in Step 1.10.

Only define how the future automation framework will connect with:

- Jira-like test management
- Jenkins-like execution
- reporting
- traceability
- AI analysis

Actual implementation comes later.

============================================================
17. RAG/MCP/AGENT BOUNDARY
============================================================

Do NOT implement the production RAG pipeline in Step 1.10.

Do NOT implement MCP servers in Step 1.10.

Do NOT implement LangGraph agents in Step 1.10.

Instead establish:

- integration contracts
- metadata expectations
- evaluation concepts
- CI/CD integration points
- observability requirements
- quality gates
- project-management entities

These will be implemented in later AI-specific steps.

============================================================
18. DOCUMENTATION FOR THIS STEP
============================================================

Create:

docs/implementations/1.10-project-management-foundation/

Inside it create:

prompt.md
README.md
implementation-report.pdf
interview-notes.md
response.md

IMPORTANT:

prompt.md must contain the complete prompt used for this implementation.

README.md must explain:

- Objective
- Problem
- Architecture
- What was implemented
- What was not implemented
- Jira model
- Confluence model
- Jenkins model
- AI industry concepts
- Quality gates
- Traceability
- Interview explanation

implementation-report.pdf must contain a professional implementation report.

interview-notes.md must contain:

- What did we build?
- Why did we build it?
- Why Jira-like project management?
- Why Confluence-like documentation?
- Why Jenkins?
- How does CI/CD fit QA?
- How does AI fit CI/CD?
- What is RAG evaluation?
- What is RAGAS?
- What is AI observability?
- What is MCP?
- What is Agentic AI?
- What is a multi-agent architecture?
- What are AI quality gates?
- What are AI defects?
- What would you explain to an interviewer?

Include practical CareFlow Health examples.

response.md must contain the complete implementation response generated after the implementation.

============================================================
19. UPDATE MASTER DOCUMENTATION
============================================================

Update:

README.md

CHANGELOG.md

docs/INTERVIEW_GUIDE.md

knowledge/requirements-traceability.md

docs/IMPLEMENTATION_INDEX.md

IMPORTANT:

docs/IMPLEMENTATION_INDEX.md MUST be updated every implementation step.

It must explicitly show:

A. COMPLETED STEPS

0.1
0.2
0.3
1.1
1.2
1.3
1.4
1.5
1.6
1.7
1.8
1.9
1.10

B. CURRENT STEP

1.10

C. REMAINING / PLANNED STEPS

List all remaining steps through STEP 11.6 according to the project's approved roadmap.

Do NOT remove existing completed steps.

Do NOT mark future steps as completed.

If the exact approved roadmap is already present in IMPLEMENTATION_INDEX.md, preserve it.

If additional AI industry concepts require roadmap clarification, update the roadmap carefully without changing completed-step history.

============================================================
20. TRACEABILITY
============================================================

Extend traceability where appropriate:

BRD
 ->
PRD
 ->
Epic
 ->
User Story
 ->
Acceptance Criteria
 ->
Test Scenario
 ->
Test Case
 ->
Test Data
 ->
Test Management
 ->
Test Execution
 ->
Defect

AI:

Requirement
 ->
AI Use Case
 ->
AI Component
 ->
Tool/MCP
 ->
Evaluation Dataset
 ->
Evaluation Run
 ->
AI Quality Gate
 ->
AI Defect
 ->
Remediation

Do not break existing mappings.

============================================================
21. VALIDATION
============================================================

Before finishing, validate:

[ ] Existing project documentation reviewed
[ ] Existing architecture preserved
[ ] Jira project model exists
[ ] Jira issue types defined
[ ] Jira workflow defined
[ ] Jira priorities defined
[ ] Jira components defined
[ ] Jira labels defined
[ ] Sprint model defined
[ ] Release model defined
[ ] Jira dashboard specification exists
[ ] Confluence information architecture exists
[ ] Confluence governance exists
[ ] Jenkins architecture exists
[ ] CI/CD stages defined
[ ] AI quality gates defined
[ ] AI defect model defined
[ ] AI industry concepts documented
[ ] RAG relevance documented
[ ] RAGAS relevance documented
[ ] AI observability relevance documented
[ ] MCP relevance documented
[ ] Agentic AI relevance documented
[ ] Multi-agent relevance documented
[ ] LangGraph relevance documented
[ ] Guardrails documented
[ ] AI security documented
[ ] Human-in-the-loop documented
[ ] LLMOps documented
[ ] AI evaluation documented
[ ] Interview notes created
[ ] PDF created
[ ] prompt.md created
[ ] README.md created
[ ] response.md created
[ ] requirements traceability preserved
[ ] IMPLEMENTATION_INDEX.md updated
[ ] Completed steps clearly marked
[ ] Remaining steps clearly marked
[ ] No frontend created
[ ] No backend created
[ ] No API created
[ ] No API automation created
[ ] No real PHI
[ ] No secrets
[ ] No unnecessary dependencies
[ ] Git working tree clean

============================================================
22. GIT REQUIREMENTS
============================================================

At the end:

1. Check git status.
2. Review all changes.
3. Commit all Step 1.10 changes.

Commit message:

docs(step-1.10): establish project management and delivery foundation

4. Push to origin/main.

5. Verify remote main matches local HEAD.

6. Confirm working tree is clean.

If network restrictions prevent push:

- Do not falsely claim success.
- Report the exact limitation.
- Provide the exact command that can be run with approved network access.

============================================================
23. FINAL RESPONSE FORMAT
============================================================

After implementation, provide a complete response with:

# Step 1.10 Response

## Status

Implementation Status: PASS / PARTIAL / BLOCKED

## Objective

## Implementation Summary

## Jira Project Model

## Jira Dashboard

## Confluence Architecture

## Jenkins Architecture

## AI Industry Concepts

## AI Quality Gates

## AI Defect Management

## Traceability

## Files Created

## Files Modified

## Validation

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

## AI Interview Preparation

Explain in simple but technically accurate terms:

1. Why did we create a Jira-like model?
2. Why do QA teams need traceability?
3. Why Confluence-like knowledge management?
4. Why Jenkins?
5. How does CI/CD support automation?
6. How does AI fit into QA CI/CD?
7. What is RAGAS?
8. What is RAG observability?
9. What is MCP?
10. What is Agentic AI?
11. What is LangGraph?
12. What is multi-agent architecture?
13. What are AI quality gates?
14. What is an AI defect?
15. How would this architecture scale in an enterprise?

Use CareFlow Health examples for the answers.

## Next Recommended Step

STEP 1.11

STOP after completing Step 1.10.

Do NOT automatically execute Step 1.11.

============================================================
24. IMPORTANT EXECUTION RULE
============================================================

This is a STEP-BY-STEP project.

Do NOT skip steps.

Do NOT automatically proceed to the next step.

Do NOT implement future functionality merely because it is mentioned.

Do NOT claim a future component is implemented.

Clearly distinguish:

IMPLEMENTED

PLANNED

DOCUMENTED

NOT YET IMPLEMENTED

The goal is to build a real, credible, enterprise-style healthcare QA + AI engineering project incrementally and maintain a complete interview-ready engineering history.

START STEP 1.10 NOW.