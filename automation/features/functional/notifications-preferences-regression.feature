@regression @functional @p1
Feature: Notifications and preferences regression
  Validate notification lifecycle and preference persistence behaviors in frontend simulation.

  @tc-TC-TS-009-004-01 @ts-TS-009-004 @ac-AC-US-009-002-001
  Scenario: Receptionist can mark role notification as read
    Given I am logged in as "Receptionist"
    When I open navigation item "Notifications"
    And I mark notification "NTF-002" as read
    Then unread counter should show "1"

  @tc-TC-TS-011-004-01 @ts-TS-011-004 @ac-AC-US-011-002-001
  Scenario: Doctor can save settings in UI simulation
    Given I am logged in as "Doctor"
    When I open navigation item "Settings"
    And I save settings
    Then I should see hint text "Settings saved in this frontend simulation."

  @tc-TC-TS-010-001-01 @ts-TS-010-001 @ac-AC-US-010-001-001
  Scenario: Doctor can open reports module
    Given I am logged in as "Doctor"
    When I open navigation item "Reports"
    Then I should see module root "page-reports-root"
