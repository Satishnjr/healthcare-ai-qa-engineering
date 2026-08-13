# Step 1.8 Interview Notes

## What Was Implemented
- Canonical test case layer (`CFH-TC-001`) with 96 detailed test cases mapped to 96 approved test scenarios.
- Full traceability chain extended to Test Case level.
- Coverage summaries for priority, smoke/regression, and test-type distribution.
- Automation readiness metadata for future Playwright + Cucumber implementation.

## Why Test Case Design Matters
Test cases operationalize quality by turning scenario intent into repeatable, auditable execution artifacts with explicit expected outcomes.

## Test Scenario vs Test Case
- Scenario: high-level behavior objective.
- Test Case: detailed execution steps, expected results, and data context.

## How Traceability Works
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Test Scenario -> Test Case

This enables impact analysis and coverage validation at any layer.

## How Playwright Will Consume These Test Cases
- Entry points and module mappings support page-object decomposition.
- Deterministic steps and expected states become Playwright actions/assertions.
- Tags and priorities support suite composition (smoke/regression/P0-P2).

## How Cucumber Will Consume These Test Cases
- Cucumber references map each test case to a future Feature/Scenario intent.
- Step narratives can be transformed into Given/When/Then while preserving traceability IDs.

## How RAG Will Use Test Cases
- Test cases become retrievable artifacts by ID, module, tags, priority, and trace links.
- Supports AI Q&A such as "which P1 tests cover appointments?".

## How MCP Will Expose Test Case Operations
Potential future tool operations:
- get test case by ID
- search by module/tag/priority
- list smoke or regression subsets
- map requirement-to-test case chain

## How Agents Will Use Test Cases
Potential future agent tasks:
- regression subset recommendation
- risk-based prioritization
- failure impact analysis
- coverage gap detection

## Likely Interview Questions and Strong Answers

### Q: Why not jump directly to automation scripts?
A: Test case quality gates reduce flaky automation risk and ensure deterministic, traceable assertions before coding.

### Q: How did you ensure no coverage regression from scenarios?
A: Every scenario is mapped to at least one test case and validated through the traceability summary with orphan checks.

### Q: How is this AI-ready?
A: Stable IDs, consistent metadata, and normalized tags make retrieval, prioritization, and orchestration machine-usable.

### Q: How does frontend-only scope affect testing?
A: Assertions are UI-observable and state-driven; no backend/API assumptions are made.

## Architecture Concepts Demonstrated
- Requirement decomposition hierarchy
- Traceability governance
- Risk-based test design
- Automation-first documentation strategy
- AI-ready metadata modeling
