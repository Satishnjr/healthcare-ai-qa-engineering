import { PageTitle } from "../components/common/page-title";
import { useAppState } from "../state/app-context";

export function ReportsPage() {
  const { appointments, claims, patients } = useAppState();
  const cancelled = appointments.filter((entry) => entry.status === "CANCELLED").length;
  const openClaims = claims.filter((entry) => entry.status === "OPEN").length;

  return (
    <section data-testid="page-reports-root">
      <PageTitle title="Reports" subtitle="Synthetic operational summary metrics" />
      <div className="grid-cards">
        <article className="card">
          <h3>Patient Volume</h3>
          <p>{patients.length}</p>
        </article>
        <article className="card">
          <h3>Appointment Cancellations</h3>
          <p>{cancelled}</p>
        </article>
        <article className="card">
          <h3>Open Claims</h3>
          <p>{openClaims}</p>
        </article>
      </div>
      <article className="card">
        <h3>Report Scope Note</h3>
        <p>
          This report is generated from deterministic frontend mock data only. No real backend
          or external analytics integration exists in this step.
        </p>
      </article>
    </section>
  );
}

