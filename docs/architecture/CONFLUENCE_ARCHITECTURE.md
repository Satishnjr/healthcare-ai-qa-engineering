# Confluence Architecture

## Step 4 Scope
Establish Confluence as enterprise QA knowledge architecture with deterministic local/mock adapter, typed metadata model, and RAG-ready export preparation.

## Component Model
- `ConfluenceClient` interface
- `ConfluenceMockAdapter` (implemented)
- `ConfluenceRestAdapter` (future, currently blocked by unverified external connectivity)
- `ConfluenceRepository`
- `KnowledgeExportService`

## Canonical Confluence Document Model
Fields used in Step 4 foundation:
- `documentId`, `spaceKey`, `title`, `parentPageId`, `version`
- `content`, `labels`, `traceabilityIds`
- `sourceType`, `sourceSystem`, `sourceId`
- `status`, `createdAt`, `updatedAt`
- `author`, `lastModifiedBy`
- `accessScope`, `sensitivity`, `checksum`

## Logical Space/Page Domains
- Product
- Requirements
- Architecture
- QA
- Test Scenarios
- Test Cases
- Test Data
- Automation
- AI
- RAG
- MCP
- Agents
- Evaluation
- Observability
- Releases
- Defects
- Interview Knowledge

## Step 4 Status Classification
- Implemented: Confluence mock adapter/repository, page CRUD/search/version logic.
- Mock: deterministic local page dataset and sync-generated pages.
- Foundation: metadata model for future RAG ingestion and enterprise governance.
- Planned: live Confluence API adapter execution.
- Blocked: external execution not verified in this step.
