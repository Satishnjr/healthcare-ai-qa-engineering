# Jira Test Management Strategy (Future Implementation Contract)

## Scope
Define how future Jira-like project management should model QA artifacts and execution flow for CareFlow Health.

## Canonical Reference
Use `docs/qa/JIRA_PROJECT_MODEL.md`, `docs/qa/JIRA_WORKFLOW_AND_GOVERNANCE.md`, and `docs/qa/JIRA_DASHBOARD_SPECIFICATION.md` as the Step 1.10 baseline contracts.

## Project Structure
- Recommended project key: `CFH`
- Issue hierarchy:
  - Epic
  - Story
  - Task / Sub-task
  - Test
  - Test Execution
  - Bug
  - AI Evaluation
  - AI Defect

## Core Governance
- Preserve stable IDs (`BR`, `FR`, `EPIC`, `US`, `AC`, `TS`, `TC`, `TD`).
- Require traceability references on all QA and defect entities.
- Require evidence links for FAILED/BLOCKED/CLOSED outcomes.

## Dashboard Requirements
- Story and sprint progress
- Test execution outcomes
- Defect severity/status trend
- Automation and AI quality trend (future runtime)
