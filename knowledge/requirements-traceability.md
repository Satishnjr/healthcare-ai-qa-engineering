# Requirements Traceability

## Source Layer (BRD)

| Requirement ID | Requirement | Source |
|---|---|---|
| BR-001 | Authentication simulation | BRD |
| BR-002 | Role-based experience | BRD |
| BR-003 | Dashboard overview | BRD |
| BR-004 | Patient registration | BRD |
| BR-005 | Patient search by ID | BRD |
| BR-006 | Patient search by demographics | BRD |
| BR-007 | Patient profile view | BRD |
| BR-008 | Appointment scheduling | BRD |
| BR-009 | Appointment rescheduling | BRD |
| BR-010 | Appointment cancellation | BRD |
| BR-011 | Doctor directory management | BRD |
| BR-012 | Doctor schedule view | BRD |
| BR-013 | Medical records review | BRD |
| BR-014 | Clinical note entry simulation | BRD |
| BR-015 | Prescription review | BRD |
| BR-016 | Billing information view | BRD |
| BR-017 | Insurance information view | BRD |
| BR-018 | Notifications | BRD |
| BR-019 | Reports | BRD |
| BR-020 | User profile management | BRD |
| BR-021 | Settings and preferences | BRD |
| BR-022 | Activity history | BRD |
| BR-023 | UX state coverage | BRD |
| BR-024 | Accessibility and responsiveness | BRD |

## BRD-to-PRD Mapping

| BRD ID | PRD ID | Requirement | Status |
|---|---|---|---|
| BR-001 | FR-001, FR-002, FR-003 | Login and simulated session behaviors | MAPPED |
| BR-002 | FR-004 | Role-based dashboard/navigation behavior | MAPPED |
| BR-003 | FR-004, FR-005 | Dashboard content and activity visibility | MAPPED |
| BR-004 | FR-006, FR-007 | Patient registration and list behavior | MAPPED |
| BR-005 | FR-008 | Patient search by ID | MAPPED |
| BR-006 | FR-008 | Patient search by demographics | MAPPED |
| BR-007 | FR-009 | Patient profile sections and visibility | MAPPED |
| BR-008 | FR-010 | Appointment creation workflow | MAPPED |
| BR-009 | FR-011 | Appointment rescheduling workflow | MAPPED |
| BR-010 | FR-012 | Appointment cancellation workflow | MAPPED |
| BR-011 | FR-013 | Doctor directory/profile behavior | MAPPED |
| BR-012 | FR-014 | Doctor schedule behavior | MAPPED |
| BR-013 | FR-015 | Medical records view behavior | MAPPED |
| BR-014 | FR-016 | Clinical note simulation workflow | MAPPED |
| BR-015 | FR-017 | Prescription view behavior | MAPPED |
| BR-016 | FR-018 | Billing summary behavior | MAPPED |
| BR-017 | FR-019 | Insurance summary behavior | MAPPED |
| BR-018 | FR-020 | Notification center behavior | MAPPED |
| BR-019 | FR-021 | Reports behavior | MAPPED |
| BR-020 | FR-022 | User profile management | MAPPED |
| BR-021 | FR-023 | Settings and preference behavior | MAPPED |
| BR-022 | FR-024 | Activity history behavior | MAPPED |
| BR-023 | FR-025, FR-026, FR-027, FR-028 | Validation, list behaviors, state handling, dialogs | MAPPED |
| BR-024 | FR-029, FR-030 | Responsive and accessibility behavior | MAPPED |

## PRD Non-Functional Mapping

| BRD ID | PRD ID | Requirement | Status |
|---|---|---|---|
| BR-024 | NFR-003, NFR-004 | Accessibility and responsiveness quality requirements | MAPPED |
| BR-023 | NFR-001, NFR-013 | UX responsiveness and understandable error behavior | MAPPED |
| BR-001 | NFR-014 | Session-like clearing on logout | MAPPED |
| BR-002 | NFR-005 | Security constraints in role-based behavior and no secrets | MAPPED |
| BR-003 | NFR-012 | Pagination/performance-related list behavior | MAPPED |
| BR-022 | NFR-010 | Observable UI evidence expectations | MAPPED |

