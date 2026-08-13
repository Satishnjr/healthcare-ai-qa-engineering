# STEP 5 — RAG KNOWLEDGE SYSTEM RUNTIME
# HealthCare-AI-QA / CareFlow Health

You are working inside the existing repository:

HealthCare-AI-QA

Repository root:
D:/SathishKumarN/Personal/Trainings/Canada Preparation/AI/Projects/HealthCare-AI-QA

IMPORTANT:
This is a continuation of the existing project. DO NOT recreate, redesign, or replace existing architecture unless required.

============================================================
1. PRIMARY OBJECTIVE
============================================================

Implement STEP 5: RAG Knowledge System Runtime for the CareFlow Health QA platform.

The project already contains:

- CareFlow Health frontend
- React + TypeScript + Vite
- Playwright + Cucumber BDD automation
- deterministic mock healthcare data
- Jira + Confluence foundation
- Jira + Confluence UI simulation
- traceability UI
- knowledge UI
- automation governance
- AI agent handoff contracts
- AI observability contracts
- RAGAS evaluation strategy foundation
- MCP preparation
- agent preparation

Step 4 established the Jira + Confluence knowledge foundation.

Step 4.1 established the Jira + Confluence UI simulation.

NOW implement the actual RAG runtime.

Architecture direction:

CareFlow UI
    |
Jira / Confluence / QA Artifacts
    |
Knowledge ingestion
    |
Document normalization
    |
Chunking
    |
Embeddings
    |
Vector store
    |
Retriever
    |
Context assembly
    |
RAG query service
    |
Grounded response
    |
Evidence / citations / metadata
    |
Future MCP
    |
Future AI Agents

============================================================
2. VERY IMPORTANT PROJECT GOVERNANCE
============================================================

Do NOT attempt to implement everything in this step.

Do NOT implement:

- MCP runtime
- LangGraph runtime
- Agent runtime
- Multi-agent runtime
- AI autonomous test generation
- AI autonomous defect creation
- full 96-test-case automation
- full regression execution
- production Jira integration
- production Confluence integration
- real healthcare backend
- real PHI
- real patient data
- autonomous destructive actions

Those belong to later steps.

This step is ONLY the RAG runtime foundation and working RAG flow.

============================================================
3. STEP NUMBERING GOVERNANCE
============================================================

We are intentionally using:

STEP 1.x = frontend/UI/automation phase
STEP 4 = Jira + Confluence foundation
STEP 4.1 = Jira + Confluence UI
STEP 5 = RAG runtime

Do NOT create unnecessary 4.2, 4.3, 4.4 steps unless absolutely required.

Use a new major step when the topic changes substantially.

Related subtopics may use decimal numbering.

Therefore:

Current major phase:
STEP 5 — RAG Knowledge System Runtime

Future examples:

STEP 6 — RAGAS / RAG Evaluation
STEP 7 — MCP Runtime
STEP 8 — AI Agent Runtime
STEP 9 — LangGraph Orchestration
STEP 10 — Multi-Agent System
STEP 11 — AI Security / Observability / LLMOps / Governance

Do NOT change this numbering without a strong architectural reason.

============================================================
4. FIRST: INSPECT THE EXISTING REPOSITORY
============================================================

Before making changes, inspect:

