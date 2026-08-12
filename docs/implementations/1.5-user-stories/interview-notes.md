# Step 1.5 Interview Notes

## What is a User Story?
A user story is a concise, business-focused requirement describing who needs what capability and why.

## Epic vs User Story
- Epic: broad capability area.
- User Story: implementable, testable slice inside an epic.

## BRD vs PRD vs User Story
- BRD: business goals and scope.
- PRD: detailed product requirements.
- User Story: execution-ready requirement unit linked to epics and PRD/BRD IDs.

## How did you derive stories?
From approved epic capabilities and PRD FR requirements, with explicit flow and validation/error behavior for AC readiness.

## How did you maintain traceability?
Every story includes PRD and BRD references and is mapped in `knowledge/requirements-traceability.md` with epic and story IDs.

## How do you write a good User Story?
Use clear actor, capability, and business value; keep it testable with preconditions, main/alternate/negative flows.

## What makes a story testable?
Deterministic preconditions, expected outcomes, negative behavior, and validation/error expectations.

## What is Definition of Ready?
A readiness gate ensuring references, behavior clarity, and AC creation readiness are complete.

## What is Definition of Done?
A future execution gate covering implementation, validation, accessibility, responsiveness, automation, and documentation.

## How does this support QA?
Creates a stable parent layer for acceptance criteria, scenarios, and risk-based test planning.

## How does this support Playwright?
Supports future conversion chain through AC, Gherkin, step definitions, and page objects.

## How does this support Cucumber BDD?
Story structure directly supports Feature/Scenario/Given-When-Then decomposition.

## How does this support RAG?
Stable IDs and traceable references improve retrieval accuracy and explainable linking.

## How does this support MCP?
Enables future query operations for stories, requirements, and traceability relations.

## Why LangGraph?
LangGraph is suitable for multi-step requirement and coverage reasoning pipelines.

## How will stories map to Jira?
Epic IDs map to Jira Epics and story IDs map to Jira Stories with linked requirement metadata.

## How will stories map to Confluence?
Stories fit under product requirement hierarchy pages and QA planning documentation.

## How will Jenkins eventually use the workflow?
Story and requirement IDs can later drive CI validation grouping and report traceability.

## Common Interview Questions
1. Why keep story IDs stable?
2. How do you handle cross-cutting NFRs?
3. How do stories reduce automation ambiguity?
4. How do you detect orphan requirements?

## Suggested Answers
- Stable IDs preserve long-term traceability across artifacts.
- Cross-cutting NFRs are managed as quality constraints, not forced business stories.
- Structured flows and expectations make AC/BDD/test generation deterministic.
- Orphan detection is done via explicit requirement and epic/story mapping checks.

## 30-second explanation
Step 1.5 translated approved epics into 32 canonical, traceable user stories that are AC-ready, BDD-ready, and aligned to frontend-only constraints.

## 1-minute explanation
I created `CFH-US-001` with stable story IDs across 12 epics, mapped every story to PRD/BRD references, and updated traceability tables. I also reconciled PRD coverage by separating direct epic mappings from cross-cutting NFRs and documented their coverage strategy. The output is implementation-ready documentation with no code or automation implementation.

## 2-minute explanation
This step established the user story layer between epics and acceptance criteria. Starting with CFH-BRD-001, CFH-PRD-001, and CFH-EPIC-001, I decomposed capabilities into 32 stories using stable IDs and consistent story format. Each story includes actor, business value, preconditions, main/alternate/negative flows, and quality expectations for validation, errors, accessibility, responsiveness, and testability. I then updated requirements traceability to include BRD/PRD/Epic/User Story mapping and coverage summary. I also performed PRD coverage reconciliation: 44 total PRD requirements, 31 directly mapped to epics, 13 not directly mapped due to cross-cutting NFR nature, each with explicit coverage strategy. The result is enterprise-ready decomposition without implementing frontend/backend/API/testing/AI integrations in this step.

## Resume Bullet Suggestions
- Defined 32 traceable user stories across 12 healthcare product epics and implemented BRD/PRD/Epic/User Story mapping with documented PRD reconciliation for QA and automation readiness.
