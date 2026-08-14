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

## Acceptance Criteria-to-Test Scenario Mapping

| Acceptance Criteria ID | Test Scenario ID | Scenario Title | Status |
|---|---|---|---|
| AC-US-001-001-001 | TS-001-001 | Validate happy path for Render login screen with role-aware entry options | MAPPED |
| AC-US-001-001-002 | TS-001-002 | Validate negative and validation behavior for Render login screen with role-aware entry options | MAPPED |
| AC-US-001-001-003 | TS-001-003 | Validate state, accessibility, and responsive behavior for Render login screen with role-aware entry options | MAPPED |
| AC-US-001-002-001 | TS-001-004 | Validate happy path for Simulate credential validation outcomes | MAPPED |
| AC-US-001-002-002 | TS-001-005 | Validate negative and validation behavior for Simulate credential validation outcomes | MAPPED |
| AC-US-001-002-003 | TS-001-006 | Validate state, accessibility, and responsive behavior for Simulate credential validation outcomes | MAPPED |
| AC-US-001-003-001 | TS-001-007 | Validate happy path for Logout and clear session-like state | MAPPED |
| AC-US-001-003-002 | TS-001-008 | Validate negative and validation behavior for Logout and clear session-like state | MAPPED |
| AC-US-001-003-003 | TS-001-009 | Validate state, accessibility, and responsive behavior for Logout and clear session-like state | MAPPED |
| AC-US-002-001-001 | TS-002-001 | Validate happy path for View role-specific dashboard summary | MAPPED |
| AC-US-002-001-002 | TS-002-002 | Validate negative and validation behavior for View role-specific dashboard summary | MAPPED |
| AC-US-002-001-003 | TS-002-003 | Validate state, accessibility, and responsive behavior for View role-specific dashboard summary | MAPPED |
| AC-US-002-002-001 | TS-002-004 | Validate happy path for View activity and notification widgets on dashboard | MAPPED |
| AC-US-002-002-002 | TS-002-005 | Validate negative and validation behavior for View activity and notification widgets on dashboard | MAPPED |
| AC-US-002-002-003 | TS-002-006 | Validate state, accessibility, and responsive behavior for View activity and notification widgets on dashboard | MAPPED |
| AC-US-003-001-001 | TS-003-001 | Validate happy path for Register a new synthetic patient | MAPPED |
| AC-US-003-001-002 | TS-003-002 | Validate negative and validation behavior for Register a new synthetic patient | MAPPED |
| AC-US-003-001-003 | TS-003-003 | Validate state, accessibility, and responsive behavior for Register a new synthetic patient | MAPPED |
| AC-US-003-002-001 | TS-003-004 | Validate happy path for View patient list with core columns | MAPPED |
| AC-US-003-002-002 | TS-003-005 | Validate negative and validation behavior for View patient list with core columns | MAPPED |
| AC-US-003-002-003 | TS-003-006 | Validate state, accessibility, and responsive behavior for View patient list with core columns | MAPPED |
| AC-US-003-003-001 | TS-003-007 | Validate happy path for Search patients by ID, name, DOB, or phone | MAPPED |
| AC-US-003-003-002 | TS-003-008 | Validate negative and validation behavior for Search patients by ID, name, DOB, or phone | MAPPED |
| AC-US-003-003-003 | TS-003-009 | Validate state, accessibility, and responsive behavior for Search patients by ID, name, DOB, or phone | MAPPED |
| AC-US-003-004-001 | TS-003-010 | Validate happy path for View and update patient profile sections | MAPPED |
| AC-US-003-004-002 | TS-003-011 | Validate negative and validation behavior for View and update patient profile sections | MAPPED |
| AC-US-003-004-003 | TS-003-012 | Validate state, accessibility, and responsive behavior for View and update patient profile sections | MAPPED |
| AC-US-003-005-001 | TS-003-013 | Validate happy path for Enforce patient module form validation standards | MAPPED |
| AC-US-003-005-002 | TS-003-014 | Validate negative and validation behavior for Enforce patient module form validation standards | MAPPED |
| AC-US-003-005-003 | TS-003-015 | Validate state, accessibility, and responsive behavior for Enforce patient module form validation standards | MAPPED |
| AC-US-003-006-001 | TS-003-016 | Validate happy path for Apply search, filter, sort, and pagination standards in patient lists | MAPPED |
| AC-US-003-006-002 | TS-003-017 | Validate negative and validation behavior for Apply search, filter, sort, and pagination standards in patient lists | MAPPED |
| AC-US-003-006-003 | TS-003-018 | Validate state, accessibility, and responsive behavior for Apply search, filter, sort, and pagination standards in patient lists | MAPPED |
| AC-US-003-007-001 | TS-003-019 | Validate happy path for Support responsive and accessible patient workflows | MAPPED |
| AC-US-003-007-002 | TS-003-020 | Validate negative and validation behavior for Support responsive and accessible patient workflows | MAPPED |
| AC-US-003-007-003 | TS-003-021 | Validate state, accessibility, and responsive behavior for Support responsive and accessible patient workflows | MAPPED |
| AC-US-004-001-001 | TS-004-001 | Validate happy path for Create appointment with patient, doctor, date, and type | MAPPED |
| AC-US-004-001-002 | TS-004-002 | Validate negative and validation behavior for Create appointment with patient, doctor, date, and type | MAPPED |
| AC-US-004-001-003 | TS-004-003 | Validate state, accessibility, and responsive behavior for Create appointment with patient, doctor, date, and type | MAPPED |
| AC-US-004-002-001 | TS-004-004 | Validate happy path for Reschedule existing appointment | MAPPED |
| AC-US-004-002-002 | TS-004-005 | Validate negative and validation behavior for Reschedule existing appointment | MAPPED |
| AC-US-004-002-003 | TS-004-006 | Validate state, accessibility, and responsive behavior for Reschedule existing appointment | MAPPED |
| AC-US-004-003-001 | TS-004-007 | Validate happy path for Cancel appointment with reason and status update | MAPPED |
| AC-US-004-003-002 | TS-004-008 | Validate negative and validation behavior for Cancel appointment with reason and status update | MAPPED |
| AC-US-004-003-003 | TS-004-009 | Validate state, accessibility, and responsive behavior for Cancel appointment with reason and status update | MAPPED |
| AC-US-004-004-001 | TS-004-010 | Validate happy path for Validate appointment inputs and conflict simulation | MAPPED |
| AC-US-004-004-002 | TS-004-011 | Validate negative and validation behavior for Validate appointment inputs and conflict simulation | MAPPED |
| AC-US-004-004-003 | TS-004-012 | Validate state, accessibility, and responsive behavior for Validate appointment inputs and conflict simulation | MAPPED |
| AC-US-004-005-001 | TS-004-013 | Validate happy path for Use search/filter/sort/pagination on appointment lists | MAPPED |
| AC-US-004-005-002 | TS-004-014 | Validate negative and validation behavior for Use search/filter/sort/pagination on appointment lists | MAPPED |
| AC-US-004-005-003 | TS-004-015 | Validate state, accessibility, and responsive behavior for Use search/filter/sort/pagination on appointment lists | MAPPED |
| AC-US-004-006-001 | TS-004-016 | Validate happy path for Use modal/dialog standards for appointment actions | MAPPED |
| AC-US-004-006-002 | TS-004-017 | Validate negative and validation behavior for Use modal/dialog standards for appointment actions | MAPPED |
| AC-US-004-006-003 | TS-004-018 | Validate state, accessibility, and responsive behavior for Use modal/dialog standards for appointment actions | MAPPED |
| AC-US-005-001-001 | TS-005-001 | Validate happy path for View and search doctor directory | MAPPED |
| AC-US-005-001-002 | TS-005-002 | Validate negative and validation behavior for View and search doctor directory | MAPPED |
| AC-US-005-001-003 | TS-005-003 | Validate state, accessibility, and responsive behavior for View and search doctor directory | MAPPED |
| AC-US-005-002-001 | TS-005-004 | Validate happy path for View doctor schedule and assigned appointments | MAPPED |
| AC-US-005-002-002 | TS-005-005 | Validate negative and validation behavior for View doctor schedule and assigned appointments | MAPPED |
| AC-US-005-002-003 | TS-005-006 | Validate state, accessibility, and responsive behavior for View doctor schedule and assigned appointments | MAPPED |
| AC-US-006-001-001 | TS-006-001 | Validate happy path for View medical records list and record details | MAPPED |
| AC-US-006-001-002 | TS-006-002 | Validate negative and validation behavior for View medical records list and record details | MAPPED |
| AC-US-006-001-003 | TS-006-003 | Validate state, accessibility, and responsive behavior for View medical records list and record details | MAPPED |
| AC-US-006-002-001 | TS-006-004 | Validate happy path for Create and save synthetic clinical notes | MAPPED |
| AC-US-006-002-002 | TS-006-005 | Validate negative and validation behavior for Create and save synthetic clinical notes | MAPPED |
| AC-US-006-002-003 | TS-006-006 | Validate state, accessibility, and responsive behavior for Create and save synthetic clinical notes | MAPPED |
| AC-US-007-001-001 | TS-007-001 | Validate happy path for View prescription list and details | MAPPED |
| AC-US-007-001-002 | TS-007-002 | Validate negative and validation behavior for View prescription list and details | MAPPED |
| AC-US-007-001-003 | TS-007-003 | Validate state, accessibility, and responsive behavior for View prescription list and details | MAPPED |
| AC-US-008-001-001 | TS-008-001 | Validate happy path for View billing summary and invoice-like details | MAPPED |
| AC-US-008-001-002 | TS-008-002 | Validate negative and validation behavior for View billing summary and invoice-like details | MAPPED |
| AC-US-008-001-003 | TS-008-003 | Validate state, accessibility, and responsive behavior for View billing summary and invoice-like details | MAPPED |
| AC-US-008-002-001 | TS-008-004 | Validate happy path for View insurance summary, coverage, and claim-like status | MAPPED |
| AC-US-008-002-002 | TS-008-005 | Validate negative and validation behavior for View insurance summary, coverage, and claim-like status | MAPPED |
| AC-US-008-002-003 | TS-008-006 | Validate state, accessibility, and responsive behavior for View insurance summary, coverage, and claim-like status | MAPPED |
| AC-US-009-001-001 | TS-009-001 | Validate happy path for View and manage notification center | MAPPED |
| AC-US-009-001-002 | TS-009-002 | Validate negative and validation behavior for View and manage notification center | MAPPED |
| AC-US-009-001-003 | TS-009-003 | Validate state, accessibility, and responsive behavior for View and manage notification center | MAPPED |
| AC-US-009-002-001 | TS-009-004 | Validate happy path for Handle loading, empty, error, and success UI states | MAPPED |
| AC-US-009-002-002 | TS-009-005 | Validate negative and validation behavior for Handle loading, empty, error, and success UI states | MAPPED |
| AC-US-009-002-003 | TS-009-006 | Validate state, accessibility, and responsive behavior for Handle loading, empty, error, and success UI states | MAPPED |
| AC-US-009-003-001 | TS-009-007 | Validate happy path for Use standardized modal and dialog interactions for feedback | MAPPED |
| AC-US-009-003-002 | TS-009-008 | Validate negative and validation behavior for Use standardized modal and dialog interactions for feedback | MAPPED |
| AC-US-009-003-003 | TS-009-009 | Validate state, accessibility, and responsive behavior for Use standardized modal and dialog interactions for feedback | MAPPED |
| AC-US-010-001-001 | TS-010-001 | Validate happy path for View synthetic operational reports and summaries | MAPPED |
| AC-US-010-001-002 | TS-010-002 | Validate negative and validation behavior for View synthetic operational reports and summaries | MAPPED |
| AC-US-010-001-003 | TS-010-003 | Validate state, accessibility, and responsive behavior for View synthetic operational reports and summaries | MAPPED |
| AC-US-011-001-001 | TS-011-001 | Validate happy path for Manage user profile details in simulated admin context | MAPPED |
| AC-US-011-001-002 | TS-011-002 | Validate negative and validation behavior for Manage user profile details in simulated admin context | MAPPED |
| AC-US-011-001-003 | TS-011-003 | Validate state, accessibility, and responsive behavior for Manage user profile details in simulated admin context | MAPPED |
| AC-US-011-002-001 | TS-011-004 | Validate happy path for Update profile and application preferences | MAPPED |
| AC-US-011-002-002 | TS-011-005 | Validate negative and validation behavior for Update profile and application preferences | MAPPED |
| AC-US-011-002-003 | TS-011-006 | Validate state, accessibility, and responsive behavior for Update profile and application preferences | MAPPED |
| AC-US-012-001-001 | TS-012-001 | Validate happy path for View and filter simulated activity history | MAPPED |
| AC-US-012-001-002 | TS-012-002 | Validate negative and validation behavior for View and filter simulated activity history | MAPPED |
| AC-US-012-001-003 | TS-012-003 | Validate state, accessibility, and responsive behavior for View and filter simulated activity history | MAPPED |
| AC-NFR-001 | TS-001-003 | Validate state, accessibility, and responsive behavior for Render login screen with role-aware entry options (cross-cutting coverage) | MAPPED |
| AC-NFR-002 | TS-001-006 | Validate state, accessibility, and responsive behavior for Simulate credential validation outcomes (cross-cutting coverage) | MAPPED |
| AC-NFR-003 | TS-001-009 | Validate state, accessibility, and responsive behavior for Logout and clear session-like state (cross-cutting coverage) | MAPPED |
| AC-NFR-004 | TS-002-003 | Validate state, accessibility, and responsive behavior for View role-specific dashboard summary (cross-cutting coverage) | MAPPED |
| AC-NFR-005 | TS-002-006 | Validate state, accessibility, and responsive behavior for View activity and notification widgets on dashboard (cross-cutting coverage) | MAPPED |
| AC-NFR-006 | TS-003-003 | Validate state, accessibility, and responsive behavior for Register a new synthetic patient (cross-cutting coverage) | MAPPED |
| AC-NFR-007 | TS-003-006 | Validate state, accessibility, and responsive behavior for View patient list with core columns (cross-cutting coverage) | MAPPED |
| AC-NFR-008 | TS-003-009 | Validate state, accessibility, and responsive behavior for Search patients by ID, name, DOB, or phone (cross-cutting coverage) | MAPPED |
| AC-NFR-009 | TS-003-012 | Validate state, accessibility, and responsive behavior for View and update patient profile sections (cross-cutting coverage) | MAPPED |
| AC-NFR-010 | TS-003-015 | Validate state, accessibility, and responsive behavior for Enforce patient module form validation standards (cross-cutting coverage) | MAPPED |
| AC-NFR-011 | TS-003-018 | Validate state, accessibility, and responsive behavior for Apply search, filter, sort, and pagination standards in patient lists (cross-cutting coverage) | MAPPED |
| AC-NFR-012 | TS-003-021 | Validate state, accessibility, and responsive behavior for Support responsive and accessible patient workflows (cross-cutting coverage) | MAPPED |
| AC-NFR-013 | TS-004-003 | Validate state, accessibility, and responsive behavior for Create appointment with patient, doctor, date, and type (cross-cutting coverage) | MAPPED |

