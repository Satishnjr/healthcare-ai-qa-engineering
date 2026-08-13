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

## RAG Gate (Planned Future Runtime)
- Retrieval quality
- Faithfulness
- Context precision
- Context recall
- Answer relevancy

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

## Implemented Now in Step 1.10
- Gate taxonomy and ownership model.
- Required metrics and governance expectations.
- Release-decision contract: mandatory gates must pass before release sign-off.

## Planned Future Implementation
- Runtime gate executors in CI/CD.
- Automated pass/fail policies with pipeline enforcement.
- Evidence publication to reporting dashboards.
