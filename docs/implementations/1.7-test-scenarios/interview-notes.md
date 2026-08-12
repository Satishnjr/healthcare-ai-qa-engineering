# Step 1.7 Interview Notes

## What is a test scenario?
A business-level validation statement describing what behavior must be checked in the product.

## Test scenario vs test case
- Scenario: validation intent.
- Test case: executable detail (steps, data, expected output checks).

## Test scenario vs acceptance criterion
Acceptance criteria define required conditions for story completion; scenarios convert those conditions into practical validation coverage units.

## Why scenario-level design before test cases?
It keeps planning business-focused, prevents over-detailing too early, and enables risk-based prioritization before execution-level decomposition.

## How is scenario coverage decided?
Using acceptance criteria intent, business risk, role/state behavior, negative and validation needs, and usability/accessibility/responsive expectations.

## How are P0/P1/P2/P3 priorities decided?
From business criticality + user impact + change risk + frequency + regression value.

## What makes a scenario smoke-worthy?
If failure indicates core product unusability or release-blocking breakage in critical user journeys.

## What makes a scenario regression-worthy?
Any scenario needed to protect expected behavior from change-driven breakage across releases.

## How does BDD relate to scenarios?
Scenarios provide direct Given/When/Then intent that can later be converted to Cucumber feature scenarios.

## How will Playwright consume scenarios later?
Scenario objective, preconditions, and expected UI states become automation flow and assertion blueprints.

## How can RAG use scenarios?
Stable IDs and explicit metadata support retrieval, grouping, and traceability-aware QA reasoning.

## How can MCP expose scenarios?
Via operations such as get-by-ID, search-by-AC/story, list smoke/regression subsets, and gap detection queries.

## How can a LangGraph Agent use scenarios?
For scenario generation refinement, coverage analysis, regression impact analysis, and prioritization recommendations.

## How is traceability maintained?
By preserving deterministic links from BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Test Scenario.

## How does frontend-only architecture affect QA strategy?
Validation targets UI behavior, client-side states, and role-driven visibility using synthetic data, without backend/API security assertions.
