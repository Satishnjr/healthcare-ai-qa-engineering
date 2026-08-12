# Step 0.3 Interview Notes

## What was implemented?
Engineering standards and architecture contract documents were created, including ADRs and planned AI/QA architecture documents.

## Why was this step necessary?
To create enforceable design constraints and coding standards before functional implementation begins.

## Architecture explanation
The project is modular and frontend-first, with planned automation, RAG, MCP, and LangGraph layers integrated incrementally.

## Technology choices
- React/TypeScript/Vite for frontend
- Playwright + Cucumber for UI automation
- Python for RAG/MCP/Agent
- FastMCP for MCP and LangGraph for orchestration

## Why Playwright?
Robust modern UI automation with strong debugging/evidence features.

## Why Cucumber?
Business-readable behavior definitions and traceability to requirements.

## Why Python for AI?
Strong ecosystem for embeddings, vector stores, orchestration, and tooling.

## Why FastMCP?
Clear tool interface model and controllable integration boundary.

## Why LangGraph?
Stateful agent orchestration with explicit transitions instead of uncontrolled loops.

## Why RAG?
Grounded responses from project knowledge rather than unsupported generation.

## Why frontend-only?
Matches project scope and office-laptop constraints while preserving realistic QA workflow.

## Why synthetic healthcare data?
Compliance and safety: no real PHI exposure.

## Why create our own Jira/Confluence/Jenkins?
To demonstrate end-to-end QA workflow architecture without enterprise system dependency.

## Trade-offs
- More documentation overhead up front
- Faster and safer downstream implementation decisions

## Challenges
Consolidating broad standards into actionable contracts without prematurely implementing future phases.

## Interview Questions
1. Why standards before coding?
2. Why a modular architecture for this project?
3. Why avoid backend/API layers in this initiative?
4. Why choose LangGraph over a simple agent loop?
5. How do you ensure compliance with healthcare data constraints?

## Suggested Answers
- Standards first reduce rework and improve consistency.
- Modularity enables independent delivery/testing across concerns.
- Frontend-only scope is intentional and constraint-aligned.
- LangGraph provides explicit control/state for agent workflows.
- Synthetic-only data and strict no-secrets/no-PHI policy enforce compliance.

## 30-second explanation
Step 0.3 defined the project’s engineering contract: architecture boundaries, coding/security/testing standards, ADRs, and planned AI/QA architecture docs.

## 1-minute explanation
I created a standards baseline before feature work: consolidated engineering rules, security policies, Git/documentation standards, and architecture contracts. I added ADRs for core technology decisions and produced dedicated planned architecture docs for AI and QA automation.

## 2-minute explanation
This step established design governance for the full project lifecycle. I documented project principles, stack decisions, boundaries for each top-level module, and future architecture for frontend automation and AI layers. I captured explicit ADRs for frontend-only scope, Playwright+Cucumber, Python AI stack, FastMCP, LangGraph, local-first RAG, synthetic data, and in-project lightweight Jira/Confluence/Jenkins tools. I also updated master docs to mark Step 0.3 as PASS while keeping all future capabilities clearly PLANNED. This gives reproducible implementation guardrails and interview-ready technical rationale.

## Resume bullet suggestions
- Defined architecture contract and engineering standards for a modular Healthcare AI QA platform, including ADRs, security/testing policies, and planned AI/automation architecture.
