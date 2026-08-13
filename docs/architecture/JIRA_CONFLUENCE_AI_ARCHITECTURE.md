# Jira Confluence AI Architecture

## Purpose
Define how Jira and Confluence interact with QA knowledge, future RAG, MCP tools, and future agents in CareFlow Health.

## Current Reality
- Jira and Confluence strategy/governance artifacts are implemented.
- Step 4 local/mock adapter architecture is implemented.
- Live external Jira/Confluence API integration is not implemented in this step.

## Architecture Layers

| Layer | Components | Current Status |
|---|---|---|
| Product and QA Knowledge | BRD, PRD, epics, stories, AC, scenarios, cases, test data, traceability | PASS |
| PM and Knowledge Governance | Jira model/workflow strategy + Confluence architecture/governance strategy | PASS |
| Enterprise QA Knowledge Foundation | Jira/Confluence typed models, mock adapters, repositories, sync, export | PASS |
| Automation Execution Layer | Frontend runtime + Playwright/Cucumber deterministic baseline + evidence artifacts | PASS |
| AI Runtime Integration Layer | RAG, MCP runtime tools, single agent, LangGraph, multi-agent | PLANNED |
| Production Integration Layer | Live Jira/Confluence APIs + CI/CD AI gates + observability platform | PLANNED |

## End-to-End Target Flow
Requirement -> Jira Epic/Story/AC -> Confluence requirement and QA knowledge -> RAG retrieval -> MCP tools -> Agent reasoning -> Playwright/Cucumber execution -> Failure analysis -> Jira defect proposal -> Human approval -> Confluence knowledge update -> RAG re-indexing -> RAGAS and agent evaluation -> observability/CI-CD quality gates.

## Jira and Confluence Interaction Model

| Capability | Implemented Now | Planned Later |
|---|---|---|
| Story/AC/test traceability | Yes (model and mapping) | live API sync |
| Defect knowledge linkage | Yes (mock and metadata contracts) | live issue/page propagation |
| Jira story to Confluence page flow | Yes (deterministic local sync service) | bidirectional production sync |
| Knowledge export for RAG | Yes (deterministic export contract) | runtime ingestion and retrieval |

## Guardrails and Governance
- Evidence-first outputs with traceability IDs.
- Human-in-the-loop for high-impact actions.
- Prompt-injection and unsafe tool-call resistance through policy boundaries.
- Synthetic healthcare data only; no PHI/secrets.
