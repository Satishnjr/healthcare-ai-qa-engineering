# CareFlow Health Test Data Strategy

## 1. Document Control
- Document ID: CFH-TD-STR-001
- Product: CareFlow Health
- Project: Healthcare AI QA Engineering Platform
- Version: 1.0
- Status: BASELINE / APPROVED FOR TEST MANAGEMENT EXECUTION DESIGN
- Last Updated: 2026-08-13

## 2. Objective
Define an enterprise-style synthetic test-data strategy for frontend-only CareFlow Health workflows supporting manual QA, Playwright/Cucumber automation planning, regression operations, and future AI-QA components.

## 3. Scope
- In scope: Synthetic data modeling, test-data categories, volume strategy, lifecycle, traceability IDs, and test-management alignment.
- Out of scope: Frontend implementation, backend/API services, automation code, RAG/MCP/agent implementation.

## 4. Architecture Constraints
- Frontend-only application.
- No backend and no API automation.
- Synthetic healthcare data only.
- No real PHI, no real credentials, no production datasets.
- Educational/engineering demonstration only; no HIPAA compliance claim.

## 5. Synthetic Entity Strategy

### 5.1 Patient Data
Fields: patient ID, synthetic MRN, first/last name, DOB, gender, contact, address, emergency contact, insurance summary, account status, registration status.

### 5.2 Provider Data
Fields: provider ID, provider name, specialty, department, location, availability status, provider role.

### 5.3 Appointment Data
Fields: appointment ID, patient, provider, date/time, appointment type, status, reason, location, confirmation status.
Statuses: Scheduled, Confirmed, Checked-In, Completed, Cancelled, No-Show, Rescheduled.

### 5.4 Prescription/Medication UI Data
Display-only fields: medication display name, dosage text, frequency text, status, start/end date, prescribing provider.
No diagnosis/recommendation logic.

### 5.5 Insurance Data
Fields: insurance provider, synthetic policy number, synthetic member ID, plan type, coverage status, effective/expiry dates.

### 5.6 Billing Data
Fields: invoice ID, patient reference, service item, amount, payment status, invoice date, due date.

### 5.7 Claims Data
Fields: claim ID, patient/provider refs, claim type, status, submitted/processed dates, amount, synthetic denial reason.

### 5.8 Notifications
Fields: notification ID, type, title, message, timestamp, read/unread, priority.

### 5.9 User/Role Data
Roles: Patient, Physician, Nurse, Receptionist, Billing Staff, Healthcare Administrator, QA/Test User.
Define UI permission matrices only.

## 6. Test Data Category Framework

| Category | Purpose | Example | Usage | Automation Relevance | Risks |
|---|---|---|---|---|---|
| Positive | Validate core happy paths | Valid patient registration | Smoke, core functional | Stable baseline assertions | False confidence if only positive used |
| Negative | Validate rejection/error behavior | Invalid patient ID format | Validation and resilience tests | Error-message assertions | Poor coverage if not role-aware |
| Boundary | Validate min/max and edge limits | Max-length name fields | Input-boundary tests | Deterministic boundary checks | Missed date/time edges |
| Empty | Validate no-data states | Empty appointment list | Empty UX behavior | Empty-state selectors | Broken UX handling |
| Missing | Validate required-field handling | Missing DOB or provider | Form validation | Required-field assertions | Hidden silent failures |
| Invalid | Validate malformed value behavior | Non-date in date field | Input parsing validation | Validation hook checks | Inconsistent messages |
| Duplicate | Validate duplicate handling | Duplicate appointment slot | Conflict simulations | Duplicate conflict checks | Non-deterministic collisions |
| Long-value | Validate layout + truncation | Very long address text | UI resilience | Overflow/assertion checks | Visual clipping |
| Special-character | Validate encoding safety | O'Connor, #Unit-12 | Input sanitization | Character handling tests | Unexpected parser failures |
| Unicode | Validate locale handling | Non-Latin names | i18n readiness | Unicode-friendly locators | Rendering mismatch |
| Role-specific | Validate role visibility | Admin vs Patient nav | Role authorization UI | Tag-driven role suites | Permission leakage |
| Permission UI | Validate restricted actions | Read-only billing screen | Security-oriented UI checks | Action-disabled assertions | Unauthorized action exposure |
| Loading-state | Validate transitional UX | Spinner/skeleton | Async UI state checks | Wait-for-state patterns | Flaky timing |
| Error-state | Validate recoverable failures | Failed list load banner | Retry/error flows | Error component assertions | Unclear remediation |
| Responsive | Validate breakpoint behavior | Mobile appointment card | Viewport matrix testing | Multi-viewport runs | Hidden controls |
| Accessibility | Validate assistive behavior | Focus order dataset | Keyboard/screen-reader checks | A11y assertions | Non-compliant interactions |
| Search/Filter/Sort | Validate list controls | Multi-page patient list | Data-table behavior | Deterministic ordering checks | Unstable data ordering |
| Pagination | Validate page boundaries | Last page partial records | Large list checks | Page nav assertions | Off-by-one errors |
| Date/Time Boundary | Validate temporal edges | Leap day, midnight, timezone | Scheduling/claims edges | Temporal boundary suites | Locale drift |
| Regression Baseline | Keep repeatable baseline | Versioned seed snapshot | Daily regression | Stable reruns and diffs | Drift across versions |

## 7. Test Data Volume Strategy
- SMALL: smoke and sanity runs with concise deterministic fixtures.
- MEDIUM: functional and regression runs with representative state coverage.
- LARGE: search/filter/pagination and UI stress-oriented runs.

Recommended implementation approach (future step):
1. Static JSON fixtures for baseline entities.
2. TypeScript fixture loaders for modular consumption.
3. Deterministic seed files under version control.
4. Factory/helper patterns for scenario-specific extensions.
5. Controlled pseudo-random generation with fixed seeds.

## 8. Data Generation Strategy (Future-facing)
- Deterministic datasets: default for CI repeatability.
- Random-but-reproducible: seeded variants for expanded regression.
- Fixture factories: scenario-specific test expansion.
- Role-specific datasets: permission and UX coverage.
- Negative/boundary datasets: validation and resilience.

## 9. Data Privacy and Security Rules
- Never use real PHI.
- Never copy real patient/provider/insurance data.
- Never commit secrets/credentials/tokens.
- Never connect to production/real healthcare systems.
- Never use production datasets.

This project is an educational/engineering demonstration using synthetic data only.

## 10. Test Data Lifecycle
- Creation: versioned synthetic seeds and catalogs.
- Selection: test case references dataset IDs.
- Usage: loaded by suite type and tags.
- Reset: fixture re-seeding per run.
- Cleanup: local state reset between suites.
- Versioning: semantic dataset snapshots.
- Ownership: QA/Test Data owner + reviewer.
- Review: periodic coverage/risk validation.
- Deprecation: mark superseded dataset IDs as deprecated with replacement mapping.

Determinism for frontend-only runs:
- fixed fixture files
- fixed pseudo-random seeds
- stable IDs
- stable ordering keys

## 11. Playwright/Cucumber/POM Relevance
- Playwright: dataset IDs map to fixtures and test hooks.
- Cucumber: tags map to data categories (e.g., @negative @boundary @role-patient).
- Page Objects: consume dataset-driven actions/assertions.
- Fixtures/Hooks: scenario setup references TD IDs.

## 12. Risks and Mitigations
- Dataset drift -> enforce versioned baseline and review gates.
- Overfitting to happy paths -> require negative/boundary quotas.
- Flaky transitions -> deterministic loading/error fixtures.
- Permission leakage -> dedicated role datasets and assertions.
