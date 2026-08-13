import { PageTitle } from "../components/common/page-title";
import { LoadingState } from "../components/common/state-panel";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";

export function DashboardPage() {
  const loading = useSimulatedLoad();
  const { role, patients, appointments, claims, notifications } = useAppState();

  if (loading) {
    return <LoadingState label="Loading dashboard widgets..." />;
  }

  return (
    <section data-testid="page-dashboard-root">
      <PageTitle title="Dashboard" subtitle="Operational snapshot for selected role" />
      <div className="grid-cards">
        <article className="card" data-testid="dashboard-kpi-card-patients">
          <h3>Total Patients</h3>
          <p>{patients.length}</p>
        </article>
        <article className="card" data-testid="dashboard-kpi-card-appointments">
          <h3>Active Appointments</h3>
          <p>{appointments.filter((item) => item.status !== "CANCELLED").length}</p>
        </article>
        <article className="card" data-testid="dashboard-kpi-card-claims">
          <h3>Open Claims</h3>
          <p>{claims.filter((item) => item.status === "OPEN").length}</p>
        </article>
        <article className="card" data-testid="dashboard-kpi-card-notifications">
          <h3>Unread Notifications</h3>
          <p>
            {
              notifications.filter(
                (item) => !item.read && (item.role === "All" || item.role === role),
              ).length
            }
          </p>
        </article>
      </div>

      <div className="grid-two">
        <article className="card">
          <h3>Quick Actions</h3>
          <ul>
            <li>Create appointment</li>
            <li>Search patient</li>
            <li>Review notifications</li>
          </ul>
        </article>
        <article className="card">
          <h3>Role Context</h3>
          <p>
            You are operating as <strong>{role}</strong>. Navigation and actions are filtered
            by the approved role matrix.
          </p>
        </article>
      </div>
    </section>
  );
}

