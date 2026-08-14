# STEP 7 — MCP Runtime & Tool Calling Foundation

## ROLE

You are implementing STEP 7 of the CareFlow Health AI-QA Engineering project.

You are working directly inside the existing repository in VS Code.

This is a healthcare QA engineering portfolio project demonstrating:

- Enterprise QA automation
- Playwright + Cucumber BDD
- Jira + Confluence integration
- Requirements traceability
- RAG
- RAG evaluation / RAGAS-compatible evaluation
- MCP
- AI agents
- Agentic QA
- AI observability
- AI governance
- Human-in-the-loop
- AI security and guardrails

IMPORTANT:

STEP 7 is a MAJOR INDEPENDENT PHASE.

Do NOT create Step 7.1, 7.2, etc. unless explicitly requested later.

Do NOT automatically advance to Step 8.

STOP after completing and validating STEP 7.

--------------------------------------------------
## PREVIOUS IMPLEMENTATION STATUS
--------------------------------------------------

The following phases already exist and must be preserved:

STEP 1:
CareFlow healthcare frontend and core QA automation foundation.

STEP 1.14:
Expanded regression automation.

STEP 1.15:
AI automation governance, test-case classification, agent handoff contracts and AI QA governance.

STEP 4:
Jira + Confluence deterministic local/mock knowledge foundation.

STEP 4.1:
Jira + Confluence UI simulation inside the CareFlow frontend.

STEP 5:
RAG Knowledge System Runtime.

STEP 6:
RAG evaluation / RAGAS-compatible local deterministic evaluation runtime.

Do NOT rebuild or replace these implementations.

Extend the existing architecture.

--------------------------------------------------
## PRIMARY OBJECTIVE
--------------------------------------------------

Implement STEP 7:

"MCP Runtime & Tool Calling Foundation"

The objective is to convert the existing Jira, Confluence, traceability and RAG boundaries into a working local MCP runtime.

The implementation must demonstrate:

Jira
   ↓
Confluence
   ↓
Traceability
   ↓
RAG
   ↓
MCP Tools
   ↓
MCP Server
   ↓
MCP Client / Tool Caller
   ↓
Structured Tool Results
   ↓
Future AI Agent

STEP 7 must implement MCP runtime capability.

STEP 7 must NOT implement autonomous AI agents.

STEP 7 must NOT implement LangGraph.

STEP 7 must NOT implement multi-agent orchestration.

Those belong to later phases.

--------------------------------------------------
## CRITICAL ARCHITECTURE RULE
--------------------------------------------------

Use the existing repository architecture.

Before writing code:

1. Inspect the repository.
2. Inspect:
   - mcp/
   - rag/
   - frontend/
   - automation/
   - docs/
   - knowledge/
3. Inspect existing Jira/Confluence implementation.
4. Inspect existing RAG runtime.
5. Inspect existing RAG evaluation runtime.
6. Inspect existing MCP contracts created in Step 4.
7. Inspect existing AI agent handoff contracts from Step 1.15.
8. Inspect existing traceability contracts.
9. Inspect existing package.json files.
10. Inspect existing README and IMPLEMENTATION_INDEX.

Do not duplicate existing functionality.

Reuse existing services whenever possible.

--------------------------------------------------
## MCP IMPLEMENTATION STRATEGY
--------------------------------------------------

Implement a real LOCAL MCP runtime.

Use the existing MCP ecosystem/dependencies already available in the repository if suitable.

If the repository already contains MCP dependencies such as:

- @modelcontextprotocol/sdk
- MCP SDK
- compatible MCP libraries

reuse them.

Do NOT introduce unnecessary frameworks.

Do NOT require external internet connectivity.

Do NOT require live Jira or Confluence credentials.

Do NOT require production MCP hosting.

The MCP runtime must work entirely with deterministic local/mock data.

--------------------------------------------------
## MCP SERVER
--------------------------------------------------

Create a dedicated MCP server implementation.

