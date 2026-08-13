import { useLocation, useNavigate } from "react-router-dom";

export function UnauthorizedPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const attempted =
    (location.state as { attempted?: string } | null)?.attempted ?? "unknown route";

  return (
    <section className="state-panel error" data-testid="page-unauthorized-root">
      <h1>Unauthorized</h1>
      <p>You do not have access to: {attempted}</p>
      <button
        type="button"
        className="btn primary"
        onClick={() => navigate("/dashboard")}
        data-testid="unauthorized-back-dashboard"
      >
        Back to Dashboard
      </button>
    </section>
  );
}

