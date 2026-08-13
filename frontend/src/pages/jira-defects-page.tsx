import { PageTitle } from "../components/common/page-title";
import { jiraDefects } from "../data/jira-confluence-data";

export function JiraDefectsPage() {
  return (
    <section data-testid="page-jira-defects-root">
      <PageTitle
        title="Jira Defects"
        subtitle="Defect triage and AI failure-analysis readiness view."
      />

      <article className="card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Defect ID</th>
              <th>Summary</th>
              <th>Severity</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Environment</th>
              <th>Linked Test Case</th>
              <th>Linked User Story</th>
              <th>Failure Artifact</th>
              <th>Root Cause</th>
              <th>AI Failure Analysis Status</th>
              <th>Evidence</th>
            </tr>
          </thead>
          <tbody>
            {jiraDefects.map((defect) => (
              <tr key={defect.defectId}>
                <td>{defect.defectId}</td>
                <td>{defect.summary}</td>
                <td>{defect.severity}</td>
                <td>{defect.priority}</td>
                <td>{defect.status}</td>
                <td>{defect.environment}</td>
                <td>{defect.linkedTestCase}</td>
                <td>{defect.linkedUserStory}</td>
                <td>{defect.failureArtifact}</td>
                <td>{defect.rootCause}</td>
                <td>{defect.aiFailureAnalysisStatus}</td>
                <td>{defect.evidence.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="hint">AI analysis is placeholder status only; runtime AI defect analysis is planned in future steps.</p>
      </article>
    </section>
  );
}
