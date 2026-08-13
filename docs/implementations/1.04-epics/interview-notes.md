# Step 1.4 Interview Notes

## What is an Epic?
An epic is a large, business-meaningful capability that groups related product behavior and can be decomposed into multiple user stories.

## Epic vs User Story
- Epic: broad capability boundary.
- User story: smaller user-centric slice within an epic.

## Epic vs BRD
- BRD defines business needs.
- Epic organizes those needs into product capability buckets suitable for delivery planning.

## Epic vs PRD
- PRD defines detailed requirements.
- Epic groups PRD requirements into strategic implementation tracks.

## Why do we need Epics?
Epics make planning scalable, improve ownership clarity, and create a stable parent layer for stories, acceptance criteria, scenarios, and tests.

## How were Epics derived from the PRD?
By analyzing FR and selected NFR requirements, grouping related workflows, and preserving role-based business value and dependency flows.

## How did you avoid creating technical Epics?
Each epic was framed around user/business outcomes, not technologies, scripts, APIs, or backend components.

## How does Epic traceability work?
BRD IDs map to PRD IDs and then to Epic IDs using explicit tables in `knowledge/requirements-traceability.md` and epic-level traceability in `knowledge/epics/CAREFLOW_HEALTH_EPICS.md`.

## How does Epic structure help QA?
It creates stable scope boundaries for test planning, risk-based prioritization, and regression coverage ownership.

## How does Epic structure support Playwright?
It provides parent grouping for future page objects and end-to-end suites through an Epic -> Story -> AC -> Scenario -> Test chain.

## How does Epic structure support Cucumber BDD?
Epics become feature families that can be decomposed into scenario-focused user stories with deterministic acceptance criteria.

## How does Epic structure support RAG?
Stable IDs, atomic sections, and linked references create reliable retrieval anchors for requirement reasoning.

## How does Epic structure support MCP?
It supports future tool queries such as `search_epics`, `get_epic`, and requirement traceability lookups.

## Why LangGraph for the Agent?
LangGraph fits multi-step requirement reasoning workflows with explicit state transitions and tool orchestration.

## How will Epics map to Jira?
Each epic can be directly converted into Jira Epics with title, priority, status, dependencies, and owner role metadata.

## How will Epics map to Confluence?
Epic documentation fits as a dedicated section in product governance pages linked to BRD, PRD, stories, and QA strategy.

## How will Epics eventually relate to Jenkins?
Epics will later tag requirement groups whose stories/tests become CI validation and reporting units.

## How does this support enterprise QA?
It improves traceability, auditability, coverage analysis, and defect impact assessment across a growing requirement set.

## Common Interview Questions
1. Why not create one epic per screen?
2. How do you prevent orphan requirements?
3. Why include QA and AI relevance in epic docs?
4. How does epic decomposition reduce delivery risk?

## Suggested Answers
- One-screen epics are often too narrow and technical; business-capability epics scale better.
- Traceability tables ensure BRD/PRD requirements always map to epics.
- QA/AI relevance accelerates downstream automation and retrieval readiness.
- Dependency-aware epics expose sequencing and risk early.

## 30-second explanation
Step 1.4 created a baseline epic layer for CareFlow Health by mapping approved PRD requirements into 12 business-capability epics with priorities, dependencies, risks, and QA/AI traceability context.

## 1-minute explanation
I defined 12 epics from the approved PRD, each with objective, business value, actors, in-scope/out-of-scope, dependencies, business rules, risks, and future QA/Playwright/Cucumber/RAG/MCP/LangGraph relevance. I also extended BRD-to-PRD traceability with Epic IDs to maintain an unbroken requirement chain. The step stayed documentation-only and frontend-only.

## 2-minute explanation
This step establishes the delivery backbone between requirements and implementation planning. Starting from CFH-BRD-001 and CFH-PRD-001, I grouped related requirements into 12 business-meaningful epics instead of technical buckets. Every epic has stable IDs and metadata needed for decomposition into user stories and acceptance criteria. I also documented dependency paths and a shared definition of done to standardize future story quality. To prevent traceability gaps, I added a BRD->PRD->Epic table and an epic-to-PRD/BRD table, including cross-cutting requirements such as validation/state/responsive/accessibility behavior. The result is an enterprise-ready epic model that supports product planning, QA strategy, and future AI-assisted analysis workflows, while explicitly avoiding backend/API/automation implementation at this stage.

## Resume Bullet Suggestions
- Defined 12 enterprise-grade product epics for a healthcare QA platform and implemented BRD->PRD->Epic traceability to enable story decomposition, QA planning, and AI-ready requirement retrieval.
