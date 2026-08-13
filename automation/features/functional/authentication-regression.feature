@regression @functional @critical @p0
Feature: Authentication regression behaviors
  Validate role-aware login, negative login behavior, unauthorized route handling, and logout reliability.

  @tc-TC-TS-001-004-01 @ts-TS-001-004 @ac-AC-US-001-002-001 @authentication
  Scenario: Doctor can sign in and access dashboard
    Given the CareFlow application is available
    When I log in as "Doctor" using deterministic credentials
    Then I should land on the dashboard

  @tc-TC-TS-001-005-01 @ts-TS-001-005 @ac-AC-US-001-002-002 @negative @validation @authentication
  Scenario: Invalid login shows validation error
    Given I am on the login page
    When I attempt login as "Doctor" with invalid password
    Then I should see login validation error

  @tc-TC-TS-001-008-01 @ts-TS-001-008 @ac-AC-US-001-003-002 @role-based @authentication
  Scenario: Doctor cannot see administration navigation option
    Given I am logged in as "Doctor"
    Then navigation item "Administration" should be hidden

  @tc-TC-TS-001-007-01 @ts-TS-001-007 @ac-AC-US-001-003-001 @authentication
  Scenario: Logout returns user to login page
    Given I am logged in as "Doctor"
    When I log out from the sidebar
    Then I should be redirected to login page
