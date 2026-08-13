@regression @functional @validation @p1
Feature: Patient search regression
  Validate positive and empty-state behavior for patient search interactions.

  @tc-TC-TS-003-007-01 @ts-TS-003-007 @ac-AC-US-003-003-001
  Scenario: Search returns expected patient row
    Given I am logged in as "Doctor"
    When I open navigation item "Patient Management"
    And I search patients with value "PAT-001"
    Then I should see patient table row "PAT-001"

  @tc-TC-TS-003-008-01 @ts-TS-003-008 @ac-AC-US-003-003-002
  Scenario: Search with non-existent key shows empty state
    Given I am logged in as "Doctor"
    When I open navigation item "Patient Management"
    And I search patients with value "PAT-999-NOT-FOUND"
    Then I should see empty patient state