## Test Scenario Coverage Summary

Total BRD requirements: 24

Total PRD requirements: 44

Total Epics: 12

Total User Stories: 32

Total Acceptance Criteria: 109

Total Test Scenarios: 96

Acceptance Criteria with scenario coverage: 109

Acceptance Criteria without scenario coverage: 0

Orphan Test Scenarios: 0

Duplicate/overlapping scenarios: 0 critical overlaps (reviewed)

Smoke scenarios: 6

Regression P0 scenarios: 16

Regression P1 scenarios: 40

Positive scenarios: 32

Negative scenarios: 32

Validation scenarios: 32

Accessibility scenarios: 32

Responsive scenarios: 32

Cross-browser scenarios: 32

## Test Scenario-to-Test Case Mapping

| Test Scenario ID | Test Case ID | Test Case Title | Priority | Smoke | Status |
|---|---|---|---|---|---|
| TS-001-001 | TC-TS-001-001-01 | Validate happy path for Render login screen with role-aware entry options | P0 | Yes | MAPPED |
| TS-001-002 | TC-TS-001-002-01 | Validate negative and validation behavior for Render login screen with role-aware entry options | P0 | No | MAPPED |
| TS-001-003 | TC-TS-001-003-01 | Validate state, accessibility, and responsive behavior for Render login screen with role-aware entry options | P1 | No | MAPPED |
| TS-001-004 | TC-TS-001-004-01 | Validate happy path for Simulate credential validation outcomes | P0 | Yes | MAPPED |
| TS-001-005 | TC-TS-001-005-01 | Validate negative and validation behavior for Simulate credential validation outcomes | P0 | No | MAPPED |
| TS-001-006 | TC-TS-001-006-01 | Validate state, accessibility, and responsive behavior for Simulate credential validation outcomes | P1 | No | MAPPED |
| TS-001-007 | TC-TS-001-007-01 | Validate happy path for Logout and clear session-like state | P0 | No | MAPPED |
| TS-001-008 | TC-TS-001-008-01 | Validate negative and validation behavior for Logout and clear session-like state | P0 | No | MAPPED |
| TS-001-009 | TC-TS-001-009-01 | Validate state, accessibility, and responsive behavior for Logout and clear session-like state | P1 | No | MAPPED |
| TS-002-001 | TC-TS-002-001-01 | Validate happy path for View role-specific dashboard summary | P1 | Yes | MAPPED |
| TS-002-002 | TC-TS-002-002-01 | Validate negative and validation behavior for View role-specific dashboard summary | P1 | No | MAPPED |
| TS-002-003 | TC-TS-002-003-01 | Validate state, accessibility, and responsive behavior for View role-specific dashboard summary | P2 | No | MAPPED |
| TS-002-004 | TC-TS-002-004-01 | Validate happy path for View activity and notification widgets on dashboard | P1 | No | MAPPED |
| TS-002-005 | TC-TS-002-005-01 | Validate negative and validation behavior for View activity and notification widgets on dashboard | P1 | No | MAPPED |
| TS-002-006 | TC-TS-002-006-01 | Validate state, accessibility, and responsive behavior for View activity and notification widgets on dashboard | P2 | No | MAPPED |
| TS-003-001 | TC-TS-003-001-01 | Validate happy path for Register a new synthetic patient | P0 | No | MAPPED |
| TS-003-002 | TC-TS-003-002-01 | Validate negative and validation behavior for Register a new synthetic patient | P0 | No | MAPPED |
| TS-003-003 | TC-TS-003-003-01 | Validate state, accessibility, and responsive behavior for Register a new synthetic patient | P1 | No | MAPPED |
| TS-003-004 | TC-TS-003-004-01 | Validate happy path for View patient list with core columns | P1 | No | MAPPED |
| TS-003-005 | TC-TS-003-005-01 | Validate negative and validation behavior for View patient list with core columns | P1 | No | MAPPED |
| TS-003-006 | TC-TS-003-006-01 | Validate state, accessibility, and responsive behavior for View patient list with core columns | P2 | No | MAPPED |
| TS-003-007 | TC-TS-003-007-01 | Validate happy path for Search patients by ID, name, DOB, or phone | P0 | Yes | MAPPED |
| TS-003-008 | TC-TS-003-008-01 | Validate negative and validation behavior for Search patients by ID, name, DOB, or phone | P0 | No | MAPPED |
| TS-003-009 | TC-TS-003-009-01 | Validate state, accessibility, and responsive behavior for Search patients by ID, name, DOB, or phone | P1 | No | MAPPED |
| TS-003-010 | TC-TS-003-010-01 | Validate happy path for View and update patient profile sections | P1 | No | MAPPED |
| TS-003-011 | TC-TS-003-011-01 | Validate negative and validation behavior for View and update patient profile sections | P1 | No | MAPPED |
| TS-003-012 | TC-TS-003-012-01 | Validate state, accessibility, and responsive behavior for View and update patient profile sections | P2 | No | MAPPED |
| TS-003-013 | TC-TS-003-013-01 | Validate happy path for Enforce patient module form validation standards | P1 | No | MAPPED |
| TS-003-014 | TC-TS-003-014-01 | Validate negative and validation behavior for Enforce patient module form validation standards | P1 | No | MAPPED |
| TS-003-015 | TC-TS-003-015-01 | Validate state, accessibility, and responsive behavior for Enforce patient module form validation standards | P2 | No | MAPPED |
| TS-003-016 | TC-TS-003-016-01 | Validate happy path for Apply search, filter, sort, and pagination standards in patient lists | P1 | No | MAPPED |
| TS-003-017 | TC-TS-003-017-01 | Validate negative and validation behavior for Apply search, filter, sort, and pagination standards in patient lists | P1 | No | MAPPED |
| TS-003-018 | TC-TS-003-018-01 | Validate state, accessibility, and responsive behavior for Apply search, filter, sort, and pagination standards in patient lists | P2 | No | MAPPED |
| TS-003-019 | TC-TS-003-019-01 | Validate happy path for Support responsive and accessible patient workflows | P1 | No | MAPPED |
| TS-003-020 | TC-TS-003-020-01 | Validate negative and validation behavior for Support responsive and accessible patient workflows | P1 | No | MAPPED |
| TS-003-021 | TC-TS-003-021-01 | Validate state, accessibility, and responsive behavior for Support responsive and accessible patient workflows | P2 | No | MAPPED |
| TS-004-001 | TC-TS-004-001-01 | Validate happy path for Create appointment with patient, doctor, date, and type | P0 | Yes | MAPPED |
| TS-004-002 | TC-TS-004-002-01 | Validate negative and validation behavior for Create appointment with patient, doctor, date, and type | P0 | No | MAPPED |
| TS-004-003 | TC-TS-004-003-01 | Validate state, accessibility, and responsive behavior for Create appointment with patient, doctor, date, and type | P1 | No | MAPPED |
| TS-004-004 | TC-TS-004-004-01 | Validate happy path for Reschedule existing appointment | P0 | No | MAPPED |
| TS-004-005 | TC-TS-004-005-01 | Validate negative and validation behavior for Reschedule existing appointment | P0 | No | MAPPED |
| TS-004-006 | TC-TS-004-006-01 | Validate state, accessibility, and responsive behavior for Reschedule existing appointment | P1 | No | MAPPED |
| TS-004-007 | TC-TS-004-007-01 | Validate happy path for Cancel appointment with reason and status update | P0 | Yes | MAPPED |
| TS-004-008 | TC-TS-004-008-01 | Validate negative and validation behavior for Cancel appointment with reason and status update | P0 | No | MAPPED |
| TS-004-009 | TC-TS-004-009-01 | Validate state, accessibility, and responsive behavior for Cancel appointment with reason and status update | P1 | No | MAPPED |
| TS-004-010 | TC-TS-004-010-01 | Validate happy path for Validate appointment inputs and conflict simulation | P1 | No | MAPPED |
| TS-004-011 | TC-TS-004-011-01 | Validate negative and validation behavior for Validate appointment inputs and conflict simulation | P1 | No | MAPPED |
| TS-004-012 | TC-TS-004-012-01 | Validate state, accessibility, and responsive behavior for Validate appointment inputs and conflict simulation | P2 | No | MAPPED |
| TS-004-013 | TC-TS-004-013-01 | Validate happy path for Use search/filter/sort/pagination on appointment lists | P1 | No | MAPPED |
| TS-004-014 | TC-TS-004-014-01 | Validate negative and validation behavior for Use search/filter/sort/pagination on appointment lists | P1 | No | MAPPED |
| TS-004-015 | TC-TS-004-015-01 | Validate state, accessibility, and responsive behavior for Use search/filter/sort/pagination on appointment lists | P2 | No | MAPPED |
| TS-004-016 | TC-TS-004-016-01 | Validate happy path for Use modal/dialog standards for appointment actions | P2 | No | MAPPED |
| TS-004-017 | TC-TS-004-017-01 | Validate negative and validation behavior for Use modal/dialog standards for appointment actions | P2 | No | MAPPED |
| TS-004-018 | TC-TS-004-018-01 | Validate state, accessibility, and responsive behavior for Use modal/dialog standards for appointment actions | P2 | No | MAPPED |
| TS-005-001 | TC-TS-005-001-01 | Validate happy path for View and search doctor directory | P1 | No | MAPPED |
| TS-005-002 | TC-TS-005-002-01 | Validate negative and validation behavior for View and search doctor directory | P1 | No | MAPPED |
| TS-005-003 | TC-TS-005-003-01 | Validate state, accessibility, and responsive behavior for View and search doctor directory | P2 | No | MAPPED |
| TS-005-004 | TC-TS-005-004-01 | Validate happy path for View doctor schedule and assigned appointments | P1 | No | MAPPED |
| TS-005-005 | TC-TS-005-005-01 | Validate negative and validation behavior for View doctor schedule and assigned appointments | P1 | No | MAPPED |
| TS-005-006 | TC-TS-005-006-01 | Validate state, accessibility, and responsive behavior for View doctor schedule and assigned appointments | P2 | No | MAPPED |
| TS-006-001 | TC-TS-006-001-01 | Validate happy path for View medical records list and record details | P1 | No | MAPPED |
| TS-006-002 | TC-TS-006-002-01 | Validate negative and validation behavior for View medical records list and record details | P1 | No | MAPPED |
| TS-006-003 | TC-TS-006-003-01 | Validate state, accessibility, and responsive behavior for View medical records list and record details | P2 | No | MAPPED |
| TS-006-004 | TC-TS-006-004-01 | Validate happy path for Create and save synthetic clinical notes | P1 | No | MAPPED |
| TS-006-005 | TC-TS-006-005-01 | Validate negative and validation behavior for Create and save synthetic clinical notes | P1 | No | MAPPED |
| TS-006-006 | TC-TS-006-006-01 | Validate state, accessibility, and responsive behavior for Create and save synthetic clinical notes | P2 | No | MAPPED |
| TS-007-001 | TC-TS-007-001-01 | Validate happy path for View prescription list and details | P2 | No | MAPPED |
| TS-007-002 | TC-TS-007-002-01 | Validate negative and validation behavior for View prescription list and details | P2 | No | MAPPED |
| TS-007-003 | TC-TS-007-003-01 | Validate state, accessibility, and responsive behavior for View prescription list and details | P2 | No | MAPPED |
| TS-008-001 | TC-TS-008-001-01 | Validate happy path for View billing summary and invoice-like details | P2 | No | MAPPED |
| TS-008-002 | TC-TS-008-002-01 | Validate negative and validation behavior for View billing summary and invoice-like details | P2 | No | MAPPED |
| TS-008-003 | TC-TS-008-003-01 | Validate state, accessibility, and responsive behavior for View billing summary and invoice-like details | P2 | No | MAPPED |
| TS-008-004 | TC-TS-008-004-01 | Validate happy path for View insurance summary, coverage, and claim-like status | P2 | No | MAPPED |
| TS-008-005 | TC-TS-008-005-01 | Validate negative and validation behavior for View insurance summary, coverage, and claim-like status | P2 | No | MAPPED |
| TS-008-006 | TC-TS-008-006-01 | Validate state, accessibility, and responsive behavior for View insurance summary, coverage, and claim-like status | P2 | No | MAPPED |
| TS-009-001 | TC-TS-009-001-01 | Validate happy path for View and manage notification center | P1 | No | MAPPED |
| TS-009-002 | TC-TS-009-002-01 | Validate negative and validation behavior for View and manage notification center | P1 | No | MAPPED |
| TS-009-003 | TC-TS-009-003-01 | Validate state, accessibility, and responsive behavior for View and manage notification center | P2 | No | MAPPED |
| TS-009-004 | TC-TS-009-004-01 | Validate happy path for Handle loading, empty, error, and success UI states | P1 | No | MAPPED |
| TS-009-005 | TC-TS-009-005-01 | Validate negative and validation behavior for Handle loading, empty, error, and success UI states | P1 | No | MAPPED |
| TS-009-006 | TC-TS-009-006-01 | Validate state, accessibility, and responsive behavior for Handle loading, empty, error, and success UI states | P2 | No | MAPPED |
| TS-009-007 | TC-TS-009-007-01 | Validate happy path for Use standardized modal and dialog interactions for feedback | P2 | No | MAPPED |
| TS-009-008 | TC-TS-009-008-01 | Validate negative and validation behavior for Use standardized modal and dialog interactions for feedback | P2 | No | MAPPED |
| TS-009-009 | TC-TS-009-009-01 | Validate state, accessibility, and responsive behavior for Use standardized modal and dialog interactions for feedback | P2 | No | MAPPED |
| TS-010-001 | TC-TS-010-001-01 | Validate happy path for View synthetic operational reports and summaries | P2 | No | MAPPED |
| TS-010-002 | TC-TS-010-002-01 | Validate negative and validation behavior for View synthetic operational reports and summaries | P2 | No | MAPPED |
| TS-010-003 | TC-TS-010-003-01 | Validate state, accessibility, and responsive behavior for View synthetic operational reports and summaries | P2 | No | MAPPED |
| TS-011-001 | TC-TS-011-001-01 | Validate happy path for Manage user profile details in simulated admin context | P2 | No | MAPPED |
| TS-011-002 | TC-TS-011-002-01 | Validate negative and validation behavior for Manage user profile details in simulated admin context | P2 | No | MAPPED |
| TS-011-003 | TC-TS-011-003-01 | Validate state, accessibility, and responsive behavior for Manage user profile details in simulated admin context | P2 | No | MAPPED |
| TS-011-004 | TC-TS-011-004-01 | Validate happy path for Update profile and application preferences | P2 | No | MAPPED |
| TS-011-005 | TC-TS-011-005-01 | Validate negative and validation behavior for Update profile and application preferences | P2 | No | MAPPED |
| TS-011-006 | TC-TS-011-006-01 | Validate state, accessibility, and responsive behavior for Update profile and application preferences | P2 | No | MAPPED |
| TS-012-001 | TC-TS-012-001-01 | Validate happy path for View and filter simulated activity history | P1 | No | MAPPED |
| TS-012-002 | TC-TS-012-002-01 | Validate negative and validation behavior for View and filter simulated activity history | P1 | No | MAPPED |
| TS-012-003 | TC-TS-012-003-01 | Validate state, accessibility, and responsive behavior for View and filter simulated activity history | P2 | No | MAPPED |

