# Jira Confluence Foundation (Step 4)

## Scope
Local/mock enterprise QA knowledge foundation for Jira and Confluence, including typed models, adapters, repositories, traceability, synchronization, and RAG-ready export contracts.

## Implemented
- Jira mock adapter and repository.
- Confluence mock adapter and repository.
- Deterministic traceability service.
- Jira story to Confluence knowledge sync service.
- RAG-ready knowledge export service.
- Future MCP tool contracts and future RAGAS metadata contract.
- Deterministic Node-based test suite.

## Not Implemented
- Live Jira REST integration.
- Live Confluence REST integration.
- Runtime RAG embeddings/retrieval/generation.
- Runtime MCP server/tool execution.
- Runtime agent or LangGraph orchestration.

## Run Tests
```powershell
node mcp/jira-confluence-foundation/tests/step4-foundation.test.js
```
