# Step 6 Interview Notes

## What did you build in Step 6?
I built a deterministic RAG evaluation runtime that executes dataset-driven RAG queries, calculates quality metrics, applies quality gates, classifies failures, stores run artifacts, compares runs, and surfaces results in the CareFlow UI.

## Did you use official RAGAS runtime?
No. Step 6 implements local deterministic evaluators with a RAGAS-compatible architecture boundary. Official RAGAS library runtime integration is intentionally deferred.

## What metrics are implemented?
- context precision
- context recall
- faithfulness
- answer relevance
- groundedness

## How are no-evidence cases handled?
No-evidence is treated as PASS only when the evaluation case explicitly expects no-evidence. Unexpected no-evidence is classified as failure (`NO_EVIDENCE_UNEXPECTED`).

## How is access control validated?
Role-specific cases validate retrieval behavior. For example, patient role retrieval is checked to avoid restricted Jira/team-only knowledge leakage.

## What did the quality gate show?
Latest Step 6 local run executed successfully but quality gate result is `FAIL` due low faithfulness and answer relevance scores. This is intentional transparency and demonstrates measurable improvement backlog.

## What is next after Step 6?
STEP 7 - MCP runtime implementation.
