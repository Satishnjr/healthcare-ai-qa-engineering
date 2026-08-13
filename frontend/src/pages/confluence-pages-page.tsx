import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../components/common/page-title";
import { confluencePages } from "../data/jira-confluence-data";

export function ConfluencePagesPage() {
  const [search, setSearch] = useState("");
  const [spaceFilter, setSpaceFilter] = useState("ALL");

  const spaces = Array.from(new Set(confluencePages.map((page) => page.spaceKey)));

  const filtered = useMemo(() => {
    const text = search.trim().toLowerCase();
    return confluencePages.filter((page) => {
      if (spaceFilter !== "ALL" && page.spaceKey !== spaceFilter) {
        return false;
      }
      if (!text) {
        return true;
      }
      return `${page.title} ${page.pageId} ${page.labels.join(" ")}`.toLowerCase().includes(text);
    });
  }, [search, spaceFilter]);

  return (
    <section data-testid="page-confluence-pages-root">
      <PageTitle title="Confluence Pages" subtitle="Searchable deterministic page index." />

      <article className="card filters-grid">
        <label htmlFor="confluence-pages-search">
          Search
          <input
            id="confluence-pages-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search title, page id, labels"
          />
        </label>
        <label htmlFor="confluence-pages-space">
          Space
          <select
            id="confluence-pages-space"
            value={spaceFilter}
            onChange={(event) => setSpaceFilter(event.target.value)}
          >
            <option value="ALL">All</option>
            {spaces.map((space) => (
              <option key={space} value={space}>
                {space}
              </option>
            ))}
          </select>
        </label>
      </article>

      <article className="card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Page ID</th>
              <th>Title</th>
              <th>Space</th>
              <th>Labels</th>
              <th>Version</th>
              <th>Author</th>
              <th>Last Updated</th>
              <th>Source System</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((page) => (
              <tr key={page.pageId}>
                <td>
                  <Link to={`/confluence/pages/${page.pageId}`}>{page.pageId}</Link>
                </td>
                <td>{page.title}</td>
                <td>{page.spaceKey}</td>
                <td>{page.labels.join(", ")}</td>
                <td>v{page.version}</td>
                <td>{page.author}</td>
                <td>{new Date(page.timestamp).toLocaleDateString()}</td>
                <td>{page.sourceSystem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
