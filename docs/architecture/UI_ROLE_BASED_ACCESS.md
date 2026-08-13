# UI Role-Based Access

## Scope
UI authorization simulation only. No real authentication/security infrastructure is implemented in this step.

## Role Model

| Role | Accessible Pages | Actions | Read/Write | Restricted Behavior | Unauthorized Handling |
|---|---|---|---|---|---|
| Patient | dashboard, appointments (limited), profile, records (limited), prescriptions (limited), notifications, billing/insurance (limited), settings, help | view own data, update own prefs/profile, mark notifications read | mostly read-only | no admin/receptionist-only actions | redirect + warning |
| Doctor | dashboard, patients, search, patient profile, appointments, providers, records, prescriptions, notifications, reports (limited), profile, settings, help | view patient data, simulated note updates | read-heavy + limited write | no admin/billing-admin controls | block action + message |
| Nurse | dashboard, patients/search, profile, appointments (view), records (view), prescriptions (view), notifications, settings, help | supportive view actions | limited write | no admin and scheduling write paths | block action + message |
| Receptionist | dashboard, patient management/search/profile, appointments, providers, billing/insurance, claims, notifications, reports (limited), settings, help | patient registration, appointment operations, allowed billing updates | mixed read/write | no admin-only and clinical-only controls | block action + message |
| Healthcare Administrator | all modules including admin/reports/audit-like pages | user/config-like operations | broad read/write | N/A for approved admin actions | N/A |

## Visibility Rules
- Role drives menu visibility and action rendering.
- Sensitive controls are hidden when role is not eligible.
- Read-only mode is used when page visibility is allowed but write is not.

## Automation Relevance
- Role fixtures must drive route and action coverage.
- Negative authorization tests required for restricted routes and controls.

