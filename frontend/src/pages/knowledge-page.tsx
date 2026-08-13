import { PageTitle } from "../components/common/page-title";
import {
  aiConceptStatuses,
  ragKnowledgeDocuments,
} from "../data/jira-confluence-data";

export function KnowledgePage() {
  return (
    <section data-testid="page-knowledge-root">
      <PageTitle
        title="RAG Knowledge Explorer"
        subtitle="RAG-ready document readiness and metadata completeness dashboard."
      />

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
        <h3>AI Industry Concepts (Step 4.1 UI Relevance)</h3>
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
