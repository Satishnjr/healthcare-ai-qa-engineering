@smoke @functional @regression
Feature: CareFlow Health smoke workflows
  Framework foundation smoke suite covering login, navigation, role-based access, and logout.

  @tc-TC-TS-001-001-01 @ts-TS-001-001 @ac-AC-US-001-001-001 @role-based
  Scenario: Successful login and dashboard access
    Given the CareFlow application is available
    When I log in as "Doctor" using deterministic credentials
    Then I should land on the dashboard

  @tc-TC-TS-003-007-01 @ts-TS-003-007 @ac-AC-US-003-003-001 @functional
  Scenario: Patient navigation and search workflow
    Given the CareFlow application is available
    When I log in as "Doctor" using deterministic credentials
    And I navigate to patient search
    Then I can search with patient id "PAT-001" and see a matching row

  @tc-TC-TS-004-001-01 @ts-TS-004-001 @ac-AC-US-004-001-001 @functional
  Scenario: Appointment module navigation
    Given the CareFlow application is available
    When I log in as "Receptionist" using deterministic credentials
    And I navigate to appointments
    Then I should see the appointments module

  @tc-TC-TS-001-001-01 @ts-TS-001-001 @ac-AC-US-001-001-001 @role-based
  Scenario: Patient role cannot view restricted provider/admin modules
    Given the CareFlow application is available
    When I log in as "Patient" using deterministic credentials
    Then I should not see restricted navigation item "Providers"
    And I should not see restricted navigation item "Administration"

  @tc-TC-TS-001-003-01 @ts-TS-001-003 @ac-AC-US-001-003-001 @functional
  Scenario: Logout from authenticated session
    Given the CareFlow application is available
    When I log in as "Doctor" using deterministic credentials
    And I log out from the sidebar
    Then I should be redirected to login page
