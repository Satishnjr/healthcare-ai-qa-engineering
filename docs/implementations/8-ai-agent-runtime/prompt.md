# STEP 8 — AI AGENT RUNTIME
## CareFlow Health — AI-Powered QA Engineering Platform

You are working inside the existing CareFlow Health AI-QA repository.

IMPORTANT:
Do NOT redesign the project from scratch.
Do NOT remove or break existing functionality.
Build on the existing implementations from Steps 1–7.

============================================================
1. PROJECT CONTEXT
============================================================

The project already contains:

STEP 1:
- Healthcare application foundation
- Requirements/user stories
- Test scenarios/test cases
- UI architecture
- Playwright + Cucumber BDD foundation
- Automation governance
- AI automation classification

STEP 4:
- Jira foundation
- Confluence foundation
- Jira <-> Confluence traceability
- Jira/Confluence UI simulation

STEP 5:
- Local deterministic RAG runtime
- Knowledge ingestion
- Chunking
- Embeddings
- Vector store
- Retrieval
- Context assembly
- Grounded answer generation
- Citations
- Access control

STEP 6:
- RAG evaluation runtime
- Evaluation dataset
- Context Precision
- Context Recall
- Faithfulness
- Answer Relevance
- Groundedness
- Quality gates
- Failure analysis
- Evaluation reports

STEP 7:
- MCP server
- MCP client
- MCP tool discovery
- MCP tool calling
- MCP authorization
- MCP audit logging

Existing MCP tools include:

1. search_jira
2. get_jira_issue
3. search_confluence
4. get_confluence_page
5. get_traceability
6. search_test_cases
7. get_rag_context
8. query_rag
9. get_rag_evaluation
10. get_qa_knowledge

The existing implementation is deterministic/local/mock where external services or LLM access are unavailable.

============================================================
2. STEP 8 OBJECTIVE
============================================================

Implement the first AI Agent Runtime for CareFlow Health.

Architecture:

USER
  |
  v
AI AGENT
  |
  +--> Task Understanding
  |
  +--> Planning / Tool Selection
  |
  +--> MCP Tool Calls
  |       |
  |       +--> Jira
  |       +--> Confluence
  |       +--> Traceability
  |       +--> RAG
  |       +--> RAG Evaluation
  |
  +--> Evidence Collection
  |
  +--> Evidence Validation
  |
  +--> Reasoning
  |
  +--> QA Response
  |
  +--> Citation / Confidence
  |
  +--> Audit
  |
  v
USER

Do NOT implement LangGraph yet.

Do NOT implement multi-agent orchestration yet.

Step 8 is the single-agent runtime foundation.

============================================================
3. AGENT DESIGN
============================================================

Create:

agent/

Suggested structure:

agent/
  package.json
  README.md
  src/
    agent-runtime.js
    agent-controller.js
    task-analyzer.js
    planner.js
    tool-selector.js
    tool-executor.js
    evidence-manager.js
    evidence-validator.js
    reasoning-engine.js
    response-generator.js
    confidence-engine.js
    guardrails.js
    approval-manager.js
    audit-manager.js
    contracts/
      agent-contracts.js
      task-contracts.js
      evidence-contracts.js
      response-contracts.js
    providers/
      llm-provider.js
      deterministic-provider.js
    policies/
      agent-policy.js
      tool-policy.js
      approval-policy.js
    cli-agent.js
  tests/
    step8-agent-runtime.test.js

You may adjust the exact structure if the existing repository architecture requires it.

============================================================
4. AGENT TASK UNDERSTANDING
============================================================

Implement task analysis.

Example user requests:

"Find the acceptance criteria for appointment cancellation."

"Which Jira story is related to appointment cancellation?"

"What test cases cover appointment cancellation?"

"Show me the Confluence knowledge related to appointment cancellation."

"Why did the RAG evaluation fail?"

"Which test cases should we automate first?"

"Give me the traceability chain for appointment cancellation."

The agent should classify the task.

Example task types:

