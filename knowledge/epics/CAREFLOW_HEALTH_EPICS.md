# Epic Definition Document

## Metadata
- Document ID: CFH-EPIC-001
- Product: CareFlow Health
- Project: Healthcare AI QA Engineering Platform
- Version: 1.0
- Status: BASELINE / APPROVED FOR USER STORY DECOMPOSITION
- Source: CFH-PRD-001

This Epic document is synthetic and created for the Healthcare AI QA Engineering Platform. It must not be interpreted as real healthcare organizational planning data.

## Epic Design Principles
- Epics represent meaningful business/product capabilities.
- Epics are not technical tasks, single UI controls, or single test cases.
- Each Epic should support decomposition into multiple user stories.
- Epics must be traceable to BRD and PRD IDs.

## Prioritization Scale
- P0: Critical
- P1: High
- P2: Medium
- P3: Low

## Epic Inventory Summary
| Epic ID | Epic Name | Priority | Status | Primary Actors |
|---|---|---|---|---|
| EPIC-001 | Authentication and Access Simulation | P0 | BASELINE | All users |
| EPIC-002 | Role-Aware Dashboard and Work Visibility | P1 | BASELINE | All users |
| EPIC-003 | Patient Identity and Profile Management | P0 | BASELINE | Receptionist, Doctor, Nurse, Patient |
| EPIC-004 | Appointment Lifecycle Management | P0 | BASELINE | Receptionist, Doctor, Patient, Admin |
| EPIC-005 | Doctor Directory and Schedule Management | P1 | BASELINE | Doctor, Receptionist, Admin |
| EPIC-006 | Medical Records and Clinical Notes Simulation | P1 | BASELINE | Doctor, Nurse, Patient |
| EPIC-007 | Prescription Review and Medication Visibility | P2 | BASELINE | Doctor, Nurse, Patient |
| EPIC-008 | Billing and Insurance Information Visibility | P2 | BASELINE | Receptionist, Admin, Patient |
| EPIC-009 | Notifications and User Feedback Experience | P1 | BASELINE | All users |
| EPIC-010 | Reporting and Operational Insights | P2 | BASELINE | Admin, Receptionist |
| EPIC-011 | User Administration and Settings | P2 | BASELINE | Admin, All users |
| EPIC-012 | Activity History and Audit Simulation | P1 | BASELINE | Admin, All users |

## Dependency Overview
EPIC-001 -> EPIC-002 -> EPIC-003 -> EPIC-004 -> EPIC-006 -> EPIC-007
EPIC-001 -> EPIC-005 -> EPIC-004
EPIC-001 -> EPIC-009
EPIC-001 -> EPIC-010
EPIC-001 -> EPIC-011 -> EPIC-012
EPIC-004 -> EPIC-010

Dependencies reflect product flow and traceability, not technical coupling.

## Definition of Done (Generic Epic)
- Epic objective documented
- Business value documented
- In scope and out of scope documented
- PRD references documented
- BRD references documented
- Dependencies documented
- Risks documented
- QA relevance documented
- Playwright/Cucumber future relevance documented
- RAG/MCP/Agent relevance documented
- Ready for user-story decomposition

## Epic Details

### EPIC-001 Authentication and Access Simulation
- Epic Objective: Define frontend-only authentication, role selection, role-based visibility, and session-like behavior.
- Business Value: Enables controlled access simulation and context-aware workflows.
- Priority: P0
- Status: BASELINE
- Primary Actors: All users
- PRD References: FR-001, FR-002, FR-003, NFR-014
- BRD References: BR-001, BR-002
- In Scope: Login/logout simulation, role-based menu visibility, session-like state clearing.
- Out of Scope: Real identity provider, backend auth, token issuance.
- Capabilities: Sign-in simulation, sign-out, role routing, unauthorized-action hiding.
- Dependencies: None (foundational epic).
- Business Rules: BRULE-010, BRULE-011, BRULE-020
- Risks: RISK-002, RISK-008
- QA Relevance: Functional, negative, validation, accessibility, cross-browser checks.
- Playwright Relevance: Foundational auth/navigation flows for all suites.
- Cucumber Relevance: Given login state precondition for most scenarios.
- RAG Relevance: Entry-point capability context and role constraints.
- MCP Relevance: Future `search_requirements`, `get_requirement_traceability` operations.
- Agent Relevance: Root routing context for role-specific analysis.
- Definition of Done: Epic template DoD satisfied.

