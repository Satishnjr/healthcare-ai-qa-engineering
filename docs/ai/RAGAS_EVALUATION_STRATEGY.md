# RAGAS Evaluation Strategy (Preparation)

## Scope
Preparation-only strategy for future RAG/RAGAS and agent evaluation. No RAGAS runtime execution is performed in Step 1.15.

## RAG Evaluation Dimensions
- Context precision
- Context recall
- Faithfulness
- Answer relevance

## Agent Evaluation Dimensions
- Task success rate
- Tool-call correctness
- Reasoning consistency
- Evidence quality
- Hallucination rate
- Policy compliance
- Human override rate

## Evaluation Datasets
- Requirements dataset: BRD/PRD/US/AC mappings
- Test intent dataset: TS/TC + expected strategy
- Artifact dataset: execution summary + failure evidence
- Governance dataset: approval-required policy cases

## Evaluation Runs
- `evaluation_run_id`
- `dataset_version`
- `model_version`
- `prompt_version`
- `tooling_version`
- `timestamp`
- `result_metrics`

## Versioning and Tracking
- Model versioning: required for comparability.
- Prompt versioning: required for reproducibility.
- Experiment tracking: store run-level metrics and deltas.

## Quality Gate Readiness
Results from RAG/agent evaluations will feed configurable AI quality gates defined in `docs/qa/AI_QUALITY_GATES.md`.

## Step 1.15 Boundary
- IMPLEMENTED: strategy and schema definitions.
- NOT IMPLEMENTED: RAGAS package installation, runtime scoring, automated gate enforcement.