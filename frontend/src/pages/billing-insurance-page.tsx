import { EmptyState, LoadingState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { StatusBadge } from "../components/common/status-badge";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";
import { patientName } from "../utils/lookup";

export function BillingInsurancePage() {
  const loading = useSimulatedLoad();
  const { billingItems, insuranceItems, patients, role, currentPatientId } = useAppState();
  const visibleBilling =
    role === "Patient" && currentPatientId
      ? billingItems.filter((entry) => entry.patientId === currentPatientId)
      : billingItems;
  const visibleInsurance =
    role === "Patient" && currentPatientId
      ? insuranceItems.filter((entry) => entry.patientId === currentPatientId)
      : insuranceItems;

  if (loading) {
    return <LoadingState label="Loading billing and insurance..." />;
  }
  if (visibleBilling.length === 0 && visibleInsurance.length === 0) {
    return (
      <EmptyState
        title="No billing or insurance data"
        message="No synthetic records available."
      />
    );
  }

  return (
    <section data-testid="page-billing-insurance-root">
      <PageTitle
        title="Billing & Insurance"
        subtitle={role === "Patient" ? "Showing your billing and coverage details only" : "Financial and coverage overview"}
      />
      <div className="grid-two">
        <article className="card table-wrapper">
          <h3>Billing</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {visibleBilling.map((entry) => (
                <tr key={entry.id} data-testid={`billing-row-${entry.id}`}>
                  <td>{entry.id}</td>
                  <td>{patientName(patients, entry.patientId)}</td>
                  <td>${entry.amount.toFixed(2)}</td>
                  <td>
                    <StatusBadge status={entry.status} />
                  </td>
                  <td>{entry.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <article className="card table-wrapper">
          <h3>Insurance</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Provider</th>
                <th>Plan</th>
                <th>Coverage</th>
              </tr>
            </thead>
            <tbody>
              {visibleInsurance.map((entry) => (
                <tr key={entry.id} data-testid={`insurance-row-${entry.id}`}>
                  <td>{entry.id}</td>
                  <td>{patientName(patients, entry.patientId)}</td>
                  <td>{entry.provider}</td>
                  <td>{entry.plan}</td>
                  <td>{entry.coverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
    </section>
  );
}