### EPIC-002 Role-Aware Dashboard and Work Visibility
- Epic Objective: Provide role-specific dashboard summaries, quick actions, and recent context.
- Business Value: Faster decision-making and workflow orientation.
- Priority: P1
- Status: BASELINE
- Primary Actors: All users
- PRD References: FR-004, FR-005
- BRD References: BR-003, BR-018, BR-022
- In Scope: Role-based widgets, synthetic KPI cards, quick actions, recent activity snippets.
- Out of Scope: Real-time external feeds or production analytics engines.
- Capabilities: Dashboard personalization by role and context shortcuts.
- Dependencies: EPIC-001
- Business Rules: BRULE-011, BRULE-016, BRULE-021
- Risks: RISK-003, RISK-014
- QA Relevance: UI state checks, role-content validation, regression coverage.
- Playwright Relevance: Dashboard smoke/regression suite anchor.
- Cucumber Relevance: Feature-level role dashboard scenarios.
- RAG Relevance: High-level operational requirement retrieval.
- MCP Relevance: Future dashboard-related requirement lookup operations.
- Agent Relevance: Entry-point for coverage gap analysis by role.
- Definition of Done: Epic template DoD satisfied.

### EPIC-003 Patient Identity and Profile Management
- Epic Objective: Manage patient registration, list/search behavior, and profile visibility/editing rules.
- Business Value: Core care workflow continuity and administrative efficiency.
- Priority: P0
- Status: BASELINE
- Primary Actors: Receptionist, Doctor, Nurse, Patient
- PRD References: FR-006, FR-007, FR-008, FR-009, FR-025, FR-026, FR-029, FR-030
- BRD References: BR-004, BR-005, BR-006, BR-007
- In Scope: Patient registration, ID conventions, list/search/sort/pagination, profile sections.
- Out of Scope: Real patient identities, backend patient master systems.
- Capabilities: Identity creation, lookup, profile context management.
- Dependencies: EPIC-001, EPIC-002
- Business Rules: BRULE-001, BRULE-007, BRULE-008, BRULE-009, BRULE-012, BRULE-019
- Risks: RISK-001, RISK-004, RISK-013
- QA Relevance: Validation, negative search, boundary, accessibility, responsive tests.
- Playwright Relevance: High-value patient workflows for regression depth.
- Cucumber Relevance: Patient registration/search/profile behavior scenarios.
- RAG Relevance: Rich requirement corpus for retrieval and mapping.
- MCP Relevance: Future `search_epics`, `get_epic`, requirements trace tools.
- Agent Relevance: Coverage and failure linkage around patient workflows.
- Definition of Done: Epic template DoD satisfied.

### EPIC-004 Appointment Lifecycle Management
- Epic Objective: Define scheduling, rescheduling, cancellation, status transitions, and conflict handling.
- Business Value: Improves operational throughput and scheduling reliability.
- Priority: P0
- Status: BASELINE
- Primary Actors: Receptionist, Doctor, Patient, Admin
- PRD References: FR-010, FR-011, FR-012, FR-025, FR-026, FR-028
- BRD References: BR-008, BR-009, BR-010
- In Scope: Create/update/cancel flows, status logic, conflict simulation.
- Out of Scope: Real calendaring integrations and external booking systems.
- Capabilities: Appointment lifecycle control and visibility.
- Dependencies: EPIC-001, EPIC-003, EPIC-005
- Business Rules: BRULE-002, BRULE-003, BRULE-004, BRULE-005, BRULE-006, BRULE-014, BRULE-018
- Risks: RISK-003, RISK-005, RISK-007
- QA Relevance: Functional/negative/state-transition/regression testing.
- Playwright Relevance: End-to-end lifecycle scenarios.
- Cucumber Relevance: Scheduling/rescheduling/cancellation behavior scenarios.
- RAG Relevance: Critical path retrieval for scheduling requirement queries.
- MCP Relevance: Future epic/story/defect linkage for appointment domain.
- Agent Relevance: Regression impact and failure clustering around appointment flows.
- Definition of Done: Epic template DoD satisfied.