## Test Case Coverage Summary

Total Test Scenarios: 96

Total Test Cases: 96

Test Scenarios with test case coverage: 96

Test Scenarios without test case coverage: 0

Orphan Test Cases: 0

Duplicate/overlapping test cases: 0 critical overlaps (reviewed)

Smoke test cases: 6

Test cases P0: 16

Test cases P1: 40

Test cases P2: 40

Test cases P3: 0

Automation candidate test cases (YES): 96

Functional test cases: 32

Negative test cases: 32

Validation test cases: 32

Boundary test cases: 12

Error Handling test cases: 32

Accessibility test cases: 32

Responsive test cases: 32

Cross-Browser test cases: 32

Role/Authorization UI test cases: 5


## Test Case-to-Test Data Mapping

| Test Case ID | Test Scenario ID | User Story ID | Dataset ID(s) | Status |
|---|---|---|---|---|
| TC-TS-001-001-01 | TS-001-001 | US-001-001 | TD-USERS-ROLE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-001-002-01 | TS-001-002 | US-001-001 | TD-USERS-ROLE-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-001-003-01 | TS-001-003 | US-001-001 | TD-USERS-ROLE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-001-004-01 | TS-001-004 | US-001-002 | TD-USERS-ROLE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-001-005-01 | TS-001-005 | US-001-002 | TD-USERS-ROLE-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-001-006-01 | TS-001-006 | US-001-002 | TD-USERS-ROLE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-001-007-01 | TS-001-007 | US-001-003 | TD-USERS-ROLE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-001-008-01 | TS-001-008 | US-001-003 | TD-USERS-ROLE-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-001-009-01 | TS-001-009 | US-001-003 | TD-USERS-ROLE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-002-001-01 | TS-002-001 | US-002-001 | TD-USERS-ROLE-001, TD-NOTIFICATION-BASE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-002-002-01 | TS-002-002 | US-002-001 | TD-USERS-ROLE-001, TD-NOTIFICATION-BASE-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-002-003-01 | TS-002-003 | US-002-001 | TD-USERS-ROLE-001, TD-NOTIFICATION-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-002-004-01 | TS-002-004 | US-002-002 | TD-USERS-ROLE-001, TD-NOTIFICATION-BASE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-002-005-01 | TS-002-005 | US-002-002 | TD-USERS-ROLE-001, TD-NOTIFICATION-BASE-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-002-006-01 | TS-002-006 | US-002-002 | TD-USERS-ROLE-001, TD-NOTIFICATION-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-003-001-01 | TS-003-001 | US-003-001 | TD-PATIENT-BASE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-002-01 | TS-003-002 | US-003-001 | TD-PATIENT-BASE-001, TD-PATIENT-NEG-001, TD-PATIENT-UNICODE-001, TD-PATIENT-LONG-001, TD-PATIENT-BOUNDARY-001, TD-PATIENT-EMPTY-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-003-01 | TS-003-003 | US-003-001 | TD-PATIENT-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-004-01 | TS-003-004 | US-003-002 | TD-PATIENT-BASE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-005-01 | TS-003-005 | US-003-002 | TD-PATIENT-BASE-001, TD-PATIENT-NEG-001, TD-PATIENT-UNICODE-001, TD-PATIENT-LONG-001, TD-PATIENT-EMPTY-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-006-01 | TS-003-006 | US-003-002 | TD-PATIENT-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-003-007-01 | TS-003-007 | US-003-003 | TD-PATIENT-BASE-001, TD-SEARCH-SORT-PAGINATION-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-008-01 | TS-003-008 | US-003-003 | TD-PATIENT-BASE-001, TD-PATIENT-NEG-001, TD-PATIENT-UNICODE-001, TD-PATIENT-LONG-001, TD-SEARCH-SORT-PAGINATION-001, TD-PATIENT-EMPTY-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-009-01 | TS-003-009 | US-003-003 | TD-PATIENT-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-010-01 | TS-003-010 | US-003-004 | TD-PATIENT-BASE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-011-01 | TS-003-011 | US-003-004 | TD-PATIENT-BASE-001, TD-PATIENT-NEG-001, TD-PATIENT-UNICODE-001, TD-PATIENT-LONG-001, TD-PATIENT-BOUNDARY-001, TD-PATIENT-EMPTY-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-012-01 | TS-003-012 | US-003-004 | TD-PATIENT-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-003-013-01 | TS-003-013 | US-003-005 | TD-PATIENT-BASE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-014-01 | TS-003-014 | US-003-005 | TD-PATIENT-BASE-001, TD-PATIENT-NEG-001, TD-PATIENT-UNICODE-001, TD-PATIENT-LONG-001, TD-PATIENT-EMPTY-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-015-01 | TS-003-015 | US-003-005 | TD-PATIENT-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-003-016-01 | TS-003-016 | US-003-006 | TD-PATIENT-BASE-001, TD-SEARCH-SORT-PAGINATION-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-017-01 | TS-003-017 | US-003-006 | TD-PATIENT-BASE-001, TD-PATIENT-NEG-001, TD-PATIENT-UNICODE-001, TD-PATIENT-LONG-001, TD-SEARCH-SORT-PAGINATION-001, TD-PATIENT-EMPTY-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-018-01 | TS-003-018 | US-003-006 | TD-PATIENT-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-003-019-01 | TS-003-019 | US-003-007 | TD-PATIENT-BASE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-020-01 | TS-003-020 | US-003-007 | TD-PATIENT-BASE-001, TD-PATIENT-NEG-001, TD-PATIENT-UNICODE-001, TD-PATIENT-LONG-001, TD-PATIENT-EMPTY-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-003-021-01 | TS-003-021 | US-003-007 | TD-PATIENT-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-004-001-01 | TS-004-001 | US-004-001 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-002-01 | TS-004-002 | US-004-001 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-APPOINTMENT-NEG-001, TD-APPOINTMENT-DATEBOUND-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-003-01 | TS-004-003 | US-004-001 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-004-01 | TS-004-004 | US-004-002 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-005-01 | TS-004-005 | US-004-002 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-APPOINTMENT-NEG-001, TD-APPOINTMENT-DATEBOUND-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-006-01 | TS-004-006 | US-004-002 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-007-01 | TS-004-007 | US-004-003 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-008-01 | TS-004-008 | US-004-003 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-APPOINTMENT-NEG-001, TD-APPOINTMENT-DATEBOUND-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-009-01 | TS-004-009 | US-004-003 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-010-01 | TS-004-010 | US-004-004 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-011-01 | TS-004-011 | US-004-004 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-APPOINTMENT-NEG-001, TD-APPOINTMENT-DATEBOUND-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-012-01 | TS-004-012 | US-004-004 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-004-013-01 | TS-004-013 | US-004-005 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-SEARCH-SORT-PAGINATION-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-014-01 | TS-004-014 | US-004-005 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-APPOINTMENT-NEG-001, TD-APPOINTMENT-DATEBOUND-001, TD-SEARCH-SORT-PAGINATION-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-004-015-01 | TS-004-015 | US-004-005 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-004-016-01 | TS-004-016 | US-004-006 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001 | MAPPED |
| TC-TS-004-017-01 | TS-004-017 | US-004-006 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-APPOINTMENT-NEG-001, TD-APPOINTMENT-DATEBOUND-001, TD-ERROR-STATE-001 | MAPPED |
| TC-TS-004-018-01 | TS-004-018 | US-004-006 | TD-APPOINTMENT-BASE-001, TD-APPOINTMENT-STATUS-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-005-001-01 | TS-005-001 | US-005-001 | TD-PROVIDER-BASE-001, TD-SEARCH-SORT-PAGINATION-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-005-002-01 | TS-005-002 | US-005-001 | TD-PROVIDER-BASE-001, TD-PROVIDER-NEG-001, TD-SEARCH-SORT-PAGINATION-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-005-003-01 | TS-005-003 | US-005-001 | TD-PROVIDER-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-005-004-01 | TS-005-004 | US-005-002 | TD-PROVIDER-BASE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-005-005-01 | TS-005-005 | US-005-002 | TD-PROVIDER-BASE-001, TD-PROVIDER-NEG-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-005-006-01 | TS-005-006 | US-005-002 | TD-PROVIDER-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-006-001-01 | TS-006-001 | US-006-001 | TD-PATIENT-BASE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-006-002-01 | TS-006-002 | US-006-001 | TD-PATIENT-BASE-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-006-003-01 | TS-006-003 | US-006-001 | TD-PATIENT-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-006-004-01 | TS-006-004 | US-006-002 | TD-PATIENT-BASE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-006-005-01 | TS-006-005 | US-006-002 | TD-PATIENT-BASE-001, TD-ERROR-STATE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-006-006-01 | TS-006-006 | US-006-002 | TD-PATIENT-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-007-001-01 | TS-007-001 | US-007-001 | TD-PRESCRIPTION-BASE-001 | MAPPED |
| TC-TS-007-002-01 | TS-007-002 | US-007-001 | TD-PRESCRIPTION-BASE-001, TD-PRESCRIPTION-NEG-001, TD-ERROR-STATE-001 | MAPPED |
| TC-TS-007-003-01 | TS-007-003 | US-007-001 | TD-PRESCRIPTION-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-008-001-01 | TS-008-001 | US-008-001 | TD-BILLING-BASE-001, TD-INSURANCE-BASE-001, TD-CLAIM-BASE-001 | MAPPED |
| TC-TS-008-002-01 | TS-008-002 | US-008-001 | TD-BILLING-BASE-001, TD-INSURANCE-BASE-001, TD-CLAIM-BASE-001, TD-BILLING-NEG-001, TD-INSURANCE-NEG-001, TD-CLAIM-NEG-001, TD-ERROR-STATE-001 | MAPPED |
| TC-TS-008-003-01 | TS-008-003 | US-008-001 | TD-BILLING-BASE-001, TD-INSURANCE-BASE-001, TD-CLAIM-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-008-004-01 | TS-008-004 | US-008-002 | TD-BILLING-BASE-001, TD-INSURANCE-BASE-001, TD-CLAIM-BASE-001 | MAPPED |
| TC-TS-008-005-01 | TS-008-005 | US-008-002 | TD-BILLING-BASE-001, TD-INSURANCE-BASE-001, TD-CLAIM-BASE-001, TD-BILLING-NEG-001, TD-INSURANCE-NEG-001, TD-CLAIM-NEG-001, TD-ERROR-STATE-001 | MAPPED |
| TC-TS-008-006-01 | TS-008-006 | US-008-002 | TD-BILLING-BASE-001, TD-INSURANCE-BASE-001, TD-CLAIM-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-009-001-01 | TS-009-001 | US-009-001 | TD-NOTIFICATION-BASE-001, TD-NOTIFICATION-PRIORITY-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-009-002-01 | TS-009-002 | US-009-001 | TD-NOTIFICATION-BASE-001, TD-ERROR-STATE-001, TD-NOTIFICATION-PRIORITY-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-009-003-01 | TS-009-003 | US-009-001 | TD-NOTIFICATION-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-NOTIFICATION-PRIORITY-001 | MAPPED |
| TC-TS-009-004-01 | TS-009-004 | US-009-002 | TD-NOTIFICATION-BASE-001, TD-NOTIFICATION-PRIORITY-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-009-005-01 | TS-009-005 | US-009-002 | TD-NOTIFICATION-BASE-001, TD-ERROR-STATE-001, TD-NOTIFICATION-PRIORITY-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-009-006-01 | TS-009-006 | US-009-002 | TD-NOTIFICATION-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-NOTIFICATION-PRIORITY-001 | MAPPED |
| TC-TS-009-007-01 | TS-009-007 | US-009-003 | TD-NOTIFICATION-BASE-001, TD-NOTIFICATION-PRIORITY-001 | MAPPED |
| TC-TS-009-008-01 | TS-009-008 | US-009-003 | TD-NOTIFICATION-BASE-001, TD-ERROR-STATE-001, TD-NOTIFICATION-PRIORITY-001 | MAPPED |
| TC-TS-009-009-01 | TS-009-009 | US-009-003 | TD-NOTIFICATION-BASE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001, TD-NOTIFICATION-PRIORITY-001 | MAPPED |
| TC-TS-010-001-01 | TS-010-001 | US-010-001 | TD-USERS-ROLE-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-010-002-01 | TS-010-002 | US-010-001 | TD-USERS-ROLE-001, TD-REGRESSION-BASELINE-001, TD-ERROR-STATE-001 | MAPPED |
| TC-TS-010-003-01 | TS-010-003 | US-010-001 | TD-USERS-ROLE-001, TD-REGRESSION-BASELINE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-011-001-01 | TS-011-001 | US-011-001 | TD-USERS-ROLE-001 | MAPPED |
| TC-TS-011-002-01 | TS-011-002 | US-011-001 | TD-USERS-ROLE-001, TD-ERROR-STATE-001 | MAPPED |
| TC-TS-011-003-01 | TS-011-003 | US-011-001 | TD-USERS-ROLE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-011-004-01 | TS-011-004 | US-011-002 | TD-USERS-ROLE-001 | MAPPED |
| TC-TS-011-005-01 | TS-011-005 | US-011-002 | TD-USERS-ROLE-001, TD-ERROR-STATE-001 | MAPPED |
| TC-TS-011-006-01 | TS-011-006 | US-011-002 | TD-USERS-ROLE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |
| TC-TS-012-001-01 | TS-012-001 | US-012-001 | TD-NOTIFICATION-BASE-001, TD-USERS-ROLE-001, TD-SEARCH-SORT-PAGINATION-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-012-002-01 | TS-012-002 | US-012-001 | TD-NOTIFICATION-BASE-001, TD-USERS-ROLE-001, TD-ERROR-STATE-001, TD-SEARCH-SORT-PAGINATION-001, TD-REGRESSION-BASELINE-001 | MAPPED |
| TC-TS-012-003-01 | TS-012-003 | US-012-001 | TD-NOTIFICATION-BASE-001, TD-USERS-ROLE-001, TD-ACCESSIBILITY-INPUT-001, TD-RESPONSIVE-VIEWPORT-001, TD-LOADING-STATE-001 | MAPPED |

