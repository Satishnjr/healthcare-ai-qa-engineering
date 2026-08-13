import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../components/common/page-title";
import { confluencePages } from "../data/jira-confluence-data";

export function ConfluenceSearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (!text) {
      return confluencePages;
    }
    return confluencePages.filter((page) =>
      `${page.title} ${page.content} ${page.labels.join(" ")} ${page.relatedJiraIssues.join(" ")}`
        .toLowerCase()
        .includes(text),
    );
  }, [query]);

  return (
    <section data-testid="page-confluence-search-root">
      <PageTitle title="Confluence Search" subtitle="Search knowledge pages by text, labels, and linked Jira issues." />

      <article className="card" data-testid="confluence-search">
        <label htmlFor="confluence-search-input">
          Search Knowledge
          <input
            id="confluence-search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title, content, labels, issue keys"
          />
        </label>
      </article>

      <article className="card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Space</th>
              <th>Labels</th>
              <th>Related Jira</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {results.map((page) => (
              <tr key={page.pageId}>
                <td>
                  <Link to={`/confluence/pages/${page.pageId}`}>{page.title}</Link>
                </td>
                <td>{page.spaceKey}</td>
                <td>{page.labels.join(", ")}</td>
                <td>{page.relatedJiraIssues.join(", ")}</td>
                <td>{new Date(page.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
