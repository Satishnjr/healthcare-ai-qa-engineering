# AI Agent Planning

## Deterministic Planning
Planner maps task type to ordered MCP tools and deterministic input payloads.

## Plan Contract
- `planId`
- `taskId`
- `steps[]`: order, tool, purpose, input, requiredEvidence.

## Step 8 Design
Planning is single-pass and synchronous for local deterministic execution.