- JIRA_LOOKUP
- CONFLUENCE_LOOKUP
- TRACEABILITY_LOOKUP
- KNOWLEDGE_SEARCH
- RAG_QUERY
- RAG_EVALUATION_ANALYSIS
- TEST_CASE_ANALYSIS
- AUTOMATION_RECOMMENDATION
- GENERAL_QA_KNOWLEDGE

Return a structured task object.

Example:

{
  taskId,
  originalRequest,
  taskType,
  entities,
  constraints,
  requestedOutput,
  riskLevel,
  confidence
}

============================================================
5. TOOL SELECTION
============================================================

Implement deterministic tool selection.

The agent must decide which MCP tool(s) are required.

Examples:

Request:
"Find the Jira story for appointment cancellation."

Expected:

search_jira

Request:
"What acceptance criteria apply to appointment cancellation?"

Possible:

search_jira
get_jira_issue

Request:
"Give me the complete traceability for appointment cancellation."

Possible:

search_jira
get_traceability
search_confluence

Request:
"Why did the RAG evaluation fail?"

Possible:

get_rag_evaluation
query_rag

Request:
"What should we automate first?"

Possible:

search_test_cases
get_qa_knowledge
get_rag_context

The planner must return a structured plan.

Example:

{
  planId,
  taskId,
  steps: [
    {
      order,
      tool,
      purpose,
      input,
      requiredEvidence
    }
  ]
}

============================================================
6. MCP INTEGRATION
============================================================

The agent MUST use the existing Step 7 MCP runtime.

Do NOT duplicate Jira, Confluence, RAG, or evaluation logic.

The agent should call MCP tools through a reusable MCP client abstraction.

Flow:

Agent
  |
  v
MCP Client
  |
  v
MCP Server
  |
  v
MCP Tool
  |
  v
Structured Tool Result

Capture:

- requestId
- tool
- input
- output
- status
- source
- audit information

============================================================
7. EVIDENCE MANAGEMENT
============================================================

Implement an evidence manager.

Every important agent conclusion must be based on retrieved evidence.

Evidence should contain:

{
  evidenceId,
  sourceSystem,
  sourceType,
  sourceId,
  documentId,
  chunkId,
  traceabilityIds,
  content,
  score,
  timestamp,
  accessScope,
  sensitivity
}

The agent must NOT fabricate:

- Jira issues
- Confluence pages
- Test cases
- Acceptance criteria
- Defects
- RAG results
- Evaluation scores

If evidence is insufficient:

return:

{
  status: "NO_EVIDENCE",
  answer: "...",
  citations: [],
  confidence: 0
}

============================================================
8. EVIDENCE VALIDATION
============================================================

Before generating the final response, validate:

1. Evidence exists.
2. Evidence belongs to the requested task.
3. Sources are authorized.
4. Evidence is internally consistent.
5. Citations exist for factual claims.
6. No unsupported claims are generated.

Implement evidence validation statuses:

- VALID
- PARTIAL
- CONFLICTING
- INSUFFICIENT
- UNAUTHORIZED

============================================================
9. REASONING ENGINE
============================================================

Implement a controlled reasoning layer.

IMPORTANT:

Do NOT expose hidden chain-of-thought.

The system may internally derive conclusions, but the user-visible response must contain only:

- conclusion
- supporting evidence
- citations
- confidence
- warnings
- recommended next action

Example:

Question:
"Which test cases cover appointment cancellation?"

Response:

{
  status: "SUCCESS",
  answer: "...",
  evidence: [...],
  citations: [...],
  confidence: 0.91,
  warnings: []
}

============================================================
10. LLM PROVIDER ABSTRACTION
============================================================

Create an LLM provider interface.

Example:

LLMProvider:

- generate()
- classify()
- plan()
- summarize()

Create:

DeterministicProvider

This provider must work without external API credentials.

It should provide deterministic behavior for local development/testing.

Create a future-compatible provider boundary for:

- OpenAI
- Azure OpenAI
- other approved enterprise LLM providers

