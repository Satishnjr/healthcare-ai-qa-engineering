import { EmptyState, LoadingState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { StatusBadge } from "../components/common/status-badge";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";
import { patientName } from "../utils/lookup";

export function ClaimsPage() {
  const loading = useSimulatedLoad();
  const { claims, patients } = useAppState();

  if (loading) {
    return <LoadingState label="Loading claims..." />;
  }
  if (claims.length === 0) {
    return <EmptyState title="No claims" message="No claim records available." />;
  }

  return (
    <section data-testid="page-claims-root">
      <PageTitle title="Claims" subtitle="Claim lifecycle and status overview" />
      <div className="card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Billing ID</th>
              <th>Status</th>
              <th>Submitted</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((entry) => (
              <tr key={entry.id} data-testid={`claim-row-${entry.id}`}>
                <td>{entry.id}</td>
                <td>{patientName(patients, entry.patientId)}</td>
                <td>{entry.billingId}</td>
                <td>
                  <StatusBadge status={entry.status} />
                </td>
                <td>{entry.submittedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

