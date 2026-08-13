import { Link } from "react-router-dom";
import { PageTitle } from "../components/common/page-title";
import {
  aiStatusPanel,
  jiraDefects,
  jiraIssues,
  jiraMetrics,
} from "../data/jira-confluence-data";

export function JiraDashboardPage() {
  const highPriorityDefects = jiraDefects.filter(
    (defect) => defect.priority === "High" || defect.priority === "Critical",
  );
  const recentIssues = [...jiraIssues]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 4);
  const activeSprintIssues = jiraIssues.filter((issue) => issue.sprint === "CFH-Sprint-14");
  const updatedStories = jiraIssues.filter((issue) => issue.issueType === "Story").slice(0, 3);
  const aiCandidates = jiraIssues.filter(
    (issue) => issue.aiClassification === "AI_ASSISTED_AUTOMATION" || issue.aiClassification === "AI_AGENT_CANDIDATE",
  );

  return (
    <section data-testid="page-jira-dashboard-root">
      <PageTitle
        title="Jira QA Dashboard"
        subtitle="Deterministic Jira-style simulation for enterprise QA visibility."
      />

      <div className="kpi-grid" data-testid="jira-dashboard" aria-label="Jira KPI metrics">
        <article className="kpi-card">
          <p className="kpi-label">Total Issues</p>
          <p className="kpi-value">{jiraMetrics.totalIssues}</p>
        </article>
        <article className="kpi-card">
          <p className="kpi-label">Epics</p>
          <p className="kpi-value">{jiraMetrics.epics}</p>
        </article>
        <article className="kpi-card">
          <p className="kpi-label">User Stories</p>
          <p className="kpi-value">{jiraMetrics.userStories}</p>
        </article>
        <article className="kpi-card">
          <p className="kpi-label">Test Cases</p>
          <p className="kpi-value">{jiraMetrics.testCases}</p>
        </article>
        <article className="kpi-card">
          <p className="kpi-label">Defects</p>
          <p className="kpi-value">{jiraMetrics.defects}</p>
        </article>
        <article className="kpi-card">
          <p className="kpi-label">Open Defects</p>
          <p className="kpi-value">{jiraMetrics.openDefects}</p>
        </article>
        <article className="kpi-card">
          <p className="kpi-label">Closed Defects</p>
          <p className="kpi-value">{jiraMetrics.closedDefects}</p>
        </article>
        <article className="kpi-card">
          <p className="kpi-label">Sprint Progress</p>
          <p className="kpi-value">{jiraMetrics.sprintProgress}%</p>
        </article>
      </div>

      <div className="grid-two">
        <article className="card" data-testid="ai-status-panel">
          <h3>AI-Ready Status</h3>
          <dl className="definition-grid">
            <dt>Automation Classification</dt>
            <dd>{aiStatusPanel.automationClassification}</dd>
            <dt>AI Analysis Status</dt>
            <dd>{aiStatusPanel.aiAnalysisStatus}</dd>
            <dt>RAG Status</dt>
            <dd>{aiStatusPanel.ragKnowledgeStatus}</dd>
            <dt>MCP Status</dt>
            <dd>{aiStatusPanel.mcpStatus}</dd>
            <dt>Agent Status</dt>
            <dd>{aiStatusPanel.agentCandidate}</dd>
            <dt>Evaluation Status</dt>
            <dd>{aiStatusPanel.evaluationStatus}</dd>
            <dt>Observability</dt>
            <dd>{aiStatusPanel.observabilityStatus}</dd>
          </dl>
          <p className="hint">Foundation only: runtime AI execution is intentionally not implemented in Step 4.1.</p>
        </article>

        <article className="card">
          <h3>Coverage and Readiness</h3>
          <ul className="dashboard-list">
            <li>Automation coverage: {jiraMetrics.automationCoverage}%</li>
            <li>Regression coverage: {jiraMetrics.regressionCoverage}%</li>
            <li>AI candidate tests: {jiraMetrics.aiCandidateTests}</li>
            <li>AI agent candidate tests: {jiraMetrics.aiAgentCandidateTests}</li>
            <li>Active sprint issues: {activeSprintIssues.length}</li>
          </ul>
        </article>
      </div>

      <div className="grid-two">
        <article className="card">
          <h3>Recent Issues</h3>
          <ul className="dashboard-list">
            {recentIssues.map((issue) => (
              <li key={issue.issueKey}>
                <Link to={`/jira/issues/${issue.issueKey}`} data-testid={`jira-issue-row-${issue.issueKey}`}>
                  {issue.issueKey} - {issue.summary}
                </Link>
              </li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>High Priority Defects</h3>
          <ul className="dashboard-list">
            {highPriorityDefects.map((defect) => (
              <li key={defect.defectId}>
                {defect.defectId} - {defect.summary}
              </li>
            ))}
            {highPriorityDefects.length === 0 ? <li>No high priority defects.</li> : null}
          </ul>
        </article>
      </div>

      <div className="grid-two">
        <article className="card">
          <h3>Recently Updated Stories</h3>
          <ul className="dashboard-list">
            {updatedStories.map((story) => (
              <li key={story.issueKey}>{story.issueKey} - {story.summary}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>AI Automation Candidates</h3>
          <ul className="dashboard-list">
            {aiCandidates.map((issue) => (
              <li key={issue.issueKey}>{issue.issueKey} - {issue.aiClassification}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
