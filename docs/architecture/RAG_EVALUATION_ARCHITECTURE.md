# RAG Evaluation Architecture (Step 6)

## Scope
Step 6 implements deterministic local RAG evaluation runtime over the existing Step 5 RAG pipeline.

## Flow
Evaluation Dataset -> Evaluation Runner -> RAG Query Runtime -> Metric Evaluators -> Quality Gate -> Evaluation Run -> Reports/UI

## Implemented Runtime Components
- `rag/src/evaluation/dataset.js`: dataset loading/validation/snapshotting.
- `rag/src/evaluation/metrics.js`: deterministic metric evaluators.
- `rag/src/evaluation/quality-gate.js`: configurable threshold evaluation.
- `rag/src/evaluation/failure-analysis.js`: deterministic failure categorization.
- `rag/src/evaluation/runner.js`: end-to-end run orchestration.
- `rag/src/evaluation/report.js`: markdown report generation.
- `rag/src/evaluation/comparison.js`: run-to-run comparison.
- `rag/src/cli-evaluate.js`: evaluation CLI entrypoint.

## Artifacts
- Runs: `.tmp/rag-evaluation/runs/*.json`
- Reports: `.tmp/rag-evaluation/reports/*.md`
- Comparisons: `.tmp/rag-evaluation/comparisons/*.json`
- Frontend public mirrors:
  - `frontend/public/rag/latest-evaluation-run.json`
  - `frontend/public/rag/latest-evaluation-comparison.json`

## Boundary
- Local deterministic evaluators implemented now.
- RAGAS/LLM judge evaluators are future pluggable providers.
- No MCP runtime, no agent runtime, no LangGraph runtime in Step 6.
