# ============================================================
# STEP 0.3 â€” ENGINEERING STANDARDS & ARCHITECTURE CONTRACT
# ============================================================

You are continuing the Healthcare AI QA Engineering Platform.

Completed steps:

STEP 0.1 â€” Environment Discovery â€” PASS
STEP 0.1 Documentation Correction â€” COMPLETE
STEP 0.2 â€” Repository Foundation â€” PASS

Current GitHub repository:

https://github.com/Satishnjr/healthcare-ai-qa-engineering.git

Current branch:

main

The repository foundation has already been committed and
pushed successfully.

Now implement ONLY:

STEP 0.3 â€” Engineering Standards & Architecture Contract


============================================================
1. OBJECTIVE
============================================================

Establish the engineering standards, architecture principles,
coding conventions, security rules, testing standards,
documentation standards, Git standards and AI development
rules that will govern the entire project.

This step is a DESIGN/STANDARDS step.

DO NOT build application functionality.

DO NOT create the healthcare UI.

DO NOT create BRD/PRD content yet.

DO NOT install application dependencies.

DO NOT create Playwright tests.

DO NOT create Cucumber features.

DO NOT implement RAG.

DO NOT implement MCP.

DO NOT implement LangGraph.

DO NOT implement Jira.

DO NOT implement Confluence.

DO NOT implement Jenkins.

The purpose of this step is to establish the contract that
future implementation steps must follow.


============================================================
2. PROJECT PRINCIPLES
============================================================

Document these core principles:

1. Frontend-only healthcare application
2. No backend
3. No REST API
4. No GraphQL
5. No API automation
6. UI automation only
7. Synthetic healthcare data only
8. No real PHI
9. Production-like UI and engineering practices
10. Modular architecture
11. Separation of concerns
12. Reusability
13. Maintainability
14. Testability
15. Security by design
16. Accessibility awareness
17. Observability where applicable
18. Documentation as part of implementation
19. Git-based version control
20. Step-by-step implementation
21. Every implementation must be reproducible
22. No fabricated test results
23. No fabricated implementation evidence


============================================================
3. TARGET TECHNOLOGY STACK
============================================================

Document the planned technology stack.

FRONTEND:

- React
- TypeScript
- Vite
- React Router

STATE MANAGEMENT:

Start with React state where sufficient.

Use Zustand only when shared application state genuinely
requires it.

Do not introduce Redux unless a future requirement justifies it.

UI:

Use a reusable component architecture.

The exact UI component library can be selected during the
frontend implementation phase.

AUTOMATION:

- Playwright
- TypeScript
- Cucumber BDD
- Gherkin
- Page Object Model

AI / RAG:

- Python
- ChromaDB or equivalent local vector store
- Configurable embedding provider
- Configurable LLM provider

MCP:

- Python
- FastMCP

AI AGENT:

- Python
- LangGraph

VERSION CONTROL:

- Git
- GitHub

DOCUMENTATION:

- Markdown
- PDF implementation reports


============================================================
4. HIGH-LEVEL ARCHITECTURE
============================================================

Create a clear architecture document.

The target architecture is:

                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚ Healthcare Frontend      â”‚
                    â”‚ React + TypeScript       â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                 â”‚
                                 â”‚ UI
                                 â–¼
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚ Playwright + Cucumber    â”‚
                    â”‚ BDD UI Automation        â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                 â”‚
                                 â–¼
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚ Test Results / Evidence  â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                 â”‚
                       â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                       â”‚                   â”‚
                       â–¼                   â–¼
                 â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”       â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                 â”‚   RAG    â”‚       â”‚ MCP Layer  â”‚
                 â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜       â””â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜
                      â”‚                    â”‚
                      â”‚                    â”œâ”€â”€ Jira
                      â”‚                    â”œâ”€â”€ Confluence
                      â”‚                    â”œâ”€â”€ Jenkins
                      â”‚                    â””â”€â”€ Playwright
                      â”‚
                      â–¼
              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
              â”‚ LangGraph Agent  â”‚
              â””â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                       â”‚
                       â–¼
                AI QA Workflows


Clearly explain that these components will be implemented
incrementally.

Do NOT claim the architecture is already implemented.


============================================================
5. ARCHITECTURE BOUNDARIES
============================================================

Define clear ownership.

