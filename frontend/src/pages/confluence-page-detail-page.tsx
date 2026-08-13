import { Link, useParams } from "react-router-dom";
import { EmptyState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { confluencePages } from "../data/jira-confluence-data";

export function ConfluencePageDetailPage() {
  const { pageId } = useParams<{ pageId: string }>();
  const page = confluencePages.find((entry) => entry.pageId === pageId);

  if (!page) {
    return (
      <section data-testid="page-confluence-page-detail-root">
        <EmptyState title="Page not found" message={`No synthetic page found for ${pageId ?? "unknown"}.`} />
      </section>
    );
  }

  return (
    <section data-testid="page-confluence-page-detail-root">
      <PageTitle title={page.title} subtitle={`Space ${page.spaceKey} | Version ${page.version}`} />

      <article className="card" data-testid="confluence-page">
        <p className="hint">Breadcrumb: {page.spaceKey} / Knowledge / {page.title}</p>
        <p>{page.content}</p>

        <h3>Related Jira Issues</h3>
        <ul className="dashboard-list">
          {page.relatedJiraIssues.map((issueKey) => (
            <li key={issueKey}>
              <Link to={`/jira/issues/${issueKey}`}>{issueKey}</Link>
            </li>
          ))}
        </ul>

        <h3>Related Test Cases</h3>
        <ul className="dashboard-list">
          {page.relatedTestCases.map((testCaseId) => (
            <li key={testCaseId}>{testCaseId}</li>
          ))}
        </ul>

        <h3>Related Test Data</h3>
        <ul className="dashboard-list">
          {page.relatedTestData.map((testDataId) => (
            <li key={testDataId}>{testDataId}</li>
          ))}
        </ul>

        <h3>Traceability IDs</h3>
        <p>{page.traceabilityIds.join(", ")}</p>
      </article>

      <aside className="card" data-testid="confluence-page-metadata">
        <h3>Knowledge Metadata Panel</h3>
        <dl className="definition-grid">
          <dt>documentId</dt>
          <dd>{page.documentId}</dd>
          <dt>sourceSystem</dt>
          <dd>{page.sourceSystem}</dd>
          <dt>sourceId</dt>
          <dd>{page.sourceId}</dd>
          <dt>traceabilityIds</dt>
          <dd>{page.traceabilityIds.join(", ")}</dd>
          <dt>labels</dt>
          <dd>{page.labels.join(", ")}</dd>
          <dt>version</dt>
          <dd>{page.version}</dd>
          <dt>timestamp</dt>
          <dd>{page.timestamp}</dd>
          <dt>accessScope</dt>
          <dd>{page.accessScope}</dd>
          <dt>sensitivity</dt>
          <dd>{page.sensitivity}</dd>
          <dt>checksum</dt>
          <dd>{page.checksum}</dd>
        </dl>
      </aside>
    </section>
  );
}
