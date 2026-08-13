@step5 @rag-runtime
Feature: Step 5 RAG knowledge runtime
  As a CareFlow user
  I want to query project knowledge with grounded evidence
  So that I can get traceable answers from indexed sources

  @tc-TC-STEP5-001 @ts-TS-STEP5-001 @ac-AC-STEP5-001
  Scenario: User can open RAG knowledge page
    Given I am logged in as "Doctor"
    When I open route "/knowledge"
    Then Step 5 element "rag-query-input" should be visible

  @tc-TC-STEP5-002 @ts-TS-STEP5-002 @ac-AC-STEP5-002
  Scenario: User can submit a knowledge query
    Given I am logged in as "Doctor"
    When I open route "/knowledge"
    And I ask knowledge query "What is the acceptance criterion for patient search by medical record number?"
    Then Step 5 element "rag-answer" should be visible

  @tc-TC-STEP5-003 @ts-TS-STEP5-003 @ac-AC-STEP5-003
  Scenario: RAG answer displays grounded sources
    Given I am logged in as "Doctor"
    When I open route "/knowledge"
    And I ask knowledge query "What are patient search test cases?"
    Then Step 5 source list should be visible

  @tc-TC-STEP5-004 @ts-TS-STEP5-004 @ac-AC-STEP5-004
  Scenario: User can view citation metadata
    Given I am logged in as "Doctor"
    When I open route "/knowledge"
    And I ask knowledge query "Which document explains automation governance?"
    Then Step 5 response should include citation metadata

  @tc-TC-STEP5-005 @ts-TS-STEP5-005 @ac-AC-STEP5-005
  Scenario: User sees no evidence for unsupported query
    Given I am logged in as "Doctor"
    When I open route "/knowledge"
    And I ask knowledge query "What is the moon mission launch window for next decade?"
    Then Step 5 element "rag-no-evidence" should be visible

  @tc-TC-STEP5-006 @ts-TS-STEP5-006 @ac-AC-STEP5-006
  Scenario: Patient access filtering limits retrieval
    Given I am logged in as "Patient"
    When I open route "/knowledge"
    And I ask knowledge query "What are acceptance criteria for patient search?"
    Then Step 5 element "rag-no-evidence" should be visible

  @tc-TC-STEP5-007 @ts-TS-STEP5-007 @ac-AC-STEP5-007
  Scenario: User can navigate from citation to source
    Given I am logged in as "Doctor"
    When I open route "/knowledge"
    And I ask knowledge query "Show me patient search requirement evidence"
    And I open first Step 5 citation source
    Then Step 5 source route should be visible
