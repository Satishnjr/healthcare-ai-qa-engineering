@step41 @jira-confluence-ui
Feature: Step 4.1 Jira and Confluence UI simulation
  As a QA engineering team
  I want Jira and Confluence simulation pages in CareFlow
  So that we can validate traceability and role access without live Atlassian connectivity

  @tc-TC-STEP41-001 @ts-TS-STEP41-001 @ac-AC-STEP41-001
  Scenario: QA manager role can access Jira dashboard
    Given I am logged in as "Healthcare Administrator"
    When I open navigation item "Jira QA"
    Then Step 4.1 page root "page-jira-dashboard-root" should be visible

  @tc-TC-STEP41-002 @ts-TS-STEP41-002 @ac-AC-STEP41-002
  Scenario: QA engineer role can search Jira issues
    Given I am logged in as "Doctor"
    When I open route "/jira/issues"
    And I search Jira issues with "CFH-101"
    Then Jira issue row "CFH-101" should be visible

  @tc-TC-STEP41-003 @ts-TS-STEP41-003 @ac-AC-STEP41-003
  Scenario: User can open Jira issue and view traceability
    Given I am logged in as "Doctor"
    When I open route "/jira/issues"
    And I search Jira issues with "CFH-101"
    And I open Jira issue "CFH-101"
    Then Step 4.1 page root "jira-issue-detail" should be visible
    And Step 4.1 page root "jira-issue-traceability" should be visible

  @tc-TC-STEP41-004 @ts-TS-STEP41-004 @ac-AC-STEP41-004
  Scenario: User can navigate from Jira issue to Confluence page
    Given I am logged in as "Doctor"
    When I open route "/jira/issues/CFH-101"
    And I open linked Confluence page from Jira issue
    Then Step 4.1 page root "confluence-page" should be visible

  @tc-TC-STEP41-005 @ts-TS-STEP41-005 @ac-AC-STEP41-005
  Scenario: User can search Confluence knowledge
    Given I am logged in as "Doctor"
    When I open route "/confluence/search"
    And I search Confluence knowledge with "Patient Search"
    Then Step 4.1 page root "page-confluence-search-root" should be visible

  @tc-TC-STEP41-006 @ts-TS-STEP41-006 @ac-AC-STEP41-006
  Scenario: User can open Confluence page and view metadata
    Given I am logged in as "Doctor"
    When I open route "/confluence/pages/CFH-PAGE-001"
    Then Step 4.1 page root "confluence-page-metadata" should be visible

  @tc-TC-STEP41-007 @ts-TS-STEP41-007 @ac-AC-STEP41-007
  Scenario: User can open traceability chain
    Given I am logged in as "Doctor"
    When I open route "/traceability"
    Then Step 4.1 page root "traceability-view" should be visible

  @tc-TC-STEP41-008 @ts-TS-STEP41-008 @ac-AC-STEP41-008
  Scenario: Patient cannot access Jira route
    Given I am logged in as "Patient"
    When I open route "/jira/dashboard"
    Then I should see unauthorized page