## BRD-to-PRD-to-Epic Mapping

| BRD ID | PRD ID | Epic ID | Requirement | Status |
|---|---|---|---|---|
| BR-001 | FR-001, FR-002, FR-003, NFR-014 | EPIC-001 | Login and simulated session behaviors | MAPPED |
| BR-002 | FR-004, NFR-005 | EPIC-001, EPIC-002, EPIC-011 | Role-based experience and access constraints | MAPPED |
| BR-003 | FR-004, FR-005 | EPIC-002 | Dashboard overview and role-aware visibility | MAPPED |
| BR-004 | FR-006, FR-007 | EPIC-003 | Patient registration and list behavior | MAPPED |
| BR-005 | FR-008 | EPIC-003 | Patient search by patient ID | MAPPED |
| BR-006 | FR-008 | EPIC-003 | Patient search by demographics | MAPPED |
| BR-007 | FR-009 | EPIC-003 | Patient profile sections and visibility | MAPPED |
| BR-008 | FR-010 | EPIC-004 | Appointment creation workflow | MAPPED |
| BR-009 | FR-011 | EPIC-004 | Appointment rescheduling workflow | MAPPED |
| BR-010 | FR-012 | EPIC-004 | Appointment cancellation workflow | MAPPED |
| BR-011 | FR-013 | EPIC-005 | Doctor directory/profile behavior | MAPPED |
| BR-012 | FR-014 | EPIC-005 | Doctor schedule behavior | MAPPED |
| BR-013 | FR-015 | EPIC-006 | Medical records review behavior | MAPPED |
| BR-014 | FR-016 | EPIC-006 | Clinical note entry simulation workflow | MAPPED |
| BR-015 | FR-017 | EPIC-007 | Prescription review behavior | MAPPED |
| BR-016 | FR-018 | EPIC-008 | Billing summary behavior | MAPPED |
| BR-017 | FR-019 | EPIC-008 | Insurance summary behavior | MAPPED |
| BR-018 | FR-020 | EPIC-002, EPIC-009 | Notifications and dashboard visibility context | MAPPED |
| BR-019 | FR-021 | EPIC-010 | Reporting behavior | MAPPED |
| BR-020 | FR-022 | EPIC-011 | User management behavior | MAPPED |
| BR-021 | FR-023 | EPIC-011 | Settings and preferences behavior | MAPPED |
| BR-022 | FR-024 | EPIC-002, EPIC-012 | Activity history behavior and dashboard activity context | MAPPED |
| BR-023 | FR-025, FR-026, FR-027, FR-028 | EPIC-003, EPIC-004, EPIC-009 | Validation standards, list standards, state handling, and dialog behavior | MAPPED |
| BR-024 | FR-029, FR-030, NFR-003, NFR-004 | EPIC-003, EPIC-004, EPIC-009, EPIC-011 | Responsive and accessibility behavior | MAPPED |

## BRD-PRD-Epic-User Story Mapping

