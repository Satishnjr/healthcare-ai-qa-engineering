# User Journeys (Planned)

## Journey 1: Receptionist registers a patient
- Actor: Receptionist
- Goal: Add new patient profile to the system
- Preconditions: Receptionist is logged in and has registration access
- Main flow: Open Patient Management -> Enter demographic/contact fields -> Validate -> Save
- Alternate flow: Minimal registration path with required fields only
- Error flow: Duplicate ID/invalid required fields -> show validation errors
- Expected outcome: New synthetic patient record appears in patient list

## Journey 2: Receptionist searches for an existing patient
- Actor: Receptionist
- Goal: Quickly locate patient details
- Preconditions: Receptionist logged in
- Main flow: Open Patient Search -> Enter ID/name -> View matching results
- Alternate flow: Search with filters (DOB, phone, status)
- Error flow: No results -> empty state guidance
- Expected outcome: Matching patient is found or clear no-result state shown

## Journey 3: Receptionist schedules an appointment
- Actor: Receptionist
- Goal: Book appointment with selected doctor/time
- Preconditions: Patient exists, doctor availability visible
- Main flow: Open Appointments -> Select patient/doctor/date/time -> Confirm booking
- Alternate flow: Waitlist slot when preferred slot unavailable
- Error flow: Slot conflict -> show alternate slot options
- Expected outcome: Appointment created with confirmation state

## Journey 4: Doctor views today's appointments
- Actor: Doctor
- Goal: Review daily schedule
- Preconditions: Doctor logged in
- Main flow: Dashboard -> Today's appointments list -> Open appointment details
- Alternate flow: Filter by clinic/location
- Error flow: No appointments -> empty schedule state
- Expected outcome: Doctor sees complete schedule context for the day

## Journey 5: Doctor searches for a patient
- Actor: Doctor
- Goal: Access patient profile during consultation
- Preconditions: Doctor logged in
- Main flow: Patient Search -> Enter identifier -> Open profile
- Alternate flow: Search by partial name + DOB
- Error flow: Invalid search input -> validation prompt
- Expected outcome: Correct patient profile opens

## Journey 6: Doctor reviews medical history
- Actor: Doctor
- Goal: Understand clinical context before treatment
- Preconditions: Patient profile opened
- Main flow: Open Medical Records tab -> Review timeline/entries
- Alternate flow: Filter records by visit type/date
- Error flow: No records -> informative empty state
- Expected outcome: Doctor can review relevant historical information

## Journey 7: Doctor adds a simulated clinical note
- Actor: Doctor
- Goal: Record consultation details in simulated workflow
- Preconditions: Patient profile + encounter context available
- Main flow: Add note -> Enter structured fields -> Save
- Alternate flow: Save draft note
- Error flow: Required section missing -> inline validation
- Expected outcome: New simulated note is visible in record history

## Journey 8: Doctor reviews a prescription
- Actor: Doctor
- Goal: Confirm medication details and status
- Preconditions: Prescription data exists for patient
- Main flow: Open Prescriptions -> Select entry -> Review dosage/instructions
- Alternate flow: Filter active vs historical prescriptions
- Error flow: Missing prescription details -> warning state
- Expected outcome: Doctor sees complete prescription context

## Journey 9: Patient views upcoming appointment
- Actor: Patient
- Goal: Confirm next visit details
- Preconditions: Patient logged in
- Main flow: Dashboard/Appointments -> Upcoming appointment card/list
- Alternate flow: Calendar view
- Error flow: No upcoming visits -> informative empty state
- Expected outcome: Patient sees date/time/doctor/location details

## Journey 10: Patient views medical records
- Actor: Patient
- Goal: Review own medical information summary
- Preconditions: Patient logged in and authorized
- Main flow: Medical Records -> Select entry -> View details
- Alternate flow: Filter by date or visit type
- Error flow: No records available -> helpful guidance
- Expected outcome: Patient can view available simulated records

## Journey 11: Administrator reviews dashboard metrics
- Actor: Healthcare Administrator
- Goal: Monitor operational indicators
- Preconditions: Admin logged in
- Main flow: Open Dashboard -> Review KPIs/charts/tables
- Alternate flow: Filter metrics by date range
- Error flow: Data unavailable -> degraded state with retry
- Expected outcome: Admin gets high-level operational visibility

## Journey 12: Administrator reviews system activity
- Actor: Healthcare Administrator
- Goal: Review audit-style activity events
- Preconditions: Admin logged in
- Main flow: Open Audit History -> Filter by actor/module/date -> Inspect event details
- Alternate flow: Export-like view (future)
- Error flow: No events in selected range -> empty state
- Expected outcome: Admin can inspect simulated activity trail
