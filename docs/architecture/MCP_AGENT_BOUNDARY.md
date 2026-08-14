# MCP Agent Boundary (Step 7)

## Step Boundary
- Step 7 implements MCP runtime and tool calling foundation.
- Step 8 is the first AI agent runtime step.

## Required Future Pattern
AI agents must consume enterprise systems via MCP, not by directly importing Jira/Confluence/RAG internals.

Future pattern:

AI Agent -> MCP Client -> MCP Server -> MCP Tools -> Jira/Confluence/Traceability/RAG

## Why This Boundary Matters
- Consistent authorization and guardrails
- Stable tool contracts and discovery
- Centralized auditability
- Controlled error semantics
- Safer future agent expansion with HITL and governance