| BRD ID | PRD ID | Epic ID | User Story ID | Requirement | Status |
|---|---|---|---|---|---|
| BR-001 | FR-001 | EPIC-001 | US-001-001 | Render login screen with role-aware entry options | MAPPED |
| BR-001 | FR-002 | EPIC-001 | US-001-002 | Simulate credential validation outcomes | MAPPED |
| BR-001 | FR-003, NFR-014 | EPIC-001 | US-001-003 | Logout and clear session-like state | MAPPED |
| BR-002, BR-003 | FR-004 | EPIC-002 | US-002-001 | View role-specific dashboard summary | MAPPED |
| BR-003, BR-018, BR-022 | FR-005 | EPIC-002 | US-002-002 | View activity and notification widgets on dashboard | MAPPED |
| BR-004 | FR-006 | EPIC-003 | US-003-001 | Register a new synthetic patient | MAPPED |
| BR-004 | FR-007 | EPIC-003 | US-003-002 | View patient list with core columns | MAPPED |
| BR-005, BR-006 | FR-008 | EPIC-003 | US-003-003 | Search patients by ID, name, DOB, or phone | MAPPED |
| BR-007 | FR-009 | EPIC-003 | US-003-004 | View and update patient profile sections | MAPPED |
| BR-023 | FR-025 | EPIC-003 | US-003-005 | Enforce patient module form validation standards | MAPPED |
| BR-023 | FR-026 | EPIC-003 | US-003-006 | Apply search, filter, sort, and pagination standards in patient lists | MAPPED |
| BR-024 | FR-029, FR-030 | EPIC-003 | US-003-007 | Support responsive and accessible patient workflows | MAPPED |
| BR-008 | FR-010 | EPIC-004 | US-004-001 | Create appointment with patient, doctor, date, and type | MAPPED |
| BR-009 | FR-011 | EPIC-004 | US-004-002 | Reschedule existing appointment | MAPPED |
| BR-010 | FR-012 | EPIC-004 | US-004-003 | Cancel appointment with reason and status update | MAPPED |
| BR-023 | FR-025 | EPIC-004 | US-004-004 | Validate appointment inputs and conflict simulation | MAPPED |
| BR-023 | FR-026 | EPIC-004 | US-004-005 | Use search/filter/sort/pagination on appointment lists | MAPPED |
| BR-023 | FR-028 | EPIC-004 | US-004-006 | Use modal/dialog standards for appointment actions | MAPPED |
| BR-011 | FR-013 | EPIC-005 | US-005-001 | View and search doctor directory | MAPPED |
| BR-012 | FR-014 | EPIC-005 | US-005-002 | View doctor schedule and assigned appointments | MAPPED |
| BR-013 | FR-015 | EPIC-006 | US-006-001 | View medical records list and record details | MAPPED |
| BR-014 | FR-016 | EPIC-006 | US-006-002 | Create and save synthetic clinical notes | MAPPED |
| BR-015 | FR-017 | EPIC-007 | US-007-001 | View prescription list and details | MAPPED |
| BR-016 | FR-018 | EPIC-008 | US-008-001 | View billing summary and invoice-like details | MAPPED |
| BR-017 | FR-019 | EPIC-008 | US-008-002 | View insurance summary, coverage, and claim-like status | MAPPED |
| BR-018 | FR-020 | EPIC-009 | US-009-001 | View and manage notification center | MAPPED |
| BR-023 | FR-027 | EPIC-009 | US-009-002 | Handle loading, empty, error, and success UI states | MAPPED |
| BR-023 | FR-028 | EPIC-009 | US-009-003 | Use standardized modal and dialog interactions for feedback | MAPPED |
| BR-019 | FR-021 | EPIC-010 | US-010-001 | View synthetic operational reports and summaries | MAPPED |
| BR-020 | FR-022 | EPIC-011 | US-011-001 | Manage user profile details in simulated admin context | MAPPED |
| BR-021 | FR-023 | EPIC-011 | US-011-002 | Update profile and application preferences | MAPPED |
| BR-022 | FR-024 | EPIC-012 | US-012-001 | View and filter simulated activity history | MAPPED |

## User Story Coverage Summary

Total Epics: 12

Total User Stories: 32

PRD Requirements Covered: 31

BRD Requirements Covered: 24

Uncovered Requirements: 13 (NFR-001 to NFR-013 are not directly mapped to Epics and are handled as cross-cutting quality constraints.)

## User Story-to-Acceptance Criteria Mapping

