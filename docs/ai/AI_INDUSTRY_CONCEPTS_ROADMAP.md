# AI Industry Concepts Roadmap

## Purpose
Map AI engineering concepts to major phases with explicit status to avoid over-claiming runtime implementation.

## Status Legend
- PASS: implemented in repository artifacts/runtime.
- FOUNDATION: contracts/governance documented, runtime pending.
- PLANNED: runtime implementation pending.

## Concept Mapping

| Concept | Status | Future Step |
|---|---|---|
| RAG | PASS | STEP 5 |
| RAG ingestion | PASS | STEP 5 |
| RAG chunking | PASS | STEP 5 |
| Embeddings (deterministic fallback) | PASS | STEP 5 |
| Vector store (local development) | PASS | STEP 5 |
| Retrieval | PASS | STEP 5 |
| Context assembly | PASS | STEP 5 |
| Grounded generation | PASS | STEP 5 |
| Evidence/citations | PASS | STEP 5 |
| RAGAS concepts (compatibility foundation) | PASS | STEP 6 |
| RAG evaluation | PASS | STEP 6 |
| Retrieval evaluation | PASS | STEP 6 |
| Groundedness | PASS | STEP 6 |
| Faithfulness | PASS | STEP 6 |
| Context precision | PASS | STEP 6 |
| Context recall | PASS | STEP 6 |
| Answer relevance | PASS | STEP 6 |
| AI observability | FOUNDATION | STEP 11 |
| MCP | FOUNDATION | STEP 7 |
| MCP tools | PASS | STEP 7 |
| Tool calling | FOUNDATION | STEP 7 |
| Agentic AI | FOUNDATION | STEP 8 |
| Agent evaluation | FOUNDATION | STEP 8/10 |
| Multi-agent systems | FOUNDATION | STEP 10 |
| LangGraph | FOUNDATION | STEP 9 |
| Human-in-the-loop | FOUNDATION | STEP 9/11 |
| Guardrails | FOUNDATION | STEP 11 |
| Prompt injection protection | FOUNDATION | STEP 11 |
| AI security | FOUNDATION | STEP 11 |
| LLMOps | FOUNDATION | STEP 11 |
| AI quality gates | PASS (Local) | STEP 6/11 |
| Evaluation datasets | PASS | STEP 6 |
| Evaluation runs | PASS | STEP 6 |
| Model versioning | FOUNDATION | STEP 6/11 |
| Prompt versioning | FOUNDATION | STEP 6/11 |
| Experiment tracking | PLANNED | STEP 6/11 |
| AI failure analysis | FOUNDATION | STEP 8/10 |
| AI defect management | FOUNDATION | STEP 10/11 |
| AI-assisted test generation | PLANNED | STEP 8/10 |
| AI-assisted test prioritization | PLANNED | STEP 8/10 |
| AI-assisted regression selection | PLANNED | STEP 8/10 |
| AI-assisted failure triage | PLANNED | STEP 8/10 |
| AI-assisted defect clustering | PLANNED | STEP 10 |
| AI-assisted test-data generation | PLANNED | STEP 8/10 |
| AI governance | PASS | STEP 11 |
| Auditability | PASS | STEP 11 |
| Explainability | FOUNDATION | STEP 11 |
| Evidence-based AI decisions | PASS | STEP 8/11 |
| Confidence scoring | FOUNDATION | STEP 8/11 |
| No-fabrication policies | PASS | STEP 11 |

## Step 4 Note
Step 4 made Jira/Confluence enterprise knowledge foundations first-class with deterministic adapters, traceability propagation, and RAG-ready export contracts. No runtime RAG/MCP/agent execution is claimed in this step.

## Step 4.1 Note
Step 4.1 added frontend simulation visibility for Jira, Confluence, traceability, and RAG-ready knowledge status.

## Step 5 Note
Step 5 implemented deterministic local RAG runtime (ingest/retrieve/cite) with development fallback embeddings and local vector-store abstraction. MCP/agent/LangGraph runtimes remain planned.

## Step 6 Note
Step 6 implemented deterministic local RAG evaluation runtime (datasets, metrics, quality gates, runs, reports, comparison, and evaluation dashboard). Official RAGAS library runtime integration remains planned and is not claimed.