frontend/
    Owns healthcare UI and frontend behavior.

automation/
    Owns Playwright/Cucumber UI automation.

rag/
    Owns document ingestion, chunking, embeddings,
    retrieval and RAG orchestration.

mcp/
    Owns MCP servers/tools and controlled tool interfaces.

agent/
    Owns LangGraph state, planning, routing and agent logic.

mock-systems/jira/
    Owns our Jira-like project tool.

mock-systems/confluence/
    Owns our Confluence-like project tool.

mock-systems/jenkins/
    Owns our Jenkins-like project tool.

knowledge/
    Owns project requirements and QA knowledge.

docs/
    Owns project documentation and implementation records.


IMPORTANT:

Do not allow components to bypass their architectural
boundaries without a documented reason.


============================================================
6. FRONTEND ARCHITECTURE STANDARD
============================================================

Define the future frontend architecture.

Expected logical layers:

UI Components
      â†“
Pages
      â†“
Application State
      â†“
Domain Models
      â†“
Mock Data / Local Persistence


The application must remain frontend-only.

Do NOT create:

- Backend services
- REST clients
- GraphQL clients
- API repositories
- Database access layers

For realistic behavior use:

- Local state
- Mock data
- LocalStorage where appropriate
- Deterministic test data


============================================================
7. TYPESCRIPT STANDARDS
============================================================

Define standards including:

- Strict TypeScript
- Avoid any where possible
- Explicit types for public interfaces
- Interfaces/types for domain models
- Reusable components
- Small focused functions
- Meaningful names
- No duplicated business logic
- No hardcoded credentials
- No hidden global state

Prefer:

const

over unnecessary mutable variables.

Use async/await where appropriate.

Keep UI components focused.


============================================================
8. PYTHON STANDARDS
============================================================

Define standards for future:

RAG
MCP
LangGraph
AI utilities

Standards:

- Python type hints
- Clear module boundaries
- Small functions
- Meaningful names
- Exception handling
- Structured logging
- Configuration through environment variables
- No secrets in source code
- No hardcoded API keys
- No real healthcare data

Prefer virtual environments.

Do not require global Python package installation.


============================================================
9. PLAYWRIGHT STANDARDS
============================================================

Future Playwright automation must follow:

- Page Object Model
- Component abstraction where useful
- Reusable fixtures
- Reusable hooks
- Stable locators
- Role-based locators where appropriate
- Test IDs only when justified
- Avoid XPath where better alternatives exist
- Explicit assertions
- Trace on failure
- Screenshots on failure where appropriate
- Video only when useful
- Deterministic test data
- Independent tests
- No test dependency on execution order

Avoid:

- Arbitrary waits
- Thread.sleep-style waiting
- Hardcoded long timeouts
- Duplicate page logic
- Brittle CSS selectors


============================================================
10. CUCUMBER BDD STANDARDS
============================================================

Define:

Feature
Scenario
Given
When
Then
And
But

Rules:

1. Scenarios describe business behavior.
2. Avoid implementation details in Gherkin.
3. Avoid overly large scenarios.
4. Keep scenarios independent.
5. Use Background only when genuinely useful.
6. Avoid duplicate step definitions.
7. Reuse step definitions carefully.
8. Keep business language readable.
9. Use tags for organization.
10. Map scenarios to user stories when possible.

Example:

Feature:
Patient Search

Scenario:
Search patient using Patient ID

Given the staff user is logged into the healthcare application
When the staff user searches using a valid Patient ID
Then the matching patient should be displayed


============================================================
11. PAGE OBJECT MODEL STANDARD
============================================================

Define rules:

Pages represent page-level behavior.

Components represent reusable UI components.

Step definitions should NOT contain large amounts of
Playwright implementation logic.

Prefer:

Step Definition
      â†“
Page Object
      â†“
Playwright

Avoid:

Step Definition
      â†“
Large direct Playwright implementation


============================================================
12. TEST DATA STANDARDS
============================================================

All healthcare test data MUST be synthetic.

Examples:

PAT-10001
PAT-10002

DOC-10001
DOC-10002

APT-10001

Never use:

- Real patient names
- Real medical records
- Real addresses
- Real phone numbers
- Real insurance identifiers
- Real patient IDs
- Real PHI

Create deterministic datasets where possible.

Separate:

Test Data
Configuration
Test Logic


