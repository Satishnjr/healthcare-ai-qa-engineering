# STEP 4 — JIRA + CONFLUENCE ENTERPRISE QA KNOWLEDGE FOUNDATION

You are working on the existing HealthCare-AI-QA / CareFlow Health project.

IMPORTANT:
This is the NEXT MAJOR IMPLEMENTATION PHASE after the roadmap restructuring.

Do NOT create another 1.x step.

Use the new major-step numbering established in:
    docs/IMPLEMENTATION_INDEX.md

The implementation must be recorded as:

    STEP 4 — Jira + Confluence Enterprise QA Knowledge Foundation

If the roadmap restructure assigned a slightly different major-step number for Jira/Confluence, follow the IMPLEMENTATION_INDEX.md as the single source of truth and preserve that numbering.

============================================================
1. PRIMARY OBJECTIVE
============================================================

Build the Jira + Confluence enterprise QA knowledge foundation for CareFlow Health.

The goal is to create a realistic enterprise-style integration architecture that connects:

    Requirements
        ↓
    Jira
        ↓
    Test Management
        ↓
    Automation
        ↓
    Execution Results
        ↓
    Defects
        ↓
    Confluence
        ↓
    QA Knowledge Base
        ↓
    Future RAG
        ↓
    Future MCP
        ↓
    Future AI Agents

IMPORTANT:

We are NOT implementing RAG runtime in this step.

We are NOT implementing MCP runtime in this step.

We are NOT implementing AI agents in this step.

We are NOT implementing LangGraph in this step.

Instead, we are creating the enterprise data contracts, adapters, schemas, synchronization boundaries, mock/local implementations, and documentation required so those capabilities can be implemented cleanly in later phases.

============================================================
2. IMPORTANT PROJECT PRINCIPLE
============================================================

Jira and Confluence must no longer be treated only as conceptual documentation.

They must become first-class architectural components of the project.

However:

DO NOT fabricate a real Jira or Confluence connection.

Before implementation:

1. Inspect the repository.
2. Inspect existing Jira and Confluence strategy documents.
3. Inspect available environment variables.
4. Determine whether real Jira/Confluence credentials or connectivity exist.
5. If real connectivity is unavailable, implement a realistic local/mock adapter architecture.

Clearly classify:

    IMPLEMENTED
    FOUNDATION
    MOCK
    PLANNED
    BLOCKED

Never claim a real external integration unless it was actually executed and verified.

============================================================
3. FIRST INSPECT THE EXISTING PROJECT
============================================================

Before changing anything, inspect:

    docs/IMPLEMENTATION_INDEX.md
    README.md
    CHANGELOG.md
    docs/INTERVIEW_GUIDE.md
    knowledge/requirements-traceability.md

Also inspect:

    docs/qa/JIRA_TEST_MANAGEMENT_STRATEGY.md
    docs/qa/CONFLUENCE_KNOWLEDGE_STRATEGY.md
    docs/qa/TEST_MANAGEMENT_STRATEGY.md

Inspect existing:

    knowledge/
    docs/
    frontend/
    automation/
    rag/
    mcp/
    agent/

Inspect all previous implementation artifacts.

DO NOT delete previous implementation work.

DO NOT unnecessarily modify frontend or automation.

============================================================
4. EXISTING CAREFLOW DOMAIN
============================================================

Use the existing CareFlow Health domain.

Do NOT invent a completely different healthcare application.

Reuse existing:

- user stories
- acceptance criteria
- test scenarios
- test cases
- test data
- UI modules
- roles
- automation metadata
- traceability IDs

Existing traceability chain:

    BRD
      ↓
    PRD
      ↓
    Epic
      ↓
    User Story
      ↓
    Acceptance Criteria
      ↓
    Test Scenario
      ↓
    Test Case
      ↓
    Test Data
      ↓
    BDD Scenario
      ↓
    Step Definition
      ↓
    Page Object
      ↓
    Execution Result
      ↓
    Failure Artifact

Extend it with:

    Jira Issue
      ↓
    Confluence Knowledge Artifact
      ↓
    Future RAG Document
      ↓
    Future MCP Resource/Tool
      ↓
    Future Agent Decision

============================================================
5. JIRA ARCHITECTURE
============================================================

Create an enterprise-style Jira adapter architecture.

The recommended project key is:

    CFH

Define/support the following Jira entities:

- Epic
- Story
- Task
- Sub-task
- Acceptance Criteria
- Bug
- Test Case
- Test Execution
- Test Data reference
- Release
- Sprint