Do NOT require API keys.

Do NOT expose or commit secrets.

If no external model is configured:

use DeterministicProvider.

Clearly label it:

DEVELOPMENT_DETERMINISTIC_PROVIDER

Do NOT claim this is equivalent to a production LLM.

============================================================
11. CONFIDENCE ENGINE
============================================================

Implement deterministic confidence scoring.

Confidence should consider:

- evidence count
- source quality
- retrieval scores
- evidence consistency
- task classification confidence
- tool execution success
- citation coverage

Example ranges:

0.90–1.00 = HIGH
0.75–0.89 = MEDIUM_HIGH
0.50–0.74 = MEDIUM
0.25–0.49 = LOW
0.00–0.24 = VERY_LOW

The exact formula must be documented.

============================================================
12. GUARDRAILS
============================================================

Implement agent guardrails.

The agent must NOT:

- fabricate information
- bypass authorization
- access restricted sources
- modify Jira without explicit approval
- modify Confluence without explicit approval
- delete information
- execute destructive actions
- claim an action was completed when it was only recommended
- expose secrets
- expose PHI
- bypass MCP security

Read-only actions can execute automatically.

Potentially impactful actions must require approval.

============================================================
13. HUMAN-IN-THE-LOOP
============================================================

Implement approval foundation.

Actions requiring approval include:

- create Jira issue
- update Jira issue
- create Confluence page
- update Confluence page
- delete operations
- destructive test execution
- production-impacting actions

For Step 8, implement approval as a deterministic local workflow.

Example:

Agent recommendation
      |
      v
Approval Required
      |
      +--> APPROVED
      |
      +--> REJECTED
      |
      +--> EXPIRED

Do NOT perform actual destructive operations.

============================================================
14. AGENT RESPONSE CONTRACT
============================================================

Create a canonical response:

{
  responseId,
  taskId,
  status,
  answer,
  taskType,
  plan,
  toolCalls,
  evidence,
  citations,
  confidence,
  warnings,
  approval,
  audit,
  generatedAt
}

Statuses:

- SUCCESS
- PARTIAL
- NO_EVIDENCE
- NEEDS_APPROVAL
- ACCESS_DENIED
- ERROR

============================================================
15. AGENT AUDIT
============================================================

Create agent audit logging.

Every agent request must generate an audit record.

Include:

- responseId
- taskId
- timestamp
- role
- taskType
- toolsCalled
- toolResults
- evidenceCount
- confidence
- finalStatus
- approvalStatus
- durationMs

Store locally as NDJSON:

.tmp/agent-runtime/agent-audit.ndjson

Do not store secrets.

============================================================
16. FRONTEND AI AGENT UI
============================================================

Create a new UI page:

/agent

The UI must demonstrate the actual Step 8 runtime.

Include:

### Agent Chat / Task Input

Text input:

data-testid="agent-task-input"

Button:

data-testid="agent-task-submit"

### Task Analysis

Display:

- task type
- task confidence
- entities

Selectors:

agent-task-type
agent-task-confidence

### Plan

Display:

- ordered plan steps
- selected MCP tools
- purpose

Selectors:

agent-plan
agent-plan-step
agent-plan-tool

### Tool Execution

Display:

- tool name
- status
- request ID
- duration
- source

Selectors:

agent-tool-call
agent-tool-name
agent-tool-status
agent-tool-request-id

### Evidence

Display:

- source
- source ID
- evidence content
- score
- traceability IDs

Selectors:

agent-evidence
agent-evidence-source
agent-evidence-score

### Final Response

Display:

- answer
- confidence
- citations
- warnings
- status

Selectors:

agent-response
agent-confidence
agent-citation
agent-warning
agent-status

### Approval

If approval is required, show:

- reason
- action
- approval status
- approve/reject controls

Selectors:

agent-approval
agent-approve
agent-reject

============================================================
17. FRONTEND SECURITY
============================================================

Reuse existing role/access-control model.

