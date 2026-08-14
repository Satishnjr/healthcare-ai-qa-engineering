import { useMemo, useState } from "react";
import { PageTitle } from "../components/common/page-title";
import { runAgentTaskDemo } from "../services/agent-client";
import { runGraphDemo } from "../services/agent-graph-client";
import { runMultiAgentDemo } from "../services/agent-multi-client";
import { useAppState } from "../state/app-context";
import type { AgentGraphState, AgentRuntimeResponse, MultiAgentState } from "../types/agent";

export function AgentPage() {
  const { role } = useAppState();
  const [taskInput, setTaskInput] = useState(
    "Which test cases cover appointment cancellation?",
  );
  const [result, setResult] = useState<AgentRuntimeResponse | null>(null);
  const [graphResult, setGraphResult] = useState<AgentGraphState | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState("");
  const [approvalStatus, setApprovalStatus] = useState<"APPROVED" | "REJECTED">(
    "REJECTED",
  );
  const [multiAgentInput, setMultiAgentInput] = useState(
    "Find the acceptance criteria for appointment cancellation and identify the test cases that should cover it.",
  );
  const [multiAgentResult, setMultiAgentResult] = useState<MultiAgentState | null>(null);

  const taskAnalysis = useMemo(() => {
    if (!result) {
      return null;
    }
    return {
      taskType: result.taskType,
      taskConfidence: result.confidence.score,
      entities: result.evidence.slice(0, 2).map((item) => item.sourceId),
    };
  }, [result]);

  const runTask = async () => {
    setError("");
    setIsRunning(true);
    try {
      const response = await runAgentTaskDemo({
        request: taskInput,
        role,
      });
      setResult(response);
      const graph = await runGraphDemo({
        request: taskInput,
        role,
      });
      setGraphResult(graph);
      const multiAgent = await runMultiAgentDemo({
        request: multiAgentInput,
        role,
      });
      setMultiAgentResult(multiAgent);
    } catch (reason) {
      setError(
        reason instanceof Error ? reason.message : "Failed to run deterministic agent demo.",
      );
      setResult(null);
      setGraphResult(null);
      setMultiAgentResult(null);
    } finally {
      setIsRunning(false);
    }
  };

  const runMultiAgent = async () => {
    setError("");
    setIsRunning(true);
    try {
      const multiAgent = await runMultiAgentDemo({
        request: multiAgentInput,
        role,
      });
      setMultiAgentResult(multiAgent);
    } catch (reason) {
      setError(
        reason instanceof Error ? reason.message : "Failed to run deterministic multi-agent demo.",
      );
      setMultiAgentResult(null);
    } finally {
      setIsRunning(false);
    }
  };

  const updateApproval = (status: "APPROVED" | "REJECTED") => {
    setApprovalStatus(status);
    if (!result) {
      return;
    }
    setResult({
      ...result,
      approval: {
        ...result.approval,
        status,
      },
    });
  };

  const graphResume = () => {
    if (!graphResult) {
      return;
    }
    setGraphResult({
      ...graphResult,
      currentNode: "finalization",
      executionStatus: "COMPLETED",
      finalStatus: "SUCCESS",
      approvalStatus: "APPROVED",
    });
  };

  const graphApprove = () => {
    if (!graphResult) {
      return;
    }
    setGraphResult({
      ...graphResult,
      approvalStatus: "APPROVED",
      executionStatus: "COMPLETED",
      finalStatus: "SUCCESS",
    });
  };

  const graphReject = () => {
    if (!graphResult) {
      return;
    }
    setGraphResult({
      ...graphResult,
      approvalStatus: "REJECTED",
      executionStatus: "COMPLETED",
      finalStatus: "PARTIAL",
    });
  };

  const multiAgentApprove = () => {
    if (!multiAgentResult) {
      return;
    }
    setMultiAgentResult({
      ...multiAgentResult,
      approvalStatus: "APPROVED",
      executionStatus: "COMPLETED",
      finalStatus: "SUCCESS",
      finalResponse: {
        answer: "Approval granted. Multi-agent flow finalized successfully.",
        status: "SUCCESS",
      },
    });
  };

  const multiAgentReject = () => {
    if (!multiAgentResult) {
      return;
    }
    setMultiAgentResult({
      ...multiAgentResult,
      approvalStatus: "REJECTED",
      executionStatus: "COMPLETED",
      finalStatus: "PARTIAL",
      finalResponse: {
        answer: "Approval rejected. Multi-agent flow ended safely without write action.",
        status: "PARTIAL",
      },
    });
  };

  const getStatusClass = (value?: string) => {
    const normalized = (value ?? "").toUpperCase();
    if (
      normalized.includes("SUCCESS") ||
      normalized.includes("COMPLETED") ||
      normalized.includes("APPROVED") ||
      normalized.includes("PASS")
    ) {
      return "agent-status-chip success";
    }
    if (
      normalized.includes("FAIL") ||
      normalized.includes("ERROR") ||
      normalized.includes("REJECTED")
    ) {
      return "agent-status-chip danger";
    }
    if (normalized.includes("WAIT") || normalized.includes("RUNNING")) {
      return "agent-status-chip warning";
    }
    return "agent-status-chip info";
  };

  const graphNodeHistory = graphResult?.nodeHistory ?? [];
  const graphTransitions = graphResult?.transitionHistory ?? [];
  const graphToolCalls = graphResult?.toolCalls ?? [];
  const graphEvidence = graphResult?.evidence ?? [];
  const graphErrors = graphResult?.errors ?? [];

  return (
    <section data-testid="agent-page" className="agent-runtime-page">
      <PageTitle
        title="AI Agent Runtime"
        subtitle="Production-style command center for deterministic Step 8 + Step 9 orchestration."
      />

      <article className="card agent-hero-card">
        <div className="agent-hero-head">
          <p className="agent-hero-kicker">CareFlow QA Intelligence</p>
          <h2>Dr. Nandini A Hospital AI Operations Console</h2>
          <p>
            Execute evidence-driven QA tasks with graph orchestration, MCP tools, and auditable
            deterministic outputs.
          </p>
        </div>
        <div className="agent-hero-metrics">
          <div>
            <p>Role</p>
            <strong>{role}</strong>
          </div>
          <div>
            <p>Runtime</p>
            <strong>Single-Agent + Graph</strong>
          </div>
          <div>
            <p>Graph Run</p>
            <strong>{graphResult?.graphRunId ?? "Not started"}</strong>
          </div>
          <div>
            <p>Execution</p>
            <span className={getStatusClass(graphResult?.executionStatus)}>
              {graphResult?.executionStatus ?? "IDLE"}
            </span>
          </div>
        </div>
      </article>

      <div className="agent-grid agent-grid-top">
        <article className="card">
          <h3>Agent Chat / Task Input</h3>
          <p className="hint">
            Enter a QA task. The runtime will analyze, plan, execute MCP tools, and provide
            evidence-backed response.
          </p>
          <label htmlFor="agent-task-input">Task</label>
          <textarea
            id="agent-task-input"
            data-testid="agent-task-input"
            rows={4}
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
          />
          <div className="agent-submit-row">
            <button
              type="button"
              className="btn primary"
              data-testid="agent-task-submit"
              disabled={isRunning}
              onClick={runTask}
            >
              {isRunning ? "Running..." : "Run Agent Task"}
            </button>
          </div>
        </article>

        <article className="card">
          <h3>Live Runtime Status</h3>
          <div className="agent-kv-list">
            <div>
              <span>Current Node</span>
              <strong data-testid="agent-graph-current-node">{graphResult?.currentNode ?? "START"}</strong>
            </div>
            <div>
              <span>Final Status</span>
              <span className={getStatusClass(graphResult?.finalStatus)}>
                {graphResult?.finalStatus ?? "N/A"}
              </span>
            </div>
            <div>
              <span>Approval</span>
              <span className={getStatusClass(graphResult?.approvalStatus)}>
                {graphResult?.approvalStatus ?? "NOT_REQUIRED"}
              </span>
            </div>
            <div>
              <span>Confidence</span>
              <strong data-testid="agent-graph-confidence">
                {graphResult ? `${graphResult.confidence.score} (${graphResult.confidence.band})` : "0 (VERY_LOW)"}
              </strong>
            </div>
            <div>
              <span>Tool Calls</span>
              <strong>{graphToolCalls.length}</strong>
            </div>
            <div>
              <span>Evidence Items</span>
              <strong>{graphEvidence.length}</strong>
            </div>
          </div>
        </article>
      </div>

      {error ? (
        <article className="card">
          <p className="error-text">{error}</p>
        </article>
      ) : null}

      {taskAnalysis ? (
        <article className="card">
          <h3>Task Analysis</h3>
          <div className="agent-kv-list">
            <div>
              <span>Task Type</span>
              <strong data-testid="agent-task-type">{taskAnalysis.taskType}</strong>
            </div>
            <div>
              <span>Task Confidence</span>
              <strong data-testid="agent-task-confidence">{taskAnalysis.taskConfidence}</strong>
            </div>
            <div className="full-row">
              <span>Entities</span>
              <strong>{taskAnalysis.entities.length ? taskAnalysis.entities.join(", ") : "none"}</strong>
            </div>
          </div>
        </article>
      ) : null}

      <div className="agent-grid">
        {result ? (
          <article className="card">
            <h3>Plan</h3>
            <div data-testid="agent-plan">
              {result.plan.steps.map((step) => (
                <div key={`${step.order}-${step.tool}`} className="agent-plan-row">
                  <p data-testid="agent-plan-step">
                    <strong>Step {step.order}:</strong> {step.purpose}
                  </p>
                  <p data-testid="agent-plan-tool">
                    <strong>Tool:</strong> {step.tool}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ) : null}

        {result ? (
          <article className="card">
            <h3>Tool Execution</h3>
            {result.toolCalls.map((call) => (
              <div key={call.requestId} data-testid="agent-tool-call" className="agent-tool-row">
                <div className="agent-tool-header">
                  <p data-testid="agent-tool-name">
                    <strong>{call.tool}</strong>
                  </p>
                  <p data-testid="agent-tool-status" className={getStatusClass(call.status)}>
                    {call.status}
                  </p>
                </div>
                <p data-testid="agent-tool-request-id">
                  <strong>Request ID:</strong> {call.requestId}
                </p>
                <p>
                  <strong>Duration:</strong> {call.durationMs}ms
                </p>
                <p>
                  <strong>Source:</strong> {call.source}
                </p>
              </div>
            ))}
          </article>
        ) : null}
      </div>

      {result ? (
        <article className="card">
          <h3>Evidence</h3>
          <div className="agent-evidence-grid">
            {result.evidence.map((item) => (
              <div key={item.evidenceId} data-testid="agent-evidence" className="agent-evidence-row">
                <p data-testid="agent-evidence-source">
                  <strong>{item.sourceSystem}:{item.sourceId}</strong>
                </p>
                <p>{item.content}</p>
                <p data-testid="agent-evidence-score">
                  <strong>Score:</strong> {item.score}
                </p>
                <p>
                  <strong>Traceability IDs:</strong>{" "}
                  {(item.traceabilityIds ?? []).length ? item.traceabilityIds.join(", ") : "none"}
                </p>
              </div>
            ))}
          </div>
        </article>
      ) : null}

      {result ? (
        <article className="card" data-testid="agent-response">
          <h3>Final Response</h3>
          <div className="agent-kv-list">
            <div>
              <span>Status</span>
              <span data-testid="agent-status" className={getStatusClass(result.status)}>
                {result.status}
              </span>
            </div>
            <div>
              <span>Confidence</span>
              <strong data-testid="agent-confidence">
                {result.confidence.score} ({result.confidence.band})
              </strong>
            </div>
          </div>
          <pre className="agent-response-text">{result.answer}</pre>
          <div>
            <strong>Citations:</strong>
            {result.citations.map((citation, index) => (
              <p key={`${citation.sourceSystem}-${citation.sourceId}-${index}`} data-testid="agent-citation">
                {citation.sourceSystem}:{citation.sourceId}
              </p>
            ))}
          </div>
          <div>
            <strong>Warnings:</strong>
            {result.warnings.map((warning) => (
              <p key={warning} data-testid="agent-warning">
                {warning}
              </p>
            ))}
          </div>
        </article>
      ) : null}

      {result?.approval?.required ? (
        <article className="card" data-testid="agent-approval">
          <h3>Approval</h3>
          <p>
            <strong>Reason:</strong> {result.approval.reason}
          </p>
          <p>
            <strong>Action:</strong> {result.approval.action}
          </p>
          <p>
            <strong>Status:</strong> {result.approval.status} (Local choice: {approvalStatus})
          </p>
          <div className="inline-actions">
            <button
              type="button"
              className="btn secondary"
              data-testid="agent-approve"
              onClick={() => updateApproval("APPROVED")}
            >
              Approve
            </button>
            <button
              type="button"
              className="btn danger"
              data-testid="agent-reject"
              onClick={() => updateApproval("REJECTED")}
            >
              Reject
            </button>
          </div>
        </article>
      ) : null}

      <article className="card" data-testid="agent-graph">
        <div className="agent-graph-header">
          <div>
            <h3>LangGraph Orchestration</h3>
            <p className="hint">
              Visual execution timeline with deterministic node transitions and approval controls.
            </p>
          </div>
          <p data-testid="agent-graph-run-id">
            <strong>Run:</strong> {graphResult?.graphRunId ?? "Not started"}
          </p>
        </div>

        <div className="agent-grid">
          <div>
            <h4>Node Timeline</h4>
            {graphNodeHistory.map((node, index) => (
              <div key={`${node.node}-${index}`} className="agent-graph-node-row" data-testid="agent-graph-node">
                <div className="agent-graph-node-name">
                  <span className="agent-graph-node-index">{index + 1}</span>
                  <strong>{node.node}</strong>
                </div>
                <span data-testid="agent-graph-node-status" className={getStatusClass(node.status)}>
                  {node.status}
                </span>
              </div>
            ))}
          </div>

          <div>
            <h4>Transitions</h4>
            <div className="agent-transition-list">
              {graphTransitions.map((transition, index) => (
                <p key={`${transition.from}-${transition.to}-${index}`} data-testid="agent-graph-transition">
                  {transition.from}
                  {" -> "}
                  {transition.to} ({transition.reason})
                </p>
              ))}
            </div>
          </div>
        </div>

        <h4>MCP Tool Calls</h4>
        <div className="agent-grid">
          {graphToolCalls.map((call) => (
            <div key={`graph-${call.requestId}`} className="agent-tool-row" data-testid="agent-graph-tool-call">
              <p data-testid="agent-graph-tool-name">
                <strong>{call.tool}</strong>
              </p>
              <p data-testid="agent-graph-tool-status" className={getStatusClass(call.status)}>
                {call.status}
              </p>
            </div>
          ))}
        </div>

        <h4>Evidence</h4>
        <div className="agent-graph-evidence-list">
          {graphEvidence.map((item) => (
            <p key={item.evidenceId} data-testid="agent-graph-evidence">
              {item.sourceSystem}:{item.sourceId} ({item.score})
            </p>
          ))}
        </div>

        <div className="inline-actions">
          <button type="button" className="btn secondary" data-testid="agent-graph-resume" onClick={graphResume}>
            Resume
          </button>
          <button type="button" className="btn secondary" data-testid="agent-graph-approve" onClick={graphApprove}>
            Approve
          </button>
          <button type="button" className="btn danger" data-testid="agent-graph-reject" onClick={graphReject}>
            Reject
          </button>
        </div>

        {graphResult?.response ? (
          <div data-testid="agent-graph-response">
            <h4>Graph Response</h4>
            <pre className="agent-response-text">{graphResult.response.answer}</pre>
          </div>
        ) : null}

        {graphErrors.length ? (
          <div>
            {graphErrors.map((graphError, index) => (
              <p key={`${graphError.code}-${index}`} data-testid="agent-graph-error" className="error-text">
                {graphError.code}: {graphError.message}
              </p>
            ))}
          </div>
        ) : <p data-testid="agent-graph-error">No graph errors recorded.</p>}
      </article>

      <article className="card" data-testid="multi-agent-page">
        <div className="agent-graph-header">
          <div>
            <h3>Multi-Agent Orchestration</h3>
            <p className="hint">
              Supervisor-coordinated specialist agents: QA Analyst, RAG Knowledge, Test Analyst,
              and Review Agent.
            </p>
          </div>
          <p data-testid="multi-agent-run-id">
            <strong>Run:</strong> {multiAgentResult?.multiAgentRunId ?? "Not started"}
          </p>
        </div>

        <label htmlFor="multi-agent-request">Multi-agent request</label>
        <textarea
          id="multi-agent-request"
          data-testid="multi-agent-request-input"
          rows={3}
          value={multiAgentInput}
          onChange={(event) => setMultiAgentInput(event.target.value)}
        />
        <div className="agent-submit-row inline-actions">
          <button
            type="button"
            className="btn primary"
            data-testid="multi-agent-submit"
            disabled={isRunning}
            onClick={runMultiAgent}
          >
            {isRunning ? "Running..." : "Run Multi-Agent"}
          </button>
          <button
            type="button"
            className="btn secondary"
            data-testid="multi-agent-approve"
            onClick={multiAgentApprove}
          >
            Approve
          </button>
          <button
            type="button"
            className="btn danger"
            data-testid="multi-agent-reject"
            onClick={multiAgentReject}
          >
            Reject
          </button>
        </div>

        {multiAgentResult ? (
          <>
            <div className="agent-kv-list" data-testid="multi-agent-supervisor">
              <div>
                <span>Role</span>
                <strong>{multiAgentResult.role}</strong>
              </div>
              <div>
                <span>Execution</span>
                <span className={getStatusClass(multiAgentResult.executionStatus)}>
                  {multiAgentResult.executionStatus}
                </span>
              </div>
              <div>
                <span>Final Status</span>
                <span className={getStatusClass(multiAgentResult.finalStatus)}>
                  {multiAgentResult.finalStatus}
                </span>
              </div>
              <div>
                <span>Approval</span>
                <span className={getStatusClass(multiAgentResult.approvalStatus)}>
                  {multiAgentResult.approvalStatus}
                </span>
              </div>
            </div>

            <h4>Selected Agents</h4>
            <div className="agent-grid">
              {multiAgentResult.selectedAgents.map((agent) => (
                <div
                  key={agent}
                  className="agent-plan-row"
                  data-testid="multi-agent-selected-agent"
                >
                  <strong>{agent}</strong>
                  <p>{multiAgentResult.supervisorPlan.rationale.join(" ")}</p>
                </div>
              ))}
            </div>

            <h4>Agent Cards</h4>
            <div className="agent-grid">
              {Object.values(multiAgentResult.agentResults).map((agent) => (
                <article
                  key={agent.agentId}
                  className="agent-tool-row"
                  data-testid="multi-agent-agent-card"
                >
                  <p>
                    <strong>{agent.agentType}</strong>
                  </p>
                  <p data-testid="multi-agent-agent-status" className={getStatusClass(agent.status)}>
                    {agent.status}
                  </p>
                  <p data-testid="multi-agent-agent-tools">
                    <strong>Tools:</strong> {agent.toolsUsed.join(", ")}
                  </p>
                  <p data-testid="multi-agent-agent-evidence">
                    <strong>Evidence:</strong> {agent.evidence.length}
                  </p>
                  <p data-testid="multi-agent-agent-confidence">
                    <strong>Confidence:</strong> {agent.confidence.score} ({agent.confidence.band})
                  </p>
                  <p data-testid="multi-agent-agent-findings">
                    <strong>Findings:</strong> {(agent.findings ?? []).join(" | ")}
                  </p>
                  <p data-testid="multi-agent-agent-recommendations">
                    <strong>Recommendations:</strong> {(agent.recommendations ?? []).join(" | ")}
                  </p>
                </article>
              ))}
            </div>

            <h4>Evidence</h4>
            <div className="agent-evidence-grid">
              {multiAgentResult.evidence.map((item) => (
                <div key={item.evidenceId} className="agent-evidence-row" data-testid="multi-agent-evidence">
                  <p>
                    <strong>Source:</strong> {item.sourceSystem}:{item.sourceId}
                  </p>
                  <p>
                    <strong>Type:</strong> {item.sourceType}
                  </p>
                  <p>
                    <strong>Score:</strong> {item.score}
                  </p>
                  <p>
                    <strong>Citation:</strong> {item.citation}
                  </p>
                  <p>
                    <strong>Agent:</strong> {item.agentId}
                  </p>
                </div>
              ))}
            </div>

            <h4>Conflicts</h4>
            {multiAgentResult.conflicts.length ? (
              multiAgentResult.conflicts.map((conflict) => (
                <p key={conflict.conflictId} data-testid="multi-agent-conflict">
                  {conflict.type}: {conflict.description} ({conflict.resolutionStatus})
                </p>
              ))
            ) : (
              <p data-testid="multi-agent-conflict">No conflicts detected.</p>
            )}

            <div data-testid="multi-agent-final-response">
              <h4>Final Response</h4>
              <pre className="agent-response-text">{multiAgentResult.finalResponse?.answer ?? "N/A"}</pre>
              <p data-testid="multi-agent-final-confidence">
                <strong>Confidence:</strong> {multiAgentResult.confidence.score} ({multiAgentResult.confidence.band})
              </p>
              {multiAgentResult.citations.map((item, index) => (
                <p
                  key={`${item.sourceSystem}-${item.sourceId}-${index}`}
                  data-testid="multi-agent-citation"
                >
                  {item.sourceSystem}:{item.sourceId}
                </p>
              ))}
            </div>

            <div data-testid="multi-agent-audit">
              <h4>Audit</h4>
              <p>
                <strong>Run:</strong> {multiAgentResult.auditMetadata.multiAgentRunId}
              </p>
              <p>
                <strong>Agent Task IDs:</strong> {multiAgentResult.auditMetadata.agentTaskIds.join(", ") || "none"}
              </p>
              <p>
                <strong>MCP Request IDs:</strong> {multiAgentResult.auditMetadata.mcpRequestIds.join(", ") || "none"}
              </p>
            </div>
          </>
        ) : null}
      </article>
    </section>
  );
}