| User Story ID | Acceptance Criteria ID | Type | Status |
|---|---|---|---|
| US-001-001 | AC-US-001-001-001 | Story | MAPPED |
| US-001-001 | AC-US-001-001-002 | Story | MAPPED |
| US-001-001 | AC-US-001-001-003 | Story | MAPPED |
| US-001-002 | AC-US-001-002-001 | Story | MAPPED |
| US-001-002 | AC-US-001-002-002 | Story | MAPPED |
| US-001-002 | AC-US-001-002-003 | Story | MAPPED |
| US-001-003 | AC-US-001-003-001 | Story | MAPPED |
| US-001-003 | AC-US-001-003-002 | Story | MAPPED |
| US-001-003 | AC-US-001-003-003 | Story | MAPPED |
| US-002-001 | AC-US-002-001-001 | Story | MAPPED |
| US-002-001 | AC-US-002-001-002 | Story | MAPPED |
| US-002-001 | AC-US-002-001-003 | Story | MAPPED |
| US-002-002 | AC-US-002-002-001 | Story | MAPPED |
| US-002-002 | AC-US-002-002-002 | Story | MAPPED |
| US-002-002 | AC-US-002-002-003 | Story | MAPPED |
| US-003-001 | AC-US-003-001-001 | Story | MAPPED |
| US-003-001 | AC-US-003-001-002 | Story | MAPPED |
| US-003-001 | AC-US-003-001-003 | Story | MAPPED |
| US-003-002 | AC-US-003-002-001 | Story | MAPPED |
| US-003-002 | AC-US-003-002-002 | Story | MAPPED |
| US-003-002 | AC-US-003-002-003 | Story | MAPPED |
| US-003-003 | AC-US-003-003-001 | Story | MAPPED |
| US-003-003 | AC-US-003-003-002 | Story | MAPPED |
| US-003-003 | AC-US-003-003-003 | Story | MAPPED |
| US-003-004 | AC-US-003-004-001 | Story | MAPPED |
| US-003-004 | AC-US-003-004-002 | Story | MAPPED |
| US-003-004 | AC-US-003-004-003 | Story | MAPPED |
| US-003-005 | AC-US-003-005-001 | Story | MAPPED |
| US-003-005 | AC-US-003-005-002 | Story | MAPPED |
| US-003-005 | AC-US-003-005-003 | Story | MAPPED |
| US-003-006 | AC-US-003-006-001 | Story | MAPPED |
| US-003-006 | AC-US-003-006-002 | Story | MAPPED |
| US-003-006 | AC-US-003-006-003 | Story | MAPPED |
| US-003-007 | AC-US-003-007-001 | Story | MAPPED |
| US-003-007 | AC-US-003-007-002 | Story | MAPPED |
| US-003-007 | AC-US-003-007-003 | Story | MAPPED |
| US-004-001 | AC-US-004-001-001 | Story | MAPPED |
| US-004-001 | AC-US-004-001-002 | Story | MAPPED |
| US-004-001 | AC-US-004-001-003 | Story | MAPPED |
| US-004-002 | AC-US-004-002-001 | Story | MAPPED |
| US-004-002 | AC-US-004-002-002 | Story | MAPPED |
| US-004-002 | AC-US-004-002-003 | Story | MAPPED |
| US-004-003 | AC-US-004-003-001 | Story | MAPPED |
| US-004-003 | AC-US-004-003-002 | Story | MAPPED |
| US-004-003 | AC-US-004-003-003 | Story | MAPPED |
| US-004-004 | AC-US-004-004-001 | Story | MAPPED |
| US-004-004 | AC-US-004-004-002 | Story | MAPPED |
| US-004-004 | AC-US-004-004-003 | Story | MAPPED |
| US-004-005 | AC-US-004-005-001 | Story | MAPPED |
| US-004-005 | AC-US-004-005-002 | Story | MAPPED |
| US-004-005 | AC-US-004-005-003 | Story | MAPPED |
| US-004-006 | AC-US-004-006-001 | Story | MAPPED |
| US-004-006 | AC-US-004-006-002 | Story | MAPPED |
| US-004-006 | AC-US-004-006-003 | Story | MAPPED |
| US-005-001 | AC-US-005-001-001 | Story | MAPPED |
| US-005-001 | AC-US-005-001-002 | Story | MAPPED |
| US-005-001 | AC-US-005-001-003 | Story | MAPPED |
| US-005-002 | AC-US-005-002-001 | Story | MAPPED |
| US-005-002 | AC-US-005-002-002 | Story | MAPPED |
| US-005-002 | AC-US-005-002-003 | Story | MAPPED |
| US-006-001 | AC-US-006-001-001 | Story | MAPPED |
| US-006-001 | AC-US-006-001-002 | Story | MAPPED |
| US-006-001 | AC-US-006-001-003 | Story | MAPPED |
| US-006-002 | AC-US-006-002-001 | Story | MAPPED |
| US-006-002 | AC-US-006-002-002 | Story | MAPPED |
| US-006-002 | AC-US-006-002-003 | Story | MAPPED |
| US-007-001 | AC-US-007-001-001 | Story | MAPPED |
| US-007-001 | AC-US-007-001-002 | Story | MAPPED |
| US-007-001 | AC-US-007-001-003 | Story | MAPPED |
| US-008-001 | AC-US-008-001-001 | Story | MAPPED |
| US-008-001 | AC-US-008-001-002 | Story | MAPPED |
| US-008-001 | AC-US-008-001-003 | Story | MAPPED |
| US-008-002 | AC-US-008-002-001 | Story | MAPPED |
| US-008-002 | AC-US-008-002-002 | Story | MAPPED |
| US-008-002 | AC-US-008-002-003 | Story | MAPPED |
| US-009-001 | AC-US-009-001-001 | Story | MAPPED |
| US-009-001 | AC-US-009-001-002 | Story | MAPPED |
| US-009-001 | AC-US-009-001-003 | Story | MAPPED |
| US-009-002 | AC-US-009-002-001 | Story | MAPPED |
| US-009-002 | AC-US-009-002-002 | Story | MAPPED |
| US-009-002 | AC-US-009-002-003 | Story | MAPPED |
| US-009-003 | AC-US-009-003-001 | Story | MAPPED |
| US-009-003 | AC-US-009-003-002 | Story | MAPPED |
| US-009-003 | AC-US-009-003-003 | Story | MAPPED |
| US-010-001 | AC-US-010-001-001 | Story | MAPPED |
| US-010-001 | AC-US-010-001-002 | Story | MAPPED |
| US-010-001 | AC-US-010-001-003 | Story | MAPPED |
| US-011-001 | AC-US-011-001-001 | Story | MAPPED |
| US-011-001 | AC-US-011-001-002 | Story | MAPPED |
| US-011-001 | AC-US-011-001-003 | Story | MAPPED |
| US-011-002 | AC-US-011-002-001 | Story | MAPPED |
| US-011-002 | AC-US-011-002-002 | Story | MAPPED |
| US-011-002 | AC-US-011-002-003 | Story | MAPPED |
| US-012-001 | AC-US-012-001-001 | Story | MAPPED |
| US-012-001 | AC-US-012-001-002 | Story | MAPPED |
| US-012-001 | AC-US-012-001-003 | Story | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-001 (NFR-001) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-002 (NFR-002) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-003 (NFR-003) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-004 (NFR-004) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-005 (NFR-005) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-006 (NFR-006) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-007 (NFR-007) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-008 (NFR-008) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-009 (NFR-009) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-010 (NFR-010) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-011 (NFR-011) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-012 (NFR-012) | Cross-Cutting NFR | MAPPED |
| CROSS-CUTTING-NFR | AC-NFR-013 (NFR-013) | Cross-Cutting NFR | MAPPED |

