# Step 1.3 Interview Notes

## What is a PRD?
A PRD is a product-level document that defines detailed behavior, interactions, validations, and non-functional expectations for implementation and testing.

## BRD vs PRD
- BRD describes business intent and scope.
- PRD translates that intent into detailed product behavior and testable requirements.

## Why was the PRD created after the BRD?
Because PRD detail should be derived from approved business intent to prevent requirement drift.

## How were requirements derived?
From CFH-BRD-001 plus Step 1.1 architecture artifacts and traceability strategy.

## How did we make the PRD testable?
Every FR includes expected behavior, validation, error behavior, and testability notes with stable IDs.

## Why stable IDs?
Stable IDs enable traceability from BRD to PRD and onward to stories, tests, automation, and AI retrieval.

## How does PRD support Playwright?
By defining deterministic UI states, role behavior, dialog behavior, validation messaging, and stable requirement references.

## How does PRD support Cucumber BDD?
FRs are scenario-friendly with explicit preconditions and expected outcomes.

## How does PRD support RAG?
Structured headings, stable IDs, and atomic requirements make ingestion/retrieval reliable.

## How does PRD support MCP?
Future MCP tools can query PRD requirement IDs and linked traceability context.

## How does PRD support LangGraph?
Future agent workflows can map failures/coverage to FR/NFR IDs for explainable analysis.

## How do we handle frontend-only architecture?
PRD explicitly excludes backend/API/API automation and defines simulated authentication/authorization behavior.

## How do we handle synthetic healthcare data?
All data and metrics are explicitly synthetic; no PHI or real clinical claims.

## Functional vs non-functional requirements
Functional requirements define product behaviors; non-functional requirements define quality attributes and constraints.

## Accessibility requirements
Accessibility criteria are defined as product expectations (keyboard, labels, focus, dialogs, errors).

## Responsive requirements
Expected behavior is defined for desktop/tablet/mobile without losing core workflow usability.

## Interview Questions
1. Why is ID-based PRD design important for QA automation?
2. How does PRD improve requirement-to-test traceability?
3. Why avoid backend/API details in this PRD?
4. How does PRD prepare for future AI-driven QA workflows?

## Suggested Answers
- IDs support deterministic linking across artifacts.
- PRD adds testable detail absent from BRD-level abstraction.
- Frontend-only scope is deliberate and architecture-aligned.
- Structured PRD enables retrieval, mapping, and explainable AI reasoning.

## 30-second explanation
Step 1.3 transformed BRD intent into a detailed, testable PRD with FR/NFR IDs, role-capability matrix, UI behavior rules, and traceability mapping.

## 1-minute explanation
I created CFH-PRD-001 from BRD and architecture sources, defining 30 functional requirements and 14 non-functional requirements with clear validation/error/testability behavior. I also added role matrix, information architecture, and BRD-to-PRD mappings, while enforcing frontend-only and synthetic-data constraints.

## 2-minute explanation
This step operationalizes business intent into implementation-ready product requirements without writing code. I built a PRD with stable requirement identifiers, role-aware behavior expectations, and explicit standards for validation, loading/empty/error states, dialogs, notifications, accessibility, responsiveness, performance, and security. Each functional requirement references BRD origins and includes testability notes to support future BDD and Playwright design. I also updated traceability to map BR IDs to PRD IDs and preserved clear boundaries: no backend, APIs, or automation implementation. This gives a robust, auditable basis for next-step epics and story decomposition.

## Resume bullet suggestions
- Authored CFH-PRD-001 for a frontend-only healthcare simulation, defining 30 FRs and 14 NFRs with BRD traceability, role-based capability mapping, and automation-ready testability criteria.
