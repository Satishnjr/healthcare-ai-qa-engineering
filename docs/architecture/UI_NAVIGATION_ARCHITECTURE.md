# UI Navigation Architecture

## Navigation Model
- Entry: `/login`.
- Authenticated experience: app shell with sidebar, topbar, breadcrumb.
- Visibility and action controls are role-driven.

## Route Specifications

| Route | Page | Role Access | Purpose | Major Components | Expected States | Automation Relevance |
|---|---|---|---|---|---|---|
| `/login` | Login | All | Simulated sign-in and role selection | login form, role selector | loading, invalid, success | smoke entry flow |
| `/dashboard` | Dashboard | All | Role-specific summary and quick actions | KPI cards, widgets, links | loading, empty, error | role regression |
| `/patients` | Patient Management | Receptionist, Doctor, Nurse, Admin | Patient list and entry actions | table, filters, CTA | loading, empty, no result, error | list/filter/pagination |
| `/patients/search` | Patient Search | Receptionist, Doctor, Nurse, Admin | Search by ID/name/DOB/phone | search form, results | empty, no result, error | deterministic search |
| `/patients/:patientId` | Patient Profile | Receptionist, Doctor, Nurse, Admin, Patient (self-limited) | Profile view by role | tabs, detail cards | loading, restricted, missing | role visibility |
| `/appointments` | Appointments | Receptionist, Doctor, Nurse, Admin, Patient (limited) | View/manage appointments | calendar/list, actions | loading, empty, error | schedule flows |
| `/appointments/:appointmentId` | Appointment Details | Receptionist, Doctor, Nurse, Admin, Patient (limited) | Detail and status actions | detail panel, history | loading, not found, restricted | deep-link validation |
| `/providers` | Provider Management | Receptionist, Doctor, Admin | Provider directory/schedule | list, detail panel | loading, empty, error | provider coverage |
| `/prescriptions` | Prescriptions | Doctor, Nurse, Admin, Patient (limited) | Prescription details | list, filters, detail | loading, empty, error | data display checks |
| `/billing-insurance` | Billing and Insurance | Receptionist, Admin, Patient (limited) | Billing/insurance visibility | cards, table | loading, empty, restricted | role matrix checks |
| `/claims` | Claims | Receptionist, Admin | Claim-like status tracking | table, badges, filters | loading, empty, error | status/filter coverage |
| `/notifications` | Notifications | All | Notification feed and read-state actions | list, filters | loading, empty, error | read/unread coverage |
| `/reports` | Reports | Admin, Doctor (limited), Receptionist (limited) | Synthetic operational reports | charts/tables | loading, no data, restricted | reporting visibility |
| `/admin` | Administration | Admin | User/config-like administration | user table, config cards | loading, empty, forbidden | admin guard tests |
| `/profile` | Profile | All | Self profile management | form sections | loading, validation, success | form automation |
| `/settings` | Settings | All | User preferences | toggles/selects | loading, validation, success | preference coverage |
| `/help` | Help | All | Usage guidance | faq, references | loading, empty | low-risk navigation |
| `/logout` | Logout | All | End simulated session | confirm dialog, redirect | processing, success | session-clear check |

## Rules
- Dashboard widgets deep-link to module routes.
- Unauthorized routes/actions show deterministic warning behavior.
- Route root hook: `data-testid="page-<route-key>-root"`.
- Menu hook: `data-testid="nav-<module>-link"`.

