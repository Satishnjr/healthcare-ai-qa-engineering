@regression @responsive @p2
Feature: Responsive behavior regression
  Validate practical viewport behavior for login and authenticated layouts.

  @tc-TC-TS-001-003-01 @ts-TS-001-003 @ac-AC-US-001-001-003
  Scenario: Login page remains usable in mobile viewport
    Given I am on the login page
    When I switch viewport to 390 by 844
    Then login fields should be accessible by label

  @tc-TC-TS-003-021-01 @ts-TS-003-021 @ac-AC-US-003-007-003
  Scenario: Patient management remains reachable in tablet viewport
    Given I am logged in as "Doctor"
    When I switch viewport to 768 by 1024
    And I open navigation item "Patient Management"
    Then I should see module root "page-patients-root"
