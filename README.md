# Healthcare AI QA Engineering Platform

## Project
Healthcare AI QA Engineering Platform for CareFlow Health.

## Current Delivery State
- Requirements and QA governance foundation implemented.
- CareFlow frontend runtime implemented.
- Playwright+Cucumber deterministic baseline implemented.
- Step 4 Jira+Confluence enterprise QA knowledge foundation implemented with deterministic local/mock adapters.
- Runtime RAG is implemented (deterministic local foundation); MCP/agent/LangGraph and live Jira/Confluence API integrations remain planned.

## New Major Roadmap

| Step | Theme | Status |
|---|---|---|
| STEP 1 | Requirements, QA Foundation, Jira/Confluence Governance | PASS |
| STEP 2 | UI Architecture and Frontend Application | PASS |
| STEP 3 | Deterministic UI Automation and Governance | PASS |
| STEP 4 | Jira + Confluence Enterprise QA Knowledge Foundation | PASS |
| STEP 4.1 | Jira + Confluence UI Simulation | PASS |
| STEP 5 | RAG Knowledge System Runtime | PASS |
| STEP 6 | RAGAS and AI Evaluation Runtime | PLANNED |
| STEP 7 | MCP and Tool Calling Runtime | PLANNED |
| STEP 8 | QA AI Agent Runtime | PLANNED |
| STEP 9 | Agentic QA Orchestration (LangGraph) | PLANNED |
| STEP 10 | Multi-Agent QA System | PLANNED |
| STEP 11 | Enterprise Integration + Observability + LLMOps + Security + Production Readiness | PLANNED |

## Step 4 Highlights
- Added typed Jira and Confluence domain model validation.
- Implemented deterministic local/mock adapters and repositories.
- Implemented Jira story -> Confluence knowledge synchronization service.
- Implemented RAG-ready deterministic knowledge export service.
- Added traceability lookup services and Step 4 deterministic tests.

## Step 4.1 Highlights
- Added Jira-style UI simulation pages (dashboard, issues, issue detail, test cases, defects, board).
- Added Confluence-style UI simulation pages (home, spaces, pages, page detail, search).
- Added traceability explorer and RAG knowledge explorer views.
- Added role-aware route controls so patient role has no Jira access.
- Added targeted Step 4.1 Playwright+Cucumber scenarios (8 scenarios, 8 passed).

## Jira and Confluence Boundary
- Implemented now: local/mock enterprise foundation.
- Foundation now: REST adapter boundaries.
- Planned later: live external API integration with verified connectivity/credentials and controlled rollout.

## Automation Strategy Boundary
- Deterministic automation baseline remains intentionally limited.
- Full 96-case deterministic conversion is intentionally not performed.
- Existing Playwright/Cucumber work remains intact.

## Step 5 Highlights
 - Implemented local deterministic RAG runtime under `rag/` (ingestion, chunking, embeddings fallback, vector search, retrieval, context assembly, grounded answer generation, citations, observability).
 - Extended existing Knowledge UI with query/answer/citation flow and stable Step 5 selectors.
 - Added targeted Step 5 automation feature with 7 scenarios (`@step5`) and passing run.
 - Added Step 5 architecture documentation and implementation package.

## AI/Runtime Boundary
Implemented:
- Governance + contracts + local/mock knowledge foundation.
- Step 5 deterministic local RAG runtime.

Not implemented yet:
- MCP runtime.
- Agent and LangGraph runtime.
- Multi-agent runtime.
- Live Jira/Confluence API integration.

## Source-of-Truth Docs
- `docs/IMPLEMENTATION_INDEX.md`
- `docs/ROADMAP_RESTRUCTURE.md`
- `docs/architecture/JIRA_CONFLUENCE_AI_ARCHITECTURE.md`
- `docs/architecture/JIRA_ARCHITECTURE.md`
- `docs/architecture/CONFLUENCE_ARCHITECTURE.md`
- `docs/architecture/JIRA_CONFLUENCE_INTEGRATION.md`
- `docs/architecture/KNOWLEDGE_EXPORT_CONTRACT.md`
- `docs/architecture/FUTURE_MCP_JIRA_CONFLUENCE_TOOLS.md`
- `docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md`
