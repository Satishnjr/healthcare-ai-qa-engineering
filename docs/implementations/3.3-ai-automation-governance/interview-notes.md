# Step 1.15 Interview Notes

## Positioning
Step 1.15 is a governance-first architecture step that prepares AI-ready QA automation without pretending runtime AI capabilities exist.

## Key Interview Messages
- We intentionally did not automate all 96 cases.
- We preserved a stable deterministic subset (20) and classified the rest for AI-assisted/agentic/manual/future pathways.
- We created handoff contracts so future agents can execute work safely and traceably.
- We established clear boundaries between deterministic execution and agentic decisioning.

## Why This Matters
- Prevents unstable over-automation.
- Preserves healthcare safety boundaries and synthetic-data-only policy.
- Enables future RAG/MCP/agent systems to consume structured QA artifacts.

## High-Value Talking Points
- Deterministic automation should optimize reliability, not vanity coverage.
- AI agents need contracts, observability, and approval gates before runtime rollout.
- Confidence scores are not evidence; evidence artifacts are mandatory.
- Human-in-the-loop is required for healthcare-sensitive and ambiguous outcomes.

## Q&A Readiness
- Why not automate all tests now?
  - Because many cases need backend contracts, UI completion, or AI-assisted variation logic; forcing deterministic scripts would reduce quality.
- How does AI select tests?
  - From classification matrix using priority, risk, dependency, and strategy metadata.
- How does Playwright fit with AI agents?
  - Playwright remains deterministic executor; agents plan/select under policy constraints.
- How are hallucinations controlled?
  - No-fabrication rules, mandatory evidence, observability, and human approval for sensitive decisions.