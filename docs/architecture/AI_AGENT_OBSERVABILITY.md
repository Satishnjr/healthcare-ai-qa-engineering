# AI Agent Observability

## Audit Record
Each request appends NDJSON audit at:
`.tmp/agent-runtime/agent-audit.ndjson`

## Captured Fields
- responseId
- taskId
- timestamp
- role
- taskType
- toolsCalled
- toolResults
- evidenceCount
- confidence
- finalStatus
- approvalStatus
- durationMs

## Integration
MCP tool-level telemetry remains in `.tmp/mcp-runtime/tool-audit.ndjson`.
