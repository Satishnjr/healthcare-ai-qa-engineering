# UI Page Specifications

## Scope
Major pages are specified for purpose, layout, actions, states, responsiveness, accessibility, testability, and traceability.

## Login (`/login`)
- Purpose: simulated authentication and role selection.
- Actors: all roles.
- Key elements: username/password, role selector, submit, error area.
- States: loading, invalid credentials, success redirect.
- Traceability: US-001-001/002/003 + related AC/TS/TC groups.

## Dashboard (`/dashboard`)
- Purpose: role-based summary and quick actions.
- Actors: all roles.
- Key elements: KPI cards, quick links, activity and notification widgets.
- States: loading, empty widget, widget error.
- Traceability: US-002-001/002 + related AC/TS/TC groups.

## Patients (`/patients`, `/patients/search`, `/patients/:patientId`)
- Purpose: register/search/view/update patient data per role.
- Actors: receptionist/doctor/nurse/admin; patient (self-limited profile).
- Key elements: forms, filters, table, profile tabs.
- States: loading, empty, no results, restricted section, error.
- Traceability: US-003-001 to US-003-007 + related AC/TS/TC groups.

## Appointments (`/appointments`, `/appointments/:appointmentId`)
- Purpose: create/reschedule/cancel and view appointments.
- Actors: receptionist (write), others role-limited.
- Key elements: schedule list/calendar, detail, confirmation dialog.
- States: loading, empty, conflict, restricted, not found.
- Traceability: US-004-001 to US-004-006 + related AC/TS/TC groups.

## Providers (`/providers`)
- Purpose: provider directory and schedule visibility.
- Actors: receptionist/doctor/admin.
- States: loading, empty, error.
- Traceability: US-005-001/002.

## Medical Records (`/medical-records`)
- Purpose: view simulated records and notes.
- Actors: doctor/nurse/admin/patient (limited).
- States: loading, empty, restricted, error.
- Traceability: US-006-001/002.

## Prescriptions (`/prescriptions`)
- Purpose: view prescription list/detail.
- Actors: doctor/nurse/admin/patient (limited).
- States: loading, empty, restricted, error.
- Traceability: US-007-001.

## Billing/Insurance and Claims (`/billing-insurance`, `/claims`)
- Purpose: synthetic billing/coverage visibility and claim status.
- Actors: receptionist/admin/patient (limited for billing/insurance).
- States: loading, empty, restricted, error.
- Traceability: US-008-001/002.

## Notifications (`/notifications`)
- Purpose: feed management and read-state updates.
- Actors: all roles.
- States: loading, empty, error.
- Traceability: US-009-001/002/003.

## Reports (`/reports`)
- Purpose: synthetic operational insights.
- Actors: admin + limited doctor/receptionist.
- States: loading, no data, restricted, error.
- Traceability: US-010-001.

## Administration (`/admin`)
- Purpose: user/configuration-like controls.
- Actors: admin only.
- States: loading, empty, forbidden.
- Traceability: US-011-001.

## Profile/Settings/Help/Logout (`/profile`, `/settings`, `/help`, `/logout`)
- Purpose: self profile/prefs, guidance, session end.
- Actors: all roles.
- States: loading, validation errors, save success/failure, logout processing.
- Traceability: US-011-002, FR-003.

## Cross-Page Standards
- Deterministic loading/empty/error components.
- Responsive behavior for 1440, 1280, 768, 390, 375.
- Keyboard navigation and semantic accessibility coverage.
- Stable test hooks and predictable route behavior.

