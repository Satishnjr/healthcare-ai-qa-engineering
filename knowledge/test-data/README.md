# Test Data Readme

## Purpose
Provide synthetic test-data strategy and catalog artifacts for CareFlow Health QA execution planning.

## Documents
- `CAREFLOW_HEALTH_TEST_DATA_STRATEGY.md`
- `CAREFLOW_HEALTH_TEST_DATA_CATALOG.md`

## Key Rules
- Synthetic data only
- Stable `TD-*` IDs
- No PHI/secrets/production data
- Deterministic regression baseline

## Traceability
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Test Scenario -> Test Case -> Test Data

## Future Consumption
- Playwright fixtures
- Cucumber tag-driven data selection
- Jira test management metadata
- Confluence knowledge pages
- RAG/MCP/Agent retrieval and orchestration
