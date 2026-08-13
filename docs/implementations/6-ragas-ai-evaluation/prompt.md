# STEP 6 — RAGAS & AI EVALUATION RUNTIME
# HealthCare-AI-QA / CareFlow Health

You are working inside the existing repository:

HealthCare-AI-QA

Repository root:

D:/SathishKumarN/Personal/Trainings/Canada Preparation/AI/Projects/HealthCare-AI-QA

============================================================
1. PRIMARY OBJECTIVE
============================================================

Implement STEP 6: RAGAS & AI Evaluation Runtime for the CareFlow Health QA platform.

STEP 5 has already implemented the local RAG runtime:

Knowledge Sources
    ↓
Document Normalization
    ↓
Chunking
    ↓
Embeddings
    ↓
Vector Store
    ↓
Retrieval
    ↓
Context Assembly
    ↓
Grounded Generation
    ↓
Citations / Evidence

STEP 6 must now evaluate the quality of that RAG pipeline.

The objective is NOT simply to create documentation.

Build a working, deterministic AI/RAG evaluation framework that can:

1. Load an evaluation dataset.
2. Execute RAG queries against the existing Step 5 runtime.
3. Capture retrieved context.
4. Capture generated answers.
5. Compare results against expected evidence/answers.
6. Calculate evaluation metrics.
7. Produce machine-readable evaluation results.
8. Produce human-readable reports.
9. Apply configurable quality thresholds.
10. Generate PASS / FAIL quality-gate decisions.
11. Track evaluation runs.
12. Compare evaluation runs.
13. Expose evaluation results to the CareFlow UI.
14. Prepare the architecture for future RAGAS integration.
15. Prepare the architecture for future AI observability, agents, MCP and LLMOps.

============================================================
2. VERY IMPORTANT — PROJECT GOVERNANCE
============================================================

Do NOT implement everything in this step.

Do NOT implement:

- MCP runtime
- MCP tools runtime
- AI Agent runtime
- LangGraph
- Multi-agent system
- autonomous test generation
- autonomous defect creation
- production Jira integration
- production Confluence integration
- real healthcare backend
- real PHI
- full 96-case automation
- full regression execution
- enterprise LLMOps platform
- production cloud vector database
- autonomous AI actions

Those belong to later steps.

STEP 6 is ONLY:

RAG evaluation
+
RAG quality measurement
+
evaluation datasets
+
evaluation runs
+
quality gates
+
evaluation reporting
+
evaluation UI
+
AI-quality readiness

============================================================
3. STEP NUMBERING GOVERNANCE
============================================================

Use:

STEP 6 — RAGAS & AI Evaluation Runtime

Do NOT create unnecessary:

6.1
6.2
6.3
6.4

unless a genuinely separate sub-phase becomes necessary.

Use decimal numbering only when the topic is clearly a related subtopic.

Future major phases remain:

STEP 7 — MCP Runtime
STEP 8 — AI Agent Runtime
STEP 9 — LangGraph Orchestration
STEP 10 — Multi-Agent System
STEP 11 — AI Security / Observability / LLMOps / Governance

Do not renumber existing steps.

============================================================
4. FIRST — INSPECT EXISTING REPOSITORY
============================================================

Before changing anything, inspect the current implementation.

Inspect:

README.md
CHANGELOG.md
docs/IMPLEMENTATION_INDEX.md
docs/INTERVIEW_GUIDE.md
knowledge/requirements-traceability.md
docs/ROADMAP_RESTRUCTURE.md
docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md

Inspect Step 5:

rag/package.json
rag/src/*
rag/tests/*
rag/data/rag-evaluation-dataset.sample.json

Especially inspect:

rag/src/rag-query-service.js
rag/src/retriever.js
rag/src/context-assembler.js
rag/src/generation-provider.js
rag/src/rag-runtime-boundary.js
rag/src/observability.js
rag/src/indexer.js

Inspect existing Step 4 / Step 4.1:

mcp/jira-confluence-foundation/
frontend/src/pages/knowledge-page.tsx
frontend/src/types/rag.ts
frontend/src/services/rag-client.ts

Inspect:

docs/ai/RAGAS_EVALUATION_STRATEGY.md

Do NOT duplicate existing contracts.

Reuse existing RAG runtime interfaces.

============================================================
5. CORE STEP 6 ARCHITECTURE
============================================================

Implement the following architecture:

Evaluation Dataset
        ↓
Evaluation Runner
        ↓
RAG Query Service
        ↓
Retrieved Context
        ↓
Generated Answer
        ↓
Metric Evaluators
        ↓
Evaluation Result
        ↓
Quality Gate
        ↓
Evaluation Run
        ↓
Report / UI / Machine-readable Artifact

Conceptual architecture:

                    ┌─────────────────────┐
                    │ Evaluation Dataset  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Evaluation Runner   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Existing RAG Runtime│
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 ▼                           ▼
        Retrieved Context             Generated Answer
                 │                           │
                 └─────────────┬─────────────┘
                               ▼
                    ┌─────────────────────┐
                    │ Metric Evaluators   │
                    └──────────┬──────────┘
                               ▼
                    ┌─────────────────────┐
                    │ Quality Gate        │
                    └──────────┬──────────┘
                               ▼
             ┌─────────────────┴─────────────────┐
             ▼                                   ▼
      Evaluation Report                    Evaluation UI

============================================================
6. RAGAS ARCHITECTURE
============================================================

Implement an evaluation abstraction compatible with RAGAS concepts.

Create interfaces/classes for:

- EvaluationMetric
- EvaluationDataset
- EvaluationCase
- EvaluationRun
- EvaluationResult
- EvaluationReport
- QualityGate

Metrics must be provider-independent.

The system should allow:

Development/local evaluators
        ↓
Future RAGAS evaluators
        ↓
Future LLM-based evaluators

Do NOT hard-code the system directly to the RAGAS library.

RAGAS compatibility should be architectural first.

============================================================
7. REQUIRED EVALUATION DATASET
============================================================

Expand the existing:

rag/data/rag-evaluation-dataset.sample.json

into a proper evaluation dataset.

Create a deterministic synthetic dataset containing approximately:

15–25 evaluation questions.

Do NOT create hundreds of questions.

The dataset should cover:

1. Jira requirements
2. Acceptance criteria
3. Confluence QA knowledge
4. Test cases
5. Defects
6. Traceability
7. Automation governance
8. UI architecture
9. Supported knowledge
10. Unsupported/no-evidence questions
11. Role/access-sensitive questions

Each evaluation case should contain fields such as:

{
  "caseId": "...",
  "question": "...",
  "expectedSources": [],
  "expectedAnswer": "...",
  "referenceContext": [],
  "expectedTraceabilityIds": [],
  "role": "...",
  "category": "...",
  "metadata": {}
}

Use only existing project knowledge.

Do NOT invent requirements.

Do NOT invent Jira issues.

Do NOT invent Confluence pages.

Do NOT invent healthcare facts.

============================================================
8. EVALUATION DATASET CATEGORIES
============================================================

Create categories such as:

- REQUIREMENT_RETRIEVAL
- ACCEPTANCE_CRITERIA
- TEST_CASE_RETRIEVAL
- DEFECT_RETRIEVAL
- TRACEABILITY
- CONFLUENCE_KNOWLEDGE
- UI_ARCHITECTURE
- AUTOMATION_GOVERNANCE
- ACCESS_CONTROL
- NO_EVIDENCE

Each category should be represented in the dataset.

============================================================
9. METRICS
============================================================

Implement local deterministic versions of the following metrics.

IMPORTANT:

These are development evaluators inspired by RAGAS concepts.

Do NOT falsely claim they are official RAGAS implementations.

------------------------------------------------------------
9.1 CONTEXT PRECISION
------------------------------------------------------------

Measure how much of the retrieved context is relevant to the question/reference.

Possible deterministic approach:

- expected source matching
- expected traceability ID matching
- token overlap
- source relevance

Return:

{
  "metric": "context_precision",
  "score": 0..1,
  "details": {}
}

------------------------------------------------------------
9.2 CONTEXT RECALL
------------------------------------------------------------

Measure whether expected evidence was retrieved.

Use:

- expected source IDs
- expected traceability IDs
- expected context terms

Return:

{
  "metric": "context_recall",
  "score": 0..1,
  "details": {}
}

------------------------------------------------------------
9.3 FAITHFULNESS
------------------------------------------------------------

Measure whether the generated answer is supported by retrieved evidence.

For local deterministic evaluation:

- compare answer claims/terms with retrieved context
- detect unsupported answer content
- verify citations

Return:

{
  "metric": "faithfulness",
  "score": 0..1,
  "details": {}
}

If a deterministic evaluator cannot reliably prove something, do NOT fabricate a perfect score.

Clearly document limitations.

------------------------------------------------------------
9.4 ANSWER RELEVANCE
------------------------------------------------------------

Measure whether the answer addresses the question.

Use deterministic similarity / keyword / semantic fallback logic.

Return:

{
  "metric": "answer_relevance",
  "score": 0..1,
  "details": {}
}

------------------------------------------------------------
9.5 GROUNDEDNESS
------------------------------------------------------------

Measure whether the answer is grounded in retrieved project evidence.

Use:

- citation presence
- source presence
- evidence overlap
- unsupported claim detection

Return:

{
  "metric": "groundedness",
  "score": 0..1,
  "details": {}
}

============================================================
10. METRIC PROVIDER ABSTRACTION
============================================================

Create a metric provider abstraction.

Example:

MetricEvaluator

Methods:

evaluateContextPrecision()
evaluateContextRecall()
evaluateFaithfulness()
evaluateAnswerRelevance()
evaluateGroundedness()

Allow future providers:

LocalDeterministicEvaluator
RagasEvaluator
LLMJudgeEvaluator

Do NOT implement the future providers now unless a local stub/interface is useful.

============================================================
11. EVALUATION RUNNER
============================================================

Create:

EvaluationRunner

Responsibilities:

1. Load dataset.
2. Validate dataset.
3. Execute each query through Step 5 RAG runtime.
4. Capture:
   - question
   - role
   - retrieved sources
   - retrieved chunks
   - answer
   - citations
   - confidence
   - warnings
5. Execute metrics.
6. Aggregate results.
7. Execute quality gates.
8. Produce evaluation run.

The runner must be deterministic where the underlying Step 5 runtime is deterministic.

============================================================
12. EVALUATION RESULT CONTRACT
============================================================

Each case result should contain:

{
  "caseId": "...",
  "question": "...",
  "role": "...",
  "category": "...",
  "answer": "...",
  "citations": [],
  "retrievedSources": [],
  "metrics": {
    "contextPrecision": 0,
    "contextRecall": 0,
    "faithfulness": 0,
    "answerRelevance": 0,
    "groundedness": 0
  },
  "overallScore": 0,
  "status": "PASS|FAIL|WARN",
  "warnings": []
}

Do not fabricate scores.

============================================================
13. EVALUATION RUN CONTRACT
============================================================

Create an evaluation run contract:

{
  "runId": "...",
  "timestamp": "...",
  "datasetId": "...",
  "datasetVersion": "...",
  "ragVersion": "...",
  "embeddingProvider": "...",
  "embeddingModel": "...",
  "generationProvider": "...",
  "generationModel": "...",
  "totalCases": 0,
  "passedCases": 0,
  "failedCases": 0,
  "metrics": {},
  "qualityGate": {},
  "results": []
}

Use actual values.

Do not invent model names.

============================================================
14. QUALITY GATES
============================================================

Implement configurable quality gates.

Example configuration:

{
  "contextPrecision": 0.70,
  "contextRecall": 0.70,
  "faithfulness": 0.80,
  "answerRelevance": 0.75,
  "groundedness": 0.80,
  "minimumOverallScore": 0.75
}

IMPORTANT:

Do not blindly use these values if the actual project data suggests another baseline.

Document the thresholds as DEVELOPMENT QUALITY GATES.

The gate should produce:

PASS
WARN
FAIL

Rules should be configurable.

Example:

PASS:
all mandatory metrics meet threshold

WARN:
minor threshold degradation

FAIL:
critical metric below minimum

Do not hide failures.

============================================================
15. NO-FABRICATION EVALUATION POLICY
============================================================

If RAG returns:

NO_EVIDENCE

the evaluator must treat that correctly.

For an evaluation case intentionally designed as unsupported:

NO_EVIDENCE can be PASS.

For a case where evidence should exist:

NO_EVIDENCE must be FAIL.

This distinction is extremely important.

Do NOT penalize safe refusal.

Do NOT reward fabricated answers.

============================================================
16. ACCESS-CONTROL EVALUATION
============================================================

Include evaluation cases where:

- Patient can access public knowledge.
- Patient cannot retrieve admin knowledge.
- Clinical roles can access team knowledge.
- Administrator can access admin knowledge.

The evaluator should validate:

retrieved sources
+
access scope

against expected role permissions.

Unauthorized retrieval must be a quality/security failure.

============================================================
17. EVALUATION RUN STORAGE
============================================================

Store evaluation runs locally.

Suggested:

.tmp/rag-evaluation/

Structure:

.tmp/rag-evaluation/
    datasets/
    runs/
    reports/
    comparisons/

Each run should have a stable run ID.

Do NOT commit runtime-generated artifacts unless they are explicitly intended as sample artifacts.

Update `.gitignore` appropriately.

============================================================
18. CLI
============================================================

Add commands to the RAG package.

Examples:

npm run rag:evaluate

npm run rag:evaluate:dataset

npm run rag:evaluate:report

npm run rag:evaluate:gate

Use the simplest clean command structure.

At minimum:

npm run rag:evaluate

must:

1. load dataset
2. execute evaluation
3. calculate metrics
4. run quality gates
5. write JSON result
6. print concise summary

Example:

RAG Evaluation Run
------------------
Dataset: careflow-rag-eval-v1
Cases: 20

Context Precision: 0.XX
Context Recall:    0.XX
Faithfulness:      0.XX
Answer Relevance:  0.XX
Groundedness:      0.XX
Overall Score:     0.XX

Quality Gate: PASS/WARN/FAIL

Do not fabricate numbers.

============================================================
19. REPORTING
============================================================

Generate:

1. Machine-readable JSON report.
2. Human-readable Markdown report.
3. Optional HTML report if straightforward.

The report should include:

- run information
- dataset information
- metric summary
- quality gate
- case summary
- failures
- warnings
- weakest cases
- strongest cases
- source retrieval information

============================================================
20. FAILURE ANALYSIS
============================================================

Add deterministic failure analysis.

For failed cases identify likely categories:

- RETRIEVAL_MISS
- WRONG_SOURCE
- LOW_CONTEXT_RECALL
- LOW_CONTEXT_PRECISION
- UNGROUNDED_ANSWER
- LOW_ANSWER_RELEVANCE
- ACCESS_CONTROL_FAILURE
- NO_EVIDENCE_EXPECTED
- NO_EVIDENCE_UNEXPECTED
- CITATION_FAILURE

Do NOT use an LLM for failure analysis yet.

Prepare the structure for future AI failure analysis.

============================================================
21. EVALUATION COMPARISON
============================================================

Implement run comparison.

Example:

Run A
vs
Run B

Compare:

- overall score
- context precision
- context recall
- faithfulness
- answer relevance
- groundedness
- passed cases
- failed cases

Report:

IMPROVED
REGRESSED
UNCHANGED

This will become important for future LLM/model/prompt versioning.

============================================================
22. FRONTEND EVALUATION UI
============================================================

Extend the existing CareFlow Knowledge UI.

Do NOT create a separate application.

Add an evaluation section/page.

Recommended route:

/knowledge/evaluation

or another route consistent with the existing architecture.

UI should display:

- latest evaluation run
- dataset name/version
- total cases
- passed cases
- failed cases
- overall score
- context precision
- context recall
- faithfulness
- answer relevance
- groundedness
- quality gate
- failed cases
- warnings
- run comparison

Use clear status indicators.

Example:

RAG Quality
PASS

Context Precision
82%

Context Recall
88%

Faithfulness
91%

Answer Relevance
86%

Groundedness
92%

Do not hard-code these example numbers.

Display actual evaluation results.

============================================================
23. EVALUATION CASE DETAIL
============================================================

Allow the user to inspect an evaluation case.

Show:

- question
- role
- category
- expected sources
- retrieved sources
- generated answer
- expected answer
- citations
- metric scores
- failure classification
- warnings

This is important for QA interviews and AI quality engineering.

============================================================
24. UI TESTABILITY
============================================================

Use stable:

data-testid

selectors.

Examples:

rag-evaluation-page
rag-evaluation-run
rag-evaluation-quality-gate
rag-evaluation-overall-score
rag-evaluation-context-precision
rag-evaluation-context-recall
rag-evaluation-faithfulness
rag-evaluation-answer-relevance
rag-evaluation-groundedness
rag-evaluation-failed-case
rag-evaluation-case-detail

Follow the existing UI testability architecture.

============================================================
25. AUTOMATION
============================================================

IMPORTANT:

Do NOT automate the entire evaluation framework.

Create ONLY a small targeted Step 6 automation feature.

Target:

4–7 scenarios maximum.

Recommended scenarios:

1. User can open RAG evaluation dashboard.
2. Latest evaluation run displays metric summary.
3. Quality gate status is visible.
4. User can inspect a failed evaluation case.
5. User can inspect evaluation evidence.
6. User can compare evaluation runs if comparison is implemented.

Only automate scenarios that are stable.

DO NOT run the full 96-case regression suite.

DO NOT run all previous automation.

Run ONLY:

- targeted Step 6 automation
- RAG evaluation tests
- frontend lint
- frontend build

Do NOT spend time fixing unrelated Firefox/WebKit issues.

============================================================
26. UNIT / INTEGRATION TESTS
============================================================

Create tests for:

1. Dataset validation.
2. Dataset duplicate case detection.
3. Dataset missing field detection.
4. Context precision.
5. Context recall.
6. Faithfulness.
7. Answer relevance.
8. Groundedness.
9. No-evidence expected case.
10. No-evidence unexpected case.
11. Access-control evaluation.
12. Quality gate PASS.
13. Quality gate WARN.
14. Quality gate FAIL.
15. Evaluation run generation.
16. Evaluation comparison.
17. Failure classification.

All tests must use synthetic project data.

Do not fabricate PASS results.

============================================================
27. RAGAS COMPATIBILITY
============================================================

Document clearly:

Current implementation:

LOCAL_DETERMINISTIC_EVALUATORS

Future implementation:

RAGAS / LLM-based evaluators

The architecture should allow replacing:

LocalDeterministicEvaluator

with:

RagasEvaluator

without rewriting:

- EvaluationDataset
- EvaluationRunner
- QualityGate
- EvaluationReport
- Evaluation UI

Do NOT install RAGAS unnecessarily if the current JavaScript/Node environment does not support it cleanly.

If Python is required for a future RAGAS integration, document it instead of forcing it into this step.

============================================================
28. AI OBSERVABILITY
============================================================

Extend the existing Step 5 observability metadata.

Evaluation telemetry should include:

- runId
- caseId
- timestamp
- datasetVersion
- ragVersion
- embeddingProvider
- embeddingModel
- generationProvider
- generationModel
- retrievalLatency
- evaluationLatency
- retrievedChunkIds
- scores
- qualityGate
- failureCategory

Do not store secrets.

Do not store real PHI.

============================================================
29. MODEL / PROMPT VERSIONING FOUNDATION
============================================================

Prepare metadata fields for:

- modelVersion
- promptVersion
- embeddingVersion
- ragVersion
- evaluatorVersion
- datasetVersion

Do not implement a full experiment tracking platform.

Just make the evaluation runs version-aware.

============================================================
30. AI QUALITY GATES
============================================================

Create/update:

docs/qa/AI_QUALITY_GATES.md

Include:

RAG quality gates
Retrieval quality gates
Groundedness gates
Access-control gates
No-fabrication gates
Evaluation regression gates

Explain:

Build quality
+
test quality
+
RAG quality

will eventually form:

AI Quality Gate

Do not implement CI/CD enforcement unless it is simple and already supported.

The quality gate must at least work locally.

============================================================
31. SECURITY
============================================================

Step 6 must validate:

- no PHI
- no secrets
- source access scope
- role filtering
- citation integrity
- no fabricated evidence
- safe no-evidence behavior

Do not implement full prompt injection protection yet.

That remains a later security step.

============================================================
32. RAG FAILURE ANALYSIS
============================================================

Create:

docs/ai/RAG_FAILURE_ANALYSIS.md

Document common failures:

1. Retrieval miss
2. Wrong source
3. Low context recall
4. Low context precision
5. Unsupported answer
6. Citation mismatch
7. Access violation
8. No-evidence mismatch
9. Dataset issue
10. Embedding quality issue

For each:

- symptom
- detection
- likely cause
- QA validation
- future AI-assisted analysis

============================================================
33. DOCUMENTATION
============================================================

Create:

docs/architecture/RAG_EVALUATION_ARCHITECTURE.md

docs/architecture/RAGAS_INTEGRATION_BOUNDARY.md

docs/architecture/RAG_QUALITY_GATE_ARCHITECTURE.md

docs/architecture/RAG_EVALUATION_DATASET.md

Create:

docs/ai/RAG_FAILURE_ANALYSIS.md

Create Step package:

docs/implementations/6-ragas-ai-evaluation/

Files:

prompt.md
README.md
implementation-report.pdf
interview-notes.md
response.md

Update:

README.md
CHANGELOG.md
docs/IMPLEMENTATION_INDEX.md
docs/INTERVIEW_GUIDE.md
knowledge/requirements-traceability.md
docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md
docs/qa/AI_QUALITY_GATES.md

If an IMPLEMENTATIONS.md file exists, update it.

If it does not exist, do not create a duplicate documentation system.

============================================================
34. TRACEABILITY
============================================================

Extend:

BRD
→ PRD
→ Epic
→ User Story
→ Acceptance Criteria
→ Jira
→ Confluence
→ Knowledge Document
→ Chunk
→ Embedding
→ Vector
→ Retrieval
→ Context
→ RAG Answer
→ Citation
→ Evaluation Dataset
→ Evaluation Case
→ Evaluation Run
→ Metric
→ Quality Gate
→ Test Scenario
→ Test Case
→ BDD
→ Automation
→ Execution
→ Future MCP
→ Future Agent

Preserve existing IDs.

Do not invent missing requirements.

============================================================
35. AI INDUSTRY CONCEPT STATUS
============================================================

After Step 6 correctly classify:

RAG = IMPLEMENTED
RAG ingestion = IMPLEMENTED
RAG retrieval = IMPLEMENTED
RAG evaluation = IMPLEMENTED
RAGAS concepts = IMPLEMENTED / COMPATIBILITY FOUNDATION
Context precision = IMPLEMENTED
Context recall = IMPLEMENTED
Faithfulness = IMPLEMENTED
Answer relevance = IMPLEMENTED
Groundedness = IMPLEMENTED
Evaluation datasets = IMPLEMENTED
Evaluation runs = IMPLEMENTED
Evaluation reports = IMPLEMENTED
RAG quality gates = IMPLEMENTED
AI quality gates = FOUNDATION / IMPLEMENTED LOCALLY
RAG failure analysis = IMPLEMENTED / DETERMINISTIC
AI observability = FOUNDATION
Model versioning = FOUNDATION
Prompt versioning = FOUNDATION
Experiment tracking = PLANNED
MCP = PLANNED / STEP 7
Tool calling = PLANNED / STEP 7
Agentic AI = PLANNED / STEP 8
LangGraph = PLANNED / STEP 9
Multi-agent = PLANNED / STEP 10
AI security = FOUNDATION / STEP 11
LLMOps = FOUNDATION / STEP 11

IMPORTANT:

Do not claim:

"RAGAS implemented"

if the official RAGAS library is not being used.

Instead state:

"RAGAS-compatible evaluation architecture with local deterministic evaluators."

============================================================
36. VALIDATION
============================================================

Run:

RAG tests
npm test

RAG evaluation:

npm run rag:evaluate

If available:

npm run rag:evaluate:report

Frontend:

npm run lint
npm run build

Automation:

ONLY targeted Step 6 scenarios.

Do NOT run:

- full regression
- all 96 cases
- Firefox suite
- WebKit suite
- unrelated previous scenarios

unless specifically required.

If frontend build produces the known Vite EPERM environment problem:

record it accurately.

Do not spend this step trying to solve the existing environment limitation unless the issue is directly caused by Step 6 changes.

============================================================
37. VALIDATION QUALITY RULE
============================================================

Never fabricate:

- metric scores
- evaluation counts
- quality-gate results
- test results
- retrieval quality
- RAGAS results

Every PASS must come from an actual execution.

Every BLOCKED result must include:

- exact command
- exact reason
- whether environment-related or implementation-related

============================================================
38. GIT
============================================================

Before commit:

git status
git diff --stat
git diff

Ensure unrelated files are not modified.

Commit:

feat(step-6): implement ragas and ai evaluation runtime

Push to:

origin/main

Verify:

git status
git log -1
git branch --show-current

If push is blocked:

report the exact reason.

Do not claim push success unless verified.

============================================================
39. FINAL RESPONSE
============================================================

Return a structured implementation report:

# Step 6 Response

## 1. Status

PASS / PARTIAL / BLOCKED

## 2. Objective

## 3. Architecture Implemented

## 4. Evaluation Dataset

Include:

- dataset name
- version
- number of cases
- categories

## 5. Metrics

Explain:

- Context Precision
- Context Recall
- Faithfulness
- Answer Relevance
- Groundedness

Clearly distinguish:

LOCAL DETERMINISTIC EVALUATION

from:

OFFICIAL RAGAS

## 6. Evaluation Run

Include actual:

- total cases
- passed
- failed
- warnings
- scores

## 7. Quality Gate

Include actual:

- thresholds
- result
- failures

## 8. Failure Analysis

## 9. Evaluation Comparison

## 10. Frontend Evaluation UI

## 11. Automation

Include:

- scenarios implemented
- scenarios executed
- actual results

## 12. Test Results

## 13. AI Industry Concepts

## 14. RAGAS Compatibility

## 15. AI Observability

## 16. Security

## 17. Traceability

## 18. Files Created

## 19. Files Modified

## 20. Documentation

## 21. Git

## 22. Known Issues

## 23. Next Recommended Step

Next:

STEP 7 — MCP Runtime

============================================================
40. CRITICAL STOP CONDITION
============================================================

After completing STEP 6:

STOP.

Do NOT automatically start STEP 7.

Do NOT implement MCP runtime.

Do NOT implement AI agents.

Do NOT run the full regression suite.

Do NOT automate all 96 scenarios.

Wait for explicit instruction.

============================================================
41. FINAL PROJECT PRINCIPLE
============================================================

This project is intended to demonstrate an AI Engineer / AI SDET architecture.

The progression must remain:

QA Automation
    ↓
Jira + Confluence
    ↓
Knowledge Engineering
    ↓
RAG
    ↓
RAG Evaluation
    ↓
MCP
    ↓
AI Agents
    ↓
LangGraph
    ↓
Multi-Agent
    ↓
AI Observability
    ↓
LLMOps
    ↓
AI Security
    ↓
AI Governance

Step 6 must prove that the RAG system can be MEASURED, not merely that it can generate answers.

Prefer:

small evaluation dataset
+
real execution
+
real metrics
+
real quality gates
+
real failure analysis
+
clean architecture

over:

large fake datasets
+
fake AI scores
+
unnecessary automation
+
unverified external integrations.

START STEP 6 NOW.