## Test Data Mapping Summary

Total Test Cases: 96

Test Cases with dataset mapping: 96

Test Cases without dataset mapping: 0

Unique dataset IDs referenced: 29

Orphan dataset IDs: 0

Orphan dataset ID list: None

Unknown dataset IDs in mappings: None

P0 test cases mapped: 16

P1 test cases mapped: 40

P2 test cases mapped: 40

P3 test cases mapped: 0

No duplicate dataset IDs: PASS

No orphan test-case dataset mappings: PASS


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

## Step 1.10 Project-Management Traceability Extension

### Execution Chain Extension

BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Test Scenario -> Test Case -> Test Data -> Test Management -> Test Execution -> Defect

### Automation Outcome Chain

Story -> Automation Test -> Execution Result -> Failure Analysis -> Defect

### AI Delivery Chain

Requirement -> AI Use Case -> AI Component -> Tool/MCP -> Evaluation Dataset -> Evaluation Run -> AI Quality Gate -> AI Defect -> Remediation

### Step 1.10 Governance Notes
- Existing IDs (`BR-*`, `FR-*`, `EPIC-*`, `US-*`, `AC-*`, `TS-*`, `TC-*`, `TD-*`) remain unchanged.
- New project-management entities must reference existing stable IDs rather than introducing conflicting replacement IDs.
- Execution and defect entities are managed as governance records in this step; runtime tooling implementation is planned in future steps.

