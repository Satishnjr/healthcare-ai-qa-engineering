@step9 @langgraph
Feature: Step 9 LangGraph orchestration foundation
  As a CareFlow QA engineer
  I want to inspect graph orchestration execution
  So that stateful agent flows are testable and auditable

  @tc-TC-STEP9-001 @ts-TS-STEP9-001
  Scenario: User can open Agent orchestration page
    Given I am logged in as "Doctor"
    When I open route "/agent"
    Then Step 9 element "agent-graph" should be visible

  @tc-TC-STEP9-002 @ts-TS-STEP9-002
  Scenario: User can submit an agent task
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I enter Step 9 task "Find the acceptance criteria for appointment cancellation."
    And I submit Step 9 task
    Then Step 9 element "agent-response" should be visible

  @tc-TC-STEP9-003 @ts-TS-STEP9-003
  Scenario: Graph run ID is displayed
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    Then Step 9 element "agent-graph-run-id" should be visible

  @tc-TC-STEP9-004 @ts-TS-STEP9-004
  Scenario: Task understanding node executes
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    Then Step 9 graph should include node "task_understanding"

  @tc-TC-STEP9-005 @ts-TS-STEP9-005
  Scenario: Planning node executes
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    Then Step 9 graph should include node "planning"

  @tc-TC-STEP9-006 @ts-TS-STEP9-006
  Scenario: MCP tool execution appears
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    Then Step 9 element "agent-graph-tool-call" should be visible

  @tc-TC-STEP9-007 @ts-TS-STEP9-007
  Scenario: Evidence is collected
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    Then Step 9 element "agent-graph-evidence" should be visible

  @tc-TC-STEP9-008 @ts-TS-STEP9-008
  Scenario: Evidence validation appears
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    Then Step 9 graph should include node "evidence_validation"

  @tc-TC-STEP9-009 @ts-TS-STEP9-009
  Scenario: Final response is displayed
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    Then Step 9 element "agent-graph-response" should be visible

  @tc-TC-STEP9-010 @ts-TS-STEP9-010
  Scenario: Confidence is displayed
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    Then Step 9 element "agent-graph-confidence" should be visible

  @tc-TC-STEP9-011 @ts-TS-STEP9-011
  Scenario: Graph execution history is visible
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    Then Step 9 element "agent-graph-transition" should be visible

  @tc-TC-STEP9-012 @ts-TS-STEP9-012
  Scenario: Graph checkpoint can be resumed
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    And I click Step 9 action "agent-graph-resume"
    Then Step 9 element "agent-graph-current-node" should be visible

  @tc-TC-STEP9-013 @ts-TS-STEP9-013
  Scenario: Approval-required workflow enters waiting state
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I enter Step 9 task "Create Jira issue for appointment cancellation defect."
    And I submit Step 9 task
    Then Step 9 element "agent-graph-approval" should be visible

  @tc-TC-STEP9-014 @ts-TS-STEP9-014
  Scenario: Approved workflow resumes
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    And I click Step 9 action "agent-graph-approve"
    Then Step 9 page text should contain "APPROVED"

  @tc-TC-STEP9-015 @ts-TS-STEP9-015
  Scenario: Rejected approval ends safely
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    And I click Step 9 action "agent-graph-reject"
    Then Step 9 page text should contain "REJECTED"

  @tc-TC-STEP9-016 @ts-TS-STEP9-016
  Scenario: Unauthorized role cannot execute privileged workflow
    Given I am logged in as "Patient"
    When I open route "/agent"
    Then Step 9 page should show unauthorized root

  @tc-TC-STEP9-017 @ts-TS-STEP9-017
  Scenario: Graph max-step protection works
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I submit Step 9 task
    Then Step 9 graph should include node "finalization"

  @tc-TC-STEP9-018 @ts-TS-STEP9-018
  Scenario: Tool failure is represented correctly
    Given I am logged in as "Doctor"
    When I open route "/agent"
    And I enter Step 9 task "Create Jira issue for appointment cancellation defect."
    And I submit Step 9 task
    Then Step 9 element "agent-graph-error" should be visible
