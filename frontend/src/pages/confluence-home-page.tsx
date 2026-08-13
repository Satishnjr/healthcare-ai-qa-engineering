import { Link } from "react-router-dom";
import { PageTitle } from "../components/common/page-title";

const homeCards = [
  "QA Knowledge",
  "Product Documentation",
  "Requirements",
  "Test Strategy",
  "Test Data",
  "Automation",
  "AI QA",
  "RAG",
  "MCP",
  "Agents",
  "Release Knowledge",
  "Interview Knowledge",
];

export function ConfluenceHomePage() {
  return (
    <section data-testid="page-confluence-home-root">
      <PageTitle
        title="Confluence Knowledge Home"
        subtitle="Local Confluence-style knowledge simulation for CareFlow QA engineering."
      />

      <article className="card" data-testid="confluence-home">
        <div className="knowledge-card-grid">
          {homeCards.map((card) => (
            <article key={card} className="knowledge-card">
              <h3>{card}</h3>
              <p className="hint">Governed synthetic content for enterprise QA workflows.</p>
            </article>
          ))}
        </div>

        <div className="inline-actions" style={{ marginTop: "12px" }}>
          <Link className="btn secondary" to="/confluence/spaces">
            Open Spaces
          </Link>
          <Link className="btn secondary" to="/confluence/pages">
            Open Pages
          </Link>
          <Link className="btn secondary" to="/confluence/search">
            Search Knowledge
          </Link>
        </div>
      </article>
    </section>
  );
}
