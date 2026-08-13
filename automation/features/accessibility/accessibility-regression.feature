@regression @accessibility @p1
Feature: Accessibility baseline regression
  Validate key accessibility-ready controls and labels in login and authenticated shell.

  @tc-TC-TS-001-003-01 @ts-TS-001-003 @ac-AC-US-001-001-003
  Scenario: Login form controls are discoverable by accessible labels
    Given I am on the login page
    Then login fields should be accessible by label

  @tc-TC-TS-002-003-01 @ts-TS-002-003 @ac-AC-US-002-001-003
  Scenario: Authenticated topbar exposes user context indicator
    Given I am logged in as "Doctor"
    Then topbar user indicator should be visible
