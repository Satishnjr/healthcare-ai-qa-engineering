import { useMemo, useState } from "react";
import { PageTitle } from "../components/common/page-title";
import {
  classificationFilterValues,
  jiraIssues,
} from "../data/jira-confluence-data";

export function JiraTestCasesPage() {
  const [classificationFilter, setClassificationFilter] = useState("ALL");

  const testCases = useMemo(
    () => jiraIssues.filter((issue) => issue.issueType === "Test Case" || issue.testCaseIds.length > 0),
    [],
  );

  const filtered = useMemo(
    () =>
      testCases.filter(
        (item) =>
          classificationFilter === "ALL" || item.aiClassification === classificationFilter,
      ),
    [classificationFilter, testCases],
  );

  return (
    <section data-testid="page-jira-test-cases-root">
      <PageTitle
        title="Jira Test Cases"
        subtitle="Classification-driven test-case management with AI-ready metadata."
      />

      <article className="card">
        <label htmlFor="jira-testcase-classification">
          AI Classification Filter
          <select
            id="jira-testcase-classification"
            value={classificationFilter}
            onChange={(event) => setClassificationFilter(event.target.value)}
          >
            <option value="ALL">All</option>
            {classificationFilterValues.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </article>

      <article className="card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Test Case ID</th>
              <th>Title</th>
              <th>Scenario</th>
              <th>Priority</th>
              <th>Type</th>
              <th>Test Data</th>
              <th>Automation Status</th>
              <th>AI Classification</th>
              <th>Last Execution</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((issue) => (
              <tr key={issue.issueKey}>
                <td>{issue.testCaseIds[0] ?? issue.issueKey}</td>
                <td>{issue.summary}</td>
                <td>{issue.testScenarioIds.join(", ") || "N/A"}</td>
                <td>{issue.priority}</td>
                <td>{issue.issueType}</td>
                <td>TD-PATIENT-BASE-001</td>
                <td>{issue.automationStatus}</td>
                <td>{issue.aiClassification}</td>
                <td>{new Date(issue.updatedAt).toLocaleDateString()}</td>
                <td>{issue.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