- README.md
- CHANGELOG.md
- docs/IMPLEMENTATION_INDEX.md
- docs/INTERVIEW_GUIDE.md
- knowledge/requirements-traceability.md
- docs/ROADMAP_RESTRUCTURE.md
- docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md
- existing docs/architecture/*
- frontend/*
- automation/*
- mcp/*
- existing Step 4 implementation
- existing Step 4.1 implementation
- existing RAG-related files/contracts

Especially inspect:

mcp/jira-confluence-foundation/

frontend/src/pages/knowledge-page.tsx

frontend/src/pages/traceability-page.tsx

docs/architecture/KNOWLEDGE_EXPORT_CONTRACT.md

docs/architecture/FUTURE_MCP_JIRA_CONFLUENCE_TOOLS.md

docs/ai/RAGAS_EVALUATION_STRATEGY.md

knowledge/requirements-traceability.md

Do not duplicate existing models or contracts.

Reuse existing types, metadata, traceability IDs, source IDs, sensitivity fields, and knowledge structures wherever possible.

============================================================
5. RAG IMPLEMENTATION SCOPE
============================================================

Implement a real local deterministic RAG pipeline.

Required layers:

A. Knowledge ingestion
B. Document normalization
C. Metadata extraction
D. Chunking
E. Embedding generation
F. Vector storage
G. Retrieval
H. Context assembly
I. RAG query service
J. Grounded response generation
K. Evidence/citation metadata
L. Retrieval logging
M. RAG-ready API/service boundary

============================================================
6. KNOWLEDGE SOURCES
============================================================

Use ONLY synthetic/local project data.

Knowledge sources should include:

1. Jira user stories
2. Jira acceptance criteria
3. Jira defects
4. Jira test cases
5. Confluence QA pages
6. requirements traceability
7. automation governance/classification
8. automation candidate matrix
9. UI architecture documentation
10. UI page specifications
11. testability architecture
12. RAG-related project documentation

Where possible, ingest existing deterministic data from:

mcp/jira-confluence-foundation/src/data/

and existing knowledge/ documentation.

Do NOT invent healthcare facts.

Do NOT use real PHI.

============================================================
7. DOCUMENT NORMALIZATION
============================================================

Create a normalized document contract.

Each document should contain fields such as:

- documentId
- sourceSystem
- sourceType
- sourceId
- title
- content
- traceabilityIds
- labels
- version
- timestamp
- accessScope
- sensitivity
- metadata
- checksum

Reuse the existing knowledge export contract where possible.

Do not create conflicting metadata models.

============================================================
8. CHUNKING
============================================================

Implement deterministic chunking.

Requirements:

- preserve documentId
- preserve sourceId
- preserve sourceSystem
- preserve traceabilityIds
- preserve sensitivity
- preserve accessScope
- preserve chunk index
- preserve chunk boundaries
- preserve source metadata

Each chunk should have a stable ID.

Example conceptual structure:

documentId
chunkId
chunkIndex
content
metadata

Chunking must be deterministic.

The same document must produce the same chunk IDs and ordering.

============================================================
9. EMBEDDINGS
============================================================

Implement a local embedding strategy that works in the current environment as much as possible.

First inspect whether existing dependencies/models already exist.

Prefer an architecture that supports:

EmbeddingProvider

with a local implementation.

Possible interface:

embedDocuments()
embedQuery()

Do NOT hard-code the entire RAG architecture to one embedding vendor.

Support future providers through an abstraction.

If the environment has no downloadable model/network access:

- implement a deterministic local fallback embedding mechanism
- clearly label it as development/testing fallback
- do not falsely claim production-quality semantic embeddings

The architecture must allow replacing the fallback with a real embedding model later.

============================================================
10. VECTOR STORE
============================================================

Implement a local vector store abstraction.

Preferred architecture:

VectorStore

Methods should support concepts such as:

- upsert
- search
- delete
- count
- clear
- metadata filtering

Use a local persistent solution if already available.

If no suitable dependency is available due environment restrictions:

implement a deterministic local vector-store abstraction using files/JSON and cosine similarity.

DO NOT pretend that a JSON file is a production vector database.

Clearly document:

Development implementation:
local deterministic vector store

Future production:
Chroma / pgvector / Pinecone / Azure AI Search / equivalent

Do not add unnecessary external dependencies if the environment cannot install them.

============================================================
11. RETRIEVER
============================================================

Implement:

Retriever

Input:

query
topK
optional metadata filters

Output:

retrieved chunks with:

- chunkId
- documentId
- score
- content
- source metadata
- traceability IDs
- source reference

Implement deterministic ranking.

Support metadata filtering such as:

- sourceSystem
- sourceType
- accessScope
- sensitivity
- labels

============================================================
12. CONTEXT ASSEMBLY
============================================================

Create a context assembler.

It should:

- take retrieved chunks
- order them deterministically
- remove obvious duplicates
- enforce a configurable context limit
- preserve evidence metadata
- prepare grounded context for generation

The assembled context must retain source references.

============================================================
13. RAG QUERY SERVICE
============================================================

Create a clear RAG service boundary.

Example:

RagQueryService

Input:

{
  query,
  topK,
  filters,
  userContext
}

Output:

{
  answer,
  citations,
  retrievedDocuments,
  confidence,
  retrievalMetadata,
  warnings
}

The service must distinguish:

- retrieved evidence
- generated answer
- unsupported information

============================================================
14. GENERATION STRATEGY
============================================================

Implement the generation layer behind an abstraction.

Example:

GenerationProvider

Do NOT tightly couple the project to a single LLM.

Support:

- local/mock deterministic generator for offline development
- future OpenAI/Azure OpenAI/other LLM provider

If no LLM credentials/network are available:

the RAG system MUST STILL RUN using a deterministic grounded response generator.

Example behavior:

Question:
"What is the acceptance criterion for appointment cancellation?"

The system should retrieve the relevant Jira/Confluence knowledge and produce a response based only on retrieved evidence.

The fallback generator must NOT invent information.

============================================================
15. NO-FABRICATION POLICY
============================================================

This is a healthcare QA project.

The RAG layer MUST follow:

- answer only from retrieved project knowledge
- if evidence is insufficient, explicitly say so
- do not fabricate Jira issues
- do not fabricate Confluence pages
- do not fabricate test cases
- do not fabricate requirements
- do not fabricate healthcare information
- do not fabricate patient information
- do not fabricate citations

Example:

"I could not find sufficient evidence in the indexed CareFlow knowledge base to answer this question."

is preferable to an invented answer.

============================================================
16. CITATIONS / EVIDENCE
============================================================

Every RAG answer should expose evidence.

Example:

Answer:
...

Sources:
- Jira: CARE-101
- Confluence: CF-QA-001
- Test Case: TC-014

Each citation should be traceable back to:

sourceSystem
sourceId
documentId
chunkId

The UI should eventually be able to navigate from evidence to source.

============================================================
17. ACCESS CONTROL
============================================================

Respect the existing metadata:

accessScope
sensitivity

The retriever must support metadata filtering.

A user should not retrieve content outside their allowed scope.

Use synthetic role-based access only.

Do NOT introduce real authentication infrastructure.

============================================================
18. RAG KNOWLEDGE INDEX
============================================================

Create an ingestion/indexing command.

Example conceptual commands:

npm run rag:ingest
npm run rag:index
npm run rag:query

Use the existing project package conventions.

The indexing operation must:

1. discover knowledge
2. normalize documents
3. chunk documents
4. create embeddings
5. store vectors
6. write index metadata
7. produce an ingestion summary

Example summary:

Documents discovered: 40
Documents indexed: 40
Chunks created: 125
Embeddings created: 125
Vector records: 125
Failures: 0

Do not fabricate counts.

============================================================
19. RAG QUERY CLI
============================================================

Provide a simple CLI or script to test queries.

Example:

npm run rag:query -- "What are the acceptance criteria for patient search?"

The output should contain:

- query
- answer
- retrieved sources
- scores
- citations
- confidence
- warnings

This will be useful for future agents and MCP tools.

============================================================
20. FRONTEND RAG UI
============================================================

IMPORTANT:

The project already has a Knowledge UI from Step 4.1.

DO NOT create a completely separate application.

Extend the existing CareFlow UI.

Add a RAG knowledge/query experience.

The UI should include:

- knowledge search/query box
- Ask Knowledge button
- retrieved sources
- answer
- citations
- confidence
- source type
- source ID
- traceability links
- no-evidence warning
- loading state
- empty state
- error state

Example user flow:

User opens Knowledge page
        ↓
Enters question
        ↓
Clicks Ask Knowledge
        ↓
RAG retrieves knowledge
        ↓
Answer displayed
        ↓
Sources displayed
        ↓
User opens Jira/Confluence source
        ↓
Traceability chain available

Use synthetic/local data only.

Do NOT connect to live Jira or Confluence.

============================================================
21. UI TESTABILITY
============================================================

Use stable:

data-testid

selectors.

Examples:

data-testid="rag-query-input"
data-testid="rag-query-submit"
data-testid="rag-answer"
data-testid="rag-source"
data-testid="rag-confidence"
data-testid="rag-no-evidence"

Follow the existing testability architecture.

============================================================
22. AUTOMATION
============================================================

IMPORTANT:

Do NOT automate the entire RAG functionality with dozens of scenarios.

Create only a SMALL targeted set of automation scenarios.

Target:

5–8 scenarios maximum.

Recommended scenarios:

1. User can open RAG knowledge page.
2. User can submit a knowledge query.
3. RAG answer displays grounded sources.
4. User can view citation metadata.
5. User sees no-evidence message for unsupported query.
6. Role/access filtering prevents unauthorized knowledge retrieval.
7. User can navigate from citation to source.
8. RAG loading/error state works.

Only implement scenarios that are stable and meaningful.

Do NOT run the full 96-case regression suite.

Do NOT run the entire automation suite unless specifically required for validation.

Run ONLY:

- targeted Step 5 RAG tests
- required typecheck
- required frontend lint/build

Do not spend time repairing unrelated Firefox/WebKit issues.

============================================================
23. RAG OBSERVABILITY
============================================================

Prepare machine-readable RAG execution metadata.

Capture fields such as:

- queryId
- timestamp
- userRole
- query
- retrievedChunkIds
- retrievalScores
- topK
- filters
- contextSize
- provider
- model
- answer
- citations
- confidence
- warnings
- latency

Do not expose secrets.

This will be used later by:

RAGAS
AI observability
AI agents
LLMOps

============================================================
24. RAGAS PREPARATION
============================================================

Do NOT implement full RAGAS runtime in Step 5.

But prepare evaluation-ready structures.

Create sample evaluation dataset structure:

question
expectedSources
expectedAnswer
referenceContext
metadata

Prepare future evaluation fields:

- context precision
- context recall
- faithfulness
- answer relevance
- groundedness

Mark runtime RAGAS evaluation as STEP 6.

============================================================
25. MCP BOUNDARY
============================================================

Do NOT implement MCP runtime in Step 5.

But expose a clean service boundary that future MCP tools can call.

Future examples:

search_knowledge
retrieve_context
query_rag
get_source_document
get_traceability

Document these boundaries.

MCP runtime remains STEP 7.

============================================================
26. AGENT BOUNDARY
============================================================

Do NOT implement AI agents in Step 5.

But make the RAG service callable programmatically.

Future agents should be able to call:

queryRag()
retrieveKnowledge()
getEvidence()

Document:

RAG -> MCP -> Agent

boundary.

Agent runtime remains STEP 8.

============================================================
27. SECURITY
============================================================

Implement/document:

- synthetic-only data
- no PHI
- no secrets
- access filtering
- source validation
- evidence validation
- no-fabrication behavior
- prompt injection awareness

Do NOT implement full prompt-injection defense yet.

That belongs to later AI security/guardrail work.

============================================================
28. TESTS
============================================================

Create unit/integration tests for:

1. document normalization
2. deterministic chunking
3. embedding generation
4. vector store upsert/search
5. similarity ranking
6. metadata filtering
7. retrieval
8. context assembly
9. no-evidence behavior
10. RAG query service
11. citation generation
12. access filtering

Tests must use synthetic data.

Do not fabricate PASS results.

============================================================
29. DOCUMENTATION
============================================================

Create:

docs/architecture/RAG_ARCHITECTURE.md
docs/architecture/RAG_INGESTION_ARCHITECTURE.md
docs/architecture/RAG_RETRIEVAL_ARCHITECTURE.md
docs/architecture/RAG_SECURITY_BOUNDARY.md
docs/architecture/RAG_MCP_AGENT_BOUNDARY.md

Create Step documentation:

docs/implementations/5-rag-runtime/

Inside:

prompt.md
README.md
implementation-report.pdf
interview-notes.md
response.md

Update:

README.md
CHANGELOG.md
docs/IMPLEMENTATION_INDEX.md
docs/INTERVIEW_GUIDE.md
knowledge/requirements-traceability.md
docs/ai/AI_INDUSTRY_CONCEPTS_ROADMAP.md

If an IMPLEMENTATIONS.md file exists in the repository, update it too.

If it does not exist, do NOT create a duplicate simply because this prompt mentions it; follow the repository's current documentation structure.

============================================================
30. TRACEABILITY
============================================================

Update the traceability chain:

BRD
→ PRD
→ Epic
→ User Story
→ Acceptance Criteria
→ Jira
→ Confluence
→ Knowledge Document
→ Chunk
→ Embedding
→ Vector
→ Retrieval
→ Context
→ RAG Answer
→ Citation
→ Test Scenario
→ Test Case
→ BDD
→ Automation
→ Execution
→ Future MCP
→ Future Agent

Preserve existing IDs.

Do not invent missing requirements.

============================================================
31. AI INDUSTRY CONCEPT STATUS
============================================================

After implementation, correctly classify:

RAG = IMPLEMENTED
RAG ingestion = IMPLEMENTED
RAG chunking = IMPLEMENTED
Embeddings = IMPLEMENTED / DEVELOPMENT FALLBACK if applicable
Vector store = IMPLEMENTED / LOCAL DEVELOPMENT
Retrieval = IMPLEMENTED
Context assembly = IMPLEMENTED
Grounded generation = IMPLEMENTED
Evidence/citations = IMPLEMENTED
RAG security boundary = FOUNDATION
RAG observability = FOUNDATION
RAGAS = PLANNED / STEP 6
MCP = FOUNDATION / STEP 7
Agentic AI = FOUNDATION / STEP 8
LangGraph = PLANNED / STEP 9
Multi-agent = PLANNED / STEP 10
AI security = FOUNDATION / STEP 11
LLMOps = FOUNDATION / STEP 11

Do not claim production readiness where only a local implementation exists.

============================================================
32. VALIDATION
============================================================

At minimum execute:

Frontend:
npm run lint
npm run build

RAG:
appropriate unit/integration tests
rag ingestion
rag query

Automation:
ONLY targeted Step 5 scenarios

Do NOT run:

full regression
all 96 cases
Firefox suite
WebKit suite

unless specifically required.

If environment issues occur:

- report exact command
- report exact failure
- distinguish implementation failure from environment limitation
- do not fabricate PASS

============================================================
33. GIT
============================================================

Review all changes.

Do not commit unrelated modifications.

Use commit message:

feat(step-5): implement careflow rag knowledge runtime

Push to main only after validation.

Verify:

git status
git log -1
git branch --show-current

If push is blocked by environment permissions, report it clearly.

============================================================
34. FINAL RESPONSE
============================================================

Return a structured implementation report containing:

1. Status
2. Objective
3. Architecture implemented
4. Knowledge sources
5. Ingestion
6. Chunking
7. Embeddings
8. Vector store
9. Retrieval
10. Context assembly
11. RAG query service
12. Generation
13. Citations/evidence
14. Access control
15. Frontend RAG UI
16. Automation scenarios
17. Test results
18. AI industry concepts
19. RAGAS preparation
20. MCP boundary
21. Agent boundary
22. Security
23. Files created
24. Files modified
25. Documentation
26. Traceability
27. Git
28. Known issues
29. Next recommended step

IMPORTANT:

Do not automatically start STEP 6.

STOP after completing STEP 5.

============================================================
35. FINAL QUALITY RULE
============================================================

This is an AI Engineer / AI SDET portfolio project.

Prefer:

real working local implementation
+
clean architecture
+
traceability
+
evidence
+
deterministic behavior
+
AI-ready interfaces

over:

large numbers of fake features
+
unnecessary automation
+
unverified external integrations
+
fabricated AI capabilities.

The objective is to demonstrate that the project can evolve from:

QA Automation
→ Knowledge Engineering
→ RAG
→ RAG Evaluation
→ MCP
→ AI Agents
→ LangGraph
→ Multi-Agent
→ AI Observability
→ LLMOps
→ AI Governance

without breaking the existing CareFlow architecture.

START STEP 5 NOW.
