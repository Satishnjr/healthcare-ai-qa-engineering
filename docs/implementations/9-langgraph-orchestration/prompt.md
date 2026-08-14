# STEP 9 — LANGGRAPH ORCHESTRATION FOUNDATION

## Project

HealthCare-AI-QA / CareFlow Health

## Objective

Implement STEP 9 — LangGraph Orchestration Foundation on top of the existing STEP 8 deterministic AI Agent Runtime.

The goal is to introduce a production-oriented graph-based orchestration architecture for the existing single-agent workflow without breaking or duplicating the existing RAG, RAGAS/evaluation, MCP, or Agent implementations.

This step must demonstrate how LangGraph-style stateful orchestration can coordinate:

User Request
    ->
Task Understanding
    ->
Planning
    ->
Tool Selection
    ->
MCP Tool Execution
    ->
Evidence Collection
    ->
Evidence Validation
    ->
Reasoning
    ->
Response Generation
    ->
Confidence
    ->
Human Approval when required
    ->
Final Response
    ->
Audit / Observability

The implementation must remain deterministic/local and must not require an external LLM API key.

Do NOT implement multi-agent orchestration in Step 9.
Do NOT implement Step 10 functionality.
Do NOT replace the existing Step 8 agent runtime.
Do NOT duplicate Jira, Confluence, RAG, RAGAS, or MCP logic.

Step 9 must orchestrate the existing Step 8 components through a graph/state-machine architecture.

---

# IMPORTANT PROJECT RULES

1. First inspect the entire existing repository before making changes.

2. Inspect and understand:
   - Step 4.1 Jira + Confluence UI
   - Step 5 RAG runtime
   - Step 6 RAG evaluation
   - Step 7 MCP runtime
   - Step 8 AI Agent runtime

3. Reuse existing services wherever possible.

4. Do not duplicate existing:
   - RAG retrieval
   - RAG generation
   - RAG evaluation
   - MCP tools
   - MCP authorization
   - Agent evidence management
   - Agent confidence logic
   - Agent guardrails

5. Preserve existing APIs/contracts unless a backward-compatible extension is required.

6. Keep synthetic/local healthcare data only.

7. No PHI.

8. No external LLM/API dependency is required.

9. The implementation must work with the existing deterministic provider.

10. Do not claim that an actual production LangGraph package/runtime is implemented unless it is genuinely installed and used.

11. If the environment does not allow installing external dependencies, implement a LangGraph-compatible graph orchestration abstraction locally and document the boundary clearly.

12. The architecture must make it straightforward to replace the local graph engine with LangGraph later.

13. Preserve existing role-based access control.

14. Preserve MCP authorization.

15. Preserve human-in-the-loop approval boundaries.

16. Preserve evidence-based/no-fabrication behavior.

17. Preserve all existing Step 5, Step 6, Step 7, and Step 8 functionality.

18. Do not modify unrelated project areas.

19. Follow the existing project naming, coding, folder, documentation, and testing conventions.

---

# STEP 9 SCOPE

Implement the following:

## 9.1 Graph State

Create a strongly defined orchestration state.

The state should contain fields such as:

- requestId
- taskId
- originalRequest
- role
- taskType
- entities
- constraints
- requestedOutput
- riskLevel
- confidence
- plan
- currentNode
- currentStep
- toolCalls
- toolResults
- evidence
- evidenceValidation
- reasoning
- response
- citations
- warnings
- approvalStatus
- finalStatus
- errors
- timestamps
- auditMetadata

Do not blindly copy fields if existing Step 8 contracts already provide equivalent structures.

Reuse existing contracts where appropriate.

---

# 9.2 Graph Nodes

Implement explicit orchestration nodes.

Minimum required nodes:

1. task_understanding
2. planning
3. tool_selection
4. tool_execution
5. evidence_collection
6. evidence_validation
7. reasoning
8. response_generation
9. confidence_evaluation
10. approval_check
11. finalization
12. audit

Each node must:

- receive graph state
- perform one responsibility
- return state updates
- avoid hidden side effects where possible
- expose deterministic behavior
- be independently testable

---

# 9.3 Graph Edges

Implement explicit graph transitions.

Expected flow:

START
  ->
task_understanding
  ->
planning
  ->
tool_selection
  ->
tool_execution
  ->
evidence_collection
  ->
evidence_validation
  ->
reasoning
  ->
response_generation
  ->
confidence_evaluation
  ->
approval_check
  ->
finalization
  ->
