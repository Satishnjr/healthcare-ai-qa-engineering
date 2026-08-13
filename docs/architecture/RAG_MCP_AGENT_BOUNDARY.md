# RAG MCP Agent Boundary (Step 5)

## Step 5 Boundary Rule
Step 5 implements RAG runtime only. MCP runtime and AI agent runtime are intentionally out of scope.

## Programmatic RAG Interface
`rag/src/rag-runtime-boundary.js` exposes:
- `searchKnowledge({ query, topK, filters, userContext })`
- `retrieveContext({ query, topK, filters, userContext })`
- `queryRag({ query, topK, filters, userContext })`
- `getSourceDocument(documentId)`
- `getTraceability(traceabilityId)`

## MCP Preparation (Future Step 7)
Future MCP tools can bind to current boundaries:
- `search_knowledge`
- `retrieve_context`
- `query_rag`
- `get_source_document`
- `get_traceability`

## Agent Preparation (Future Step 8)
Future agents should call RAG via MCP/tool interfaces and return:
- grounded answer,
- evidence/citations,
- confidence/warnings,
- no-fabrication fallback when evidence is insufficient.

## Non-Goals in Step 5
- no autonomous task execution,
- no multi-agent orchestration,
- no LangGraph workflow runtime,
- no write-back operations to Jira/Confluence.