Do not allow Patient to access privileged agent operations.

The UI must reflect authorization failures returned by the agent runtime.

Do not bypass MCP authorization.

============================================================
18. CLI
============================================================

Implement:

npm run agent:task -- "Find the acceptance criteria for appointment cancellation."

Also support:

npm run agent:task -- "What test cases cover appointment cancellation?"

npm run agent:task -- "Why did the RAG evaluation fail?"

npm run agent:task -- "Show the traceability chain for appointment cancellation."

The CLI should print structured but human-readable output.

============================================================
19. TESTING
============================================================

Create:

agent/tests/step8-agent-runtime.test.js

Test at minimum:

1. Task classification.
2. Jira tool selection.
3. Confluence tool selection.
4. Traceability tool selection.
5. RAG tool selection.
6. RAG evaluation tool selection.
7. MCP tool execution.
8. Evidence collection.
9. Evidence validation.
10. Citation generation.
11. Confidence scoring.
12. No-evidence handling.
13. Authorization failure.
14. Guardrail enforcement.
15. Approval-required action.
16. Audit generation.

============================================================
20. BDD AUTOMATION
============================================================

Create:

automation/features/functional/step8-ai-agent.feature

Automate ONLY a SMALL targeted subset.

Do NOT automate all agent scenarios.

Recommended scenarios:

1. User can open AI Agent page.
2. User can submit a QA question.
3. Agent displays task classification.
4. Agent displays selected MCP tool.
5. Agent displays evidence.
6. Agent displays grounded response.
7. Agent displays confidence.
8. Agent shows no-evidence response.
9. Unauthorized role receives access denial.

Target:

8–10 scenarios maximum.

Do NOT run the full regression suite.

============================================================
21. AGENT EVALUATION FOUNDATION
============================================================

Prepare agent evaluation metadata for future Step 9/10.

Track:

- task classification accuracy
- tool selection accuracy
- tool execution success
- evidence precision
- evidence recall
- citation coverage
- answer relevance
- groundedness
- confidence calibration
- human approval rate

Do NOT implement full agent evaluation yet.

============================================================
22. RAG + MCP + AGENT INTEGRATION
============================================================

Demonstrate this end-to-end flow:

User:
"Which test cases cover appointment cancellation?"

Agent:

1. Understand task.
2. Select MCP tool.
3. Call MCP.
4. Retrieve Jira/knowledge/test case evidence.
5. Validate evidence.
6. Generate answer.
7. Attach citations.
8. Calculate confidence.
9. Write audit record.
10. Display result in UI.

This is the key Step 8 demonstration.

============================================================
23. AI INDUSTRY CONCEPT STATUS
============================================================

Update:

- Agentic AI -> IMPLEMENTED
- AI Agent Runtime -> IMPLEMENTED
- Agent Planning -> IMPLEMENTED
- Tool Selection -> IMPLEMENTED
- Tool Calling -> IMPLEMENTED
- Evidence-based Agent -> IMPLEMENTED
- Agent Guardrails -> IMPLEMENTED
- Human-in-the-loop -> FOUNDATION/IMPLEMENTED
- Agent Confidence -> IMPLEMENTED
- Agent Observability -> IMPLEMENTED
- Agent Auditability -> IMPLEMENTED
- Agent Evaluation -> FOUNDATION
- LangGraph -> PLANNED STEP 9
- Multi-agent -> PLANNED STEP 10

Do NOT mark LangGraph or Multi-agent as implemented.

============================================================
24. DOCUMENTATION
============================================================

Create:

docs/architecture/AI_AGENT_ARCHITECTURE.md
docs/architecture/AI_AGENT_PLANNING.md
docs/architecture/AI_AGENT_TOOL_SELECTION.md
docs/architecture/AI_AGENT_EVIDENCE.md
docs/architecture/AI_AGENT_GUARDRAILS.md
docs/architecture/AI_AGENT_HUMAN_APPROVAL.md
docs/architecture/AI_AGENT_OBSERVABILITY.md

