# Step 4.1 - Jira + Confluence UI Simulation

## Objective
Implement a production-like Jira and Confluence UI simulation layer inside the existing CareFlow frontend using deterministic local/mock data and preserving existing architecture, traceability, and AI boundaries.

## Architecture
- Existing single frontend application reused (`frontend/src/...`), no second app created.
- Existing role guard (`RequireAuth`, `RequireRoleAccess`) reused.
- Existing deterministic data model strategy reused.
- Step 4 foundation (Jira/Confluence contracts and mock architecture) reused as source boundary.

## Implemented UI

### Jira UI
Implemented routes/pages:
- `/jira/dashboard`
- `/jira/issues`
- `/jira/issues/:issueKey`
- `/jira/test-cases`
- `/jira/defects`
- `/jira/board`

Implemented capabilities:
- Jira dashboard metrics and QA summaries.
- Issue list with search, type/status/priority/assignee/label filters, sorting, and pagination.
- Issue detail with acceptance criteria, linked entities, traceability chain, and linked Confluence page navigation.
- Test case management view with AI classification filters.
- Defect management view with AI failure-analysis placeholder statuses.
- Board view with stable local state transition (Move Forward) without drag-drop complexity.

### Confluence UI
Implemented routes/pages:
- `/confluence`
- `/confluence/spaces`
- `/confluence/pages`
- `/confluence/pages/:pageId`
- `/confluence/search`

Implemented capabilities:
- Confluence home knowledge cards.
- Space listing.
- Page listing with search and space filtering.
- Page detail with related Jira/test assets.
- Metadata panel aligned to Step 4 export contract fields.

### Traceability UI
Implemented route/page:
- `/traceability`

Implemented capabilities:
- Visual end-to-end chain from BRD to future MCP/Agent node.
- Node selection and related-entity view.

### RAG Knowledge Explorer
Implemented route/page:
- `/knowledge`

Implemented capabilities:
- RAG-ready document table with metadata completeness and ingestion statuses.
- AI concept status table (implemented/foundation/planned states).

## Role-Based Access
Role-aware route access updated with existing role model:
- `Healthcare Administrator`: full Jira/Confluence/traceability/knowledge access.
- `Doctor`, `Nurse`, `Receptionist`: Jira + Confluence operational access.
- `Patient`: no Jira access; limited Confluence and Knowledge access.

## Testability
Stable `data-testid` selectors added for key components, including:
- `jira-dashboard`
- `jira-issue-list`
- `jira-issue-row-CFH-101`
- `jira-filter-status`
- `jira-search`
- `jira-issue-detail`
- `confluence-home`
- `confluence-space-CFH-QA`
- `confluence-page`
- `confluence-search`
- `traceability-view`
- `knowledge-explorer`
- `ai-status-panel`

## Automation
Implemented targeted Step 4.1 feature only:
- `automation/features/functional/step41-jira-confluence-ui.feature`

Scenarios automated (8):
1. QA manager role can access Jira dashboard.
2. QA engineer role can search Jira issues.
3. User can open Jira issue and view traceability.
4. User can navigate from Jira issue to Confluence page.
5. User can search Confluence knowledge.
6. User can open Confluence page and view metadata.
7. User can open traceability chain.
8. Patient cannot access Jira route.

## Validation
Executed:
- `frontend`: `npm run lint` -> PASS
- `frontend`: `npm run build` -> BLOCKED by environment EPERM during Vite output filesystem operations
- `automation`: `npm run typecheck` -> PASS
- `automation`: targeted Step 4.1 run only
  - command: `$env:BASE_URL='http://127.0.0.1:5180'; npx cucumber-js --config .tmp-cucumber-step41.js --tags "@step41"`
  - result: 8 scenarios, 8 passed

## Limitations
- No live Jira API runtime.
- No live Confluence API runtime.
- No RAG runtime, MCP runtime, or agent runtime.
- Frontend production build command is blocked in this environment due EPERM on Vite file operations.

## AI Industry Concepts
All Step 4.1 UI references are status-labelled and non-fabricated:
- `IMPLEMENTED`: no-fabrication policy, auditability foundations.
- `FOUNDATION`: RAG, RAGAS, MCP, tool boundary, agent boundary, observability boundary, quality gates boundary.
- `PLANNED`: AI-assisted prioritization/selection/triage and runtime automation intelligence.

## Interview Explanation
Step 4.1 demonstrates enterprise QA workflow simulation and traceability visibility in UI while preserving strict runtime boundaries. It enables credible discussion of Jira/Confluence-to-RAG/MCP/Agent future flow without claiming unimplemented runtime integrations.