### EPIC-005 Doctor Directory and Schedule Management
- Epic Objective: Provide doctor profile, specialty, availability, and schedule visibility capabilities.
- Business Value: Supports appointment coordination and workload visibility.
- Priority: P1
- Status: BASELINE
- Primary Actors: Doctor, Receptionist, Admin
- PRD References: FR-013, FR-014
- BRD References: BR-011, BR-012
- In Scope: Doctor list/profile metadata and schedule views.
- Out of Scope: Real provider credentialing and external roster integrations.
- Capabilities: Schedule context and provider searchability.
- Dependencies: EPIC-001
- Business Rules: BRULE-012, BRULE-017
- Risks: RISK-003, RISK-014
- QA Relevance: List/detail/filter and role-visibility test coverage.
- Playwright Relevance: Doctor list/profile/schedule journeys.
- Cucumber Relevance: Doctor schedule behavior feature scenarios.
- RAG Relevance: Provider-domain requirement retrieval context.
- MCP Relevance: Future issue/doc updates for doctor module requirements.
- Agent Relevance: Schedule-related defect and coverage reasoning.
- Definition of Done: Epic template DoD satisfied.

### EPIC-006 Medical Records and Clinical Notes Simulation
- Epic Objective: Enable synthetic medical record review and simulated clinical note authoring workflow.
- Business Value: Provides care-context continuity and realistic clinical UI behavior simulation.
- Priority: P1
- Status: BASELINE
- Primary Actors: Doctor, Nurse, Patient
- PRD References: FR-015, FR-016
- BRD References: BR-013, BR-014
- In Scope: Record list/detail/filtering and synthetic note creation/update.
- Out of Scope: Clinical decision support or diagnosis recommendation logic.
- Capabilities: Historical context review and note-entry simulation.
- Dependencies: EPIC-003, EPIC-004
- Business Rules: BRULE-011, BRULE-015
- Risks: RISK-001, RISK-010, RISK-013
- QA Relevance: Role access, content validation, error-state and usability tests.
- Playwright Relevance: Record/note workflow automation candidates.
- Cucumber Relevance: View history -> add note -> confirm behavior scenarios.
- RAG Relevance: High-signal clinical-context requirement retrieval.
- MCP Relevance: Future requirement-story-defect chain operations.
- Agent Relevance: Coverage and failure analysis for record/note behaviors.
- Definition of Done: Epic template DoD satisfied.

### EPIC-007 Prescription Review and Medication Visibility
- Epic Objective: Present synthetic prescription details and status views by role.
- Business Value: Enhances medication-context visibility in workflow simulation.
- Priority: P2
- Status: BASELINE
- Primary Actors: Doctor, Nurse, Patient
- PRD References: FR-017
- BRD References: BR-015
- In Scope: List/detail view, active/historical filtering, role-limited display.
- Out of Scope: Prescription generation, fulfillment, or medical recommendations.
- Capabilities: Prescription visibility and status awareness.
- Dependencies: EPIC-003, EPIC-006
- Business Rules: BRULE-011
- Risks: RISK-013
- QA Relevance: Visibility, filtering, and role-access coverage.
- Playwright Relevance: Prescription module regression scenarios.
- Cucumber Relevance: Role-based prescription view feature scenarios.
- RAG Relevance: Domain chunk for medication-view requirements.
- MCP Relevance: Future query/update links to prescription requirement artifacts.
- Agent Relevance: Failure/coverage insights around prescription UI.
- Definition of Done: Epic template DoD satisfied.