Create:

docs/implementations/8-ai-agent-runtime/

Files:

- prompt.md
- README.md
- implementation-report.pdf
- interview-notes.md
- response.md

Update:

README.md
CHANGELOG.md
docs/IMPLEMENTATION_INDEX.md
docs/INTERVIEW_GUIDE.md
docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md
docs/qa/AI_QUALITY_GATES.md
knowledge/requirements-traceability.md

============================================================
25. TRACEABILITY
============================================================

Extend the project traceability:

BRD
-> PRD
-> Epic
-> User Story
-> Acceptance Criteria
-> Jira
-> Confluence
-> Knowledge Document
-> Chunk
-> Embedding
-> Vector
-> Retrieval
-> RAG Answer
-> Citation
-> Evaluation Dataset
-> Evaluation Case
-> Evaluation Run
-> Metric
-> Quality Gate
-> MCP Tool
-> MCP Server
-> MCP Client
-> Tool Result
-> AI Agent
-> Task
-> Plan
-> Tool Selection
-> Tool Execution
-> Evidence
-> Reasoning
-> Response
-> Citation
-> Confidence
-> Audit
-> Test Scenario
-> Test Case
-> BDD
-> Automation
-> Execution

============================================================
26. VALIDATION
============================================================

Run targeted validation only.

Required:

agent:
- npm test
- npm run agent:task -- "Find the acceptance criteria for appointment cancellation."

rag:
- npm test

mcp/runtime:
- npm test

frontend:
- npm run lint

automation:
- npm run typecheck

Run targeted Step 8 BDD scenarios only.

Do NOT run full regression.

If frontend build encounters the already-known Vite EPERM environment issue:

- document it
- do not redesign the application to work around it
- do not claim build PASS

============================================================
27. GIT / DOCUMENTATION
============================================================

Before finishing:

1. Verify all Step 8 files.
2. Verify no existing Step 1–7 functionality was removed.
3. Update implementation index.
4. Update roadmap.
5. Update traceability.
6. Update README.
7. Update changelog.
8. Create Step 8 documentation package.
9. Verify git diff.
10. Commit:

feat(step-8): implement ai agent runtime

11. Push to origin/main if repository permissions allow.

============================================================
28. IMPORTANT CONSTRAINTS
============================================================

DO NOT:

- implement LangGraph
- implement multi-agent
- implement autonomous destructive operations
- require external LLM API keys
- introduce PHI
- fabricate Jira/Confluence/RAG information
- bypass MCP
- bypass authorization
- run the entire regression suite
- automate all 96 scenarios
- rewrite previous architecture unnecessarily

DO:

- reuse Steps 4–7
- demonstrate real Agent -> MCP -> RAG/Jira/Confluence flow
- keep deterministic local execution possible
- create production-ready interfaces
- create a clear future boundary for real LLM integration
- create UI
- create targeted automation
- maintain complete traceability
- maintain auditability
- maintain evidence/citation discipline

============================================================
29. FINAL RESPONSE FORMAT
============================================================

At completion, provide:

# Step 8 Response

## 1. Status

PASS / PARTIAL / FAIL

## 2. Objective

## 3. Architecture Implemented

## 4. Agent Runtime

## 5. Task Understanding

## 6. Planning

## 7. MCP Integration

## 8. Tool Selection

## 9. Evidence Management

## 10. Evidence Validation

## 11. Reasoning / Response Generation

## 12. Confidence

## 13. Guardrails

## 14. Human-in-the-Loop

## 15. Agent Audit / Observability

## 16. Frontend Agent UI

## 17. CLI

## 18. Automation

## 19. Test Results

## 20. AI Industry Concepts

## 21. RAG + MCP + Agent Demonstration

## 22. Security

## 23. Traceability

## 24. Files Created

## 25. Files Modified

## 26. Documentation

## 27. Git

## 28. Known Issues

## 29. Next Recommended Step

STOP after completing Step 8.

Do not automatically start Step 9.
