# Step 1.4 - Epic Definition

## Objective
Define enterprise-style epics for CareFlow Health by decomposing approved PRD capabilities into business-meaningful, traceable, and testable capability layers ready for user-story decomposition.

## Source Documents
- `knowledge/brd/CAREFLOW_HEALTH_BRD.md`
- `knowledge/prd/CAREFLOW_HEALTH_PRD.md`
- `knowledge/requirements-traceability.md`
- Architecture references from `docs/architecture/`

## Epic Strategy
- Used stable IDs (`EPIC-001` to `EPIC-012`).
- Grouped related capabilities into business-centric epics instead of one epic per UI item.
- Preserved frontend-only boundaries and synthetic healthcare constraints.
- Added explicit PRD and BRD traceability for each epic.

## Epic Inventory
- EPIC-001 Authentication and Access Simulation
- EPIC-002 Role-Aware Dashboard and Work Visibility
- EPIC-003 Patient Identity and Profile Management
- EPIC-004 Appointment Lifecycle Management
- EPIC-005 Doctor Directory and Schedule Management
- EPIC-006 Medical Records and Clinical Notes Simulation
- EPIC-007 Prescription Review and Medication Visibility
- EPIC-008 Billing and Insurance Information Visibility
- EPIC-009 Notifications and User Feedback Experience
- EPIC-010 Reporting and Operational Insights
- EPIC-011 User Administration and Settings
- EPIC-012 Activity History and Audit Simulation

## Epic Traceability
- Added epic mapping table in `knowledge/requirements-traceability.md`:
  - `| BRD ID | PRD ID | Epic ID | Requirement | Status |`
- Added epic-to-PRD/BRD traceability table in `knowledge/epics/CAREFLOW_HEALTH_EPICS.md`.

## Dependencies
Documented product dependencies such as:
- `EPIC-001 -> EPIC-002 -> EPIC-003 -> EPIC-004 -> EPIC-006 -> EPIC-007`
- `EPIC-001 -> EPIC-005 -> EPIC-004`

## Scope
In scope:
- Epic decomposition and traceability documentation.
- Priority, actors, dependencies, risks, and definition of done per epic.

Out of scope:
- Frontend implementation
- Backend/APIs
- Playwright/Cucumber implementation
- RAG/MCP/LangGraph implementation
- Real Jira/Confluence/Jenkins integrations

## QA Relevance
Each epic includes future QA relevance for:
- Functional testing
- UI validation and negative testing
- Accessibility and responsive testing
- Cross-browser and regression coverage

## Playwright Relevance
Defined future mapping hierarchy:
- Epic -> User Story -> Acceptance Criteria -> Gherkin -> Steps -> Page Object -> Playwright Test

## Cucumber Relevance
Documented BDD-ready capability decomposition for future feature/scenario creation without generating `.feature` files in this step.

## RAG Relevance
Epic IDs, atomic sections, and traceability references are structured for future retrieval and connected requirement hierarchy traversal.

## MCP Relevance
Documented planned future MCP capability alignment (`search_epics`, `get_epic`, `search_requirements`, `get_requirement_traceability`, etc.) without implementation.

## LangGraph Relevance
Documented planned future agent flows for requirement analysis, coverage analysis, regression impact, and defect-context mapping.

## Jira Relevance
Epic fields are structured for direct future Jira conversion: ID, title, priority, status, actors/owners, and dependencies.

## Confluence Relevance
Epic documentation aligns with a future Confluence-style hierarchy under product/requirements/qa/ai docs.

## Jenkins Relevance
Documented future relation of epic-tagged requirement coverage to CI validation and reporting workflows.

## Validation
- Epic document exists and is complete.
- Epic README exists.
- All epics have stable IDs, objective, value, actors, priority, scope, dependencies, risks.
- Epic-to-PRD and BRD traceability is documented.
- No backend/API/automation implementation introduced.
- No real PHI, secrets, or external healthcare integration introduced.

## Files Created
- `knowledge/epics/CAREFLOW_HEALTH_EPICS.md`
- `knowledge/epics/README.md`
- `docs/implementations/1.04-epics/prompt.md`
- `docs/implementations/1.04-epics/README.md`
- `docs/implementations/1.04-epics/interview-notes.md`
- `docs/implementations/1.04-epics/implementation-report.pdf`
- `docs/implementations/1.04-epics/response.md`

## Files Modified
- `knowledge/requirements-traceability.md`
- `README.md`
- `CHANGELOG.md`
- `docs/IMPLEMENTATION_INDEX.md`
- `docs/INTERVIEW_GUIDE.md`

## Lessons Learned
Cross-cutting PRD requirements (validation, states, responsive/accessibility) should be intentionally mapped to relevant business epics to avoid orphan requirements.

## Interview Preparation
This step provides clear narrative evidence for enterprise requirement decomposition, traceability, and QA/AI readiness.

## Status
PASS

