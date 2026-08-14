# Multi-Agent Observability

## Telemetry Path
`.tmp/multi-agent-runtime/multi-agent-telemetry.ndjson`

## Captured Fields
- multiAgentRunId
- requestId
- agentId/agentType/taskId
- event/status/duration
- tools and tool request IDs
- evidence count
- confidence
- current phase
- errors

## Correlation
Correlates multi-agent orchestration with:
- graph run ID
- MCP request IDs
- final response and audit entries

