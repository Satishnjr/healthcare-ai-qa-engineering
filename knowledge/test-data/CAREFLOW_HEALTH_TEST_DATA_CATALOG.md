# CareFlow Health Test Data Catalog

## 1. Catalog Purpose
Define reusable synthetic datasets with stable IDs aligned to test-case execution and traceability.

## 2. Dataset ID Convention
- Format: `TD-<ENTITY>-<CATEGORY>-<SEQUENCE>`
- Example: `TD-PATIENT-NEG-001`

## 3. Dataset Inventory

| Dataset ID | Entity | Purpose | Scenario Type | Related User Stories | Related Test Cases | Data Characteristics | Automation Relevance |
|---|---|---|---|---|---|---|---|
| TD-USERS-ROLE-001 | User/Role | Role-based UI access simulation for all personas | Role-specific / Permission | US-001-001, US-002-001, US-011-001 | TC-TS-001-001-01, TC-TS-002-001-01 | Synthetic role matrix; no real credentials | Base fixture for auth/authorization views |
| TD-PATIENT-BASE-001 | Patient | Baseline patient demographics and profile flows | Positive | US-003-001, US-003-004 | TC-TS-003-001-01, TC-TS-003-010-01 | Synthetic MRN, demographics, contact stubs | Core patient workflows |
| TD-PATIENT-NEG-001 | Patient | Invalid/missing patient inputs and invalid identifiers | Negative / Validation | US-003-005 | TC-TS-003-002-01, TC-TS-003-014-01 | Missing required fields, malformed IDs | Negative-path assertions |
| TD-PATIENT-BOUNDARY-001 | Patient | Boundary values for names, IDs, DOB edges | Boundary | US-003-005, US-003-006 | TC-TS-003-014-01 | Min/max length, boundary dates | Boundary validation |
| TD-PATIENT-EMPTY-001 | Patient | Empty list/search result states | Empty / Missing | US-003-002, US-003-003 | TC-TS-003-005-01 | No result datasets | Empty-state UX validation |
| TD-PATIENT-UNICODE-001 | Patient | Unicode and locale-sensitive patient inputs | Unicode / Special-character | US-003-001 | TC-TS-003-002-01 | Names with diacritics and non-Latin script | I18N and input robustness |
| TD-PATIENT-LONG-001 | Patient | Long-value and overflow-resistant patient fields | Long-value | US-003-005 | TC-TS-003-014-01 | Extended strings in address/notes | Layout and validation resilience |
| TD-PROVIDER-BASE-001 | Provider | Provider directory and schedule baseline data | Positive | US-005-001, US-005-002 | TC-TS-005-001-01, TC-TS-005-004-01 | Synthetic provider IDs, specialty, status | Directory and schedule scenarios |
| TD-PROVIDER-NEG-001 | Provider | Unavailable provider and invalid provider filters | Negative | US-005-001 | TC-TS-005-002-01 | Inactive/unavailable provider states | Error handling in provider views |
| TD-APPOINTMENT-BASE-001 | Appointment | Core appointment creation/reschedule/cancel data | Positive | US-004-001, US-004-002, US-004-003 | TC-TS-004-001-01, TC-TS-004-004-01 | Scheduled/confirmed slots and references | Core appointment lifecycle |
| TD-APPOINTMENT-STATUS-001 | Appointment | Comprehensive status matrix across lifecycle | State / Regression | US-004-001, US-004-003 | TC-TS-004-003-01, TC-TS-004-009-01 | Scheduled, Confirmed, Checked-In, Completed, Cancelled, No-Show, Rescheduled | State validation and regression |
| TD-APPOINTMENT-DATEBOUND-001 | Appointment | Date/time boundaries and timezone-sensitive cases | Date/Time Boundary | US-004-004 | TC-TS-004-011-01 | Past/future cutoffs, day transitions | Boundary + reliability checks |
| TD-APPOINTMENT-NEG-001 | Appointment | Conflict, duplicate slot, and invalid date inputs | Negative / Validation | US-004-004, US-004-005 | TC-TS-004-002-01, TC-TS-004-011-01 | Overlapping slot and invalid formats | Negative-path automation |
| TD-PRESCRIPTION-BASE-001 | Prescription | Display-safe prescription UI data only | Positive | US-007-001 | TC-TS-007-001-01 | Medication display strings and statuses | Read-only medication flows |
| TD-PRESCRIPTION-NEG-001 | Prescription | Missing/inactive prescription record states | Negative | US-007-001 | TC-TS-007-002-01 | Inactive records, missing fields | Error/empty handling |
| TD-INSURANCE-BASE-001 | Insurance | Coverage and plan summary datasets | Positive | US-008-002 | TC-TS-008-004-01 | Synthetic policy/member IDs | Insurance visibility tests |
| TD-INSURANCE-NEG-001 | Insurance | Expired/invalid insurance coverage states | Negative | US-008-002 | TC-TS-008-005-01 | Expired policy and invalid member IDs | Negative coverage checks |
| TD-BILLING-BASE-001 | Billing | Invoice/service/payment baseline dataset | Positive | US-008-001 | TC-TS-008-001-01 | Synthetic invoice IDs, amount/status | Billing summary scenarios |
| TD-BILLING-NEG-001 | Billing | Invalid billing entries and missing invoice fields | Negative | US-008-001 | TC-TS-008-002-01 | Partial/malformed invoice rows | Validation/error handling |
| TD-CLAIM-BASE-001 | Claims | Claims workflow baseline states | Positive | US-008-002 | TC-TS-008-004-01 | Submitted/processed claims | Claim-like UI flows |
| TD-CLAIM-NEG-001 | Claims | Denied/failed claim scenarios with reason codes | Negative | US-008-002 | TC-TS-008-005-01 | Denied claims with synthetic reasons | Defect and negative coverage |
| TD-NOTIFICATION-BASE-001 | Notification | Notification center baseline data | Positive | US-009-001 | TC-TS-009-001-01 | Read/unread notification mix | Notification workflows |
| TD-NOTIFICATION-PRIORITY-001 | Notification | Priority and urgency notification variants | Priority / Role-specific | US-009-001 | TC-TS-009-003-01 | Low/Medium/High priority states | Priority filtering behavior |
| TD-SEARCH-SORT-PAGINATION-001 | Cross-Module | Search/filter/sort/pagination deterministic datasets | Search/Filter/Sort/Pagination | US-003-006, US-004-005, US-012-001 | TC-TS-003-016-01, TC-TS-004-013-01 | Stable ordering and page boundaries | List behavior automation |
| TD-RESPONSIVE-VIEWPORT-001 | Cross-Module | Viewport breakpoints and responsive state datasets | Responsive | US-003-007, US-009-002 | TC-TS-003-021-01, TC-TS-009-006-01 | Desktop/tablet/mobile viewport data | Responsive regression |
| TD-ACCESSIBILITY-INPUT-001 | Cross-Module | Keyboard/focus/label/accessibility-oriented dataset variants | Accessibility | US-003-007, US-009-003 | TC-TS-003-021-01, TC-TS-009-009-01 | Assistive-friendly labels and states | A11y coverage readiness |
| TD-LOADING-STATE-001 | Cross-Module | Deterministic loading placeholders and delayed data states | Loading State | US-009-002 | TC-TS-009-004-01 | Controlled loading flags | Spinner/skeleton behavior checks |
| TD-ERROR-STATE-001 | Cross-Module | Deterministic frontend error-state fixtures | Error State | US-009-002 | TC-TS-009-005-01 | Synthetic failure messages and retry states | Error handling coverage |
| TD-REGRESSION-BASELINE-001 | Cross-Module | Stable baseline for repeatable regression and smoke runs | Regression Baseline | All core stories | All P0/P1 test cases | Versioned deterministic snapshots | Regression reproducibility |

## 4. Orphan and Consistency Checks
- Catalog dataset IDs: 29
- Referenced dataset IDs in test-case mappings: 29
- Orphan dataset IDs (defined but not referenced): 0
- Orphan dataset IDs list: None
- Unknown dataset IDs in mappings: None