### EPIC-008 Billing and Insurance Information Visibility
- Epic Objective: Provide synthetic financial and insurance summaries for operational workflows.
- Business Value: Supports administrative readiness and user information transparency.
- Priority: P2
- Status: BASELINE
- Primary Actors: Receptionist, Admin, Patient
- PRD References: FR-018, FR-019
- BRD References: BR-016, BR-017
- In Scope: Invoice-like summaries, insurance info/coverage-like statuses.
- Out of Scope: Real payment processing, claims adjudication, payer integration.
- Capabilities: Financial and coverage visibility in simulation.
- Dependencies: EPIC-001, EPIC-003
- Business Rules: BRULE-022
- Risks: RISK-013, RISK-014
- QA Relevance: Field visibility, role permissions, state and empty-case checks.
- Playwright Relevance: Billing/insurance journey automation candidates.
- Cucumber Relevance: Coverage/status behavior scenarios.
- RAG Relevance: Financial-domain requirement retrieval context.
- MCP Relevance: Future requirement issue/doc updates for billing domain.
- Agent Relevance: Gap/failure analysis for billing and insurance views.
- Definition of Done: Epic template DoD satisfied.

### EPIC-009 Notifications and User Feedback Experience
- Epic Objective: Define notification center behavior and user feedback states (toasts/messages).
- Business Value: Improves user awareness and confidence in workflow outcomes.
- Priority: P1
- Status: BASELINE
- Primary Actors: All users
- PRD References: FR-020, FR-027, FR-028
- BRD References: BR-018, BR-023
- In Scope: Notification list/read-state/type/timestamp plus feedback messaging patterns.
- Out of Scope: External messaging gateways or real push infrastructure.
- Capabilities: Event awareness and actionable feedback.
- Dependencies: EPIC-001, EPIC-002
- Business Rules: BRULE-016, BRULE-017
- Risks: RISK-005, RISK-014
- QA Relevance: State transitions, empty/error/success feedback validation.
- Playwright Relevance: Notification center and toast assertions.
- Cucumber Relevance: Event-driven notification scenarios.
- RAG Relevance: User-feedback behavior retrieval chunk.
- MCP Relevance: Future requirement/test-result correlation operations.
- Agent Relevance: Event-related failure analysis and regression recommendations.
- Definition of Done: Epic template DoD satisfied.

### EPIC-010 Reporting and Operational Insights
- Epic Objective: Define synthetic reporting capabilities for operational visibility.
- Business Value: Supports oversight, planning, and trend interpretation in simulation context.
- Priority: P2
- Status: BASELINE
- Primary Actors: Admin, Receptionist
- PRD References: FR-021
- BRD References: BR-019
- In Scope: Appointment/patient/doctor/cancellation/activity summaries.
- Out of Scope: Real clinical analytics or external BI integrations.
- Capabilities: Synthetic reporting and summary views.
- Dependencies: EPIC-002, EPIC-004, EPIC-005, EPIC-012
- Business Rules: BRULE-017
- Risks: RISK-003, RISK-014
- QA Relevance: Metric-view integrity and filter behavior tests.
- Playwright Relevance: Report view regression candidates.
- Cucumber Relevance: Summary-report behavior scenarios.
- RAG Relevance: Reporting requirements retrieval for downstream planning.
- MCP Relevance: Future report-related requirement/doc operations.
- Agent Relevance: Coverage/risk recommendations tied to reporting features.
- Definition of Done: Epic template DoD satisfied.

### EPIC-011 User Administration and Settings
- Epic Objective: Define user administration (admin) and user preference/settings behaviors.
- Business Value: Supports controlled user-state simulation and personalization.
- Priority: P2
- Status: BASELINE
- Primary Actors: Admin, All users
- PRD References: FR-022, FR-023
- BRD References: BR-020, BR-021
- In Scope: User list/search/status simulation and profile/notification/display preferences.
- Out of Scope: Backend authorization engines, IAM integrations.
- Capabilities: Admin user-state control and end-user preferences.
- Dependencies: EPIC-001
- Business Rules: BRULE-010, BRULE-011, BRULE-020
- Risks: RISK-002, RISK-014
- QA Relevance: Role visibility, preference persistence, negative update paths.
- Playwright Relevance: User admin/settings workflow automation candidates.
- Cucumber Relevance: Admin/user settings scenarios.
- RAG Relevance: Governance requirement retrieval context.
- MCP Relevance: Future issue and doc updates for user governance domain.
- Agent Relevance: Role/access coverage analysis and recommendation support.
- Definition of Done: Epic template DoD satisfied.

