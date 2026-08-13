# RAG Ingestion Architecture (Step 5)

## Ingestion Command
- `rag`: `npm run rag:ingest`

## Pipeline
1. Discover local knowledge sources from mock Jira/Confluence and repository docs.
2. Normalize documents into unified contract fields:
   - `documentId`, `sourceSystem`, `sourceType`, `sourceId`, `title`, `content`,
   - `traceabilityIds`, `labels`, `version`, `timestamp`, `accessScope`, `sensitivity`, `metadata`, `checksum`.
3. Create deterministic chunks with stable chunk IDs.
4. Generate deterministic fallback embeddings.
5. Upsert vectors into local runtime vector store.
6. Persist runtime index artifacts and ingestion summary.

## Output Artifacts
- `.tmp/rag-runtime/index/normalized-documents.json`
- `.tmp/rag-runtime/index/chunks.json`
- `.tmp/rag-runtime/index/vector-store.json`
- `.tmp/rag-runtime/index/runtime-index.json`
- `.tmp/rag-runtime/index/ingestion-summary.json`

## Frontend Export
- Best-effort copy to `frontend/public/rag/runtime-index.json`.
- If copy fails due environment lock/EPERM, ingestion still succeeds and records warning in summary notes.
