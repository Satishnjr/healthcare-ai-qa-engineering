# Interview Guide

## Project Story (Major-Phase View)
Requirements and QA governance -> UI architecture and frontend runtime -> deterministic automation baseline -> Jira/Confluence enterprise knowledge foundation -> Step 5 deterministic RAG runtime -> Step 6 deterministic RAG evaluation runtime -> Step 7 deterministic MCP runtime -> Step 8 deterministic agent runtime.

## What Is Implemented

| Area | Status | Evidence |
|---|---|---|
| Requirements and QA foundation | PASS | `knowledge/` + `docs/qa/` + traceability artifacts |
| Jira/Confluence governance model | PASS | Jira/Confluence strategy and governance docs |
| UI architecture and design system | PASS | `docs/architecture/UI_*` |
| Frontend runtime | PASS | `frontend/` |
| Playwright+Cucumber baseline | PASS | `automation/` with smoke/regression subsets |
| AI governance and handoff contracts | PASS | Step 1.15 architecture/qa/ai docs |
| Jira+Confluence enterprise knowledge foundation (local/mock) | PASS | `mcp/jira-confluence-foundation/` + Step 4 architecture docs |
| Jira+Confluence UI simulation layer | PASS | Jira/Confluence/traceability/knowledge pages in frontend + Step 4.1 targeted automation |
| RAG runtime (local deterministic) | PASS | `rag/` runtime + Step 5 docs + Knowledge page RAG query flow |
| RAG evaluation runtime (local deterministic) | PASS | `rag/src/evaluation/*` + `/knowledge/evaluation` + Step 6 docs |
| MCP runtime and tool calling foundation | PASS | `mcp/runtime/` + `/mcp` demo page + Step 7 docs/tests |
| QA AI agent runtime (single-agent) | PASS | `agent/` + `/agent` page + Step 8 docs/tests |
| LangGraph orchestration foundation | PASS | `agent/src/graph/*` + graph CLI + `/agent` graph section + Step 9 docs/tests |

## What Is Not Yet Implemented

| Area | Status |
|---|---|
| RAGAS official library runtime integration | PLANNED |
| Single QA agent runtime | PASS |
| Multi-agent runtime | PLANNED |
| Live Jira/Confluence API integration | PLANNED/BLOCKED |

## Interview Walkthrough by Major Step

### STEP 1 - Requirements, QA Foundation, Jira/Confluence Governance
- Built end-to-end requirements-to-test traceability and governance baseline.
- Established Jira and Confluence as first-class governance systems in project design.

### STEP 2 - UI Architecture and Frontend Application
- Implemented realistic, role-aware CareFlow frontend runtime with deterministic testability hooks.

### STEP 3 - Deterministic UI Automation and Governance
- Implemented Playwright+Cucumber foundation and limited deterministic regression baseline.
- Added AI-ready governance, classification, handoff, and observability contracts.

### STEP 4 - Jira + Confluence Enterprise QA Knowledge Foundation
- Built typed domain models and deterministic local/mock adapters for Jira and Confluence.
- Built repository layer, traceability lookup services, Jira->Confluence sync service, and RAG-ready export contract.
- Added deterministic tests for issue/page lifecycle, mapping, sync, and export.

### STEP 4.1 - Jira + Confluence UI Simulation
- Integrated Jira-style and Confluence-style UI modules into the existing CareFlow frontend.
- Added bidirectional issue-to-knowledge navigation and traceability visualization.
- Added RAG-ready knowledge explorer UI and AI-status boundary panels.
- Added targeted 8-scenario Step 4.1 automation validation.

### STEP 5 to STEP 11 - Runtime Journey
- STEP 5: RAG runtime (implemented as local deterministic foundation).
- STEP 6: deterministic local RAG evaluation runtime with quality gates (implemented).
- STEP 7: MCP runtime and tool calling foundation (implemented).
- STEP 8: first QA AI agent runtime (implemented, deterministic local foundation).
- STEP 9: LangGraph-compatible orchestration runtime (implemented as deterministic local development runtime).
- STEP 10: multi-agent runtime.
- STEP 11: enterprise integration, observability, LLMOps, security, and production readiness.

## Required Interview Statements
### How to explain Jira
I used Jira as the system of record for requirements, stories, acceptance criteria, defects and QA traceability. I created an adapter boundary so the QA platform is not tightly coupled to Jira's implementation.

### How to explain Confluence
I used Confluence as the knowledge management layer for product and QA information. The content is structured with metadata and traceability so it can later become a governed RAG knowledge source.

### How to explain future AI architecture
Jira and Confluence provide the enterprise knowledge and workflow layer. RAG provides grounded retrieval, MCP exposes controlled tools, and agents orchestrate QA actions with human approval and auditability.

## Step 4.1 Question Bank
### How did you integrate Jira and Confluence into your AI QA platform?
I added a deterministic Jira/Confluence UI simulation in the existing frontend, linked issue and page entities, and preserved traceability IDs across requirements, tests, evidence, and knowledge.

### Did you use real Jira and Confluence?
No. Step 4.1 is explicitly local/mock UI simulation only. No live Atlassian integration or credentials were used.

### How does Jira data become RAG knowledge?
Issue context is linked to Confluence pages and repository QA docs with metadata and traceability IDs. Step 5 ingests these sources into chunks/vectors and returns grounded answers with citations in the Knowledge page.

### How do you maintain traceability?
By preserving explicit entity links in both data and UI: User Story -> Jira -> Confluence -> Scenario -> Case -> Data -> BDD -> Automation -> Execution -> Defect -> RAG -> MCP -> Agent.

### How would an AI agent use Jira?
Through controlled, evidence-based context retrieval from issue + knowledge + traceability entities; runtime agent execution is planned for later phases.

### How would an MCP server expose Jira tools?
As guarded tool endpoints (search/get/link/traceability) aligned with Step 4 contracts; runtime MCP implementation is scheduled for Step 7.

### How would you prevent an agent from modifying Jira without approval?
Use role-scoped permissions, human approval gates for write actions, audit logs, and no-fabrication/evidence policies.

## Fast Interview Answers
- Why mock adapters first: avoid fake integration claims and still deliver enterprise-grade contracts with deterministic validation.
- What proves RAG implementation: deterministic ingest/query CLI, citation output, role-based filtering, Step 5 automation (`@step5`) and runtime architecture docs.
- How hallucination risk is controlled: evidence-first outputs, no-fabrication policy, traceability IDs, HITL gates.
- Why not run full regression here: Step 4 scope is Jira/Confluence foundation only.

## Step 9 LangGraph Interview Topics
- What is LangGraph?
- Why graph orchestration for agent workflows?
- Agent vs workflow vs graph.
- StateGraph concepts (state, node, edge, conditional edge).
- Durable execution and checkpointing.
- Human-in-the-loop waiting/resume.
- Retry handling and loop protection.
- MCP + LangGraph integration boundary.
- RAG + LangGraph integration boundary.
- LangGraph vs LangChain.
- LangGraph vs custom orchestration.
- How QA engineers test deterministic graph execution and failure paths.

## Canonical References
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
