# AI Agent Architecture

## Scope
Step 8 implements a single deterministic QA agent runtime that orchestrates Step 7 MCP tools and produces evidence-backed responses.

## Runtime Flow
User Request -> Task Analyzer -> Planner/Tool Selector -> MCP Tool Executor -> Evidence Manager -> Evidence Validator -> Reasoning Engine -> Confidence Engine -> Response Generator -> Audit Log.

## Boundaries
- Deterministic provider only (`DEVELOPMENT_DETERMINISTIC_PROVIDER`).
- No external LLM keys.
- No LangGraph (Step 9).
- No multi-agent orchestration (Step 10).
