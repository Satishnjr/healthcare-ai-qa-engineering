# MCP Architecture (Step 7)

## Purpose
Step 7 implements a local deterministic MCP runtime so future AI agents can call governed tools instead of directly coupling to Jira/Confluence/RAG internals.

## End-to-End Flow
Jira/Confluence foundations + traceability + RAG runtime -> MCP tools -> MCP server -> MCP client/tool caller -> structured results.

## Implemented Components
- MCP server: `mcp/runtime/src/server/mcp-server.js`
- MCP stdio transport: `mcp/runtime/src/transport/stdio-server.js`
- MCP tool runtime: `mcp/runtime/src/runtime/tool-runtime.js`
- MCP tool handlers: `mcp/runtime/src/tools/handlers.js`
- MCP schemas: `mcp/runtime/src/schemas/tool-schemas.js`
- MCP authorization: `mcp/runtime/src/security/authorization.js`
- MCP audit log: `mcp/runtime/src/observability/audit-log.js`
- MCP client harness: `mcp/runtime/src/clients/mcp-client-harness.js`

## Tool Boundaries
- Jira/Confluence/traceability tools reuse `mcp/jira-confluence-foundation`.
- RAG tools reuse Step 5 runtime boundary.
- RAG evaluation tool reuses Step 6 run/comparison artifacts.
- Test-case classification tool parses existing Step 1.15 classification markdown source.

## Non-Goals in Step 7
- No autonomous AI agent runtime.
- No LangGraph orchestration.
- No multi-agent runtime.
- No live Jira/Confluence credentials.
