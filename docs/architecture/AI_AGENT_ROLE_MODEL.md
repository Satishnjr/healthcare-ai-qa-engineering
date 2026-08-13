# AI Agent Role Model

## Purpose
Define future specialized QA agents, responsibilities, and boundaries.

| Agent | Responsibility | Inputs | Outputs | Tools | Decisions Allowed | Decisions NOT Allowed | Human Approval | Future Phase |
|---|---|---|---|---|---|---|---|---|
| Requirement Analysis Agent | Parse requirement intent and constraints | BRD/PRD/US/AC | structured requirement summary | RAG retrieval, requirements search | classify ambiguity/risk | release decision | Yes (high-risk) | Future |
| Test Scenario Agent | Generate/refine scenario candidates | requirements + AC | scenario set | RAG, template library | propose scenarios/tags | auto-approve high-risk scenarios | Yes | Future |
| Test Case Agent | Generate/normalize test-case candidates | scenarios + data rules | case drafts with IDs | test-case repository tools | map steps to traceability | overwrite approved canonical IDs | Yes | Future |
| Test Data Agent | Select/generate synthetic datasets | test cases + data strategy | data bundles and mappings | data catalog tools | choose synthetic variants | use real PHI/credentials | Yes | Future |
| Automation Agent | Build deterministic automation candidates | cases + locators + policies | code/BDD candidate artifacts | Playwright/Cucumber tooling | propose deterministic steps | deploy autonomous runtime | Yes | Future |
| Test Execution Agent | Run approved tasks | approved task payload | execution + artifacts | runner + reporting tools | execute approved runs | run forbidden/destructive actions | Yes for protected envs | Future |
| Failure Analysis Agent | Analyze failures across evidence | execution metadata + artifacts | root-cause hypotheses | logs/reports/RAG | cluster and prioritize failures | close defects autonomously | Yes | Future |
| Defect Management Agent | Draft defect payloads | failed test evidence | defect draft with trace links | defect system tools | create/update drafts | close/severity-finalize critical defects | Yes | Future |
| Regression Selection Agent | Select risk-based regression scope | priorities + recent changes | selected test set | traceability + history tools | shortlist candidates | skip mandatory smoke | Yes | Future |
| Test Reporting Agent | Build QA decision reports | results + defects + metrics | release-readiness report | reporting tools | summarize status and risk | final production go-live decision | Yes | Future |
| RAG Knowledge Agent | Curate retrievable QA knowledge | docs + metadata | indexed chunks + references | ingestion/chunking tools | manage retrieval corpus | alter canonical source docs without approval | Yes | Future |
| QA Orchestrator Agent | Coordinate multi-agent workflow | task contracts | orchestrated execution graph | LangGraph/MCP (future) | route tasks and enforce policies | bypass approval/guardrails | Yes | Future |

## Global Guardrails
- Agents operate only on synthetic data.
- Agents must expose evidence and traceability IDs.
- Agents cannot finalize high-risk decisions without human approval.