@regression @role @access-control @p0
Feature: Role-based navigation and access regression
  Validate allowed and restricted module visibility for different simulated roles.

  @tc-TC-TS-001-001-01 @ts-TS-001-001 @ac-AC-US-001-001-001 @critical
  Scenario: Patient role hides restricted claims and administration modules
    Given I am logged in as "Patient"
    Then navigation item "Claims" should be hidden
    And navigation item "Administration" should be hidden
    And navigation item "Providers" should be hidden

  @tc-TC-TS-005-001-01 @ts-TS-005-001 @ac-AC-US-005-001-001
  Scenario: Doctor role can access provider management
    Given I am logged in as "Doctor"
    Then navigation item "Providers" should be visible

  @tc-TC-TS-008-001-01 @ts-TS-008-001 @ac-AC-US-008-001-001
  Scenario: Receptionist role can access claims and billing
    Given I am logged in as "Receptionist"
    Then navigation item "Claims" should be visible
    And navigation item "Billing & Insurance" should be visible

  @tc-TC-TS-010-001-01 @ts-TS-010-001 @ac-AC-US-010-001-001
  Scenario: Healthcare Administrator can access administration and reports
    Given I am logged in as "Healthcare Administrator"
    Then navigation item "Administration" should be visible
    And navigation item "Reports" should be visible
