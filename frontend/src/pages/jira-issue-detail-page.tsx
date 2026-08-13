import { Link, useParams } from "react-router-dom";
import { PageTitle } from "../components/common/page-title";
import { EmptyState } from "../components/common/state-panel";
import { confluencePages, jiraDefects, jiraIssues } from "../data/jira-confluence-data";

export function JiraIssueDetailPage() {
  const { issueKey } = useParams<{ issueKey: string }>();
  const issue = jiraIssues.find((entry) => entry.issueKey === issueKey);

  if (!issue) {
    return (
      <section data-testid="page-jira-issue-detail-root">
        <EmptyState title="Issue not found" message={`No synthetic issue found for key ${issueKey ?? "unknown"}.`} />
      </section>
    );
  }

  const relatedDefects = jiraDefects.filter(
    (defect) => defect.linkedUserStory === issue.traceabilityIds[0] || issue.linkedIssues.includes(defect.defectId),
  );
  const linkedConfluencePage = confluencePages.find((page) => page.relatedJiraIssues.includes(issue.issueKey));

  return (
    <section data-testid="page-jira-issue-detail-root">
      <PageTitle title={`Jira Issue ${issue.issueKey}`} subtitle={issue.summary} />

      <article className="card" data-testid="jira-issue-detail">
        <div className="grid-two">
          <dl className="definition-grid">
            <dt>Issue Key</dt>
            <dd>{issue.issueKey}</dd>
            <dt>Issue Type</dt>
            <dd>{issue.issueType}</dd>
            <dt>Status</dt>
            <dd>{issue.status}</dd>
            <dt>Priority</dt>
            <dd>{issue.priority}</dd>
            <dt>Assignee</dt>
            <dd>{issue.assignee}</dd>
            <dt>Reporter</dt>
            <dd>{issue.reporter}</dd>
            <dt>Sprint</dt>
            <dd>{issue.sprint}</dd>
            <dt>Release</dt>
            <dd>{issue.release}</dd>
          </dl>
          <dl className="definition-grid">
            <dt>Components</dt>
            <dd>{issue.components.join(", ")}</dd>
            <dt>Labels</dt>
            <dd>{issue.labels.join(", ")}</dd>
            <dt>Automation Status</dt>
            <dd>{issue.automationStatus}</dd>
            <dt>AI Classification</dt>
            <dd>{issue.aiClassification}</dd>
            <dt>AI Confidence</dt>
            <dd>{Math.round(issue.aiConfidence * 100)}%</dd>
            <dt>Updated</dt>
            <dd>{new Date(issue.updatedAt).toLocaleString()}</dd>
          </dl>
        </div>

        <h3>Description</h3>
        <p>{issue.description}</p>

        <h3>Acceptance Criteria</h3>
        <ul className="dashboard-list">
          {issue.acceptanceCriteria.map((criteria) => (
            <li key={criteria}>{criteria}</li>
          ))}
        </ul>

        <h3>Traceability and QA Chain</h3>
        <div className="traceability-chain" data-testid="jira-issue-traceability">
          <span>{issue.issueKey}</span>
          <span>Acceptance Criteria: {issue.acceptanceCriteria.join(", ")}</span>
          <span>Test Scenarios: {issue.testScenarioIds.join(", ")}</span>
          <span>Test Cases: {issue.testCaseIds.join(", ")}</span>
          <span>Test Data: TD-PATIENT-BASE-001</span>
          <span>BDD: BDD-STEP41-003</span>
          <span>Automation Result: EXEC-STEP41-001</span>
          <span>RAG Knowledge: RAG-{issue.traceabilityIds[0]}</span>
        </div>

        <h3>Linked Issues</h3>
        <ul className="dashboard-list">
          {issue.linkedIssues.length === 0 ? <li>No linked issues.</li> : null}
          {issue.linkedIssues.map((linked) => (
            <li key={linked}>{linked}</li>
          ))}
        </ul>

        <h3>Defects</h3>
        <ul className="dashboard-list">
          {relatedDefects.length === 0 ? <li>No linked defects.</li> : null}
          {relatedDefects.map((defect) => (
            <li key={defect.defectId}>{defect.defectId} - {defect.summary}</li>
          ))}
        </ul>

        <h3>Confluence Knowledge Page</h3>
        {linkedConfluencePage ? (
          <p>
            <Link
              to={`/confluence/pages/${linkedConfluencePage.pageId}`}
              data-testid="jira-linked-confluence-page"
            >
              {linkedConfluencePage.spaceKey} / {linkedConfluencePage.title}
            </Link>
          </p>
        ) : (
          <p>No linked Confluence page.</p>
        )}
      </article>
    </section>
  );
}
