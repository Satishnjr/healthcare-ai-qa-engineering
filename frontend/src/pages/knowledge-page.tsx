import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../components/common/page-title";
import {
  aiConceptStatuses,
  ragKnowledgeDocuments,
} from "../data/jira-confluence-data";
import { queryRagKnowledge } from "../services/rag-client";
import { useAppState } from "../state/app-context";
import type { RagQueryResponse } from "../types/rag";

export function KnowledgePage() {
  const { role } = useAppState();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<RagQueryResponse | null>(null);

  const canQuery = useMemo(() => query.trim().length > 0 && !loading, [loading, query]);

  const handleAskKnowledge = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await queryRagKnowledge({
        query,
        userRole: role,
        topK: 5,
      });
      setResult(response);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unknown RAG query error.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section data-testid="page-knowledge-root">
      <PageTitle
        title="RAG Knowledge Explorer"
        subtitle="RAG-ready document readiness, grounded query response, and citation metadata."
      />
      <article className="card">
        <div className="inline-actions">
          <Link to="/knowledge/evaluation" className="btn secondary" data-testid="open-rag-evaluation">
            Open RAG Evaluation
          </Link>
          <Link to="/mcp" className="btn secondary" data-testid="open-mcp-tools">
            Open MCP Tools
          </Link>
        </div>
      </article>

      <article className="card" data-testid="rag-query-panel">
        <h3>Ask Knowledge</h3>
        <label htmlFor="rag-query-input">
          Knowledge Query
          <input
            id="rag-query-input"
            data-testid="rag-query-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ask about requirements, acceptance criteria, test cases, defects..."
          />
        </label>
        <div className="inline-actions" style={{ marginTop: "10px" }}>
          <button
            type="button"
            className="btn primary"
            data-testid="rag-query-submit"
            onClick={handleAskKnowledge}
            disabled={!canQuery}
          >
            {loading ? "Asking Knowledge..." : "Ask Knowledge"}
          </button>
          <span className="hint">Role context: {role}</span>
        </div>
        {loading ? <p className="hint">Retrieving evidence and assembling context...</p> : null}
        {error ? (
          <p className="error-text" data-testid="rag-error" role="alert">
            {error}
          </p>
        ) : null}
      </article>

      {result ? (
        <article className="card" data-testid="rag-query-result">
          <h3>Grounded Answer</h3>
          <p data-testid="rag-answer" style={{ whiteSpace: "pre-wrap" }}>
            {result.answer}
          </p>
          <p>
            Confidence: <strong data-testid="rag-confidence">{Math.round(result.confidence * 100)}%</strong>
          </p>
          {result.warnings.length > 0 ? (
            <p className="hint" data-testid="rag-no-evidence">
              Warnings: {result.warnings.join(", ")}
            </p>
          ) : null}

          <h3>Citations</h3>
          {result.citations.length === 0 ? <p className="hint">No citations available for this query.</p> : null}
          <ul className="dashboard-list">
            {result.citations.map((citation) => (
              <li key={citation.chunkId} data-testid="rag-source">
                <div>
                  <strong>
                    {citation.sourceSystem}:{citation.sourceId}
                  </strong>{" "}
                  (score {citation.score.toFixed(3)})
                </div>
                <div className="hint">chunkId: {citation.chunkId}</div>
                <div className="hint">documentId: {citation.documentId}</div>
                <div className="hint">traceability: {citation.traceabilityIds.join(", ") || "N/A"}</div>
                <div className="hint">labels: {citation.labels.join(", ") || "N/A"}</div>
                {citation.route ? (
                  <Link to={citation.route} className="btn secondary small" data-testid="rag-citation-open-source">
                    Open Source
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </article>
      ) : null}

      <article className="card table-wrapper" data-testid="knowledge-explorer">
        <table>
          <thead>
            <tr>
              <th>Document ID</th>
              <th>Source</th>
              <th>Title</th>
              <th>Chunk Readiness</th>
              <th>Metadata Completeness</th>
              <th>Access Scope</th>
              <th>Sensitivity</th>
              <th>Traceability IDs</th>
              <th>Ingestion Status</th>
            </tr>
          </thead>
          <tbody>
            {ragKnowledgeDocuments.map((document) => (
              <tr key={document.documentId}>
                <td>{document.documentId}</td>
                <td>{document.source}</td>
                <td>{document.title}</td>
                <td>{document.chunkReadiness}</td>
                <td>{document.metadataCompleteness}</td>
                <td>{document.accessScope}</td>
                <td>{document.sensitivity}</td>
                <td>{document.traceabilityIds.join(", ")}</td>
                <td>{document.ingestionStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article className="card">
        <h3>AI Industry Concepts (Step 5 RAG Runtime Relevance)</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Concept</th>
                <th>Status</th>
                <th>Future Step</th>
                <th>Relevance</th>
                <th>Interview Explanation</th>
              </tr>
            </thead>
            <tbody>
              {aiConceptStatuses.map((item) => (
                <tr key={item.concept}>
                  <td>{item.concept}</td>
                  <td>{item.status}</td>
                  <td>{item.futureStep}</td>
                  <td>{item.relevance}</td>
                  <td>{item.interviewExplanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
