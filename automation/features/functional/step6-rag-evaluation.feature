@step6 @rag-evaluation
Feature: Step 6 RAG evaluation runtime
  As a CareFlow user
  I want to view deterministic RAG evaluation outcomes
  So that I can inspect quality gate and failure analysis evidence

  @tc-TC-STEP6-001 @ts-TS-STEP6-001 @ac-AC-STEP6-001
  Scenario: User can open RAG evaluation dashboard
    Given I am logged in as "Doctor"
    When I open route "/knowledge/evaluation"
    Then Step 6 element "rag-evaluation-page" should be visible

  @tc-TC-STEP6-002 @ts-TS-STEP6-002 @ac-AC-STEP6-002
  Scenario: Latest evaluation run shows metric summary
    Given I am logged in as "Doctor"
    When I open route "/knowledge/evaluation"
    Then Step 6 element "rag-evaluation-run" should be visible
    And Step 6 element "rag-evaluation-overall-score" should be visible
    And Step 6 element "rag-evaluation-context-precision" should be visible

  @tc-TC-STEP6-003 @ts-TS-STEP6-003 @ac-AC-STEP6-003
  Scenario: Quality gate status is visible
    Given I am logged in as "Doctor"
    When I open route "/knowledge/evaluation"
    Then Step 6 element "rag-evaluation-quality-gate" should be visible

  @tc-TC-STEP6-004 @ts-TS-STEP6-004 @ac-AC-STEP6-004
  Scenario: User can inspect a failed evaluation case
    Given I am logged in as "Doctor"
    When I open route "/knowledge/evaluation"
    And I open first failed Step 6 case if available
    Then Step 6 element "rag-evaluation-case-detail" should be visible

  @tc-TC-STEP6-005 @ts-TS-STEP6-005 @ac-AC-STEP6-005
  Scenario: User can inspect evaluation evidence
    Given I am logged in as "Doctor"
    When I open route "/knowledge/evaluation"
    Then Step 6 case detail should include expected and retrieved sources
