# Multi-Agent Architecture (Step 10)

## Purpose
Step 10 introduces a deterministic local multi-agent orchestration foundation on top of:
- Step 7 MCP runtime
- Step 8 single-agent primitives
- Step 9 LangGraph-compatible orchestration runtime

## Core Pattern
User request is handled by a supervisor agent that selects specialist agents, collects evidence, routes outputs through review, detects conflicts, computes confidence, and returns a consolidated response.

## Agents
- Supervisor / Orchestrator
- QA Analyst
- RAG Knowledge Agent
- Test Analyst
- Review / Validation Agent

## Runtime Boundary
No direct Jira/Confluence/RAG internals are called from multi-agent nodes.
All tool access goes through existing Step 7 MCP client/runtime.

## Determinism
Step 10 runs sequential deterministic orchestration first (parallelization intentionally deferred).

