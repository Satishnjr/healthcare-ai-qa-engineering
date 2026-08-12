# Jira Test Management Strategy (Future Implementation Contract)

## Scope
Define how future Jira-like project management should model QA artifacts and execution flow for CareFlow Health.

## Project Structure
- Recommended project key: `CFH`
- Issue hierarchy:
  - Epic
  - Story
  - Task / Sub-task
  - Test Case
  - Defect

## Components
Authentication, Dashboard, Patient, Appointment, Provider, Medical Records, Prescription, Billing, Insurance, Notifications, Reports, Settings, QA-Automation, AI-QA.

## Labels
@smoke, @regression, @negative, @boundary, @accessibility, @responsive, @role-patient, @role-provider, @role-admin.

## Priorities
P0, P1, P2, P3 aligned with QA strategy.

## Workflows
- Test execution states: Not Run, In Progress, Passed, Failed, Blocked, Retest, Closed.
- Defect lifecycle states: New, Triaged, Assigned, In Progress, Fixed, Ready for QA, Retest, Closed, Reopened.

## Sprint and Release Model
- Sprint cadence: weekly/bi-weekly.
- Release versioning: `CFH-R{major}.{minor}`.
- Traceability references required in issue fields (`US`, `AC`, `TS`, `TC`, `TD`).

## Dashboard Requirements
- Total User Stories
- Test Cases by status
- Passed/Failed/Blocked trends
- Defects by severity/status
- Automation coverage
- Regression execution trend
- Requirement coverage
- AI-generated QA insights
