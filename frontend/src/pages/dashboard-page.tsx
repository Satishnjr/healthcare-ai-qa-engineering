import { PageTitle } from "../components/common/page-title";
import { LoadingState } from "../components/common/state-panel";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";
import { StatusBadge } from "../components/common/status-badge";
import { patientName, providerName } from "../utils/lookup";

export function DashboardPage() {
  const loading = useSimulatedLoad(180);
  const { role, currentPatientId, patients, appointments, claims, notifications, providers } = useAppState();
  const visiblePatients =
    role === "Patient" && currentPatientId
      ? patients.filter((item) => item.id === currentPatientId)
      : patients;
  const scopedAppointments =
    role === "Patient" && currentPatientId
      ? appointments.filter((item) => item.patientId === currentPatientId)
      : appointments;
  const scopedClaims =
    role === "Patient" && currentPatientId
      ? claims.filter((item) => item.patientId === currentPatientId)
      : claims;
  const unreadCount = notifications.filter(
    (item) => !item.read && (item.role === "All" || item.role === role),
  ).length;
  const activeAppointments = scopedAppointments.filter((item) => item.status !== "CANCELLED");
  const openClaims = scopedClaims.filter((item) => item.status === "OPEN");
  const occupancy = Math.min(95, Math.max(52, activeAppointments.length * 17));
  const erLoad = Math.min(98, 48 + activeAppointments.length * 9);

  if (loading) {
    return <LoadingState label="Loading dashboard widgets..." />;
  }

  return (
    <section data-testid="page-dashboard-root">
      <PageTitle title="Dashboard" subtitle={`Good day. You are viewing the ${role} operational workspace.`} />
      <div className="ops-summary-strip" data-testid="dashboard-ops-strip">
        <article className="ops-summary-card">
          <p>Emergency Queue</p>
          <strong>{erLoad}%</strong>
          <span>Real-time triage pressure</span>
        </article>
        <article className="ops-summary-card">
          <p>Admission Conversion</p>
          <strong>{Math.max(61, occupancy - 9)}%</strong>
          <span>From OPD to bed allocation</span>
        </article>
        <article className="ops-summary-card">
          <p>Claims Turnaround</p>
          <strong>{Math.max(8, 21 - openClaims.length)}h</strong>
          <span>Average processing cycle</span>
        </article>
      </div>

      <div className="kpi-grid" data-testid="dashboard-kpi-grid">
        <article className="kpi-card" data-testid="dashboard-kpi-card-patients">
          <p className="kpi-label">New Patients</p>
          <p className="kpi-value">{visiblePatients.length * 143}</p>
          <p className="kpi-change up">+10.5% from last month</p>
        </article>
        <article className="kpi-card" data-testid="dashboard-kpi-card-appointments">
          <p className="kpi-label">Avg. Treatment Time</p>
          <p className="kpi-value">2.3 hrs</p>
          <p className="kpi-change up">+12.8% workflow efficiency</p>
        </article>
        <article className="kpi-card" data-testid="dashboard-kpi-card-claims">
          <p className="kpi-label">Active Appointments</p>
          <p className="kpi-value">{activeAppointments.length * 241}</p>
          <p className="kpi-change down">-6.4% from baseline</p>
        </article>
        <article className="kpi-card" data-testid="dashboard-kpi-card-notifications">
          <p className="kpi-label">Bed Occupancy</p>
          <p className="kpi-value">{occupancy}%</p>
          <p className="kpi-change down">-1.8% congestion risk</p>
        </article>
      </div>

      <article className="card dashboard-flow-card" data-testid="dashboard-flow-board">
        <div className="flow-head">
          <h3>Universal Patient Flow Board</h3>
          <p>Live operational movement across core care stages.</p>
        </div>
        <div className="flow-grid">
          <div className="flow-column">
            <p className="flow-column-title">OPD</p>
            <p className="flow-column-value">{visiblePatients.length * 121}</p>
            <StatusBadge status="NORMAL" />
            <ul>
              <li>Waiting: 21</li>
              <li>In Process: 18</li>
              <li>Critical Cases: 2</li>
            </ul>
          </div>
          <div className="flow-column">
            <p className="flow-column-title">Triage</p>
            <p className="flow-column-value">{activeAppointments.length * 70}</p>
            <StatusBadge status="MODERATE" />
            <ul>
              <li>Queued Cases: 23</li>
              <li>Critical Flags: 4</li>
              <li>Avg. Wait: 11m</li>
            </ul>
          </div>
          <div className="flow-column">
            <p className="flow-column-title">Admission</p>
            <p className="flow-column-value">{openClaims.length * 181 + 1}</p>
            <StatusBadge status="HIGH_LOAD" />
            <ul>
              <li>Available Beds: 12</li>
              <li>Pending Assignments: 9</li>
              <li>Escalated Cases: 3</li>
            </ul>
          </div>
          <div className="flow-column">
            <p className="flow-column-title">Discharge</p>
            <p className="flow-column-value">{visiblePatients.length * 143 + 2}</p>
            <StatusBadge status="COMPLETED" />
            <ul>
              <li>Today: 31</li>
              <li>Follow-ups Booked: 26</li>
              <li>Pending Billing: 7</li>
            </ul>
          </div>
        </div>
      </article>

      <div className="grid-two dashboard-bottom-grid">
        <article className="card dashboard-panel-card" data-testid="dashboard-appointments-board">
          <header className="panel-header">
            <div>
              <p className="panel-kicker">Clinical Scheduling</p>
              <h3>Upcoming Appointment Board</h3>
            </div>
            <span className="panel-chip">Live</span>
          </header>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Patient</th>
                  <th>Provider</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {activeAppointments.slice(0, 5).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{patientName(visiblePatients, item.patientId)}</td>
                    <td>{providerName(providers, item.providerId)}</td>
                    <td>
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <article className="card dashboard-panel-card" data-testid="dashboard-alerts-panel">
          <header className="panel-header">
            <div>
              <p className="panel-kicker">Operations Signals</p>
              <h3>Alerts and Notifications</h3>
            </div>
            <span className="panel-chip">Unread {unreadCount}</span>
          </header>
          <p className="hint">Unread alerts for current role: {unreadCount}</p>
          <ul className="dashboard-list">
            {notifications
              .filter((item) => item.role === "All" || item.role === role)
              .slice(0, 4)
              .map((item) => (
                <li key={item.id}>
                  <strong>{item.type}:</strong> {item.message}
                </li>
              ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