Where Jira does not natively support a specific entity, define an appropriate representation using issue types, custom fields, links, or metadata.

Do not claim actual Jira configuration unless verified.

============================================================
6. JIRA ISSUE MODEL
============================================================

Create a canonical Jira domain model.

Example conceptual fields:

    issueId
    issueKey
    issueType
    summary
    description
    status
    priority
    labels
    components
    sprint
    release
    assignee
    reporter
    parentIssue
    linkedIssues
    acceptanceCriteria
    traceabilityIds
    testCaseIds
    testScenarioIds
    defectSeverity
    automationStatus
    aiClassification
    aiConfidence
    evidenceReferences
    createdAt
    updatedAt

Use strong typing.

Do not use arbitrary unstructured objects where a typed model is appropriate.

============================================================
7. JIRA WORKFLOW
============================================================

Define a realistic QA lifecycle.

For requirements:

    Draft
      ↓
    Refinement
      ↓
    Ready
      ↓
    In Progress
      ↓
    QA Ready
      ↓
    QA Testing
      ↓
    Passed / Failed
      ↓
    Done

For defects:

    Open
      ↓
    Triaged
      ↓
    Assigned
      ↓
    In Progress
      ↓
    Fixed
      ↓
    QA Retest
      ↓
    Verified
      ↓
    Closed

Include Reopened where appropriate.

Do not implement business rules that are not supported by the existing project requirements.

============================================================
8. JIRA TRACEABILITY
============================================================

Create a canonical mapping model.

Example:

    CFH-EPIC-001
        ↓
    CFH-US-001
        ↓
    AC-001
        ↓
    CFH-TS-001
        ↓
    CFH-TC-001
        ↓
    TD-001
        ↓
    BDD Scenario
        ↓
    Automation
        ↓
    Execution
        ↓
    Defect

The mapping must support reverse lookup.

Examples:

Given a Jira story:
    Find related test cases.

Given a failed test:
    Find related Jira story.

Given a defect:
    Find affected acceptance criteria.

Given a test case:
    Find required test data.

Given a requirement:
    Find impacted automation.

This will become critical for future AI agents.

============================================================
9. JIRA ADAPTER
============================================================

Create a clean adapter abstraction.

Example conceptual architecture:

    JiraClient
       |
       +-- JiraMockAdapter
       |
       +-- JiraRestAdapter (future/optional)
       |
       +-- JiraRepository

Do not tightly couple business logic to a specific HTTP implementation.

The adapter should support operations such as:

    getIssue()
    searchIssues()
    createIssue()
    updateIssue()
    linkIssues()
    getComments()
    addComment()
    getProject()
    getSprint()
    getRelease()

Only implement operations appropriate to the current step.

If external Jira credentials are unavailable:

- implement the interface
- implement deterministic mock/local behavior
- provide realistic sample Jira data
- make the boundary ready for a real connector later

============================================================
10. CONFLUENCE ARCHITECTURE
============================================================

Create an enterprise-style Confluence knowledge architecture.

Define logical spaces/pages for:

    Product
    Requirements
    Architecture
    QA
    Test Scenarios
    Test Cases
    Test Data
    Automation
    AI
    RAG
    MCP
    Agents
    Evaluation
    Observability
    Releases
    Defects
    Interview Knowledge

Use existing CareFlow documentation rather than inventing unrelated content.

============================================================
11. CONFLUENCE DOCUMENT MODEL
============================================================

Create a canonical Confluence document model.

Example fields:

    documentId
    spaceKey
    title
    parentPageId
    version
    content
    labels
    traceabilityIds
    sourceType
    sourceSystem
    status
    createdAt
    updatedAt
    author
    lastModifiedBy

Support document metadata required for future RAG ingestion.

============================================================
12. CONFLUENCE ADAPTER
============================================================

Create an adapter architecture such as:

    ConfluenceClient
       |
       +-- ConfluenceMockAdapter
       |
       +-- ConfluenceRestAdapter (future)
       |
       +-- ConfluenceRepository

Potential operations:

    getPage()
    searchPages()
    createPage()
    updatePage()
    getPageChildren()
    getPageVersion()
    searchByLabel()

Do not fabricate external API execution.

If no credentials/connectivity:

    mock/local implementation = IMPLEMENTED
    real external integration = PLANNED/BLOCKED

============================================================
13. JIRA -> CONFLUENCE KNOWLEDGE FLOW
============================================================

