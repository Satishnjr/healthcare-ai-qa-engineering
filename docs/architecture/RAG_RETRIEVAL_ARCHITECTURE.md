# RAG Retrieval Architecture (Step 5)

## Query Entry
- CLI: `npm run rag:query -- "<question>" --role Doctor --topK 5`
- Programmatic: `createRagRuntime().queryRag(...)`
- Frontend: Knowledge page RAG panel (`/knowledge`)

## Retrieval Stages
1. Embed query using deterministic fallback provider.
2. Search vector store with metadata filters.
3. Apply role-based access scope filtering:
   - Patient: `public`
   - Clinical roles: `public`, `team`
   - Admin: `public`, `team`, `admin`
4. Apply evidence quality filters:
   - minimum cosine score threshold
   - minimum token-overlap threshold
5. Rank deterministically and return `topK`.

## Context Assembly
- Deduplicate by `chunkId`.
- Deterministic ordering by score and `chunkId`.
- Enforce context-size limit.
- Preserve source/citation metadata.

## Query Response Contract
- `answer`
- `citations[]`
- `retrievedDocuments[]`
- `confidence`
- `retrievalMetadata`
- `warnings`

## No-Evidence Policy
If no qualifying evidence remains after filtering, response is:
- explicit no-evidence answer
- empty citations
- `warnings: ["NO_EVIDENCE"]`