## Acceptance Criteria Coverage Summary

Total BRD requirements: 24

Total PRD requirements: 44

Total Epics: 12

Total User Stories: 32

Total Acceptance Criteria: 109

User Stories with acceptance criteria: 32

User Stories without acceptance criteria: 0

Orphan acceptance criteria: 0

Unmapped acceptance criteria: 0

Notes:
- Story-level acceptance criteria are fully mapped to all 32 user stories.
- Cross-cutting NFR acceptance criteria are intentionally modeled as global criteria mapped to PRD NFR-001..NFR-013.

## Downstream Traceability (TBD)

| PRD ID | Epic | User Story | Acceptance Criteria | Test Scenario | Test Case | Automation | Status |
|---|---|---|---|---|---|---|---|
| FR-001 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-002 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-003 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-004 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-005 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-006 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-007 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-008 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-009 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-010 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-011 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-012 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-013 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-014 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-015 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-016 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-017 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-018 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-019 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-020 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-021 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-022 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-023 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-024 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-025 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-026 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-027 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-028 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-029 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| FR-030 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-001 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-002 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-003 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-004 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-005 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-006 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-007 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-008 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-009 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-010 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-011 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-012 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-013 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
| NFR-014 | TBD | TBD | TBD | TBD | TBD | TBD | PLANNED |