## Step 1.11 UI and AI Traceability Extension

### UI-Extended Chain

Requirement -> UI Page -> UI Component -> Test Case -> Automation Test -> Execution Result -> Failure Analysis -> Defect

### Preserved Core Chain

BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Test Scenario -> Test Case -> Test Data

### Future AI Chain (Preserved and Extended)

Requirement -> AI Use Case -> AI Component -> Tool/MCP -> Evaluation Dataset -> Evaluation Run -> AI Quality Gate -> AI Defect -> Remediation

### Step 1.11 Notes
- UI page/component mappings are architecture contracts for future implementation.
- Existing stable IDs remain unchanged and are referenced by UI contracts.
- Automation and AI layers remain planned integrations; no runtime implementation was added in this step.

## Step 1.12 Frontend Runtime Traceability Extension

### Frontend Runtime Chain
Requirement -> UI Route -> UI Component -> Deterministic Selector -> Planned Playwright Test -> Planned Execution Evidence -> Planned Defect Link

### Step 1.12 Runtime Notes
- Runtime frontend implementation now exists for core CareFlow modules under `frontend/`.
- Route and role-access contracts from Step 1.11 are implemented in code (`app.tsx`, `route-access.ts`, `navigation-items.ts`).
- Deterministic selectors are implemented to preserve test-case to automation mapping expectations.
- Synthetic deterministic data and mock service contracts were implemented to align with test-data strategy while keeping backend/API out of scope.
- AI runtime concepts remain planned; only integration boundaries are preserved in the frontend architecture.

