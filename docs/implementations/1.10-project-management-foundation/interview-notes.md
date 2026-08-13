# Step 1.10 Interview Notes

## What did we build?
A repository-local project-management and delivery foundation for CareFlow Health, including Jira-like governance contracts, Confluence-like knowledge architecture, Jenkins-like CI/CD architecture, AI quality gates, and AI defect management.

## Why did we build it?
To prevent delivery chaos by standardizing planning, execution, reporting, traceability, and release controls before runtime automation and AI tooling are implemented.

## Why Jira-like project management?
It gives a stable issue hierarchy, ownership model, workflow discipline, and traceability links from requirement to defect.

## Why Confluence-like documentation?
It creates searchable, governed knowledge spaces so architecture and QA decisions remain auditable and reusable.

## Why Jenkins?
A CI/CD model provides repeatable quality checks, evidence generation, and release control gates.

## How does CI/CD fit QA?
CI/CD runs smoke, functional, regression, and quality checks continuously, reducing late-stage surprises.

## How does AI fit CI/CD?
AI evaluation stages (RAG, agent, observability, guardrails) become quality gates before release approval.

## What is RAG evaluation?
RAG evaluation measures retrieval + answer quality using controlled datasets and repeatable runs.

## What is RAGAS?
RAGAS is a metric framework for RAG quality (faithfulness, answer relevancy, context precision/recall).

## What is AI observability?
Telemetry for AI behavior: error rate, latency, token usage, cost, trace completeness, and alerting.

## What is MCP?
Model Context Protocol standardizes tool interfaces and gives AI systems controlled access to project tools.

## What is Agentic AI?
AI systems that execute multi-step goals using planning, tools, memory, and decision logic.

## What is a multi-agent architecture?
A system of specialized agents (for example, test design, execution analysis, defect triage) coordinated by an orchestrator.

## What are AI quality gates?
Release control thresholds for AI behavior across quality, safety, security, and operability.

## What are AI defects?
Defects where AI behavior deviates from expected outcomes; they require model/prompt/retrieval/evaluation evidence for remediation.

## What would you explain to an interviewer?
- We intentionally built governance before runtime complexity.
- Traceability is the backbone for QA credibility and audit readiness.
- AI delivery must be measured with explicit evaluation datasets/runs and quality gates.
- This architecture scales because issue models, documentation governance, and CI/CD controls are modular and evidence-driven.
