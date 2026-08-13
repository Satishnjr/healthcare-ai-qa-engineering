import { PageTitle } from "../components/common/page-title";
import { confluenceSpaces } from "../data/jira-confluence-data";

export function ConfluenceSpacesPage() {
  return (
    <section data-testid="page-confluence-spaces-root">
      <PageTitle
        title="Confluence Spaces"
        subtitle="Synthetic enterprise spaces for product, QA, AI, automation, and release knowledge."
      />

      <article className="card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Space Key</th>
              <th>Space Name</th>
              <th>Description</th>
              <th>Page Count</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {confluenceSpaces.map((space) => (
              <tr key={space.spaceKey} data-testid={`confluence-space-${space.spaceKey}`}>
                <td>{space.spaceKey}</td>
                <td>{space.name}</td>
                <td>{space.description}</td>
                <td>{space.pageCount}</td>
                <td>{space.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