audit
  ->
END

Implement conditional routing where appropriate.

Examples:

If evidence is insufficient:

evidence_validation
    ->
tool_selection

or

evidence_validation
    ->
finalization

depending on the existing Step 8 policy.

If approval is required:

approval_check
    ->
WAIT_FOR_APPROVAL

After approval:

WAIT_FOR_APPROVAL
    ->
finalization

If approval is rejected:

WAIT_FOR_APPROVAL
    ->
finalization

If a tool fails:

tool_execution
    ->
tool_selection

with a bounded retry count.

Do not create infinite loops.

---

# 9.4 Stateful Execution

The graph must preserve state across every node.

Implement:

- state initialization
- state updates
- node execution history
- current node
- previous node
- execution status
- transition history

Every graph execution should have a unique:

- graphRunId

The graphRunId must correlate with:

- requestId
- taskId
- MCP request IDs
- agent response ID
- audit records

---

# 9.5 Checkpointing

Implement a deterministic local checkpoint mechanism.

Checkpoint data should include:

- graphRunId
- state snapshot
- current node
- completed nodes
- pending node
- timestamp
- status

Store checkpoints locally under:

.tmp/langgraph-runtime/

Use JSON or another deterministic local format consistent with the repository.

Implement:

- save checkpoint
- load checkpoint
- resume execution
- list checkpoints
- cleanup/checkpoint retention

The implementation must demonstrate resumability.

---

# 9.6 Human-in-the-Loop

Reuse Step 8 approval manager.

Do not create a second approval system.

When approval is required:

Graph should transition into an explicit waiting state.

Example:

approval_check
    ->
WAITING_FOR_APPROVAL

The state must preserve:

- graphRunId
- taskId
- requested action
- reason
- evidence
- proposed response/action
- approval status

Implement resume APIs/CLI for:

- approve
- reject

The approval workflow must not execute destructive/write operations automatically.

---

# 9.7 MCP Integration

Reuse Step 7 MCP runtime.

The graph must call MCP through the existing Step 8 tool executor.

Do not call Jira, Confluence, or RAG directly from graph nodes.

Correct architecture:

LangGraph Node
    ->
Step 8 Tool Executor
    ->
Step 7 MCP Runtime
    ->
MCP Tool
    ->
Structured Result

Examples:

search_jira
get_jira_issue
search_confluence
get_confluence_page
get_traceability
search_test_cases
get_rag_context
query_rag
get_rag_evaluation
get_qa_knowledge

The graph should record:

- tool name
- input
- output status
- request ID
- duration
- evidence returned
- error

---

# 9.8 RAG Integration

Reuse Step 5 RAG runtime through the existing MCP boundary.

Do not implement a new RAG pipeline.

The graph must support:

- get_rag_context
- query_rag

Evidence returned from RAG must flow into:

evidence_collection
    ->
evidence_validation
    ->
reasoning

Citations must be preserved.

---

# 9.9 RAG Evaluation Integration

Reuse Step 6 evaluation runtime.

The graph should be capable of requesting:

- latest evaluation
- evaluation run
- evaluation case
- comparison

through:

get_rag_evaluation

Do not implement another RAGAS evaluator.

---

# 9.10 Error Handling

Implement structured graph error handling.

Required categories:

- INVALID_REQUEST
- TASK_ANALYSIS_FAILURE
- PLANNING_FAILURE
- TOOL_SELECTION_FAILURE
- TOOL_EXECUTION_FAILURE
- EVIDENCE_FAILURE
- VALIDATION_FAILURE
- REASONING_FAILURE
- RESPONSE_FAILURE
- APPROVAL_REQUIRED
- APPROVAL_REJECTED
- CHECKPOINT_FAILURE
- GRAPH_TIMEOUT
- GRAPH_MAX_STEPS
- INTERNAL_ERROR

The graph must never silently swallow errors.

---

# 9.11 Retry Policy

Implement bounded retries.

Example:

MAX_TOOL_RETRIES = 2

Track:

- retryCount
- failedNode
- error
- retryReason

Do not retry:

- ACCESS_DENIED
- INVALID_INPUT
- NOT_FOUND
- APPROVAL_REJECTED

Retry only transient/runtime failures where appropriate.

---

# 9.12 Loop Protection

Implement:

- max graph steps
- max tool calls
- max retries
- timeout protection

Example development defaults:

MAX_GRAPH_STEPS = 20
MAX_TOOL_CALLS = 10
MAX_RETRIES = 2

