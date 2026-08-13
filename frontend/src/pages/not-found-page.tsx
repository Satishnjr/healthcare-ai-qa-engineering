import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="state-panel" data-testid="page-not-found-root">
      <h1>Page not found</h1>
      <p>The requested route is not available in this frontend simulation.</p>
      <Link to="/dashboard" className="btn primary" data-testid="not-found-back-dashboard">
        Go to Dashboard
      </Link>
    </section>
  );
}