Define and implement a deterministic local/mock synchronization flow where practical.

Conceptually:

    Jira Story
       ↓
    Requirement Metadata
       ↓
    QA Knowledge Document
       ↓
    Confluence Page
       ↓
    Metadata + Traceability
       ↓
    Future RAG ingestion

Example:

Jira:

    CFH-123
    "Search patient by medical record number"

Confluence:

    Page:
    "Patient Search - Medical Record Number"

Metadata:

    jiraKey = CFH-123
    userStoryId = CFH-US-005
    acceptanceCriteria = [...]
    testScenarioIds = [...]
    testCaseIds = [...]
    source = jira
    knowledgeType = requirement

The implementation should preserve these relationships.

============================================================
14. CONFLUENCE -> RAG PREPARATION
============================================================

Prepare Confluence artifacts for future RAG.

Do NOT implement RAG yet.

Create metadata required for future ingestion:

    documentId
    sourceSystem
    sourceId
    title
    content
    contentType
    labels
    traceabilityIds
    version
    timestamp
    accessScope
    sensitivity
    checksum

The future RAG system must be able to answer:

    "Which Confluence document contains this requirement?"

    "Which Jira story is the source?"

    "Which test cases validate it?"

    "Which acceptance criteria are covered?"

============================================================
15. RAG PREPARATION
============================================================

Create a clean boundary:

    Jira
       ↓
    Confluence
       ↓
    Knowledge Export
       ↓
    Future RAG ingestion

Create an exportable canonical knowledge format.

JSON or Markdown may be used where appropriate.

The format must be deterministic.

Example:

    {
      "documentId": "...",
      "sourceSystem": "confluence",
      "sourceId": "...",
      "jiraKeys": ["CFH-123"],
      "traceabilityIds": [...],
      "title": "...",
      "content": "...",
      "labels": [...],
      "version": 1
    }

Do not create an LLM here.

Do not create embeddings here.

Do not create vector DB here.

============================================================
16. MCP PREPARATION
============================================================

Do NOT implement MCP runtime yet.

But design the future MCP boundary.

Future tools should eventually include:

    search_jira
    get_jira_issue
    search_confluence
    get_confluence_page
    search_test_cases
    get_test_case
    search_test_data
    get_traceability
    get_execution_result
    search_defects

Document:

- tool name
- purpose
- inputs
- outputs
- authorization
- validation
- audit requirements
- error handling

This prepares Step 7 MCP implementation.

============================================================
17. AGENT PREPARATION
============================================================

Do NOT implement the AI agent yet.

Define how a future agent will use Jira and Confluence.

Example:

User:
    "What tests are impacted by CFH-123?"

Future agent:

    1. Call Jira tool
    2. Retrieve CFH-123
    3. Retrieve acceptance criteria
    4. Search traceability
    5. Retrieve test scenarios
    6. Retrieve test cases
    7. Retrieve automation mappings
    8. Return evidence-backed answer

Another future workflow:

    Failed automation
        ↓
    Failure Analysis Agent
        ↓
    Jira issue lookup
        ↓
    Confluence requirement lookup
        ↓
    Evidence analysis
        ↓
    Defect proposal
        ↓
    Human approval
        ↓
    Jira defect creation

Document this, but do not implement the agent.

============================================================
18. AI INDUSTRY CONCEPTS
============================================================

This project MUST continue documenting relevant AI industry concepts.

For Step 4 explicitly cover:

1. RAG
2. RAGAS
3. Retrieval evaluation
4. Groundedness
5. Faithfulness
6. Context precision
7. Context recall
8. Answer relevance
9. AI observability
10. MCP
11. MCP tools
12. Tool calling
13. Agentic AI
14. Multi-agent systems
15. LangGraph
16. Human-in-the-loop
17. Guardrails
18. Prompt injection protection
19. AI security
20. LLMOps
21. AI quality gates
22. Evaluation datasets
23. Evaluation runs
24. Model versioning
25. Prompt versioning
26. Experiment tracking
27. AI failure analysis
28. AI defect management
29. AI-assisted test generation
30. AI-assisted test prioritization
31. AI-assisted regression selection
32. AI-assisted failure triage
33. AI-assisted defect clustering
34. AI-assisted test-data generation
35. AI governance
36. Auditability
37. Explainability
38. Evidence-based AI decisions
39. Confidence scoring
40. No-fabrication policies

For each concept explain:

