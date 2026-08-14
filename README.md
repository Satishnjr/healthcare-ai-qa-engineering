# Healthcare AI QA Engineering Platform

## Project
Healthcare AI QA Engineering Platform for CareFlow Health.

## Current Delivery State
- Requirements and QA governance foundation implemented.
- CareFlow frontend runtime implemented.
- Playwright+Cucumber deterministic baseline implemented.
- Step 4 Jira+Confluence enterprise QA knowledge foundation implemented with deterministic local/mock adapters.
- Runtime RAG, MCP, single-agent, LangGraph-compatible orchestration, and deterministic multi-agent foundations are implemented (local development); live Jira/Confluence API integrations remain planned.

## New Major Roadmap

| Step | Theme | Status |
|---|---|---|
| STEP 1 | Requirements, QA Foundation, Jira/Confluence Governance | PASS |
| STEP 2 | UI Architecture and Frontend Application | PASS |
| STEP 3 | Deterministic UI Automation and Governance | PASS |
| STEP 4 | Jira + Confluence Enterprise QA Knowledge Foundation | PASS |
| STEP 4.1 | Jira + Confluence UI Simulation | PASS |
| STEP 5 | RAG Knowledge System Runtime | PASS |
| STEP 6 | RAGAS and AI Evaluation Runtime | PASS |
| STEP 7 | MCP and Tool Calling Runtime | PASS |
| STEP 8 | QA AI Agent Runtime | PASS |
| STEP 9 | Agentic QA Orchestration (LangGraph) | PASS |
| STEP 10 | Multi-Agent QA System | PASS |
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

## Step 6 Highlights
 - Implemented deterministic RAG evaluation runtime under `rag/src/evaluation/`:
   - dataset validation
   - metric evaluators
   - quality gates
   - evaluation runs
   - failure classification
   - report generation
   - run comparison
 - Added Step 6 CLI commands:
   - `npm run rag:evaluate`
   - `npm run rag:evaluate:report`
   - `npm run rag:evaluate:gate`
 - Extended CareFlow UI with `/knowledge/evaluation` dashboard and case-detail visibility.
 - Added targeted Step 6 automation scenarios (`@step6`) and Step 6 tests.
 - Added Step 6 architecture and AI failure-analysis docs.

## Step 7 Highlights
 - Implemented local deterministic MCP runtime under `mcp/runtime/`:
   - stdio JSON-RPC server
   - tool registry, schema validation, and structured error contract
   - role-based authorization
   - audit telemetry NDJSON
   - read-only MCP resources
 - Implemented deterministic MCP client harness with:
   - server connect/disconnect
   - tool discovery
   - schema visibility
   - structured tool invocation and error handling
 - Implemented 10 MCP tools:
   - `search_jira`, `get_jira_issue`, `search_confluence`, `get_confluence_page`
   - `get_traceability`, `search_test_cases`
   - `get_rag_context`, `query_rag`, `get_rag_evaluation`, `get_qa_knowledge`
 - Extended frontend with MCP demo route:
   - `/mcp`
 - Added targeted Step 7 automation feature and Step 7 runtime tests.
 - Added Step 7 architecture and implementation documentation package.

## Step 8 Highlights
 - Implemented deterministic single-agent runtime under `agent/`:
   - task analysis and classification
   - planning and MCP tool selection
   - MCP tool execution via Step 7 runtime boundary
   - evidence collection and validation
   - controlled reasoning and canonical response contract
   - deterministic confidence scoring
   - guardrails and human-approval foundation
   - agent audit NDJSON logging
 - Implemented CLI command:
   - `npm run agent:task -- "<query>"`
 - Added frontend AI agent route:
   - `/agent`
 - Added targeted Step 8 automation feature:
   - `automation/features/functional/step8-ai-agent.feature`

## Step 9 Highlights
 - Implemented LangGraph-compatible deterministic graph runtime under `agent/src/graph/`:
   - state model
   - explicit nodes and edges
   - conditional routing
   - retry and loop protection
   - checkpoint save/load/list/cleanup/resume
   - approval waiting/resume workflow
   - graph telemetry and correlation metadata
 - Added Step 9 graph CLI commands:
   - `npm run agent:graph -- "<query>"`
   - `npm run agent:graph:status -- "<graphRunId>"`
   - `npm run agent:graph:resume -- "<graphRunId>"`
   - `npm run agent:graph:approve -- "<graphRunId>"`
   - `npm run agent:graph:reject -- "<graphRunId>"`
 - Extended `/agent` frontend page with graph orchestration timeline and state section.
 - Added targeted Step 9 BDD artifacts:
   - `automation/features/functional/step9-langgraph-orchestration.feature`

## Step 10 Highlights
 - Implemented deterministic local multi-agent runtime under `agent/src/multi-agent/`:
   - supervisor-led orchestration
   - specialist agents (QA, RAG knowledge, test analyst, review)
   - deterministic sequential execution and selection
   - conflict detection
   - aggregated confidence scoring
   - local telemetry/audit streams
 - Added Step 10 CLI commands:
   - `npm run agent:multi -- "<query>"`
   - `npm run agent:multi:status -- "<multiAgentRunId>"`
   - `npm run agent:multi:resume -- "<multiAgentRunId>"`
   - `npm run agent:multi:approve -- "<multiAgentRunId>"`
   - `npm run agent:multi:reject -- "<multiAgentRunId>"`
 - Extended `/agent` frontend page with dedicated multi-agent section and stable selectors.
 - Added Step 10 BDD artifacts:
   - `automation/features/functional/step10-multi-agent.feature`

## AI/Runtime Boundary
Implemented:
- Governance + contracts + local/mock knowledge foundation.
- Step 5 deterministic local RAG runtime.
- Step 6 deterministic local RAG evaluation runtime.

Not implemented yet:
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
- `docs/architecture/MCP_ARCHITECTURE.md`
- `docs/architecture/MCP_TOOL_CATALOG.md`
- `docs/architecture/LANGGRAPH_ARCHITECTURE.md`
- `docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md`
