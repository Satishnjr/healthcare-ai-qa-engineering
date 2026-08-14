# MCP Server Architecture (Step 7)

## Server Contract
Transport uses local stdio JSON-RPC line messages:
- `initialize`
- `tools/list`
- `tools/call`
- `resources/list`
- `resources/read`
- `shutdown`

## Server Runtime
`LocalMcpServer` initializes deterministic dependencies and dispatches methods:
- Tool list from catalog
- Tool call via runtime validator/authorizer/handler
- Resource list/read via read-only resource catalog
- Structured error envelope for all failures

## Structured Result Envelope
Successful tool calls return:
- `requestId`
- `status`
- `tool`
- `role`
- `authorization`
- `result`
- `audit`

## Structured Error Envelope
Tool errors use:
- `code` (`INVALID_INPUT`, `NOT_FOUND`, `ACCESS_DENIED`, `NO_EVIDENCE`, `INTERNAL_ERROR`, `TOOL_NOT_AVAILABLE`)
- `message`
- `tool`
- `requestId`
- `retryable`
- safe `details`

## Startup Command
From `mcp/runtime`:
- `npm run mcp:start`