- relevance to Step 4
- implemented / foundation / planned
- future step where runtime implementation occurs
- interview explanation

Do not claim these concepts are runtime implemented unless they actually are.

============================================================
19. SECURITY
============================================================

Healthcare project security is mandatory.

Use synthetic data only.

DO NOT introduce:

- real PHI
- real patient information
- real credentials
- API tokens
- passwords
- secrets

Define security boundaries for:

- Jira
- Confluence
- future MCP tools
- future agents
- future RAG
- access-controlled knowledge
- audit logs

Include:

- least privilege
- credential isolation
- secret management
- access scope
- auditability
- sensitive-content classification
- prompt injection considerations
- tool authorization

============================================================
20. HUMAN-IN-THE-LOOP
============================================================

Define explicit approval gates.

Future agent MUST NOT autonomously perform sensitive actions such as:

- creating high-impact defects
- modifying production requirements
- deleting knowledge
- changing authorization
- changing test strategy
- changing release status

without appropriate approval.

Document approval flow:

    AI recommendation
        ↓
    Evidence
        ↓
    Confidence
        ↓
    Human review
        ↓
    Approved action
        ↓
    Audit record

============================================================
21. TESTING
============================================================

Create tests for the new Jira/Confluence foundation.

At minimum test:

### Jira

- create mock issue
- retrieve issue
- search issue
- update issue
- link issue
- traceability lookup
- invalid issue handling

### Confluence

- create mock page
- retrieve page
- search page
- update page
- metadata validation
- traceability lookup
- invalid page handling

### Integration

- Jira story -> Confluence knowledge
- Jira story -> test case mapping
- test case -> Jira story
- Confluence document -> traceability
- export -> RAG-ready knowledge format

Use deterministic synthetic data.

Do not require real external Jira/Confluence credentials.

============================================================
22. AUTOMATION POLICY
============================================================

Do NOT run the complete 96-test regression suite.

Do NOT expand deterministic automation unnecessarily.

Only add tests required to validate Step 4 functionality.

Existing Playwright/Cucumber automation must remain intact.

Do not modify frontend behavior.

============================================================
23. OBSERVABILITY FOUNDATION
============================================================

Prepare machine-readable metadata for future AI observability.

For Jira/Confluence operations capture where appropriate:

    operation
    sourceSystem
    sourceId
    timestamp
    duration
    status
    error
    correlationId
    traceabilityIds

This is foundation only.

Do not build a full observability platform yet.

============================================================
24. RAGAS / EVALUATION FOUNDATION
============================================================

Do not run RAGAS yet because runtime RAG is not implemented.

However, define future evaluation metadata:

    datasetId
    queryId
    sourceDocuments
    expectedAnswer
    retrievedContext
    generatedAnswer
    faithfulness
    answerRelevance
    contextPrecision
    contextRecall
    groundedness

Clearly mark:

    RAGAS runtime = PLANNED

============================================================
25. DOCUMENTATION
============================================================

Create a complete Step 4 documentation package.

At minimum:

    docs/implementations/4-jira-confluence/README.md
    docs/implementations/4-jira-confluence/prompt.md
    docs/implementations/4-jira-confluence/implementation-report.pdf
    docs/implementations/4-jira-confluence/interview-notes.md
    docs/implementations/4-jira-confluence/response.md

Also create appropriate architecture documents, for example:

    docs/architecture/JIRA_ARCHITECTURE.md
    docs/architecture/CONFLUENCE_ARCHITECTURE.md
    docs/architecture/JIRA_CONFLUENCE_INTEGRATION.md
    docs/architecture/KNOWLEDGE_EXPORT_CONTRACT.md
    docs/architecture/FUTURE_MCP_JIRA_CONFLUENCE_TOOLS.md

Avoid duplicate documents if equivalent documents already exist.
Update existing documents instead.

============================================================
26. TRACEABILITY
============================================================

Update:

    knowledge/requirements-traceability.md

Extend:

    Requirement
       ↓
    Jira
       ↓
    Confluence
       ↓
    Test Scenario
       ↓
    Test Case
       ↓
    Test Data
       ↓
    Automation
       ↓
    Execution
       ↓
    Defect

Also prepare:

    Jira
       ↓
    Confluence
       ↓
    Future RAG
       ↓
    Future MCP
       ↓
    Future Agent

============================================================
27. IMPLEMENTATION INDEX
============================================================

MANDATORY:

Update:

    docs/IMPLEMENTATION_INDEX.md

