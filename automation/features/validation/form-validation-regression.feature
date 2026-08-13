@regression @validation @negative @p1
Feature: Form validation regression
  Validate deterministic validation behavior for patient, appointment, and profile forms.

  @tc-TC-TS-003-014-01 @ts-TS-003-014 @ac-AC-US-003-005-002
  Scenario: Patient registration validates phone boundary
    Given I am logged in as "Receptionist"
    When I open navigation item "Patient Management"
    And I open patient registration form
    And I submit patient form with short phone
    Then I should see patient form error "Phone number must be at least 7 characters."

  @tc-TC-TS-004-011-01 @ts-TS-004-011 @ac-AC-US-004-004-002
  Scenario: Appointment creation requires mandatory fields
    Given I am logged in as "Receptionist"
    When I open navigation item "Appointments"
    And I submit appointment form without required fields
    Then I should see appointment form error "All fields are required."

  @tc-TC-TS-011-005-01 @ts-TS-011-005 @ac-AC-US-011-002-002
  Scenario: Profile save rejects empty name
    Given I am logged in as "Doctor"
    When I open navigation item "Profile"
    And I save profile with empty name
    Then I should see hint text "Name is required."
