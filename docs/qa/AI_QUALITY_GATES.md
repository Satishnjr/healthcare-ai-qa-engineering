# AI Quality Gates

## Purpose
Define release-control gates for functional QA, automation quality, RAG quality, agent quality, security, and observability.

## Functional QA Gate (Planned Future Runtime)
- Smoke pass rate threshold
- Regression pass rate threshold
- Critical open defects threshold

## Automation Gate (Planned Future Runtime)
- Automation pass rate threshold
- Flaky test maximum threshold

## RAG Gate (Step 6 Local Runtime Implemented)
- Retrieval quality
- Faithfulness
- Context precision
- Context recall
- Answer relevancy
- Groundedness
- No-evidence expected/unexpected handling
- Access-control retrieval checks

## Agent Gate (Step 8 Local Runtime Foundation Implemented)
- Task success rate
- Tool-call success rate
- Failure rate
- Human escalation/approval rate
- Evidence presence and citation coverage
- Authorization-denial handling

## MCP Gate (Step 7 Local Runtime Implemented)
- Required tool registration count and names
- Schema validation for valid/invalid payloads
- Structured error contract consistency
- Role authorization enforcement
- Deterministic tool discovery and invocation success
- Audit log generation with request IDs

## Security Gate (Planned Future Runtime)
- Prompt injection detection
- Sensitive data leakage checks
- Unauthorized tool usage checks
- Guardrail violations threshold

## Observability Gate (Planned Future Runtime)
- Error rate
- Latency
- Token usage
- Cost
- Trace completeness

## Implemented in Step 6 (Local Evaluation Runtime)
- Deterministic RAG evaluation run execution (`npm run rag:evaluate`).
- Deterministic metric aggregation for:
  - context precision
  - context recall
  - faithfulness
  - answer relevance
  - groundedness
- Local configurable quality gate with `PASS/WARN/FAIL`.
- Run comparison support (`IMPROVED/REGRESSED/UNCHANGED`).
- Failure category output for QA triage.

## Implemented Previously in Step 1.10
- Gate taxonomy and ownership model.
- Required metrics and governance expectations.
- Release-decision contract: mandatory gates must pass before release sign-off.

## Planned Future Implementation
- Runtime gate executors in CI/CD.
- Automated pass/fail policies with pipeline enforcement.
- Evidence publication to reporting dashboards.

## Implemented in Step 7 (Local MCP Runtime)
- Deterministic MCP tool runtime validation (`mcp/runtime` tests).
- Tool discovery + invocation validation via MCP client harness.
- Structured error codes for MCP tools:
  - `INVALID_INPUT`
  - `NOT_FOUND`
  - `ACCESS_DENIED`
  - `NO_EVIDENCE`
  - `TOOL_NOT_AVAILABLE`
  - `INTERNAL_ERROR`
- Authorization checks per role and required scope.
- NDJSON audit telemetry for each tool call.

## Implemented in Step 8 (Local Agent Runtime)
- Deterministic single-agent runtime quality signals:
  - task classification confidence
  - tool selection and execution outcomes
  - evidence validation status
  - citation coverage
  - deterministic confidence score and band
  - guardrail and approval state
- Agent audit telemetry:
  - `.tmp/agent-runtime/agent-audit.ndjson`
- Gate status model used in canonical response:
  - `SUCCESS`, `PARTIAL`, `NO_EVIDENCE`, `NEEDS_APPROVAL`, `ACCESS_DENIED`, `ERROR`

## Step 6 Threshold Baseline (Development)
- contextPrecision >= 0.55
- contextRecall >= 0.55
- faithfulness >= 0.60
- answerRelevance >= 0.60
- groundedness >= 0.70
- minimumOverallScore >= 0.62

These are development quality gates, not production release gates.

## Step 1.15 AI-Ready Automation Governance Extension

### Configurable Target Gates (Foundation)
- RAG gates (future runtime):
  - faithfulness >= configurable target
  - context relevance >= configurable target
  - hallucination rate <= configurable threshold
- Agent gates (future runtime):
  - task success >= configurable target
  - tool-call accuracy >= configurable target
  - unsafe-action rate = 0
- Automation gates:
  - deterministic smoke subset must pass
  - no unexplained critical failure artifacts
  - no fabricated execution evidence

### Human Approval Gate
Mandatory human approval for healthcare-sensitive, security-sensitive, destructive, ambiguous, or low-confidence outcomes.

### Step 1.15 Status
- IMPLEMENTED: governance-level gate definitions and policy contract.
- PLANNED: runtime metric collection and CI enforcement.
