# RAG Quality Gate Architecture (Step 6)

## Purpose
Apply deterministic evaluation thresholds to RAG runs and classify run health as `PASS`, `WARN`, or `FAIL`.

## Inputs
- Aggregated metric summary:
  - `contextPrecision`
  - `contextRecall`
  - `faithfulness`
  - `answerRelevance`
  - `groundedness`
  - `overallScore`
- Threshold configuration.

## Default Development Thresholds
- contextPrecision >= 0.55
- contextRecall >= 0.55
- faithfulness >= 0.60
- answerRelevance >= 0.60
- groundedness >= 0.70
- minimumOverallScore >= 0.62

## Decision Logic
- `FAIL`: one or more metrics materially below threshold.
- `WARN`: minor degradation around threshold.
- `PASS`: all mandatory checks satisfy thresholds.

## Step 6 Behavior
- Quality gate failures are not hidden.
- Safe no-evidence cases can still pass at case level when expected.
- Run-level failures drive failure analysis and improvement backlog.