Suggested structure:

mcp/
  runtime/
    src/
      server/
      tools/
      resources/
      schemas/
      security/
      transport/
      clients/
    tests/

You may adjust the structure if the repository already has a better MCP architecture.

Do not blindly follow the suggested structure.

Reuse:

mcp/jira-confluence-foundation/

and existing RAG runtime services.

--------------------------------------------------
## MCP TOOLS
--------------------------------------------------

Implement the following MCP tools.

### 1. search_jira

Purpose:

Search Jira issues using deterministic local/mock Jira data.

Input should support:

- query
- issueType
- status
- priority
- assignee
- labels
- project

Output:

Structured JSON result containing:

- issues
- total
- sourceSystem
- query
- traceability information

Validation:

- validate input
- reject invalid parameters
- never fabricate issues

--------------------------------------------------
### 2. get_jira_issue

Purpose:

Retrieve a Jira issue by key/ID.

Input:

- issueKey

Output:

- issue
- acceptance criteria
- linked issues
- test scenarios
- test cases
- defect links
- Confluence references
- traceability IDs

If issue does not exist:

return a structured NOT_FOUND result.

Do not fabricate data.

--------------------------------------------------
### 3. search_confluence

Purpose:

Search local/mock Confluence knowledge.

Input:

- query
- space
- labels
- sourceType

Output:

- pages
- metadata
- traceability IDs
- source references

--------------------------------------------------
### 4. get_confluence_page

Purpose:

Retrieve a Confluence page.

Input:

- pageId

Output:

- page content
- metadata
- Jira references
- test references
- traceability information

Unknown page:

structured NOT_FOUND response.

--------------------------------------------------
### 5. get_traceability

Purpose:

Retrieve traceability relationships.

Input should support:

- entityType
- entityId
- direction

Examples:

Jira story → Test Case

Test Case → Jira Story

Defect → Acceptance Criterion

User Story → Confluence Page

Test Case → Automation

Automation → Execution

Output:

structured traceability graph.

--------------------------------------------------
### 6. search_test_cases

Purpose:

Search the existing CareFlow test-case classification and automation matrix.

Input:

- query
- classification
- module
- automationStatus

Output:

- matching test cases
- classification
- automation status
- AI-agent candidate status
- traceability IDs

Use existing Step 1.15 test-case classification data.

Do not recreate the 96 test cases manually.

--------------------------------------------------
### 7. get_rag_context

Purpose:

Retrieve relevant RAG context without generating an answer.

Input:

- query
- role
- topK
- optional metadata filters

Output:

- retrieved chunks
- scores
- metadata
- source references
- citations
- retrieval metadata

Reuse the existing Step 5 RAG runtime.

Do NOT create a second RAG implementation.

--------------------------------------------------
### 8. query_rag

Purpose:

Execute the existing RAG query service through MCP.

Input:

- query
- role
- topK

Output:

- answer
- citations
- retrievedDocuments
- confidence
- retrievalMetadata
- warnings

Reuse:

RagQueryService

and existing access-control rules.

--------------------------------------------------
### 9. get_rag_evaluation

Purpose:

Expose Step 6 evaluation information through MCP.

Input:

- optional runId
- optional caseId

Output:

- evaluation run
- metrics
- quality gate
- failure analysis
- comparison information

Reuse existing Step 6 evaluation runtime.

--------------------------------------------------
### 10. get_qa_knowledge

Purpose:

Provide a unified QA knowledge lookup.

Input:

- query
- role

The tool may internally combine:

Jira
+
Confluence
+
Traceability
+
RAG

Output must clearly identify:

- source
- evidence
- citations
- confidence
- traceability

This tool must NOT silently fabricate or merge unsupported information.

--------------------------------------------------
## TOOL CONTRACTS
--------------------------------------------------

Every MCP tool must have:

- name
- description
- input schema
- output schema
- validation
- error contract
- audit metadata
- source metadata

