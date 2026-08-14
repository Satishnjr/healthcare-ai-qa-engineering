# MCP Observability (Step 7)

## Tool Telemetry
Each tool call writes structured NDJSON audit entries:
- requestId
- timestamp
- toolName
- inputSummary
- role
- authorizationResult
- durationMs
- status
- errorCode
- sourceSystems
- returnedRecordCount

## Audit Log Path
`.tmp/mcp-runtime/tool-audit.ndjson`

## Design Notes
- Input summary avoids verbose/sensitive payload logging.
- No secrets/credentials are logged.
- Audit stream is deterministic and local for development and interview demonstration.
