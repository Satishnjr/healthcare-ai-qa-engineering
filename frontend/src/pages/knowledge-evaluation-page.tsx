import { useEffect, useMemo, useState } from "react";
import { PageTitle } from "../components/common/page-title";
import {
  loadLatestRagEvaluationComparison,
  loadLatestRagEvaluationRun,
} from "../services/rag-client";
import type {
  RagEvaluationCaseResult,
  RagEvaluationComparison,
  RagEvaluationRun,
} from "../types/rag";

function toPercent(score: number) {
  return `${Math.round(score * 100)}%`;
}

export function KnowledgeEvaluationPage() {
  const [run, setRun] = useState<RagEvaluationRun | null>(null);
  const [error, setError] = useState("");
  const [selectedCase, setSelectedCase] = useState<RagEvaluationCaseResult | null>(null);
  const [comparison, setComparison] = useState<RagEvaluationComparison | null>(null);

  useEffect(() => {
    let mounted = true;
    loadLatestRagEvaluationRun()
      .then((result) => {
        if (!mounted) {
          return;
        }
        setRun(result);
        setSelectedCase(result.results.find((item) => item.status === "FAIL") ?? result.results[0] ?? null);
      })
      .catch((reason) => {
        if (!mounted) {
          return;
        }
        setError(reason instanceof Error ? reason.message : "Unable to load evaluation run.");
      });
    loadLatestRagEvaluationComparison().then((value) => {
      if (!mounted) {
        return;
      }
      setComparison(value);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const failedCases = useMemo(
    () => (run ? run.results.filter((item) => item.status === "FAIL") : []),
    [run],
  );

  return (
    <section data-testid="rag-evaluation-page">
      <PageTitle
        title="RAG Evaluation Dashboard"
        subtitle="Deterministic Step 6 RAG quality metrics, gate status, and failed-case analysis."
      />

      {error ? (
        <article className="card">
          <p className="error-text" role="alert">
            {error}
          </p>
        </article>
      ) : null}

      {!run && !error ? (
        <article className="card">
          <p className="hint">Loading latest evaluation run...</p>
        </article>
      ) : null}

      {run ? (
        <article className="card" data-testid="rag-evaluation-run">
          <h3>Latest Evaluation Run</h3>
          <p>Run ID: {run.runId}</p>
          <p>Dataset: {run.datasetId} ({run.datasetVersion})</p>
          <p>Total Cases: {run.totalCases}</p>
          <p>Passed: {run.passedCases} | Warn: {run.warnCases} | Failed: {run.failedCases}</p>
          <p>
            Quality Gate:{" "}
            <strong data-testid="rag-evaluation-quality-gate">{run.qualityGate.status}</strong>
          </p>
          <p>
            Overall Score:{" "}
            <strong data-testid="rag-evaluation-overall-score">
              {toPercent(run.metrics.overallScore)}
            </strong>
          </p>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <th>Context Precision</th>
                  <td data-testid="rag-evaluation-context-precision">{toPercent(run.metrics.contextPrecision)}</td>
                </tr>
                <tr>
                  <th>Context Recall</th>
                  <td data-testid="rag-evaluation-context-recall">{toPercent(run.metrics.contextRecall)}</td>
                </tr>
                <tr>
                  <th>Faithfulness</th>
                  <td data-testid="rag-evaluation-faithfulness">{toPercent(run.metrics.faithfulness)}</td>
                </tr>
                <tr>
                  <th>Answer Relevance</th>
                  <td data-testid="rag-evaluation-answer-relevance">{toPercent(run.metrics.answerRelevance)}</td>
                </tr>
                <tr>
                  <th>Groundedness</th>
                  <td data-testid="rag-evaluation-groundedness">{toPercent(run.metrics.groundedness)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      ) : null}

      {comparison ? (
        <article className="card">
          <h3>Run Comparison</h3>
          <p><strong>Trend:</strong> {comparison.trend}</p>
          <p><strong>Pass Delta:</strong> {comparison.passDelta}</p>
          <p><strong>Fail Delta:</strong> {comparison.failDelta}</p>
        </article>
      ) : null}

      {run ? (
        <article className="card">
          <h3>Failed Cases</h3>
          {failedCases.length === 0 ? <p className="hint">No failed cases in latest run.</p> : null}
          <ul className="dashboard-list">
            {failedCases.map((item) => (
              <li key={item.caseId} data-testid="rag-evaluation-failed-case">
                <button
                  type="button"
                  className="btn secondary"
                  onClick={() => setSelectedCase(item)}
                >
                  {item.caseId} - {item.failureCategory}
                </button>
              </li>
            ))}
          </ul>
        </article>
      ) : null}

      {selectedCase ? (
        <article className="card" data-testid="rag-evaluation-case-detail">
          <h3>Evaluation Case Detail</h3>
          <p><strong>Case:</strong> {selectedCase.caseId}</p>
          <p><strong>Role:</strong> {selectedCase.role}</p>
          <p><strong>Category:</strong> {selectedCase.category}</p>
          <p><strong>Question:</strong> {selectedCase.question}</p>
          <p><strong>Expected Sources:</strong> {selectedCase.expectedSources.join(", ") || "N/A"}</p>
          <p><strong>Retrieved Sources:</strong> {selectedCase.retrievedSources.join(", ") || "N/A"}</p>
          <p><strong>Expected Answer:</strong> {selectedCase.expectedAnswer}</p>
          <p><strong>Generated Answer:</strong> {selectedCase.answer}</p>
          <p><strong>Failure Category:</strong> {selectedCase.failureCategory ?? "N/A"}</p>
          <p><strong>Warnings:</strong> {selectedCase.warnings.join(", ") || "None"}</p>
        </article>
      ) : null}
    </section>
  );
}
