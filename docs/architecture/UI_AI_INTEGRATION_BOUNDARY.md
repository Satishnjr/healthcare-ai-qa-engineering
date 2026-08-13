# UI to AI Integration Boundary

## Objective
Define future UI integration boundaries for RAG, MCP, agents, evaluation, and observability without implementing AI runtime in Step 1.11.

## Conceptual Future Flow
User -> CareFlow UI -> AI Assistant UI -> Agent Orchestrator -> (RAG, MCP Tools, Specialized Agents, Evaluation, Observability)

## Responsibility Split

### Frontend Responsibilities
- Capture intent/context.
- Render AI responses, evidence, warnings, and approval controls.
- Display quality/safety status received from AI services.

### Future AI Responsibilities
- Retrieval, tool calling, orchestration, evaluation, observability, guardrails, security enforcement.

## AI Industry Concepts (Step 1.11)

| Concept | Why It Matters | UI Connection | Implemented Now | Planned Later | Testing Approach | Interview Explanation |
|---|---|---|---|---|---|---|
| RAG | grounded answers | evidence links in AI panel | boundary documented | runtime retrieval | UI checks for evidence rendering | reduces hallucinations |
| RAGAS | objective RAG quality | score/status badges | placeholders only | metric pipelines | UI checks for score states | makes quality measurable |
| RAG Evaluation | release confidence | evaluation status cards | placeholders only | automated eval runs | pass/fail status rendering | protects release quality |
| AI Observability | runtime insight | alert/KPI cards | placeholders only | telemetry backend | alert and KPI UI checks | explains AI behavior |
| MCP | standard tool interface | tool-event visualization | boundary documented | MCP runtime tools | tool-result UI checks | standardizes tool access |
| MCP Tools | enterprise actions | tool result cards | boundary documented | implemented tools later | success/failure UI tests | operational AI actions |
| Tool Calling | executes actions | invoke/progress/result states | boundary documented | invocation runtime | progress/error UI checks | converts intent to execution |
| Agentic AI | multi-step autonomy | workflow progress UI | boundary documented | orchestration runtime | state-transition checks | handles complex tasks |
| LangGraph | controlled orchestration | graph-run status UI | boundary documented | graph runtime | state and recovery tests | deterministic orchestration |
| Multi-Agent Systems | specialization | multi-agent status board | boundary documented | coordination runtime | per-agent outcome checks | scalable collaboration |
| Agent Evaluation | reliability control | agent KPI cards | boundary documented | eval runtime | KPI threshold UI tests | validates agent quality |
| Human-in-the-loop | safety control | approve/reject UX | boundary documented | runtime approvals | escalation flow tests | keeps human oversight |
| Guardrails | safety boundaries | warning/block UX | boundary documented | enforcement runtime | blocked-flow tests | reduces risk |
| Prompt Injection Protection | threat defense | blocked/warned action UX | boundary documented | detection runtime | adversarial prompt UI checks | protects system/tooling |
| AI Security | trust and safety | security-state indicators | boundary documented | security controls | secure-state UI checks | enterprise requirement |
| LLMOps | controlled operations | version/experiment tags | boundary documented | MLOps pipelines | metadata display tests | repeatable governance |
| AI Quality Gates | release gates | gate status dashboard | boundary documented | gate evaluators | status rendering tests | blocks poor AI releases |
| AI Failure Analysis | root cause insight | failure analysis panel | boundary documented | analytics runtime | category-view tests | improves reliability |
| AI Defect Management | corrective workflow | AI defect list/detail UX | boundary documented | defect workflow integrations | metadata display tests | richer than normal defects |
| Evaluation Datasets | repeatable baselines | dataset selector/status | boundary documented | dataset registry | dataset-bound UI tests | fair comparisons |
| Evaluation Runs | auditable evidence | run timeline/history | boundary documented | run orchestration | run-state UI checks | auditable quality evidence |
| Model/Prompt Versioning | change traceability | version badges/diffs | boundary documented | version registry | version-display tests | rollback and diagnostics |
| AI Experiment Tracking | safe iteration | experiment cards/status | boundary documented | experiment platform | lifecycle state UI tests | controlled optimization |

## Step 1.11 Constraint
No RAG, MCP, LangGraph, agent, observability, or evaluation runtime is implemented in this step.

