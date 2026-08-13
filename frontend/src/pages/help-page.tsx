import { PageTitle } from "../components/common/page-title";

export function HelpPage() {
  return (
    <section data-testid="page-help-root">
      <PageTitle title="Help" subtitle="Usage references and support guidance" />
      <article className="card">
        <h3>How to use CareFlow Health (Simulation)</h3>
        <ul>
          <li>Login using role-specific demo credentials.</li>
          <li>Use role switcher to validate role-based navigation behavior.</li>
          <li>Run searches and status filters to validate deterministic UI states.</li>
          <li>Use profile/settings to verify form validation and save feedback flows.</li>
        </ul>
      </article>
      <article className="card">
        <h3>Scope Notice</h3>
        <p>
          This is a frontend-only simulation built for QA and AI engineering workflows. No real
          healthcare systems, APIs, or PHI are used.
        </p>
      </article>
    </section>
  );
}