Use typed/validated schemas where appropriate.

Prefer JSON Schema or the schema mechanism supported by the MCP SDK.

--------------------------------------------------
## STRUCTURED ERROR CONTRACT
--------------------------------------------------

All tools must use consistent structured errors.

Examples:

INVALID_INPUT

NOT_FOUND

ACCESS_DENIED

NO_EVIDENCE

DEPENDENCY_ERROR

INTERNAL_ERROR

TOOL_NOT_AVAILABLE

Errors must include:

- code
- message
- tool
- requestId
- retryable
- details when safe

Never expose secrets.

--------------------------------------------------
## SECURITY
--------------------------------------------------

This is a healthcare project.

Even though the project uses synthetic data, implement enterprise-style security boundaries.

Required:

1. Role-based access.

Use existing roles:

- Healthcare Administrator
- Doctor
- Nurse
- Receptionist
- Patient

2. RAG access rules must remain consistent with Step 5.

Patient:

public only.

Clinical roles:

public + team.

Healthcare Administrator:

public + team + admin.

3. MCP tools must enforce authorization before accessing protected information.

4. No PHI.

5. No secrets in source code.

6. No credentials committed.

7. No fabricated evidence.

8. Tool results must identify their source.

9. Tool calls must generate request IDs.

10. Tool execution must produce audit metadata.

--------------------------------------------------
## MCP AUDIT / OBSERVABILITY
--------------------------------------------------

Implement MCP tool telemetry.

Each tool call should record:

- requestId
- timestamp
- toolName
- input summary
- role
- authorization result
- execution duration
- result status
- error code if any
- source systems accessed
- returned record count

Do NOT log secrets.

Do NOT log sensitive content unnecessarily.

Prefer structured JSON/NDJSON logs.

Reuse Step 5/Step 6 observability conventions where possible.

--------------------------------------------------
## MCP RESOURCES
--------------------------------------------------

Where appropriate, expose read-only MCP resources for:

- QA knowledge
- Jira issue information
- Confluence knowledge
- traceability
- RAG evaluation information

Do not over-engineer resources.

Tools are the primary focus.

Resources should demonstrate how MCP can expose structured enterprise knowledge.

--------------------------------------------------
## MCP TRANSPORT
--------------------------------------------------

Implement a local development transport.

Preferred:

STDIO transport if supported by the selected MCP SDK.

The server must be executable locally.

Example conceptual command:

npm run mcp:start

or equivalent.

The exact command must be documented.

Do not require external hosting.

Do not require Docker.

Do not require live Jira/Confluence.

--------------------------------------------------
## MCP CLIENT / TOOL CALLING
--------------------------------------------------

Implement a small deterministic MCP client/test harness.

Purpose:

Demonstrate:

Client
  ↓
MCP Server
  ↓
Tool discovery
  ↓
Tool invocation
  ↓
Structured result

The client must be able to:

1. connect to MCP server
2. list available tools
3. inspect tool schemas
4. call selected tools
5. receive structured responses
6. handle errors
7. disconnect cleanly

This is NOT an AI agent.

It is a deterministic MCP client/harness.

--------------------------------------------------
## TOOL DISCOVERY
--------------------------------------------------

The client must demonstrate MCP tool discovery.

Expected tools:

- search_jira
- get_jira_issue
- search_confluence
- get_confluence_page
- get_traceability
- search_test_cases
- get_rag_context
- query_rag
- get_rag_evaluation
- get_qa_knowledge

Tool count should be validated automatically.

--------------------------------------------------
## RAG INTEGRATION
--------------------------------------------------

MCP must call the existing RAG runtime.

Do NOT copy RAG code into MCP.

Architecture:

MCP Tool
   ↓
RAG Runtime Boundary
   ↓
RagQueryService
   ↓
Retriever
   ↓
Vector Store
   ↓
Context
   ↓
Answer/Citations

Use the existing:

rag/src/rag-runtime-boundary.js