### EPIC-012 Activity History and Audit Simulation
- Epic Objective: Define simulated activity timeline events and role-appropriate visibility.
- Business Value: Provides operational transparency and governance-like review capability.
- Priority: P1
- Status: BASELINE
- Primary Actors: Admin, All users (limited own-activity where applicable)
- PRD References: FR-024
- BRD References: BR-022
- In Scope: Simulated event timeline for login/logout/patient/appointment/note/profile events.
- Out of Scope: Regulatory-grade audit logging or compliance system claims.
- Capabilities: Filterable activity history and event trace context.
- Dependencies: EPIC-001, EPIC-003, EPIC-004, EPIC-006
- Business Rules: BRULE-021
- Risks: RISK-014
- QA Relevance: Event visibility and filter/sort validation.
- Playwright Relevance: Activity timeline and filtering test flows.
- Cucumber Relevance: Activity event generation/visibility scenarios.
- RAG Relevance: Useful traceability context for requirement-execution lineage.
- MCP Relevance: Future retrieval and status/update operations for activity evidence.
- Agent Relevance: Requirement-to-event trace analysis in future workflows.
- Definition of Done: Epic template DoD satisfied.

## Epic-to-PRD/BRD Traceability Table
| Epic ID | Epic Name | PRD References | BRD References |
|---|---|---|---|
| EPIC-001 | Authentication and Access Simulation | FR-001, FR-002, FR-003, NFR-014 | BR-001, BR-002 |
| EPIC-002 | Role-Aware Dashboard and Work Visibility | FR-004, FR-005 | BR-003, BR-018, BR-022 |
| EPIC-003 | Patient Identity and Profile Management | FR-006, FR-007, FR-008, FR-009, FR-025, FR-026, FR-029, FR-030 | BR-004, BR-005, BR-006, BR-007 |
| EPIC-004 | Appointment Lifecycle Management | FR-010, FR-011, FR-012, FR-025, FR-026, FR-028 | BR-008, BR-009, BR-010 |
| EPIC-005 | Doctor Directory and Schedule Management | FR-013, FR-014 | BR-011, BR-012 |
| EPIC-006 | Medical Records and Clinical Notes Simulation | FR-015, FR-016 | BR-013, BR-014 |
| EPIC-007 | Prescription Review and Medication Visibility | FR-017 | BR-015 |
| EPIC-008 | Billing and Insurance Information Visibility | FR-018, FR-019 | BR-016, BR-017 |
| EPIC-009 | Notifications and User Feedback Experience | FR-020, FR-027, FR-028 | BR-018, BR-023 |
| EPIC-010 | Reporting and Operational Insights | FR-021 | BR-019 |
| EPIC-011 | User Administration and Settings | FR-022, FR-023 | BR-020, BR-021 |
| EPIC-012 | Activity History and Audit Simulation | FR-024 | BR-022 |

## Global Out-of-Scope for Epic Layer
- Backend services
- APIs and API automation
- Database infrastructure
- Real authentication systems
- Real payment/insurance/healthcare integrations
- Real PHI or clinical decision support

## Future Platform Relevance (Planned)
### QA / Playwright / Cucumber
Epic -> User Story -> Acceptance Criteria -> Gherkin -> Step Definitions -> Page Objects -> Playwright tests

### RAG
BRD + PRD + Epic IDs provide connected retrieval hierarchy.

### MCP
Future planned tool usage: `search_epics`, `get_epic`, `search_requirements`, `get_requirement_traceability`, and project tool update flows.

### LangGraph Agent
Future planned workflows: epic identification, requirement linkage, coverage analysis, regression impact, and defect/documentation recommendation.

### Jira / Confluence / Jenkins Relevance
- Jira: Epic layer is directly convertible to Jira-style epic records.
- Confluence: Epic layer fits project documentation hierarchy.
- Jenkins: Epic tags will later support pipeline/report grouping.
