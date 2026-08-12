# Architecture Decision Record (ADR)

This document defines architecture decisions established in Step 0.3.
Status legend: `ACCEPTED` means approved as project contract for future implementation.

## ADR-001: Frontend-only architecture
- Context: Project scope is a healthcare UI and QA/AI engineering platform on an office laptop without backend dependencies.
- Decision: Keep product frontend-only; no backend, no REST API, no GraphQL.
- Rationale: Reduces operational complexity and aligns with scope and environment constraints.
- Alternatives: Add mock backend service.
- Trade-offs: Limited realism for distributed-system concerns; faster delivery and reproducibility.
- Status: ACCEPTED

## ADR-002: Playwright + Cucumber BDD
- Context: UI automation must be business-readable and maintainable.
- Decision: Use Playwright + TypeScript + Cucumber/Gherkin with Page Object Model.
- Rationale: Strong UI coverage, readable behavior specs, scalable automation design.
- Alternatives: Playwright only, Cypress + plugins.
- Trade-offs: Higher framework complexity than plain test scripts.
- Status: ACCEPTED

## ADR-003: Python for AI/RAG/MCP/Agent layer
- Context: AI workflows require tooling ecosystem breadth and fast iteration.
- Decision: Use Python for RAG, MCP servers, LangGraph orchestration.
- Rationale: Mature ecosystem for AI tooling and orchestration.
- Alternatives: Node-first AI stack.
- Trade-offs: Polyglot repo (TypeScript + Python) increases consistency overhead.
- Status: ACCEPTED

## ADR-004: FastMCP for MCP
- Context: Controlled tool exposure is required for agent operations.
- Decision: Use FastMCP for MCP server/tool layer.
- Rationale: Clear tool contracts and practical Python integration.
- Alternatives: Custom RPC layer.
- Trade-offs: Framework learning curve and version management.
- Status: ACCEPTED

## ADR-005: LangGraph for Agent orchestration
- Context: Agent behavior must be stateful and observable.
- Decision: Use LangGraph for intent/planning/routing/tool execution flow.
- Rationale: Explicit graph/state approach over uncontrolled loops.
- Alternatives: Simple prompt-chaining agent.
- Trade-offs: Added design/setup overhead.
- Status: ACCEPTED

## ADR-006: Local/vector-store-first RAG architecture
- Context: Enterprise and laptop constraints require minimal external dependency.
- Decision: Use local-first vector store (e.g., ChromaDB) with configurable providers.
- Rationale: Reproducibility, lower external coupling, controlled cost.
- Alternatives: Hosted managed vector DB by default.
- Trade-offs: Potential local performance/storage constraints.
- Status: ACCEPTED

## ADR-007: Synthetic healthcare data only
- Context: Project is educational/demo and must avoid PHI.
- Decision: Use synthetic deterministic healthcare data only.
- Rationale: Compliance, safety, and reproducible tests.
- Alternatives: Masked/anonymized real data.
- Trade-offs: Less real-world data variance.
- Status: ACCEPTED

## ADR-008: Lightweight in-project Jira/Confluence/Jenkins tools
- Context: Need demonstration workflow without enterprise dependencies.
- Decision: Build lightweight project-specific mock systems.
- Rationale: End-to-end learning value with controlled scope.
- Alternatives: Integrate real SaaS tools directly.
- Trade-offs: Reduced feature parity with commercial tools.
- Status: ACCEPTED
