# Step 8 Interview Notes

## What was built
Step 8 delivers the first QA AI agent runtime as a deterministic single-agent implementation with MCP tool orchestration and evidence-backed responses.

## Why deterministic first
Deterministic behavior enables repeatable local validation, no-secrets operation, and clear governance before external model rollout.

## How authorization is enforced
The agent enforces role policy at entry and delegates all tool authorization to Step 7 MCP runtime.

## How hallucination risk is controlled
The runtime only answers from collected evidence and emits `NO_EVIDENCE` when evidence is insufficient.

## What is deferred
LangGraph orchestration (Step 9) and multi-agent collaboration (Step 10).
