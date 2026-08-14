# LangGraph Architecture

## Purpose
Introduce a stateful orchestration runtime above Step 8 deterministic agent components.

## Layering
User -> LangGraph-compatible Runtime (`agent/src/graph`) -> Step 8 reusable components -> Step 7 MCP -> Step 4/5/6 services.

## Key Properties
- Explicit nodes/edges.
- Deterministic local execution.
- Retry and loop protection.
- Checkpoint and resume.
- Approval waiting state.
- Correlated telemetry and audit.

## Migration Boundary
The local engine is intentionally LangGraph-compatible to enable future migration to official LangGraph runtime without changing business nodes/contracts.
