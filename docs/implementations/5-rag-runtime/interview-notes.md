# Step 5 Interview Notes

## What did you implement in Step 5?
I implemented a deterministic local RAG runtime over governed CareFlow knowledge sources. It includes ingestion, normalization, chunking, fallback embeddings, local vector search, retrieval filtering, context assembly, grounded response generation, evidence/citations, and query observability.

## Why deterministic fallback embeddings?
The environment can run without external model downloads or API credentials. I used an embedding-provider abstraction and a deterministic fallback implementation so the runtime is functional now and replaceable later with production embedding providers.

## How did you prevent hallucinated responses?
The RAG service returns only evidence-backed answers. Retrieval applies score and token-overlap thresholds. If evidence is insufficient, the generator returns an explicit no-evidence response with `NO_EVIDENCE` warning and empty citations.

## How is access control handled?
Retrieval enforces synthetic role-based scope filtering from metadata:
- Patient -> `public`
- Doctor/Nurse/Receptionist -> `public`, `team`
- Healthcare Administrator -> `public`, `team`, `admin`

## What is implemented vs planned?
Implemented in Step 5:
- RAG ingestion/runtime/query/citations.

Planned for future steps:
- RAGAS runtime (Step 6),
- MCP runtime (Step 7),
- Agent runtime (Step 8),
- LangGraph/multi-agent runtime (Step 9/10),
- enterprise observability/LLMOps/security runtime (Step 11).

## What are known environment issues?
- `frontend` production build can fail with reproducible Vite EPERM in out-dir cleanup.
- Node-based write to `frontend/public/rag/runtime-index.json` can hit EPERM in this environment; ingestion now reports this as a warning without failing runtime indexing.
