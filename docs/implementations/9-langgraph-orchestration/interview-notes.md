# Step 9 Interview Notes

## What changed from Step 8
Step 8 executes deterministic agent logic linearly. Step 9 adds a stateful graph orchestration layer with explicit nodes, edges, conditional routing, retries, limits, checkpoints, and resume semantics.

## Why graph orchestration
Graph orchestration improves transparency, controllability, and failure-path handling for AI workflows while preserving deterministic execution and existing service boundaries.

## Key interview points
- StateGraph concepts: nodes, edges, conditional edges, transitions.
- Durable execution with checkpoints/resume.
- Human-in-the-loop waiting state and approval controls.
- Retry and loop-protection policy.
- Correlated observability across graph, agent, and MCP.

## Boundary clarity
Step 9 is single-agent orchestration only. Step 10 multi-agent is intentionally not implemented.