Make these configurable.

If limits are exceeded:

finalStatus = FAILED

and provide a structured warning/error.

---

# 9.13 Deterministic Execution

The Step 9 implementation must work without:

- OpenAI API
- Azure OpenAI
- Anthropic
- Gemini
- Groq
- external model APIs

Use the existing Step 8 deterministic provider.

If a LangGraph package is unavailable because of environment/network restrictions:

Implement a local graph engine abstraction with:

- StateGraph
- Node
- Edge
- ConditionalEdge
- START
- END
- Checkpointer

Document that this is a LangGraph-compatible development abstraction rather than official LangGraph runtime.

If the repository already has LangGraph installed and usable, prefer the real package.

Do not install unnecessary dependencies.

---

# 9.14 Graph Runtime API

Implement a clear runtime API.

Example conceptual interface:

createGraph()
initializeState(request)
run(request)
resume(graphRunId)
approve(graphRunId)
reject(graphRunId)
getState(graphRunId)
getHistory(graphRunId)

Use the project's existing coding conventions.

---

# 9.15 CLI

Implement CLI commands.

Examples:

npm run agent:graph -- "Find the acceptance criteria for appointment cancellation."

npm run agent:graph:status -- "<graphRunId>"

npm run agent:graph:resume -- "<graphRunId>"

npm run agent:graph:approve -- "<graphRunId>"

npm run agent:graph:reject -- "<graphRunId>"

Use actual package naming conventions from the existing project.

The CLI output must clearly show:

- graphRunId
- taskId
- current node
- execution path
- MCP tools called
- evidence count
- confidence
- approval status
- final status
- response
- citations

---

# 9.16 Frontend UI

Extend the existing Agent UI.

Do not create a disconnected application.

Add a LangGraph/Orchestration section to:

/agent

Display:

- graph runtime status
- graphRunId
- current node
- current state
- execution timeline
- node status
- transition history
- MCP tool calls
- evidence
- confidence
- approval state
- final response
- citations
- errors/warnings

Add selectors:

- agent-graph
- agent-graph-run-id
- agent-graph-current-node
- agent-graph-node
- agent-graph-node-status
- agent-graph-transition
- agent-graph-tool-call
- agent-graph-tool-name
- agent-graph-tool-status
- agent-graph-evidence
- agent-graph-confidence
- agent-graph-approval
- agent-graph-resume
- agent-graph-approve
- agent-graph-reject
- agent-graph-response
- agent-graph-error

Make the graph execution path understandable to a QA engineer.

---

# 9.17 Visual Execution Timeline

Implement a clear visual representation such as:

START
  |
Task Understanding
  |
Planning
  |
Tool Selection
  |
MCP Tool Execution
  |
Evidence Collection
  |
Evidence Validation
  |
Reasoning
  |
Response Generation
  |
Confidence
  |
Approval Check
  |
Finalization
  |
Audit
  |
END

Show:

PASS
RUNNING
WAITING
SKIPPED
FAILED

Use the existing application style.

---

# 9.18 Automation

Create targeted Step 9 BDD automation.

File:

automation/features/functional/step9-langgraph-orchestration.feature

Minimum scenarios:

1. User can open Agent orchestration page.
2. User can submit an agent task.
3. Graph run ID is displayed.
4. Task understanding node executes.
5. Planning node executes.
6. MCP tool execution appears.
7. Evidence is collected.
8. Evidence validation appears.
9. Final response is displayed.
10. Confidence is displayed.
11. Graph execution history is visible.
12. Graph checkpoint can be resumed.
13. Approval-required workflow enters waiting state.
14. Approved workflow resumes.
15. Rejected approval ends safely.
16. Unauthorized role cannot execute privileged workflow.
17. Graph max-step protection works.
18. Tool failure is represented correctly.

Use stable selectors.

Do not make tests dependent on external APIs.

---

# 9.19 Unit Tests

Add comprehensive Step 9 tests.

Minimum coverage:

- state initialization
- node execution
- node transition
- conditional edge
- successful graph execution
- tool failure
- retry
- retry exhaustion
- evidence failure
- no evidence
- checkpoint save
- checkpoint load
- resume
- approval required
- approval approve
- approval reject
- max steps
- max tool calls
- authorization
- audit correlation

---

# 9.20 Integration Tests

Test:

Step 8 Agent
    ->
Step 9 Graph
    ->
Step 7 MCP
    ->
Step 5 RAG
    ->
Evidence
    ->
Response

