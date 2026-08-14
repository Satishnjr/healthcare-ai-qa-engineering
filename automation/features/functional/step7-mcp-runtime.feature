@step7 @mcp
Feature: Step 7 MCP runtime and tool calling
  As a CareFlow QA user
  I want to inspect and invoke MCP tools
  So that tool discovery and structured responses are validated

  @tc-TC-STEP7-001 @ts-TS-STEP7-001 @ac-AC-STEP7-001
  Scenario: User can open MCP tools page
    Given I am logged in as "Doctor"
    When I open route "/mcp"
    Then Step 7 element "mcp-page" should be visible
    And Step 7 element "mcp-runtime-status" should be visible

  @tc-TC-STEP7-002 @ts-TS-STEP7-002 @ac-AC-STEP7-002
  Scenario: MCP tool list is visible
    Given I am logged in as "Doctor"
    When I open route "/mcp"
    Then Step 7 element "mcp-tool-list" should be visible
    And Step 7 tool list should include "search_jira"

  @tc-TC-STEP7-003 @ts-TS-STEP7-003 @ac-AC-STEP7-003
  Scenario: User can inspect search_jira schema
    Given I am logged in as "Doctor"
    When I open route "/mcp"
    Then Step 7 tool list should include "search_jira"
    And Step 7 element "mcp-tool-input" should be visible

  @tc-TC-STEP7-004 @ts-TS-STEP7-004 @ac-AC-STEP7-004
  Scenario: User can execute search_jira and view structured result
    Given I am logged in as "Doctor"
    When I open route "/mcp"
    And I select Step 7 MCP tool "search_jira"
    And I execute the selected Step 7 MCP tool
    Then Step 7 element "mcp-tool-result" should be visible
    And Step 7 element "mcp-request-id" should be visible
    And Step 7 element "mcp-source" should be visible

  @tc-TC-STEP7-005 @ts-TS-STEP7-005 @ac-AC-STEP7-005
  Scenario: User can execute get_traceability
    Given I am logged in as "Doctor"
    When I open route "/mcp"
    And I select Step 7 MCP tool "get_traceability"
    And I execute the selected Step 7 MCP tool
    Then Step 7 tool result should contain "traceability"

  @tc-TC-STEP7-006 @ts-TS-STEP7-006 @ac-AC-STEP7-006
  Scenario: User can execute query_rag
    Given I am logged in as "Doctor"
    When I open route "/mcp"
    And I select Step 7 MCP tool "query_rag"
    And I execute the selected Step 7 MCP tool
    Then Step 7 tool result should contain "answer"

  @tc-TC-STEP7-007 @ts-TS-STEP7-007 @ac-AC-STEP7-007
  Scenario: Unauthorized user is denied protected MCP access
    Given I am logged in as "Doctor"
    When I open route "/mcp"
    And I switch Step 7 role to "Patient"
    And I select Step 7 MCP tool "search_jira"
    And I execute the selected Step 7 MCP tool
    Then Step 7 tool result should contain "ACCESS_DENIED"
