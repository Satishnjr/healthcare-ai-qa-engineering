# Step 8 AI Agent Runtime (Deterministic Foundation)

## Scope
- Single-agent runtime foundation for CareFlow Health.
- Deterministic local execution only (`DEVELOPMENT_DETERMINISTIC_PROVIDER`).
- Reuses Step 7 MCP runtime tools.

## Scripts
- `npm run test`
- `npm run agent:task -- "Find the acceptance criteria for appointment cancellation."`
- `npm run agent:frontend-artifacts`

## Core Runtime Flow
1. Task analysis and classification.
2. Deterministic plan and MCP tool selection.
3. MCP tool execution.
4. Evidence collection and validation.
5. Controlled reasoning and grounded response generation.
6. Confidence scoring.
7. Guardrails and approval checks.
8. Agent audit logging.

## Audit
- Agent audit log: `.tmp/agent-runtime/agent-audit.ndjson`
- MCP tool audit log (reused): `.tmp/mcp-runtime/tool-audit.ndjson`

## Notes
- No external LLM/API keys required.
- No destructive actions are executed.
- LangGraph and multi-agent orchestration are intentionally out of scope for Step 8.