or equivalent existing boundary.

--------------------------------------------------
## JIRA / CONFLUENCE INTEGRATION
--------------------------------------------------

MCP must call existing repositories/services.

Architecture:

MCP Tool
   ↓
Jira Repository / Confluence Repository
   ↓
Mock Adapter
   ↓
Existing deterministic data

Do not create a second Jira dataset.

Do not create a second Confluence dataset.

--------------------------------------------------
## TRACEABILITY INTEGRATION
--------------------------------------------------

Use existing traceability-service.

MCP must expose the existing relationships.

Do not duplicate traceability logic.

--------------------------------------------------
## FRONTEND MCP DEMONSTRATION UI
--------------------------------------------------

Add a simple MCP demonstration UI to the existing CareFlow frontend.

Do NOT create a full enterprise MCP management console.

Create a focused page such as:

/mcp

or

/tools/mcp

The page should demonstrate:

1. MCP runtime status
2. Available tools
3. Tool descriptions
4. Input schema visibility
5. Tool invocation
6. Structured result
7. Request ID
8. Execution status
9. Source/evidence
10. Authorization result

Use deterministic local/mock MCP invocation.

If direct browser-to-STDIO MCP communication is inappropriate, expose a local development bridge/service or use pre-generated deterministic artifacts.

Do not compromise architecture just to make browser integration work.

Clearly document the boundary.

--------------------------------------------------
## FRONTEND MCP UI SELECTORS
--------------------------------------------------

Add stable selectors.

At minimum:

mcp-page

mcp-runtime-status

mcp-tool-list

mcp-tool

mcp-tool-name

mcp-tool-description

mcp-tool-input

mcp-tool-execute

mcp-tool-result

mcp-tool-status

mcp-request-id

mcp-source

mcp-error

--------------------------------------------------
## AUTOMATION
--------------------------------------------------

Do NOT run the entire regression suite.

Do NOT expand all 96 test cases.

Create only targeted MCP automation.

Target:

5–8 scenarios.

Suggested scenarios:

1. User can open MCP tools page.
2. MCP tool list is visible.
3. User can inspect search_jira tool.
4. User can execute search_jira and view structured result.
5. User can execute get_traceability.
6. User can execute query_rag.
7. Unauthorized user is denied protected MCP access.
8. MCP tool errors are displayed safely.

Use:

Playwright + Cucumber BDD.

Reuse existing automation architecture.

--------------------------------------------------
## UNIT / INTEGRATION TESTS
--------------------------------------------------

Create MCP runtime tests.

At minimum validate:

### Tool registration

All required tools registered.

### Schema validation

Valid and invalid inputs.

### Jira

search_jira

get_jira_issue

### Confluence

search_confluence

get_confluence_page

### Traceability

get_traceability

### Test Cases

search_test_cases

### RAG

get_rag_context

query_rag

### Evaluation

get_rag_evaluation

### Unified knowledge

get_qa_knowledge

### Authorization

Patient cannot access admin-only knowledge.

### Errors

NOT_FOUND

INVALID_INPUT

ACCESS_DENIED

NO_EVIDENCE

### Audit

Request IDs and telemetry generated.

### MCP client

Tool discovery and invocation succeed.

--------------------------------------------------
## NO AGENT IMPLEMENTATION
--------------------------------------------------

Do NOT implement:

- autonomous agent
- LangGraph
- agent planner
- multi-agent system
- agent memory
- agent loop
- autonomous browser execution
- autonomous Jira updates
- autonomous Confluence updates

These belong to STEP 8+.

However, MCP must be explicitly designed so a future agent can consume the tools.

Document:

Agent
  ↓
MCP Client
  ↓
MCP Tools
  ↓
Enterprise Systems

--------------------------------------------------
## AI AGENT BOUNDARY
--------------------------------------------------

Update the existing agent architecture documentation to state:

STEP 7:

MCP runtime is implemented.

STEP 8:

AI agent can consume MCP tools.