At least one end-to-end deterministic scenario must pass.

Example:

"Find the acceptance criteria for appointment cancellation."

Expected flow:

task_understanding
planning
tool_selection
query_rag or get_qa_knowledge
evidence_collection
evidence_validation
reasoning
response_generation
confidence_evaluation
approval_check
finalization
audit

---

# 9.21 Observability

Implement graph telemetry.

Store NDJSON under:

.tmp/langgraph-runtime/

Capture:

- graphRunId
- requestId
- taskId
- timestamp
- node
- transition
- durationMs
- status
- toolName
- toolRequestId
- evidenceCount
- confidence
- approvalStatus
- finalStatus
- errorCode

Ensure correlation across:

Agent
MCP
RAG
Evaluation
Graph

---

# 9.22 Auditability

Every graph run must be auditable.

A reviewer should be able to answer:

1. What did the user ask?
2. What task type was identified?
3. What plan was created?
4. Which graph nodes executed?
5. Which MCP tools were called?
6. What evidence was returned?
7. Was evidence sufficient?
8. What reasoning path was used?
9. What confidence was calculated?
10. Was human approval required?
11. What was the final response?
12. What citations were provided?
13. Did any retries occur?
14. Did any node fail?
15. What was the final status?

---

# 9.23 Security

Maintain:

- synthetic-only data
- no PHI
- role-based access
- MCP authorization
- no secret storage
- no-fabrication policy
- evidence-based response
- human approval for sensitive/write operations
- bounded execution
- audit trail

Do not weaken Step 7 MCP authorization.

---

# 9.24 Architecture Documentation

Create:

docs/architecture/LANGGRAPH_ARCHITECTURE.md
docs/architecture/LANGGRAPH_STATE.md
docs/architecture/LANGGRAPH_NODES.md
docs/architecture/LANGGRAPH_EDGES.md
docs/architecture/LANGGRAPH_CHECKPOINTING.md
docs/architecture/LANGGRAPH_HUMAN_APPROVAL.md
docs/architecture/LANGGRAPH_OBSERVABILITY.md
docs/architecture/LANGGRAPH_MCP_INTEGRATION.md

Explain:

- why graph orchestration is needed
- how Step 8 differs from Step 9
- state model
- nodes
- edges
- conditional routing
- checkpointing
- resume
- human-in-the-loop
- MCP integration
- RAG integration
- observability
- security
- future migration to official LangGraph

---

# 9.25 Interview Documentation

Update:

docs/INTERVIEW_GUIDE.md

Add interview topics:

- What is LangGraph?
- Why use graph orchestration?
- Agent vs workflow vs graph
- StateGraph
- Nodes
- Edges
- Conditional edges
- Checkpointing
- Human-in-the-loop
- Durable execution
- Retry handling
- Loop prevention
- MCP + LangGraph
- RAG + LangGraph
- Agent + LangGraph
- LangGraph vs LangChain
- LangGraph vs custom orchestration
- How QA engineers test agent workflows
- How to test deterministic graph execution
- How to test failure paths
- How to test approval workflows
- How to test agent observability

---

# 9.26 AI Industry Roadmap

Update:

docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md

Status after Step 9 should accurately reflect:

RAG -> IMPLEMENTED
RAG Evaluation -> IMPLEMENTED
RAGAS-compatible Evaluation -> IMPLEMENTED LOCALLY
MCP -> IMPLEMENTED
MCP Tool Calling -> IMPLEMENTED
AI Agent -> IMPLEMENTED
Agent Planning -> IMPLEMENTED
Agent Tool Selection -> IMPLEMENTED
Agent Evidence -> IMPLEMENTED
Agent Guardrails -> IMPLEMENTED
LangGraph -> IMPLEMENTED / DEVELOPMENT RUNTIME
Graph Orchestration -> IMPLEMENTED
Stateful Agent Workflow -> IMPLEMENTED
Checkpointing -> IMPLEMENTED
Human-in-the-loop -> IMPLEMENTED
Agent Observability -> IMPLEMENTED
Multi-Agent -> PLANNED STEP 10

Do not mark official LangGraph production runtime as implemented unless the real package is actually used.

---

# 9.27 Traceability

Extend the existing traceability chain:

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
-> Context
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
-> Graph State
-> Graph Node
-> Graph Edge
-> MCP Execution
-> Evidence
-> Reasoning
-> Response
-> Confidence
-> Human Approval
-> Checkpoint
-> Audit
-> BDD
-> Automation
-> Execution

