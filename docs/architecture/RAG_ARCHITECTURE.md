# RAG Architecture (Step 5)

## Scope
Step 5 implements a deterministic local RAG runtime for CareFlow Health using synthetic/local repository knowledge only.

## Runtime Flow
Knowledge Sources -> Normalization -> Chunking -> Embeddings -> Local Vector Store -> Retrieval -> Context Assembly -> Grounded Generation -> Citations -> Query Observability

## Implemented Components
- `rag/src/knowledge-sources.js`: source discovery and normalized document contract.
- `rag/src/chunker.js`: deterministic chunk creation with stable IDs.
- `rag/src/embedding-provider.js`: provider abstraction + deterministic fallback embedding.
- `rag/src/vector-store.js`: local vector store abstraction (`upsert/search/delete/count/clear`) with metadata filters.
- `rag/src/retriever.js`: similarity search + access filtering + minimum evidence thresholding.
- `rag/src/context-assembler.js`: deterministic context ordering, dedup, context limit.
- `rag/src/generation-provider.js`: grounded deterministic answer generation with explicit no-evidence behavior.
- `rag/src/rag-query-service.js`: end-to-end query boundary and response contract.
- `rag/src/observability.js`: NDJSON logging for retrieval/generation metadata.

## Runtime Paths
- Runtime store: `.tmp/rag-runtime/index/`
- Query log: `.tmp/rag-runtime/query-log.ndjson`
- Frontend runtime index target: `frontend/public/rag/runtime-index.json` (best-effort copy)

## Data Boundary
- Synthetic/mock only.
- No PHI.
- No live Jira or Confluence API calls.
- No external embedding API dependencies required.

## Production Notes
- Current embeddings are deterministic development fallback.
- Current vector store is local development implementation.
- Replaceable in future with production embedding providers and vector DB.