The agent must not directly access Jira, Confluence or RAG internals.

Future architecture:

AI Agent
    ↓
MCP Client
    ↓
MCP Server
    ↓
MCP Tools
    ↓
Jira / Confluence / Traceability / RAG

--------------------------------------------------
## RAGAS / EVALUATION BOUNDARY
--------------------------------------------------

MCP may expose evaluation information through:

get_rag_evaluation

But do not change Step 6 evaluation logic.

Do not add official RAGAS library integration in Step 7.

Do not change existing quality thresholds.

--------------------------------------------------
## DOCUMENTATION
--------------------------------------------------

Create:

docs/architecture/MCP_ARCHITECTURE.md

docs/architecture/MCP_SERVER_ARCHITECTURE.md

docs/architecture/MCP_TOOL_CATALOG.md

docs/architecture/MCP_SECURITY.md

docs/architecture/MCP_OBSERVABILITY.md

docs/architecture/MCP_AGENT_BOUNDARY.md

docs/implementations/7-mcp-runtime/prompt.md

docs/implementations/7-mcp-runtime/README.md

docs/implementations/7-mcp-runtime/interview-notes.md

docs/implementations/7-mcp-runtime/response.md

docs/implementations/7-mcp-runtime/implementation-report.pdf

The documentation must explain:

- What MCP is
- Why MCP is used in this project
- MCP vs REST API
- MCP server
- MCP client
- MCP tools
- MCP resources
- Tool discovery
- Tool schemas
- Tool calling
- Authorization
- Auditability
- MCP + RAG
- MCP + Jira
- MCP + Confluence
- MCP + traceability
- Future MCP + AI Agent architecture
- Why agents should NOT directly access enterprise systems

--------------------------------------------------
## README / INDEX UPDATES
--------------------------------------------------

Update:

README.md

CHANGELOG.md

docs/IMPLEMENTATION_INDEX.md

docs/INTERVIEW_GUIDE.md

docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md

docs/qa/AI_QUALITY_GATES.md

knowledge/requirements-traceability.md

Preserve all previous step information.

Do not rewrite history incorrectly.

Add STEP 7 as PASS only after validation succeeds.

--------------------------------------------------
## TRACEABILITY
--------------------------------------------------

Extend the traceability chain:

BRD
→ PRD
→ Epic
→ User Story
→ Acceptance Criteria
→ Jira
→ Confluence
→ Knowledge Document
→ Chunk
→ Embedding
→ Vector
→ Retrieval
→ Context
→ RAG Answer
→ Citation
→ Evaluation Dataset
→ Evaluation Case
→ Evaluation Run
→ Metric
→ Quality Gate
→ MCP Tool
→ MCP Server
→ MCP Client
→ Tool Result
→ Test Scenario
→ Test Case
→ BDD
→ Automation
→ Execution
→ Future AI Agent

--------------------------------------------------
## AI INDUSTRY CONCEPT STATUS
--------------------------------------------------

After Step 7, update statuses accurately.

RAG:
IMPLEMENTED

RAG Evaluation:
IMPLEMENTED

RAGAS-compatible evaluation:
IMPLEMENTED LOCALLY

MCP:
IMPLEMENTED

MCP Server:
IMPLEMENTED

MCP Client:
IMPLEMENTED

MCP Tools:
IMPLEMENTED

Tool Discovery:
IMPLEMENTED

Tool Calling:
IMPLEMENTED

MCP Authorization:
IMPLEMENTED

MCP Auditability:
IMPLEMENTED

MCP Observability:
IMPLEMENTED

Agentic AI:
FOUNDATION / NEXT STEP

LangGraph:
PLANNED

Multi-Agent:
PLANNED

Agent Evaluation:
FOUNDATION

Human-in-the-loop:
FOUNDATION

Guardrails:
FOUNDATION

Prompt Injection Protection:
FOUNDATION / STEP 11

AI Security:
FOUNDATION