## Step 1.13 Automation Traceability Extension

### Automation Execution Chain
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Test Scenario -> Test Case -> Test Data -> BDD Feature -> Step Definition -> Page Object -> Execution Result -> Failure Artifact

### Implemented Step 1.13 Automation IDs and Links
- Feature file: `automation/features/smoke/careflow-smoke.feature`
- Implemented smoke traceability tags:
  - `@tc-TC-TS-001-001-01` / `@ts-TS-001-001` / `@ac-AC-US-001-001-001`
  - `@tc-TC-TS-003-007-01` / `@ts-TS-003-007` / `@ac-AC-US-003-003-001`
  - `@tc-TC-TS-004-001-01` / `@ts-TS-004-001` / `@ac-AC-US-004-001-001`
  - `@tc-TC-TS-001-003-01` / `@ts-TS-001-003` / `@ac-AC-US-001-003-001`
- Test data linkage in automation users:
  - `TD-USERS-ROLE-001`
  - `TD-PATIENT-BASE-001`
  - `TD-APPOINTMENT-BASE-001`
  - `TD-PROVIDER-BASE-001`
  - `TD-NOTIFICATION-BASE-001`

### Step 1.13 Notes
- Full test-case suite conversion is not yet completed; Step 1.13 implements the framework baseline + smoke coverage.
- Structured failure artifact schema is implemented for AI failure-analysis readiness.
- Browser matrix readiness is implemented; Firefox/WebKit execution currently depends on local Playwright browser binary installation.

## Step 1.14 Regression Automation Traceability Extension

### Step 1.14 Execution Chain
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Test Scenario -> Test Case -> Test Data -> BDD Feature -> BDD Scenario -> Step Definition -> Page Object -> Execution Result -> Failure Artifact

### Step 1.14 Coverage Metrics (96 Approved Test Cases)
- Total approved test cases: 96
- AUTOMATABLE NOW: 20
- PARTIALLY AUTOMATABLE: 58
- BLOCKED BY CURRENT UI: 12
- REQUIRES FUTURE BACKEND/API: 4
- MANUAL-ONLY: 2
- Coverage matrix source: `docs/implementations/1.14-regression-automation/coverage-matrix.md`

### Step 1.14 Implemented Automation Mapping (Executed in Chromium)

