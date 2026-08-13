# Jira Architecture

## Step 4 Scope
Establish a production-style Jira integration boundary using local/mock implementation and typed domain model for CareFlow QA workflows.

## Component Model
- `JiraClient` interface
- `JiraMockAdapter` (implemented)
- `JiraRestAdapter` (future, currently blocked by unverified external connectivity)
- `JiraRepository` (business-facing access layer)
- `TraceabilityService` (cross-entity lookup support)

## Canonical Jira Issue Model
Fields used in Step 4 foundation:
- `issueId`, `issueKey`, `issueType`, `summary`, `description`
- `status`, `priority`, `labels`, `components`
- `sprint`, `release`, `assignee`, `reporter`
- `parentIssue`, `linkedIssues`
- `acceptanceCriteria`, `traceabilityIds`
- `testCaseIds`, `testScenarioIds`
- `defectSeverity`, `automationStatus`
- `aiClassification`, `aiConfidence`
- `evidenceReferences`, `createdAt`, `updatedAt`

## Supported Issue Types
- Epic
- Story
- Task
- Sub-task
- Acceptance Criteria
- Bug
- Test Case
- Test Execution
- Release
- Sprint

## Workflow Baseline
### Requirement Flow
Draft -> Refinement -> Ready -> In Progress -> QA Ready -> QA Testing -> Passed/Failed -> Done (with Reopened support).

### Defect Flow
Open -> Triaged -> Assigned -> In Progress -> Fixed -> QA Retest -> Verified -> Closed (with Reopened support).

## Step 4 Status Classification
- Implemented: Jira mock adapter, repository, typed validation, local operations.
- Mock: deterministic local data and issue operations.
- Foundation: REST adapter boundary and integration contracts.
- Planned: live Jira REST connectivity and production workflows.
- Blocked: external execution not verified in this step.
