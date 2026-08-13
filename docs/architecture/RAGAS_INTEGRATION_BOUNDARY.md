# RAGAS Integration Boundary (Step 6)

## Current Implementation
- Local deterministic evaluator provider is active.
- Metrics implemented with deterministic scoring over retrieved evidence and outputs.

## Compatibility Design
The current architecture isolates evaluator logic behind provider methods:
- `evaluateContextPrecision`
- `evaluateContextRecall`
- `evaluateFaithfulness`
- `evaluateAnswerRelevance`
- `evaluateGroundedness`

This allows future replacement with:
- RAGAS-backed evaluators,
- LLM-judge evaluators,
without rewriting dataset contracts, runner contracts, quality-gate contracts, or UI contracts.

## Explicit Non-Claim
Step 6 does **not** claim official RAGAS library runtime integration.
It provides a RAGAS-compatible architecture with local deterministic evaluators.

## Future Path
- Step 6.x/Step 7+: optional Python bridge or service adapter for official RAGAS.
- Add evaluator provider selection configuration by run metadata.