| Test Case ID | BDD Feature | BDD Scenario | Step Definition | Page Object | Execution |
|---|---|---|---|---|---|
| TC-TS-001-004-01 | `functional/authentication-regression.feature` | Doctor can sign in and access dashboard | `src/steps/regression.steps.ts` + `src/steps/smoke.steps.ts` | `src/pages/login-page.ts`, `src/pages/dashboard-page.ts` | PASS |
| TC-TS-001-005-01 | `functional/authentication-regression.feature` | Invalid login shows validation error | `src/steps/regression.steps.ts` | `src/pages/login-page.ts` | PASS |
| TC-TS-001-007-01 | `functional/authentication-regression.feature` | Logout returns user to login page | `src/steps/smoke.steps.ts` | `src/pages/layout-page.ts`, `src/pages/login-page.ts` | PASS |
| TC-TS-001-008-01 | `functional/authentication-regression.feature` | Doctor cannot see administration navigation option | `src/steps/regression.steps.ts` | `src/pages/layout-page.ts` | PASS |
| TC-TS-002-001-01 | `functional/module-navigation-regression.feature` | Authorized role can open module and see page root | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-002-003-01 | `accessibility/accessibility-regression.feature` | Authenticated topbar exposes user context indicator | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-003-007-01 | `regression/patient-search-regression.feature` | Doctor can search existing patient by id | `src/steps/regression.steps.ts` | `src/pages/patient-search-page.ts` | PASS |
| TC-TS-003-008-01 | `regression/patient-search-regression.feature` | Search for unknown patient shows no matching rows | `src/steps/regression.steps.ts` | `src/pages/patient-search-page.ts` | PASS |
| TC-TS-003-014-01 | `validation/form-validation-regression.feature` | Patient registration validates phone boundary | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-003-021-01 | `responsive/responsive-regression.feature` | Patient management remains reachable in tablet viewport | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-004-001-01 | `smoke/careflow-smoke.feature` | Appointment module navigation | `src/steps/smoke.steps.ts` | `src/pages/appointments-page.ts` | PASS |
| TC-TS-004-011-01 | `validation/form-validation-regression.feature` | Appointment creation requires mandatory fields | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-005-001-01 | `regression/role-access-regression.feature` | Doctor can access providers module | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-008-001-01 | `regression/role-access-regression.feature` | Billing role can access billing navigation | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-009-004-01 | `functional/notifications-preferences-regression.feature` | Doctor can open notifications center | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-010-001-01 | `functional/notifications-preferences-regression.feature` | Administrator can open reports | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-011-004-01 | `functional/notifications-preferences-regression.feature` | Doctor can open profile and save without errors | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-011-005-01 | `validation/form-validation-regression.feature` | Profile save rejects empty name | `src/steps/regression.steps.ts` | `src/pages/regression-page.ts` | PASS |
| TC-TS-001-003-01 | `accessibility/accessibility-regression.feature`, `responsive/responsive-regression.feature` | Login accessibility and responsive baseline checks | `src/steps/regression.steps.ts`, `src/steps/smoke.steps.ts` | `src/pages/login-page.ts`, `src/pages/regression-page.ts` | PASS |
| TC-TS-001-001-01 | `smoke/careflow-smoke.feature`, `regression/role-access-regression.feature` | Authenticated dashboard and role-access baseline | `src/steps/smoke.steps.ts`, `src/steps/regression.steps.ts` | `src/pages/dashboard-page.ts`, `src/pages/layout-page.ts` | PASS |

### Step 1.14 Execution Evidence Artifacts
- Cucumber JSON/NDJSON: `automation/test-results/cucumber/`
- Execution summary JSON (AI-ready): `automation/test-results/cucumber/execution-summary.json`
- HTML report: `automation/reports/html/index.html`
- Failure artifacts directory: `automation/reports/failure-artifacts/`
- Screenshot/trace/video directories: `automation/screenshots/`, `automation/traces/`, `automation/videos/`

## Step 1.15 AI Automation Governance Traceability Extension

### Extended Chain
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Test Scenario -> Test Case -> Test Data -> BDD -> Step Definition -> POM -> Execution Result -> Failure Artifact -> AI Agent Handoff

### Step 1.15 Governance Artifacts
- Automation governance model: `docs/qa/AUTOMATION_GOVERNANCE.md`
- Test automation classification (96/96): `knowledge/test-cases/CAREFLOW_HEALTH_AUTOMATION_CLASSIFICATION.md`
- Candidate matrix (96/96): `docs/qa/AUTOMATION_CANDIDATE_MATRIX.md`
- Agent handoff contract: `docs/architecture/AI_AGENT_HANDOFF_CONTRACT.md`
- Agent role model: `docs/architecture/AI_AGENT_ROLE_MODEL.md`
- Agentic QA workflow: `docs/architecture/AI_AGENTIC_QA_WORKFLOW.md`
- AI/Playwright boundary: `docs/architecture/AI_PLAYWRIGHT_BOUNDARY.md`
- AI observability contract: `docs/architecture/AI_OBSERVABILITY_CONTRACT.md`
- RAGAS/evaluation strategy: `docs/ai/RAGAS_EVALUATION_STRATEGY.md`

### Step 1.15 Classification Snapshot
- Deterministic automated subset retained: 20 test cases
- AI-assisted candidates: 37
- AI-agent candidates: 17
- Manual candidates: 8
- Backend dependencies: 7
- UI gap blocked: 3
- Future candidates: 4

### Step 1.15 Traceability Notes
- Existing deterministic automation mappings from Step 1.13/1.14 remain valid.
- Step 1.15 introduces governance + handoff metadata without replacing canonical requirements/test-case IDs.
- Full 96-case deterministic execution remains intentionally deferred; classification and handoff readiness are now traceable artifacts.

## Roadmap Governance Alignment (Major-Phase Restructure)

### Legacy to Major-Phase Mapping

| Legacy Step Range | Domain | New Major Step | Status |
|---|---|---|---|
| 1.1 to 1.10 | Requirements, QA foundation, project governance (including Jira/Confluence strategy) | STEP 1 | PASS |
| 1.11 to 1.12 | UI architecture and frontend runtime | STEP 2 | PASS |
| 1.13 to 1.15 | Deterministic automation + AI-ready governance contracts | STEP 3 | PASS |
| STEP 4+ | RAG, MCP, agents, integrations, observability, security | STEP 4 to STEP 11 | PLANNED |

### Jira and Confluence Traceability Position
- Jira chain (governance implemented): Requirement -> Epic -> Story -> Acceptance Criteria -> Test Scenario -> Test Case -> Execution -> Defect -> Release.
- Confluence chain (governance implemented): Requirements -> Architecture -> QA Knowledge -> Automation -> AI Knowledge -> Evaluation -> Observability -> Release Knowledge.
- Runtime API/tooling integrations for Jira/Confluence are planned and not claimed as implemented.

### AI Runtime Boundary Note
- This repository currently provides traceability/governance foundations and deterministic execution evidence.
- RAG/MCP/agent runtime integrations are roadmap phases and remain planned.

## Step 4 Jira and Confluence Enterprise Knowledge Extension

### Extended Enterprise Chain
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Jira Issue -> Confluence Knowledge Artifact -> Test Scenario -> Test Case -> Test Data -> Automation -> Execution -> Defect -> Future RAG -> Future MCP -> Future Agent

### Step 4 Deterministic Mapping Example
| Layer | Example ID |
|---|---|
| Epic | CFH-EPIC-001 |
| Story | CFH-US-005 |
| Acceptance Criteria | AC-US-003-003-001 |
| Jira Issue | CFH-US-005 |
| Confluence Knowledge Artifact | CFH-PAGE-001 |
| Test Scenario | TS-003-007 |
| Test Case | TC-TS-003-007-01 |
| Test Data | TD-PATIENT-BASE-001 |
| Automation | automation/features/regression/patient-search-regression.feature |
| Execution | automation/test-results/cucumber/execution-summary.json |
| Defect | CFH-BUG-014 |

### Step 4 Notes
- Jira and Confluence local/mock adapters preserve traceability IDs and source-system references.
- Knowledge export contract includes metadata required for future RAG ingestion.
- Runtime RAG, MCP server execution, and agent execution remain planned.

## Step 4.1 Jira + Confluence UI Simulation Traceability Extension

### Extended UI Traceability Chain
User Story -> Jira Issue -> Confluence Page -> Test Scenario -> Test Case -> Test Data -> BDD -> Automation -> Execution -> Defect -> RAG Knowledge -> MCP Tool -> AI Agent

### Step 4.1 Deterministic Mapping Snapshot

| Layer | Example ID | Status |
|---|---|---|
| User Story | US-003-003 | PASS |
| Jira Issue | CFH-101 | PASS |
| Confluence Page | CFH-PAGE-001 | PASS |
| Test Scenario | TS-003-007 | PASS |
| Test Case | TC-TS-003-007-01 | PASS |
| Test Data | TD-PATIENT-BASE-001 | PASS |
| BDD | TS-STEP41-003 | PASS |
| Automation | automation/features/functional/step41-jira-confluence-ui.feature | PASS |
| Execution | Step 4.1 targeted run (8/8 PASS) | PASS |
| Defect | CFH-301 | PASS |
| RAG Knowledge | RAG-CFH-PAGE-001 | FOUNDATION |
| MCP Tool | MCP-get_confluence_page | FOUNDATION |
| AI Agent | AGENT-IMPACT-ANALYZER | PLANNED |

