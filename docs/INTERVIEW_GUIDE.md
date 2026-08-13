# Interview Guide

## Project Story (Major-Phase View)
Requirements and QA governance -> UI architecture and frontend runtime -> deterministic automation baseline -> Jira/Confluence enterprise knowledge foundation -> planned RAG/MCP/agent runtime.

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

## What Is Not Yet Implemented

| Area | Status |
|---|---|
| RAG runtime | PLANNED |
| RAGAS runtime evaluation pipeline | PLANNED |
| MCP runtime server/tools | PLANNED |
| Single QA agent runtime | PLANNED |
| LangGraph orchestration runtime | PLANNED |
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

### STEP 5 to STEP 11 - Planned Runtime Journey
- STEP 5: RAG runtime.
- STEP 6: RAGAS/evaluation runtime.
- STEP 7: MCP runtime.
- STEP 8: first QA AI agent runtime.
- STEP 9: LangGraph orchestration runtime.
- STEP 10: multi-agent runtime.
- STEP 11: enterprise integration, observability, LLMOps, security, and production readiness.

## Required Interview Statements
### How to explain Jira
I used Jira as the system of record for requirements, stories, acceptance criteria, defects and QA traceability. I created an adapter boundary so the QA platform is not tightly coupled to Jira's implementation.

### How to explain Confluence
I used Confluence as the knowledge management layer for product and QA information. The content is structured with metadata and traceability so it can later become a governed RAG knowledge source.

### How to explain future AI architecture
Jira and Confluence provide the enterprise knowledge and workflow layer. RAG provides grounded retrieval, MCP exposes controlled tools, and agents orchestrate QA actions with human approval and auditability.

## Fast Interview Answers
- Why mock adapters first: avoid fake integration claims and still deliver enterprise-grade contracts with deterministic validation.
- What proves readiness for RAG: normalized Confluence metadata plus deterministic knowledge export contract.
- How hallucination risk is controlled: evidence-first outputs, no-fabrication policy, traceability IDs, HITL gates.
- Why not run full regression here: Step 4 scope is Jira/Confluence foundation only.

## Canonical References
- `docs/IMPLEMENTATION_INDEX.md`
- `docs/ROADMAP_RESTRUCTURE.md`
- `docs/architecture/JIRA_CONFLUENCE_AI_ARCHITECTURE.md`
- `docs/architecture/JIRA_ARCHITECTURE.md`
- `docs/architecture/CONFLUENCE_ARCHITECTURE.md`
- `docs/architecture/JIRA_CONFLUENCE_INTEGRATION.md`
- `docs/architecture/KNOWLEDGE_EXPORT_CONTRACT.md`
- `docs/architecture/FUTURE_MCP_JIRA_CONFLUENCE_TOOLS.md`
