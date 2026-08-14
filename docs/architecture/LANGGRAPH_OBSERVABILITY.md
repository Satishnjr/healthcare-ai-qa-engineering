# LangGraph Observability

## Telemetry
NDJSON telemetry is stored at `.tmp/langgraph-runtime/graph-telemetry.ndjson`.

## Captured Fields
- graphRunId/requestId/taskId
- node and transition
- duration/status
- tool name/requestId
- evidence count
- confidence
- approval/final status
- error code

## Cross-System Correlation
Graph records include MCP request IDs and response IDs for traceability with Step 7 and Step 8 logs.
