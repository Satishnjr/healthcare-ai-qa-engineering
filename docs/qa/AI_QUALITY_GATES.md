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

## Agent Gate (Planned Future Runtime)
- Task success rate
- Tool-call success rate
- Failure rate
- Human escalation rate

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
