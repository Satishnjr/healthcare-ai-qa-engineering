import { useMemo, useState } from "react";
import { PageTitle } from "../components/common/page-title";
import { runAgentTaskDemo } from "../services/agent-client";
import { runGraphDemo } from "../services/agent-graph-client";
import { useAppState } from "../state/app-context";
import type { AgentGraphState, AgentRuntimeResponse } from "../types/agent";

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
    } catch (reason) {
      setError(
        reason instanceof Error ? reason.message : "Failed to run deterministic agent demo.",
      );
      setResult(null);
      setGraphResult(null);
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

  return (
    <section data-testid="agent-page">
      <PageTitle
        title="AI Agent Runtime"
        subtitle="Step 8 single-agent deterministic runtime using Step 7 MCP tools."
      />

      <article className="card">
        <h3>Agent Chat / Task Input</h3>
        <label htmlFor="agent-task-input">Task</label>
        <textarea
          id="agent-task-input"
          data-testid="agent-task-input"
          rows={3}
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
        />
        <button
          type="button"
          className="btn primary"
          data-testid="agent-task-submit"
          disabled={isRunning}
          onClick={runTask}
        >
          {isRunning ? "Running..." : "Submit"}
        </button>
      </article>

      {error ? (
        <article className="card">
          <p className="error-text">{error}</p>
        </article>
      ) : null}

      {taskAnalysis ? (
        <article className="card">
          <h3>Task Analysis</h3>
          <p data-testid="agent-task-type">
            <strong>Task Type:</strong> {taskAnalysis.taskType}
          </p>
          <p data-testid="agent-task-confidence">
            <strong>Task Confidence:</strong> {taskAnalysis.taskConfidence}
          </p>
          <p>
            <strong>Entities:</strong>{" "}
            {taskAnalysis.entities.length ? taskAnalysis.entities.join(", ") : "none"}
          </p>
        </article>
      ) : null}

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
              <p data-testid="agent-tool-name">
                <strong>Tool:</strong> {call.tool}
              </p>
              <p data-testid="agent-tool-status">
                <strong>Status:</strong> {call.status}
              </p>
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

      {result ? (
        <article className="card">
          <h3>Evidence</h3>
          {result.evidence.map((item) => (
            <div key={item.evidenceId} data-testid="agent-evidence" className="agent-evidence-row">
              <p data-testid="agent-evidence-source">
                <strong>Source:</strong> {item.sourceSystem}:{item.sourceId}
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
        </article>
      ) : null}

      {result ? (
        <article className="card" data-testid="agent-response">
          <h3>Final Response</h3>
          <p data-testid="agent-status">
            <strong>Status:</strong> {result.status}
          </p>
          <pre>{result.answer}</pre>
          <p data-testid="agent-confidence">
            <strong>Confidence:</strong> {result.confidence.score} ({result.confidence.band})
          </p>
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
          <h3>LangGraph Orchestration</h3>
          <p data-testid="agent-graph-run-id">
            <strong>Graph Run ID:</strong> {graphResult?.graphRunId ?? "Not started"}
          </p>
          <p data-testid="agent-graph-current-node">
            <strong>Current Node:</strong> {graphResult?.currentNode ?? "START"}
          </p>
          <p data-testid="agent-graph-confidence">
            <strong>Confidence:</strong>{" "}
            {graphResult ? `${graphResult.confidence.score} (${graphResult.confidence.band})` : "0 (VERY_LOW)"}
          </p>
          <p data-testid="agent-graph-approval">
            <strong>Approval:</strong> {graphResult?.approvalStatus ?? "NOT_REQUIRED"}
          </p>

          <h4>Node Timeline</h4>
          {(graphResult?.nodeHistory ?? []).map((node, index) => (
            <div key={`${node.node}-${index}`} className="agent-plan-row" data-testid="agent-graph-node">
              <p>
                <strong>{node.node}</strong>
              </p>
              <p data-testid="agent-graph-node-status">{node.status}</p>
            </div>
          ))}

          <h4>Transitions</h4>
          {(graphResult?.transitionHistory ?? []).map((transition, index) => (
            <p key={`${transition.from}-${transition.to}-${index}`} data-testid="agent-graph-transition">
              {transition.from}
              {" -> "}
              {transition.to} ({transition.reason})
            </p>
          ))}

          <h4>MCP Tool Calls</h4>
          {(graphResult?.toolCalls ?? []).map((call) => (
            <div key={`graph-${call.requestId}`} className="agent-tool-row" data-testid="agent-graph-tool-call">
              <p data-testid="agent-graph-tool-name">{call.tool}</p>
              <p data-testid="agent-graph-tool-status">{call.status}</p>
            </div>
          ))}

          <h4>Evidence</h4>
          {(graphResult?.evidence ?? []).map((item) => (
            <p key={item.evidenceId} data-testid="agent-graph-evidence">
              {item.sourceSystem}:{item.sourceId} ({item.score})
            </p>
          ))}

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
              <pre>{graphResult.response.answer}</pre>
            </div>
          ) : null}

          {graphResult?.errors?.length ? (
            <div>
              {graphResult.errors.map((error, index) => (
                <p key={`${error.code}-${index}`} data-testid="agent-graph-error">
                  {error.code}: {error.message}
                </p>
              ))}
            </div>
          ) : <p data-testid="agent-graph-error">No graph errors recorded.</p>}
        </article>
    </section>
  );
}