Update:

knowledge/requirements-traceability.md

---

# 9.28 Documentation Package

Create:

docs/implementations/9-langgraph-orchestration/prompt.md
docs/implementations/9-langgraph-orchestration/README.md
docs/implementations/9-langgraph-orchestration/interview-notes.md
docs/implementations/9-langgraph-orchestration/response.md
docs/implementations/9-langgraph-orchestration/implementation-report.pdf

The `prompt.md` must contain this complete implementation prompt.

The `response.md` must contain the final implementation report.

The PDF must summarize:

- architecture
- implementation
- tests
- execution examples
- screenshots if practical
- known issues
- future improvements

---

# 9.29 Root Documentation

Update:

README.md
CHANGELOG.md
docs/IMPLEMENTATION_INDEX.md
docs/INTERVIEW_GUIDE.md
docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md
knowledge/requirements-traceability.md

Do not remove previous Step 8 information.

---

# 9.30 Package Structure

Prefer a structure similar to:

agent/
  src/
    graph/
      graph-runtime.js
      graph-state.js
      graph-nodes.js
      graph-edges.js
      graph-builder.js
      graph-executor.js
      graph-checkpointer.js
      graph-history.js
      graph-errors.js
      graph-config.js

Use existing project conventions if another structure is already established.

Do not blindly create duplicate abstractions if equivalent components already exist.

---

# 9.31 Git

Do not commit unrelated changes.

At the end:

1. Show git status.
2. Identify Step 9 changes.
3. Ensure no unrelated files are accidentally included.
4. Create commit:

feat(step-9): implement langgraph orchestration foundation

5. Push to origin/main only if repository policy and existing workflow allow it.

6. Verify:

git rev-parse HEAD
git ls-remote origin refs/heads/main

---

# 9.32 Validation Commands

Run appropriate commands based on the existing repository.

Minimum:

agent:
npm test

mcp/runtime:
npm test

rag:
npm test

frontend:
npm run lint

automation:
npm run typecheck

Step 9 targeted automation:

npx cucumber-js --tags "@step9"

Run the Step 9 CLI example.

Run at least one checkpoint/resume example.

Run at least one approval workflow.

Run at least one failure/retry scenario.

If any command fails because of the known environment EPERM issue:

- do not hide it
- document the exact command
- document the exact failure
- determine whether the failure is environmental or implementation-related
- continue with other validations

Do not mark the entire implementation as failed because of a known environment-only filesystem issue.

---

# 9.33 Final Response Format

At the end of implementation, create:

docs/implementations/9-langgraph-orchestration/response.md

Use this exact structure:

# Step 9 Response

## 1. Status

PASS / PARTIAL / FAIL

## 2. Objective

## 3. Architecture Implemented

## 4. Graph State

## 5. Graph Nodes

## 6. Graph Edges

## 7. Conditional Routing

## 8. MCP Integration

## 9. RAG Integration

## 10. RAG Evaluation Integration

## 11. Checkpointing

## 12. Resume

## 13. Human-in-the-Loop

## 14. Retry and Failure Handling

## 15. Loop Protection

## 16. Frontend UI

## 17. CLI

## 18. Automation

## 19. Unit Tests

## 20. Integration Tests

## 21. Test Results

## 22. Observability

## 23. Auditability

## 24. Security

## 25. AI Industry Concepts

## 26. Traceability

## 27. Files Created

## 28. Files Modified

## 29. Documentation

## 30. Git

## 31. Known Issues

## 32. Next Recommended Step

The response must contain exact test results and must distinguish:

PASS
BLOCKED
FAIL

Do not claim tests passed unless they actually passed.

---

# FINAL IMPORTANT REQUIREMENT

Before implementation:

- inspect existing Step 8 code
- inspect Step 7 MCP runtime
- inspect Step 5 RAG runtime
- inspect Step 6 evaluation runtime
- inspect existing frontend routes
- inspect existing automation conventions
- inspect existing documentation conventions

Then implement Step 9 incrementally.

Do not rewrite the project.

Do not create parallel implementations.

Do not remove working functionality.

Do not implement Step 10 multi-agent functionality.

The final result must clearly demonstrate:

RAG
+
RAG Evaluation
+
MCP
+
AI Agent
+
LangGraph-style Stateful Orchestration
+
Human-in-the-loop
+
Checkpoint/Resume
+
Observability
+
Auditability

as one coherent enterprise AI QA architecture.

Start implementation now.
