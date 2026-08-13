# Step 1.2 Interview Notes

## What is a BRD?
A BRD is a business-level document that defines why a product exists, what outcomes it must achieve, and what scope and constraints govern delivery.

## Why did we create our own BRD?
There was no existing BRD. The project explicitly requires synthetic, self-authored requirements derived from approved product vision artifacts.

## How did we derive requirements?
From Step 1.1 artifacts: product vision, scope, user roles, modules, journeys, QA strategy, synthetic data policy, and requirements strategy.

## Difference between BRD and PRD
- BRD: Business intent, scope, value, and high-level requirements.
- PRD: Product behavior, UX detail, functional definitions, and implementation-facing detail.

## How did we make requirements testable?
By defining stable IDs, clear rationale, priorities, module linkage, and explicit traceability mapping to downstream test assets.

## Why stable requirement IDs?
They allow consistent references across PRD, stories, AC, tests, automation, RAG retrieval, and AI-agent reasoning.

## How will RAG use the BRD?
As a source document for ingestion, chunking, embedding, and retrieval of grounded business context.

## How will MCP use requirements?
Future MCP tools can query/update requirement-linked artifacts in Jira-like/Confluence-like/Jenkins-like systems.

## How will the AI Agent use requirements?
Future LangGraph workflows can analyze coverage gaps, map failures to requirements, and suggest regression focus.

## Why synthetic healthcare data?
To prevent PHI risk and keep the project safe, reproducible, and compliant with demo constraints.

## Why no backend?
The architecture contract is frontend-only to focus on UI workflow quality and QA/AI ecosystem demonstration.

## Why no API automation?
API layers are out of scope in this frontend-only architecture; UI automation is the testing focus.

## Business requirements vs functional requirements
Business requirements define what business outcome is needed; functional requirements (later in PRD) define detailed product behavior to realize it.

## Functional vs non-functional requirements
Functional requirements define behaviors/features; non-functional requirements define quality characteristics such as usability, accessibility, and maintainability.

## Business rules
Business rules are governing constraints/conditions that shape valid workflow behavior.

## Risks
Key risks include ambiguity, scope creep, automation flakiness, and future AI quality issues; mitigations and owners are defined.

## Trade-offs
Greater upfront documentation effort in exchange for stronger downstream consistency, traceability, and automation readiness.

## Interview Questions
1. Why did you create a BRD before PRD?
2. How did you ensure frontend-only constraints were preserved?
3. How do stable IDs help AI-assisted QA workflows?
4. How do business rules improve test design quality?
5. Why is synthetic data mandatory in this project?

## Suggested Answers
- BRD-first defines business intent and prevents downstream scope confusion.
- Out-of-scope exclusions and architecture constraints are explicit in BRD.
- Stable IDs support retrieval, linking, and explainable traceability.
- Business rules produce deterministic acceptance conditions and edge-case clarity.
- Synthetic data removes PHI exposure and improves reproducibility.

## 30-second explanation
Step 1.2 created the baseline BRD for CareFlow Health with business objectives, scope, stakeholders, processes, requirements, rules, and traceability identifiers so all future PRD/testing/AI work has a stable business source of truth.

## 1-minute explanation
I authored CFH-BRD-001 from Step 1.1 artifacts, including executive summary, business problems, measurable objectives, stakeholder register, in/out scope, 15 business processes, 24 business requirements, 22 business rules, and 12 NFRs. I added assumptions, constraints, 15 risks, and explicit AI/RAG future relevance. I also updated the requirements-traceability template with BR IDs as source-layer anchors.

## 2-minute explanation
This step establishes enterprise-style requirement governance for a synthetic, frontend-only healthcare simulation. I ensured consistency with prior product vision and constraints, then built a structured BRD with stable identifiers across stakeholder, process, requirement, rule, NFR, and risk domains. Each requirement includes priority, rationale, owner, and module mapping to make downstream PRD/stories/tests straightforward and auditable. I captured strict out-of-scope boundaries (no backend, no APIs, no PHI), quality requirements (accessibility/responsiveness/error handling), and future AI enablement (RAG ingestion, MCP interactions, LangGraph reasoning) without claiming these future systems are implemented. The result is a high-quality business baseline designed for traceability, testability, and interview-ready architecture clarity.

## Resume bullet suggestions
- Authored enterprise-style BRD (CFH-BRD-001) for a frontend-only healthcare workflow simulation, defining 24 business requirements, 22 business rules, 12 NFRs, 15 business processes, and traceability-ready identifiers for downstream QA and AI workflows.
