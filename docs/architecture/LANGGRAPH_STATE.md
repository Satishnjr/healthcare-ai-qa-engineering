# LangGraph State

## State Model
Graph state tracks request/task metadata, execution pointers, node/transition history, tool calls, evidence, validation, response, confidence, approval, errors, and audit correlation fields.

## Correlation Fields
- `graphRunId`
- `requestId`
- `taskId`
- MCP request IDs
- response ID

## Persistence
State is checkpointed to `.tmp/langgraph-runtime/checkpoints/<graphRunId>.json`.
