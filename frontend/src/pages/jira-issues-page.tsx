import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../components/common/page-title";
import { jiraIssues } from "../data/jira-confluence-data";

const pageSize = 3;

type SortField = "issueKey" | "priority" | "updatedAt";

export function JiraIssuesPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [priorityFilter, setPriorityFilter] = useState("ALL");
  const [assigneeFilter, setAssigneeFilter] = useState("ALL");
  const [labelFilter, setLabelFilter] = useState("ALL");
  const [sortField, setSortField] = useState<SortField>("updatedAt");
  const [page, setPage] = useState(1);

  const issueTypes = Array.from(new Set(jiraIssues.map((issue) => issue.issueType)));
  const statuses = Array.from(new Set(jiraIssues.map((issue) => issue.status)));
  const priorities = Array.from(new Set(jiraIssues.map((issue) => issue.priority)));
  const assignees = Array.from(new Set(jiraIssues.map((issue) => issue.assignee)));
  const labels = Array.from(new Set(jiraIssues.flatMap((issue) => issue.labels)));

  const filtered = useMemo(() => {
    const text = search.trim().toLowerCase();

    const byFilter = jiraIssues.filter((issue) => {
      if (text) {
        const textMatch = `${issue.issueKey} ${issue.summary} ${issue.description}`.toLowerCase().includes(text);
        if (!textMatch) {
          return false;
        }
      }
      if (typeFilter !== "ALL" && issue.issueType !== typeFilter) {
        return false;
      }
      if (statusFilter !== "ALL" && issue.status !== statusFilter) {
        return false;
      }
      if (priorityFilter !== "ALL" && issue.priority !== priorityFilter) {
        return false;
      }
      if (assigneeFilter !== "ALL" && issue.assignee !== assigneeFilter) {
        return false;
      }
      if (labelFilter !== "ALL" && !issue.labels.includes(labelFilter)) {
        return false;
      }
      return true;
    });

    const sorted = [...byFilter].sort((left, right) => {
      if (sortField === "issueKey") {
        return left.issueKey.localeCompare(right.issueKey);
      }
      if (sortField === "priority") {
        return left.priority.localeCompare(right.priority);
      }
      return right.updatedAt.localeCompare(left.updatedAt);
    });

    return sorted;
  }, [assigneeFilter, labelFilter, priorityFilter, search, sortField, statusFilter, typeFilter]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, pageCount);
  const pageItems = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <section data-testid="page-jira-issues-root">
      <PageTitle title="Jira Issues" subtitle="Search and filter CFH issues across QA workflows." />

      <article className="card">
        <div className="filters-grid">
          <label htmlFor="jira-search">
            Search
            <input
              id="jira-search"
              data-testid="jira-search"
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              placeholder="Search key, summary, description"
            />
          </label>
          <label htmlFor="jira-filter-type">
            Type
            <select
              id="jira-filter-type"
              value={typeFilter}
              onChange={(event) => {
                setTypeFilter(event.target.value);
                setPage(1);
              }}
            >
              <option value="ALL">All</option>
              {issueTypes.map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="jira-filter-status">
            Status
            <select
              id="jira-filter-status"
              data-testid="jira-filter-status"
              value={statusFilter}
              onChange={(event) => {
                setStatusFilter(event.target.value);
                setPage(1);
              }}
            >
              <option value="ALL">All</option>
              {statuses.map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="jira-filter-priority">
            Priority
            <select
              id="jira-filter-priority"
              value={priorityFilter}
              onChange={(event) => {
                setPriorityFilter(event.target.value);
                setPage(1);
              }}
            >
              <option value="ALL">All</option>
              {priorities.map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="jira-filter-assignee">
            Assignee
            <select
              id="jira-filter-assignee"
              value={assigneeFilter}
              onChange={(event) => {
                setAssigneeFilter(event.target.value);
                setPage(1);
              }}
            >
              <option value="ALL">All</option>
              {assignees.map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="jira-filter-label">
            Label
            <select
              id="jira-filter-label"
              value={labelFilter}
              onChange={(event) => {
                setLabelFilter(event.target.value);
                setPage(1);
              }}
            >
              <option value="ALL">All</option>
              {labels.map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="jira-sort">
            Sort By
            <select id="jira-sort" value={sortField} onChange={(event) => setSortField(event.target.value as SortField)}>
              <option value="updatedAt">Updated</option>
              <option value="issueKey">Key</option>
              <option value="priority">Priority</option>
            </select>
          </label>
        </div>
      </article>

      <article className="card table-wrapper" data-testid="jira-issue-list">
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Type</th>
              <th>Summary</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assignee</th>
              <th>Reporter</th>
              <th>Sprint</th>
              <th>Labels</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((issue) => (
              <tr key={issue.issueKey} data-testid={`jira-issue-row-${issue.issueKey}`}>
                <td>
                  <Link to={`/jira/issues/${issue.issueKey}`}>{issue.issueKey}</Link>
                </td>
                <td>{issue.issueType}</td>
                <td>{issue.summary}</td>
                <td>{issue.status}</td>
                <td>{issue.priority}</td>
                <td>{issue.assignee}</td>
                <td>{issue.reporter}</td>
                <td>{issue.sprint}</td>
                <td>{issue.labels.join(", ")}</td>
                <td>{new Date(issue.updatedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {pageItems.length === 0 ? <p className="hint">No issues match the current filters.</p> : null}
        <div className="inline-actions" style={{ marginTop: "12px" }}>
          <button type="button" className="btn secondary small" disabled={safePage <= 1} onClick={() => setPage((prev) => Math.max(1, prev - 1))}>
            Previous
          </button>
          <span aria-live="polite">
            Page {safePage} of {pageCount}
          </span>
          <button
            type="button"
            className="btn secondary small"
            disabled={safePage >= pageCount}
            onClick={() => setPage((prev) => Math.min(pageCount, prev + 1))}
          >
            Next
          </button>
        </div>
      </article>
    </section>
  );
}