This file MUST remain the SINGLE SOURCE OF TRUTH.

Update:

- Step 4 status
- completed substeps
- Jira status
- Confluence status
- RAG preparation status
- MCP preparation status
- Agent preparation status
- AI concepts
- security
- evaluation
- observability
- next major step

Do not create another arbitrary 1.x step.

============================================================
28. README / CHANGELOG / INTERVIEW GUIDE
============================================================

Update:

    README.md
    CHANGELOG.md
    docs/INTERVIEW_GUIDE.md

Interview guide must include:

### How to explain Jira

"I used Jira as the system of record for requirements, stories, acceptance criteria, defects and QA traceability. I created an adapter boundary so the QA platform is not tightly coupled to Jira's implementation."

### How to explain Confluence

"I used Confluence as the knowledge management layer for product and QA information. The content is structured with metadata and traceability so it can later become a governed RAG knowledge source."

### How to explain future AI architecture

"Jira and Confluence provide the enterprise knowledge and workflow layer. RAG provides grounded retrieval, MCP exposes controlled tools, and agents orchestrate QA actions with human approval and auditability."

Adapt the wording to actual implementation results.

============================================================
29. GIT
============================================================

Follow repository conventions.

Before committing:

    git status

Review changes.

Create a meaningful commit such as:

    feat(step-4): establish jira confluence qa knowledge foundation

Do NOT fabricate commit SHA.

Do NOT claim push success unless actually verified.

If push requires approval or network access:

- clearly report it
- do not fabricate success

============================================================
30. FINAL VALIDATION
============================================================

Validate:

1. Existing frontend remains intact.
2. Existing automation remains intact.
3. Existing test cases remain intact.
4. Existing test data remains intact.
5. Jira architecture exists.
6. Confluence architecture exists.
7. Jira adapter exists.
8. Confluence adapter exists.
9. Mock/local implementations work.
10. Traceability works.
11. Jira -> Confluence mapping works.
12. Knowledge export works.
13. RAG-ready metadata exists.
14. MCP boundary is documented.
15. Agent boundary is documented.
16. Security rules exist.
17. HITL rules exist.
18. AI observability metadata exists.
19. RAGAS evaluation metadata exists.
20. No real PHI exists.
21. No secrets exist.
22. No fabricated external integration exists.
23. Full regression was NOT executed.
24. IMPLEMENTATION_INDEX.md is updated.
25. README is updated.
26. CHANGELOG is updated.
27. INTERVIEW_GUIDE is updated.
28. Step 4 documentation is complete.

============================================================
31. FINAL RESPONSE FORMAT
============================================================

Return:

# Step 4 Response

## Status

Implementation Status: PASS / PARTIAL / BLOCKED

## Objective

Explain what was implemented.

## Architecture

Explain:

    Jira
      ↓
    Confluence
      ↓
    Knowledge Export
      ↓
    Future RAG
      ↓
    Future MCP
      ↓
    Future Agents

## Jira Implementation

Clearly distinguish:

- implemented
- mock
- foundation
- planned
- blocked

## Confluence Implementation

Clearly distinguish:

- implemented
- mock
- foundation
- planned
- blocked

## Integration

Explain Jira <-> Confluence relationship.

## RAG Preparation

Explain what was prepared and what was NOT implemented.

## MCP Preparation

Explain what was prepared and what was NOT implemented.

## Agent Preparation

Explain what was prepared and what was NOT implemented.

## AI Industry Concepts

List:

Concept | Status | Future Step

Include all relevant concepts.

## Security

Explain healthcare/synthetic-data/security controls.

## Human-in-the-Loop

Explain approval gates.

## Testing

Show exact tests executed and results.

Do NOT fabricate results.

## Files Created

List all files.

## Files Modified

List all files.

## Traceability

Show:

BRD
 -> PRD
 -> Epic
 -> User Story
 -> AC
 -> Jira
 -> Confluence
 -> Test Scenario
 -> Test Case
 -> Test Data
 -> Automation
 -> Execution
 -> Defect
 -> Future RAG
 -> Future MCP
 -> Future Agent

## Documentation

List Step 4 documentation.

## IMPLEMENTATION_INDEX

Confirm it was updated.

## Git

Provide only verified information.

## Known Issues

List real limitations.

## Next Major Step

Identify the next major step according to:

    docs/IMPLEMENTATION_INDEX.md

DO NOT automatically implement the next step.

STOP.