============================================================
13. RAG STANDARDS
============================================================

Future RAG implementation must follow:

Documents
   â†“
Loader
   â†“
Parser
   â†“
Chunker
   â†“
Metadata
   â†“
Embeddings
   â†“
Vector Store
   â†“
Retriever
   â†“
Context
   â†“
LLM
   â†“
Response

RAG knowledge should eventually include:

- BRD
- PRD
- Epics
- User Stories
- Acceptance Criteria
- Business Rules
- Test Scenarios
- Test Cases
- QA documentation
- Architecture documentation
- Confluence-like content

RAG must provide source/context awareness.

Do not allow unsupported answers to be presented as facts.

When appropriate, responses should indicate insufficient
context rather than inventing information.


============================================================
14. MCP STANDARDS
============================================================

Future MCP implementation must:

- Use FastMCP
- Expose controlled tools
- Validate tool inputs
- Return structured results
- Handle errors
- Avoid exposing secrets
- Keep tool permissions explicit
- Keep tools independently testable

MCP tools must have clear responsibilities.

Examples:

Jira:

create_issue
search_issues
get_issue
update_issue
add_comment

Confluence:

create_page
search_pages
get_page
update_page

Jenkins:

trigger_build
get_build_status
get_build_logs

Playwright:

run_test
run_test_suite
get_test_result
get_screenshot
get_trace

These are PLANNED only at this stage.


============================================================
15. LANGGRAPH AGENT STANDARDS
============================================================

The future AI Agent must use LangGraph.

Target:

User Request
      â†“
Intent
      â†“
Planning
      â†“
RAG Retrieval
      â†“
Decision
      â†“
MCP Tool Selection
      â†“
Tool Execution
      â†“
Validation
      â†“
Analysis
      â†“
Final Response

The agent should maintain explicit state.

Avoid an uncontrolled:

User â†’ LLM â†’ arbitrary tool â†’ LLM

architecture.

Agent decisions must be observable and explainable at an
appropriate engineering level.

Do not expose hidden chain-of-thought.

Store useful execution metadata instead.


============================================================
16. JIRA / CONFLUENCE / JENKINS STANDARDS
============================================================

These are our OWN lightweight project tools.

They are NOT intended to reproduce the complete commercial
products.

Jira-like tool:

- Projects
- Epics
- Stories
- Tasks
- Bugs
- Status
- Priority
- Labels
- Comments
- Search

Confluence-like tool:

- Spaces
- Pages
- Page hierarchy
- Search
- Create/update/view

Jenkins-like tool:

- Jobs
- Builds
- Status
- Logs
- History
- Artifacts

These tools will be implemented in future steps.


============================================================
17. SECURITY STANDARDS
============================================================

NEVER commit:

- Passwords
- API keys
- Tokens
- Credentials
- Secrets
- PHI
- Corporate confidential information

Use:

.env

and

.env.example

where configuration is required.

Do not commit .env.

Do not hardcode secrets.

Do not use real healthcare information.

Do not bypass office security controls.

Do not weaken authentication simply to make a test pass.


============================================================
18. LOGGING & ERROR HANDLING
============================================================

Future components should use structured and meaningful
logging.

Do not log:

- Passwords
- Tokens
- Secrets
- PHI
- Sensitive personal information

Errors should:

- Be handled intentionally
- Provide useful diagnostics
- Avoid swallowing exceptions
- Avoid exposing sensitive details


============================================================
19. ACCESSIBILITY
============================================================

The healthcare frontend should target good accessibility
practices.

Future implementation should consider:

- Semantic HTML
- Keyboard navigation
- Labels
- Accessible forms
- ARIA only when necessary
- Focus management
- Color contrast
- Error messaging
- Screen-reader compatibility

Do not claim formal accessibility certification.


============================================================
20. PERFORMANCE
============================================================

Follow practical frontend performance practices:

- Avoid unnecessary re-renders
- Keep components focused
- Lazy-load where justified
- Avoid unnecessary dependencies
- Optimize large lists
- Avoid unnecessary computation

Performance optimization should be evidence-driven rather
than premature.


============================================================
21. GIT STANDARDS
============================================================

Branch strategy:

main
feature/*
bugfix/*
chore/*
docs/*

Commit format:

<type>(<scope>): <description>

Examples:

feat(ui): add patient dashboard

test(patient): add patient search bdd scenarios

feat(rag): add document ingestion

feat(mcp): add jira search tool

feat(agent): add test failure analysis graph

docs(step-0.3): define engineering standards

Use focused commits.

Do not commit unrelated changes.


============================================================
22. DOCUMENTATION STANDARD
============================================================

Every implementation step MUST create:

docs/implementations/<step-id>-<step-name>/

    prompt.md
    README.md
    implementation-report.pdf
    interview-notes.md

The exact prompt must be preserved.

README must document actual implementation.

PDF must document actual implementation.

Interview notes must explain:

- What
- Why
- How
- Alternatives
- Challenges
- Solutions
- Interview questions


============================================================
23. TESTING STANDARD
============================================================

Future implementations must test at the appropriate level.

Frontend:

- Component tests where justified
- UI behavior
- Accessibility checks where practical

Automation:

- Cucumber scenarios
- Playwright tests

Python:

- Unit tests
- Integration tests where justified

RAG:

- Retrieval evaluation
- Context relevance
- Answer grounding

MCP:

- Tool validation
- Tool behavior
- Error handling

Agent:

- State transitions
- Routing
- Tool selection
- Failure handling

Never fabricate test results.


============================================================
24. DEFINITION OF DONE
============================================================

A future implementation step is PASS only when applicable:

[ ] Implementation completed
[ ] Tests created/updated
[ ] Tests executed
[ ] Validation completed
[ ] prompt.md created
[ ] README.md created
[ ] implementation-report.pdf created
[ ] interview-notes.md created
[ ] IMPLEMENTATION_INDEX.md updated
[ ] CHANGELOG.md updated
[ ] INTERVIEW_GUIDE.md updated
[ ] No secrets committed
[ ] Git commit created
[ ] Git push completed
[ ] Remote commit verified

Allowed statuses:

PASS
FAIL
BLOCKED
PARTIAL


============================================================
25. CODEx DEVELOPMENT RULES
============================================================

For all future implementation steps:

1. Inspect existing code before modifying it.
2. Do not overwrite working code unnecessarily.
3. Reuse existing utilities.
4. Avoid duplicate implementations.
5. Make the smallest reasonable change.
6. Validate after changes.
7. Never fabricate test results.
8. Never fabricate files.
9. Never claim Git push succeeded without verification.
10. Never claim an external service is available without
    verification.
11. Never install unnecessary dependencies.
12. Never modify system configuration without explicit need.
13. Respect office laptop restrictions.
14. Do not expose secrets.
15. Do not introduce real healthcare data.
16. Do not implement future phases prematurely.


============================================================
26. INTERVIEW-FIRST ENGINEERING
============================================================

This project is also being built for senior QA/AI Engineer
interview preparation.

For major technical decisions document:

- Problem
- Options considered
- Selected approach
- Why selected
- Trade-offs
- Risks
- Future scalability

The project should be explainable during an interview.

Avoid technologies simply because they are popular.

Every major technology should have a clear reason for being
included.


============================================================
27. ARCHITECTURE DECISION RECORD
============================================================

Create:

docs/architecture/

Create:

docs/architecture/ARCHITECTURE_DECISION_RECORD.md

Document the decisions established in this step.

Include at least:

ADR-001:
Frontend-only architecture

ADR-002:
Playwright + Cucumber BDD

ADR-003:
Python for AI/RAG/MCP/Agent layer

ADR-004:
FastMCP for MCP

ADR-005:
LangGraph for Agent orchestration

ADR-006:
Local/vector-store-first RAG architecture

ADR-007:
Synthetic healthcare data

ADR-008:
Our own lightweight Jira/Confluence/Jenkins tools

For each ADR:

- Context
- Decision
- Rationale
- Alternatives
- Trade-offs
- Status


============================================================
28. ENGINEERING STANDARDS DOCUMENT
============================================================

Create:

docs/architecture/ENGINEERING_STANDARDS.md

Consolidate the important standards from this step.

Include:

- Coding standards
- Architecture standards
- Frontend standards
- Automation standards
- BDD standards
- Python standards
- RAG standards
- MCP standards
- Agent standards
- Security standards
- Git standards
- Documentation standards
- Testing standards
- Data standards


============================================================
29. AI ENGINEERING ARCHITECTURE DOCUMENT
============================================================

Create:

docs/architecture/AI_ENGINEERING_ARCHITECTURE.md

Document the planned:

RAG
MCP
LangGraph Agent

architecture.

Clearly label all components as:

PLANNED

because they are not implemented yet.


============================================================
30. QA AUTOMATION ARCHITECTURE DOCUMENT
============================================================

Create:

docs/architecture/QA_AUTOMATION_ARCHITECTURE.md

Document the planned:

Healthcare UI
    â†“
Playwright
    â†“
Cucumber
    â†“
Step Definitions
    â†“
Page Objects
    â†“
Reports


Again, mark implementation as:

PLANNED


============================================================
31. STEP 0.3 DOCUMENTATION
============================================================

Create:

docs/implementations/0.3-engineering-standards/

Inside:

prompt.md
README.md
implementation-report.pdf
interview-notes.md

------------------------------------------------------------
prompt.md
------------------------------------------------------------

Save this exact Step 0.3 prompt.

------------------------------------------------------------
README.md
------------------------------------------------------------

Include:

# Step 0.3 â€” Engineering Standards & Architecture Contract

## Objective

## Context

## Architecture

## Technology Decisions

## Engineering Standards

## Security

## Testing Standards

## Documentation Standards

## Git Standards

## AI Engineering Standards

## Architecture Decision Records

## Files Created

## Files Modified

## Validation

## Lessons Learned

## Interview Preparation

## Status


------------------------------------------------------------
implementation-report.pdf
------------------------------------------------------------

Create a professional PDF containing:

- Objective
- Architecture
- Technology stack
- Architecture decisions
- Engineering standards
- Security
- QA automation standards
- AI architecture
- Git standards
- Documentation standards
- Interview talking points
- Next steps

Do not fabricate implementation results.

------------------------------------------------------------
interview-notes.md
------------------------------------------------------------

Include:

## What was implemented?

## Why was this step necessary?

## Architecture explanation

## Technology choices

## Why Playwright?

## Why Cucumber?

## Why Python for AI?

## Why FastMCP?

## Why LangGraph?

## Why RAG?

## Why frontend-only?

## Why synthetic healthcare data?

## Why create our own Jira/Confluence/Jenkins?

## Trade-offs

## Challenges

## Interview Questions

## Suggested Answers

## 30-second explanation

## 1-minute explanation

## 2-minute explanation

## Resume bullet suggestions


============================================================
32. UPDATE MASTER DOCUMENTATION
============================================================

Update:

README.md
CHANGELOG.md
docs/IMPLEMENTATION_INDEX.md
docs/INTERVIEW_GUIDE.md

Add Step 0.3.

Clearly mark:

Step 0.3:
PASS

No future functionality should be marked as implemented.


============================================================
33. VALIDATION
============================================================

Validate:

[ ] Engineering standards document exists
[ ] Architecture decision record exists
[ ] AI architecture document exists
[ ] QA automation architecture exists
[ ] Step 0.3 prompt exists
[ ] Step 0.3 README exists
[ ] Step 0.3 PDF exists
[ ] Step 0.3 interview notes exist
[ ] Root README updated
[ ] CHANGELOG updated
[ ] Implementation index updated
[ ] Interview guide updated
[ ] No application functionality created
[ ] No unnecessary dependencies installed
[ ] No secrets
[ ] No PHI
[ ] No API automation
[ ] No backend


============================================================
34. GIT
============================================================

Review:

git status

Stage only Step 0.3 changes.

Create:

docs(step-0.3): define engineering standards and architecture

Then push:

git push origin main

Verify the remote commit.

Do not claim success unless verified.


============================================================
35. FINAL RESPONSE
============================================================

Return:

Implementation Status:
PASS / FAIL / BLOCKED / PARTIAL

Step:
STEP 0.3 â€” Engineering Standards & Architecture Contract

Objective:

Implementation Summary:

Architecture Documents:

Files Created:

Files Modified:

Tests / Validation:

Git:

Branch:
Commit:
Commit Message:
Push:
Remote Verification:

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

IMPORTANT:

Do NOT execute Step 0.4 automatically.

Do NOT start frontend development.

Do NOT create BRD/PRD yet.

WAIT FOR MY NEXT PROMPT.


============================================================
END OF STEP 0.3
============================================================
