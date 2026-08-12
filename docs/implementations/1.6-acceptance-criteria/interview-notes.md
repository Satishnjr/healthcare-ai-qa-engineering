# Step 1.6 Interview Notes

## What is an acceptance criterion?
A measurable condition that defines when a user story is considered functionally acceptable.

## Acceptance criteria vs test cases
- Acceptance criteria define expected behavior.
- Test cases define execution steps and detailed verification data.

## Acceptance criteria vs requirements
- Requirements define what the product must support.
- Acceptance criteria define how a specific story outcome is validated.

## Why Given/When/Then?
It creates business-readable behavior structure and aligns directly with BDD scenario conversion.

## How acceptance criteria support BDD
They provide deterministic behavior units that map to feature scenarios.

## How they support Playwright automation
They define observable UI outcomes, validations, and state transitions that become assertions.

## How they support RAG
Stable AC IDs and structured metadata improve retrieval precision and explainable references.

## How MCP can expose them
Future MCP tools can query AC by ID, story, epic, and requirement mapping.

## How an AI Agent can reason over them
Agents can use AC granularity for impact analysis, gap detection, and test recommendation.

## How traceability is maintained
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria mapping is explicitly captured in traceability tables.

## Why frontend-only affects testing strategy
No backend/API checks are expected; validation focuses on UI behavior, state transitions, role behavior, and synthetic data consistency.

## How to explain this implementation in an interview
I translated 32 approved user stories into stable, testable acceptance criteria with BDD-ready formatting, preserved end-to-end traceability, and added cross-cutting NFR criteria without introducing implementation scope creep.
