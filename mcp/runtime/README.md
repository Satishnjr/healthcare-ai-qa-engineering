# CareFlow MCP Runtime (Step 7)

Local deterministic MCP runtime for CareFlow Health.

## Commands
- `npm run mcp:start`
- `npm run mcp:client`
- `npm run mcp:frontend-artifacts`
- `npm test`

## Transport
- Local stdio JSON-RPC (JSON per line).
- No external network required.

## Scope
- Implements MCP server, tool calling, resources, authorization and audit logging.
- Reuses existing Step 4 Jira/Confluence foundation and Step 5/6 RAG/evaluation runtime.
