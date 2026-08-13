# AI Defect Management

## Objective
Define enterprise AI defect reporting, triage, and remediation contracts for CareFlow Health AI QA workflows.

## Standard Bug Fields
- Bug ID
- Summary
- Description
- Environment
- Browser
- Build
- Severity
- Priority
- Component
- Steps to reproduce
- Expected result
- Actual result
- Evidence
- Test Case ID
- Requirement ID
- Root Cause
- Fix Version
- Regression Impact
- Status

## AI Defect Fields
- AI Defect ID
- AI Component
- Prompt Version
- Model
- Retrieval Configuration
- Evaluation Dataset
- Evaluation Run
- Expected Behavior
- Actual Behavior
- Failure Category
- RAG/Agent/MCP classification
- Guardrail status
- Severity
- Reproducibility
- Root Cause
- Remediation
- Evaluation Before Fix
- Evaluation After Fix

## AI Failure Categories
- Retrieval failure
- Grounding/faithfulness failure
- Tool-calling failure
- Agent orchestration failure
- Security/guardrail violation
- Latency/cost threshold breach

## Governance
- AI defect must link to requirement and AI use case.
- AI defect must include evaluation evidence before and after remediation.
- Reopen when post-fix evaluation fails gate thresholds.
