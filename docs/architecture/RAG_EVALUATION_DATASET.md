# RAG Evaluation Dataset (Step 6)

## Dataset
- File: `rag/data/rag-evaluation-dataset.sample.json`
- Dataset ID: `careflow-rag-eval-v1`
- Version: `1.0.0`
- Cases: `18`

## Case Contract
Each evaluation case contains:
- `caseId`
- `question`
- `expectedSources`
- `expectedAnswer`
- `referenceContext`
- `expectedTraceabilityIds`
- `role`
- `category`
- `metadata`

## Categories Covered
- `REQUIREMENT_RETRIEVAL`
- `ACCEPTANCE_CRITERIA`
- `TEST_CASE_RETRIEVAL`
- `DEFECT_RETRIEVAL`
- `TRACEABILITY`
- `CONFLUENCE_KNOWLEDGE`
- `UI_ARCHITECTURE`
- `AUTOMATION_GOVERNANCE`
- `ACCESS_CONTROL`
- `NO_EVIDENCE`

## Dataset Rules
- Synthetic/local project knowledge only.
- No PHI.
- No fabricated Jira/Confluence entities.
- Duplicate case IDs are blocked by validation.
- Missing required fields fail validation.