### Step 4.1 Notes
- Step 4.1 extends visibility of traceability in frontend UI while preserving existing stable IDs.
- Runtime RAG/MCP/Agent execution remains out of scope and is not claimed as implemented.

## Step 5 RAG Runtime Traceability Extension

### Extended RAG Traceability Chain
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Jira Issue -> Confluence Page -> Knowledge Document -> Chunk -> Embedding -> Vector -> Retrieval -> Context -> RAG Answer -> Citation -> Test Scenario -> Test Case -> BDD -> Automation -> Execution -> Future MCP -> Future Agent

### Step 5 Deterministic Mapping Snapshot

| Layer | Example ID | Status |
|---|---|---|
| Jira Issue | CFH-101 | PASS |
| Confluence Page | CFH-PAGE-001 | PASS |
| Knowledge Document | DOC-e3f57f4d780d6f72 | PASS |
| Chunk | CHUNK-7ecf8ad82f4c73ff | PASS |
| Embedding Provider | deterministic-fallback/hashing-v1 | PASS |
| Vector Store | .tmp/rag-runtime/index/vector-store.json | PASS |
| Retrieval | RagQueryService.retrieve() | PASS |
| Context Assembly | ContextAssembler.assemble() | PASS |
| RAG Answer | queryRag() response answer | PASS |
| Citation | sourceSystem/sourceId/documentId/chunkId | PASS |
| BDD | TS-STEP5-003 | PASS |
| Automation | automation/features/functional/step5-rag-runtime.feature | PASS |
| Execution | Targeted @step5 run (7/7 PASS) | PASS |
| Future MCP | search_knowledge/query_rag boundary | FOUNDATION |
| Future Agent | AGENT-IMPACT-ANALYZER | PLANNED |

### Step 5 Notes
- Step 5 implements deterministic local RAG runtime and citation chain while preserving synthetic-data-only boundaries.
- MCP and agent runtime execution remain future phases.

## Step 6 RAG Evaluation Runtime Traceability Extension

### Extended Evaluation Traceability Chain
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Jira -> Confluence -> Knowledge Document -> Chunk -> Embedding -> Vector -> Retrieval -> Context -> RAG Answer -> Citation -> Evaluation Dataset -> Evaluation Case -> Evaluation Run -> Metric -> Quality Gate -> Test Scenario -> Test Case -> BDD -> Automation -> Execution -> Future MCP -> Future Agent

### Step 6 Deterministic Mapping Snapshot

| Layer | Example ID | Status |
|---|---|---|
| Evaluation Dataset | careflow-rag-eval-v1 | PASS |
| Evaluation Case | EVAL-001 | PASS |
| Evaluation Run | RUN-fe2711f1f0934a80 | PASS |
| Metric | contextPrecision/contextRecall/faithfulness/answerRelevance/groundedness | PASS |
| Quality Gate | FAIL (development thresholds) | PASS |
| Evaluation Report | .tmp/rag-evaluation/reports/RUN-fe2711f1f0934a80.md | PASS |
| Evaluation Comparison | CMP-faf93bc1fe467826 | PASS |
| UI Dashboard | /knowledge/evaluation | PASS |
| BDD | TS-STEP6-002 | PASS |
| Automation | automation/features/functional/step6-rag-evaluation.feature | PASS |
| Execution | Step 6 targeted run (5/5 PASS) | PASS |
| Future MCP | query_rag evaluation consumer | PLANNED |
| Future Agent | AGENT-IMPACT-ANALYZER | PLANNED |

### Step 6 Notes
- Step 6 adds measurable RAG quality runtime while preserving deterministic synthetic-only boundaries.
- Official RAGAS library integration is not claimed; architecture is compatibility-ready.

## Step 7 MCP Runtime Traceability Extension

### Extended MCP Chain
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Jira -> Confluence -> Knowledge Document -> Chunk -> Embedding -> Vector -> Retrieval -> Context -> RAG Answer -> Citation -> Evaluation Dataset -> Evaluation Case -> Evaluation Run -> Metric -> Quality Gate -> MCP Tool -> MCP Server -> MCP Client -> Tool Result -> Test Scenario -> Test Case -> BDD -> Automation -> Execution -> Future AI Agent

### Step 7 Deterministic Mapping Snapshot

| Layer | Example ID | Status |
|---|---|---|
| MCP Tool | `search_jira` | PASS |
| MCP Tool | `get_traceability` | PASS |
| MCP Tool | `query_rag` | PASS |
| MCP Tool | `get_rag_evaluation` | PASS |
| MCP Server | `mcp/runtime/src/server/mcp-server.js` | PASS |
| MCP Client | `mcp/runtime/src/clients/mcp-client-harness.js` | PASS |
| Tool Discovery | `tools/list` (10 tools) | PASS |
| Tool Result | structured envelope with `requestId` and `status` | PASS |
| Authorization | role-scope gate in `security/authorization.js` | PASS |
| Audit | `.tmp/mcp-runtime/tool-audit.ndjson` | PASS |
| Frontend MCP UI | `/mcp` | PASS |
| BDD | `TS-STEP7-004` | PASS |
| Automation | `automation/features/functional/step7-mcp-runtime.feature` | PASS |
| Execution | targeted `@step7` run | BLOCKED_ENVIRONMENT (report file EPERM) |

### Step 7 Notes
- Step 7 reuses existing Step 4 Jira/Confluence foundation, Step 5 RAG runtime, and Step 6 evaluation artifacts.
- No autonomous AI agent runtime is implemented in Step 7.

## Step 8 AI Agent Runtime Traceability Extension

### Extended Agent Chain
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Jira -> Confluence -> Knowledge Document -> Chunk -> Embedding -> Vector -> Retrieval -> RAG Answer -> Citation -> Evaluation Dataset -> Evaluation Run -> Metric -> Quality Gate -> MCP Tool -> MCP Server -> MCP Client -> Tool Result -> AI Agent -> Task -> Plan -> Tool Selection -> Tool Execution -> Evidence -> Reasoning -> Response -> Citation -> Confidence -> Audit -> Test Scenario -> Test Case -> BDD -> Automation -> Execution

### Step 8 Deterministic Mapping Snapshot

| Layer | Example ID | Status |
|---|---|---|
| AI Agent | `agent/src/agent-runtime.js` | PASS |
| Task | `TASK-*` | PASS |
| Plan | `PLAN-*` | PASS |
| Tool Selection | `agent/src/tool-selector.js` | PASS |
| Tool Execution | Step 7 MCP `tools/call` | PASS |
| Evidence | `agent/src/evidence-manager.js` | PASS |
| Response | `RESP-*` canonical contract | PASS |
| Confidence | `agent/src/confidence-engine.js` | PASS |
| Audit | `.tmp/agent-runtime/agent-audit.ndjson` | PASS |
| LangGraph | N/A | PLANNED STEP 9 |
| Multi-agent | N/A | PLANNED STEP 10 |

## Step 9 LangGraph Orchestration Traceability Extension

### Extended Graph Chain
BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Jira -> Confluence -> Knowledge Document -> Chunk -> Embedding -> Vector -> Retrieval -> Context -> RAG Answer -> Citation -> Evaluation Dataset -> Evaluation Case -> Evaluation Run -> Metric -> Quality Gate -> MCP Tool -> MCP Server -> MCP Client -> Tool Result -> AI Agent -> Task -> Plan -> Graph State -> Graph Node -> Graph Edge -> MCP Execution -> Evidence -> Reasoning -> Response -> Confidence -> Human Approval -> Checkpoint -> Audit -> BDD -> Automation -> Execution

### Step 9 Mapping Snapshot

| Layer | Example | Status |
|---|---|---|
| Graph Runtime | `agent/src/graph/graph-runtime.js` | PASS |
| Graph State | `agent/src/graph/graph-state.js` | PASS |
| Graph Nodes | `agent/src/graph/graph-nodes.js` | PASS |
| Graph Edges | `agent/src/graph/graph-edges.js` | PASS |
| Checkpoint | `.tmp/langgraph-runtime/checkpoints/*.json` | PASS |
| Telemetry | `.tmp/langgraph-runtime/graph-telemetry.ndjson` | PASS |
| Resume | `agent:graph:resume` | PASS |
| Approval Approve | `agent:graph:approve` | PASS |
| Approval Reject | `agent:graph:reject` | PASS |
| Multi-agent | N/A | PLANNED STEP 10 |
