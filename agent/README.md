# Step 9 LangGraph Orchestration Foundation (Deterministic Development Runtime)

## Scope
- Step 8 single-agent runtime remains intact.
- Step 9 adds LangGraph-compatible local orchestration over existing Step 8 components.
- Deterministic local execution only (`DEVELOPMENT_DETERMINISTIC_PROVIDER`).
- Reuses Step 7 MCP runtime tools and Step 5/6 runtime boundaries through MCP.

## Scripts
- `npm run test`
- `npm run agent:task -- "Find the acceptance criteria for appointment cancellation."`
- `npm run agent:frontend-artifacts`
- `npm run agent:graph -- "Find the acceptance criteria for appointment cancellation."`
- `npm run agent:graph:status -- "<graphRunId>"`
- `npm run agent:graph:resume -- "<graphRunId>"`
- `npm run agent:graph:approve -- "<graphRunId>"`
- `npm run agent:graph:reject -- "<graphRunId>"`
- `npm run agent:graph:frontend-artifacts`

## Core Graph Flow
1. Task analysis and classification.
2. Deterministic plan and MCP tool selection.
3. MCP tool execution.
4. Evidence collection and validation.
5. Controlled reasoning and grounded response generation.
6. Confidence scoring.
7. Guardrails and approval checks.
8. Agent audit logging.
9. Graph checkpoint save/resume lifecycle.

## Audit
- Agent audit log: `.tmp/agent-runtime/agent-audit.ndjson`
- MCP tool audit log (reused): `.tmp/mcp-runtime/tool-audit.ndjson`
- Graph telemetry/checkpoints: `.tmp/langgraph-runtime/`

## Notes
- No external LLM/API keys required.
- No destructive actions are executed.
- This runtime is a LangGraph-compatible development abstraction, not the official LangGraph package runtime.
- LangGraph production runtime migration and multi-agent orchestration remain future steps.
