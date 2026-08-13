# Roadmap Restructure

## Objective
Restructure historical incremental steps into interview-friendly major phases without deleting completed work or fabricating runtime integrations.

## What Changed
- Reframed legacy `1.x` execution history into major phases `STEP 1` to `STEP 11`.
- Preserved historical step folders and references under `docs/implementations/`.
- Promoted Jira and Confluence to first-class roadmap components with explicit implementation classifications.
- Separated implemented runtime capabilities from strategy/foundation contracts.

## Old vs New Structure

| Old Pattern | New Pattern |
|---|---|
| Long single-thread `1.1` to `1.15` progression | Major-phase roadmap (`STEP 1` to `STEP 11`) |
| Mixed strategy/runtime status in single sequence | Explicit `PASS`, `FOUNDATION`, `PLANNED`, `BLOCKED`, `DEFERRED` boundaries |
| Jira/Confluence mostly interpreted as strategy layer | Jira/Confluence made first-class across roadmap with runtime phase placement |

## Historical Mapping Summary

| Legacy Step | Legacy Topic | New Major Step | Status |
|---|---|---|---|
| 1.1 to 1.10 | Product definition, requirements, traceability, PM governance | STEP 1 | PASS |
| 1.11 to 1.12 | UI architecture + frontend runtime | STEP 2 | PASS |
| 1.13 to 1.15 | Automation framework, regression subset, AI governance foundation | STEP 3 | PASS |

## Completed vs Remaining

### Completed
- STEP 1: Requirements, QA foundation, Jira/Confluence governance documentation.
- STEP 2: UI architecture and frontend implementation.
- STEP 3: Playwright/Cucumber deterministic baseline and AI-ready automation governance.

### Remaining
- STEP 4 to STEP 11: RAG, evaluation, MCP, agent runtime, multi-agent orchestration, integration, observability, security, and production readiness.

## Jira and Confluence Positioning

### Jira
- Implemented as governance/documentation strategy and traceability model.
- Runtime integrations (API, agent-triggered issue operations, MCP tools) are planned.

### Confluence
- Implemented as knowledge architecture and governance strategy.
- Runtime integrations (API publishing, agent update loops, MCP tools) are planned.

## Automation Strategy Preservation
- Deterministic baseline remains intentionally limited.
- Full 96 deterministic automation is not attempted.
- Classification-led future path remains:
  - deterministic where stable,
  - AI-assisted where variable,
  - agentic where reasoning-heavy,
  - manual/backend/future where appropriate.

## Interview Storyline
Requirements -> Jira/Confluence governance -> QA knowledge -> frontend runtime + deterministic automation -> RAG -> MCP -> agent -> LangGraph orchestration -> multi-agent workflows -> Jira/Confluence integration loops -> observability/LLMOps/security gates.

## Scope Boundary
This restructure is documentation-only.
No runtime RAG, MCP, agent, LangGraph, Jira API, or Confluence API implementation is claimed.

## Execution Update
- Step 4 (`Jira + Confluence Enterprise QA Knowledge Foundation`) has now been implemented in local/mock mode with typed adapters, synchronization flow, and RAG-ready export contracts.
