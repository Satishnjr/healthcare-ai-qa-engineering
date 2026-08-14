# LangGraph MCP Integration

## Contract
Graph nodes never call Jira/Confluence/RAG directly.

## Execution Chain
Graph Node -> Step 8 tool executor -> Step 7 MCP runtime -> MCP tool.

## Benefits
- preserves MCP authorization/audit controls
- avoids duplicated tool/business logic
- keeps deterministic local behavior consistent
