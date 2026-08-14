@step8 @agent
Feature: Step 8 AI agent runtime
  As a CareFlow QA user
  I want to use a grounded AI agent runtime
  So that QA answers are evidence-based and auditable

  @tc-TC-STEP8-001 @ts-TS-STEP8-001 @ac-AC-STEP8-001
  Scenario: User can open AI Agent page
    Given I am logged in as "Doctor"
    When I open route "/agent"
    Then Step 8 element "agent-page" should be visible

  @tc-TC-STEP8-002 @ts-TS-STEP8-002 @ac-AC-STEP8-002
  Scenario: User can submit a QA question
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I enter Step 8 task "Which test cases cover appointment cancellation?"
    And I submit Step 8 task
    Then Step 8 element "agent-response" should be visible

  @tc-TC-STEP8-003 @ts-TS-STEP8-003 @ac-AC-STEP8-003
  Scenario: Agent displays task classification
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 8 task
    Then Step 8 element "agent-task-type" should be visible
    And Step 8 element "agent-task-confidence" should be visible

  @tc-TC-STEP8-004 @ts-TS-STEP8-004 @ac-AC-STEP8-004
  Scenario: Agent displays selected MCP tool
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 8 task
    Then Step 8 element "agent-plan-tool" should be visible
    And Step 8 element "agent-tool-name" should be visible

  @tc-TC-STEP8-005 @ts-TS-STEP8-005 @ac-AC-STEP8-005
  Scenario: Agent displays evidence and confidence
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 8 task
    Then Step 8 element "agent-evidence" should be visible
    And Step 8 element "agent-confidence" should be visible

  @tc-TC-STEP8-006 @ts-TS-STEP8-006 @ac-AC-STEP8-006
  Scenario: Agent response includes citation and status
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 8 task
    Then Step 8 element "agent-citation" should be visible
    And Step 8 element "agent-status" should be visible

  @tc-TC-STEP8-007 @ts-TS-STEP8-007 @ac-AC-STEP8-007
  Scenario: Agent can show no-evidence style response
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I enter Step 8 task "Explain lunar surgery workflow controls for Mars colony hospitals."
    And I submit Step 8 task
    Then Step 8 page text should contain "No exact sample matched"

  @tc-TC-STEP8-008 @ts-TS-STEP8-008 @ac-AC-STEP8-008
  Scenario: Unauthorized role receives access denial
    Given I am logged in as "Patient"
    When I open route "/agent"
    Then Step 8 page should show unauthorized root
