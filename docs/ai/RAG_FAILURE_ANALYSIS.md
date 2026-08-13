# RAG Failure Analysis (Step 6)

## Scope
Deterministic failure analysis categories for Step 6 local evaluation runtime.

## Failure Catalog

| Failure | Symptom | Detection | Likely Cause | QA Validation | Future AI Analysis |
|---|---|---|---|---|---|
| Retrieval miss | Expected source not returned | low recall + missing expected source | weak query-vector match | inspect retrieved sources/chunks | semantic retriever diagnostics |
| Wrong source | Retrieved source unrelated to case | low precision | noisy ranking or overlapping tokens | review topK and filters | source-intent clustering |
| Low context recall | expected IDs missing | context recall below threshold | insufficient evidence coverage | validate `expectedTraceabilityIds` and source matches | traceability-aware retrieval tuning |
| Low context precision | many irrelevant chunks | context precision below threshold | score threshold too low | inspect chunk scores + content | learned reranker |
| Unsupported answer | answer not evidence-backed | low faithfulness | generator extraction mismatch | compare answer tokens with evidence | claim-level verification |
| Citation mismatch | answer exists but citations weak/none | citation checks fail | citation assembly issue | verify citation list integrity | evidence attribution model |
| Access violation | restricted source retrieved for role | access-control failure category | scope filtering defect | role-based retrieval tests | policy-aware evaluator |
| No-evidence mismatch | wrong handling of no-evidence | expected/unexpected mismatch category | unsafe refusal logic or over-filtering | case-level no-evidence assertions | refusal policy calibration |
| Dataset issue | malformed/duplicate case IDs | dataset validation failures | authoring error | pre-run dataset validation | dataset quality assistant |
| Embedding quality issue | weak semantic retrieval quality | recurring low recall/precision | deterministic fallback limits | metric trend review across runs | production embeddings + RAGAS |

## Step 6 Output
Failure categories emitted per case in run artifact:
- `RETRIEVAL_MISS`
- `WRONG_SOURCE`
- `LOW_CONTEXT_RECALL`
- `LOW_CONTEXT_PRECISION`
- `UNGROUNDED_ANSWER`
- `LOW_ANSWER_RELEVANCE`
- `ACCESS_CONTROL_FAILURE`
- `NO_EVIDENCE_EXPECTED`
- `NO_EVIDENCE_UNEXPECTED`
- `CITATION_FAILURE`
- `DATASET_ISSUE`
