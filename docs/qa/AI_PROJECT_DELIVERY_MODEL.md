# AI Project Delivery Model

## Delivery Chain
Requirement -> AI Use Case -> AI Component -> Tool/MCP -> Evaluation Dataset -> Evaluation Run -> AI Quality Gate -> AI Defect -> Remediation

## AI Concept Integration Matrix

| Concept | Relevance to Step 1.10 | Implemented Now | Planned Later | Jira-like Management | Confluence-like Documentation | Jenkins-like CI/CD | Interview Explanation |
|---|---|---|---|---|---|---|---|
| RAG | Retrieves requirement and QA knowledge for AI workflows | Integration contract and taxonomy | Runtime retrieval stack | AI Use Case + AI Evaluation issue links | AI/RAG architecture and evaluation pages | RAG evaluation stage | RAG improves answer grounding using approved project knowledge |
| RAGAS | Standard metrics for RAG quality | Metric set documented | Runtime scoring jobs | AI Evaluation issue stores metric results | RAGAS metric definition page | Gate checks in AI evaluation stage | RAGAS quantifies quality instead of subjective review |
| RAG Evaluation | Controlled quality validation | Evaluation entities defined | Automated evaluation runs | AI Evaluation issue workflow | AI evaluation playbook page | Evaluation stage with pass/fail thresholds | It validates retrieval and answer quality before release |
| AI Observability | Runtime visibility and operations control | Observability KPI contract | Traces, alerts, dashboards | Incident and AI Defect links | Observability runbook page | Observability gate and alerts | It helps explain why AI failed and where |
| MCP | Controlled tool access for AI workflows | Tool contract expectations | MCP server implementations | Tool-call evidence in AI issues | MCP architecture and contract page | Tool success/failure checks | MCP standardizes how AI safely calls project tools |
| Tool Calling | Enables task execution through tools | Failure taxonomy documented | Runtime invocation/retry logic | Track tool errors in AI Defect issues | Tool governance notes | Tool call quality metrics | Tool calling turns AI decisions into actions |
| LangGraph | Structured agent orchestration | Orchestration contract | Runtime graph workflows | Agentic issues reference graph steps | LangGraph design pages | Agent evaluation stages | LangGraph gives deterministic multi-step agent control |
| Agentic AI | Autonomous multi-step task handling | Governance boundaries defined | Runtime orchestration | AI Experiment and AI Defect usage | Agent design principles page | Agent quality gate stage | Agentic AI automates complex QA operations with oversight |
| Multi-Agent Systems | Specialized agents per responsibility | Role model defined | Inter-agent coordination runtime | Per-agent issue ownership | Multi-agent architecture page | Aggregated agent metrics | Multiple agents improve scale and specialization |
| Agent Evaluation | Measures agent reliability | KPI contract documented | Runtime evaluation pipelines | AI Evaluation issues with agent KPIs | Agent evaluation protocol page | Agent evaluation stage | Agent evaluation ensures reliability before scale-up |
| Human-in-the-loop | Safety and escalation control | Escalation checkpoints defined | Runtime approval workflows | Escalation linked issues | HITL policy page | Escalation rate gate | Humans handle ambiguous or high-risk AI outcomes |
| Guardrails | Prevent unsafe AI behavior | Guardrail policy contracts | Runtime guardrail engine | Guardrail violation issue tagging | Guardrail standards page | Security gate checks | Guardrails reduce security and compliance risks |
| Prompt Injection Protection | Defends against adversarial prompts | Detection requirements documented | Runtime detection/blocking | Security issue and AI defect links | AI security threat model page | Security stage validations | Protects tools and data from prompt manipulation |
| AI Security | AI-specific threat and policy controls | Security governance defined | Runtime policy enforcement | Security labels/components | AI security architecture page | Security gates and scans | AI security protects data, tools, and workflows |
| LLMOps | Operational discipline for AI lifecycle | Versioning and governance defined | End-to-end AI ops pipelines | AI Experiment lifecycle | LLMOps process page | Quality, cost, and drift checks | LLMOps makes AI delivery repeatable and governed |
| AI Quality Gates | Release control for AI | Gate model implemented in docs | Runtime gate enforcement | Gate result fields in AI Evaluation | Quality gate policy page | Gate stage before publish | Gates prevent poor AI behavior from shipping |
| AI Failure Analysis | Root-cause analysis for AI incidents | Failure taxonomy documented | Automated analytics | AI Defect root cause fields | Failure analysis runbook | Post-run analysis stage | RCA improves long-term reliability |
| AI Defect Management | Structured AI issue handling | AI defect schema implemented | Tooling integration | AI Defect issue type | AI defect management page | Defect trend reporting stage | It enables reproducible fixes and governance |
| Evaluation Datasets | Controlled validation input | Dataset entity defined | Versioned dataset registry | Dataset linked to AI Evaluation issues | Dataset catalog pages | Evaluation data load stage | Stable datasets make comparisons fair |
| Evaluation Runs | Execution evidence units | Run entity lifecycle defined | Automated scheduled runs | Run IDs tracked in AI issues | Run log pages | Run orchestration in pipeline | Runs create auditable quality evidence |
| Model/Prompt Versioning | Controlled model behavior changes | Metadata requirements defined | Version registry integration | Version fields on AI issues | Version history pages | Versioned pipeline execution | Versioning supports rollback and forensic analysis |
| AI Experiment Tracking | Controlled optimization workflow | AI Experiment issue type defined | Experiment platform integration | AI Experiment workflow | Experiment journal pages | Experiment result publishing | Tracks what changed, why, and with what result |

## Step 1.10 Boundary
- Documented and governed: YES.
- Runtime implemented: NO.
