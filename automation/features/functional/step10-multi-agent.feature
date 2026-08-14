@step10 @multiagent
Feature: Step 10 Multi-Agent orchestration foundation
  As a CareFlow QA engineer
  I want to verify deterministic multi-agent orchestration behavior
  So that supervisor and specialist agent collaboration is testable and auditable

  @tc-TC-STEP10-001 @ts-TS-STEP10-001
  Scenario: User can open multi-agent UI
    Given I am logged in as "Doctor"
    When I open route "/agent"
    Then Step 10 element "multi-agent-page" should be visible

  @tc-TC-STEP10-002 @ts-TS-STEP10-002
  Scenario: User can submit a multi-agent request
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 10 task
    Then Step 10 element "multi-agent-final-response" should be visible

  @tc-TC-STEP10-003 @ts-TS-STEP10-003
  Scenario: Supervisor displays selected agents
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 10 task
    Then Step 10 element "multi-agent-selected-agent" should be visible

  @tc-TC-STEP10-004 @ts-TS-STEP10-004
  Scenario: QA Analyst executes
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 10 task
    Then Step 10 page text should contain "qa_analyst"

  @tc-TC-STEP10-005 @ts-TS-STEP10-005
  Scenario: RAG Knowledge Agent executes
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 10 task
    Then Step 10 page text should contain "rag_knowledge"

  @tc-TC-STEP10-006 @ts-TS-STEP10-006
  Scenario: Test Analyst executes
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 10 task
    Then Step 10 page text should contain "test_analyst"

  @tc-TC-STEP10-007 @ts-TS-STEP10-007
  Scenario: Review Agent validates
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 10 task
    Then Step 10 page text should contain "review_agent"

  @tc-TC-STEP10-008 @ts-TS-STEP10-008
  Scenario: Evidence is displayed
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 10 task
    Then Step 10 element "multi-agent-evidence" should be visible

  @tc-TC-STEP10-009 @ts-TS-STEP10-009
  Scenario: Confidence is displayed
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 10 task
    Then Step 10 element "multi-agent-final-confidence" should be visible

  @tc-TC-STEP10-010 @ts-TS-STEP10-010
  Scenario: Final response is displayed
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 10 task
    Then Step 10 element "multi-agent-final-response" should be visible

  @tc-TC-STEP10-011 @ts-TS-STEP10-011
  Scenario: Citation is displayed
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 10 task
    Then Step 10 element "multi-agent-citation" should be visible

  @tc-TC-STEP10-012 @ts-TS-STEP10-012
  Scenario: Unauthorized role is rejected
    Given I am logged in as "Patient"
    When I open route "/agent"
    Then Step 10 page should show unauthorized root

  @tc-TC-STEP10-013 @ts-TS-STEP10-013
  Scenario: Conflict is surfaced
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I enter Step 10 task "Show conflict analysis for appointment cancellation evidence."
    And I submit Step 10 task
    Then Step 10 page text should contain "Conflict"

  @tc-TC-STEP10-014 @ts-TS-STEP10-014
  Scenario: Approval workflow is displayed
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I enter Step 10 task "Create Jira issue for appointment cancellation defect."
    And I submit Step 10 task
    Then Step 10 page text should contain "REQUIRED"