LLMOps:
FOUNDATION

AI-assisted Test Generation:
PLANNED

AI-assisted Test Prioritization:
PLANNED

AI-assisted Failure Triage:
PLANNED

AI-assisted Defect Clustering:
PLANNED

AI-assisted Regression Selection:
PLANNED

Do not claim AI agent runtime is implemented.

--------------------------------------------------
## VALIDATION
--------------------------------------------------

Run targeted validation only.

Do NOT run the full regression suite.

Do NOT run all 96 scenarios.

Do NOT run Firefox/WebKit.

Do NOT spend time fixing the existing Playwright browser binary limitation.

Run:

1. MCP unit tests
2. MCP integration tests
3. MCP client/server test
4. RAG existing tests
5. frontend lint
6. automation typecheck
7. targeted MCP Cucumber tests

Frontend build:

Attempt it once.

If the existing Vite EPERM environment issue occurs:

- document it
- do not spend excessive effort on environment repair
- do not mark MCP implementation as failed solely because of known filesystem EPERM

RAG evaluation:

Do not rerun the entire Step 6 evaluation unless needed to validate compatibility.

--------------------------------------------------
## TEST EXECUTION LIMIT
--------------------------------------------------

IMPORTANT:

This step is NOT a full regression step.

Run only targeted tests related to STEP 7.

Do not execute:

npm run regression:chromium

Do not execute:

npm run regression:firefox

Do not execute:

npm run regression:webkit

Do not execute all 96 test cases.

--------------------------------------------------
## GIT
--------------------------------------------------

Before committing:

1. inspect git status
2. inspect git diff
3. verify no secrets
4. verify no generated temporary artifacts are accidentally committed
5. verify only intended files are changed

Create commit:

feat(step-7): implement mcp runtime and tool calling

Then push to origin/main.

Verify:

- branch
- commit SHA
- remote SHA
- working tree

If push is blocked by environment/authentication, document it accurately.

Do not claim success without verification.

--------------------------------------------------
## IMPLEMENTATION REPORT
--------------------------------------------------

At completion provide:

# Step 7 Response

## 1. Status

PASS / PARTIAL / FAIL

## 2. Objective

## 3. Architecture

## 4. MCP Server

## 5. MCP Client

## 6. Tool Catalog

## 7. Tool Discovery

## 8. Tool Calling

## 9. Jira Integration

## 10. Confluence Integration

## 11. Traceability Integration

## 12. RAG Integration

## 13. RAG Evaluation Integration

## 14. Authorization

## 15. Security

## 16. Observability

## 17. Audit

## 18. Frontend MCP UI

## 19. Automation

## 20. Test Results

## 21. AI Industry Concepts

## 22. Traceability

## 23. Files Created

## 24. Files Modified

## 25. Documentation

## 26. Git

## 27. Known Issues

## 28. Next Recommended Step

Next recommended step:

STEP 8 - AI Agent Runtime

STOP.

--------------------------------------------------
## IMPORTANT FINAL RULES
--------------------------------------------------

1. Do not implement STEP 8.
2. Do not implement LangGraph.
3. Do not implement multi-agent.
4. Do not implement autonomous agents.
5. Do not implement live Jira credentials.
6. Do not implement live Confluence credentials.
7. Do not replace existing RAG.
8. Do not replace existing Jira/Confluence foundation.
9. Do not duplicate datasets.
10. Do not fabricate evidence.
11. Do not introduce PHI.
12. Do not commit secrets.
13. Do not run the complete regression suite.
14. Do not run all 96 test cases.
15. Use targeted tests only.
16. Preserve previous implementation history.
17. Update IMPLEMENTATION_INDEX.md.
18. Update README.md and CHANGELOG.md.
19. Create complete Step 7 documentation.
20. Commit and push only after validation.
21. STOP after STEP 7.

Begin by inspecting the existing repository and previous Step 4, Step 4.1, Step 5 and Step 6 implementations before making changes.