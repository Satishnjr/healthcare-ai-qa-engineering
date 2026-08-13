import { EmptyState, LoadingState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { StatusBadge } from "../components/common/status-badge";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";
import { patientName } from "../utils/lookup";

export function PrescriptionsPage() {
  const loading = useSimulatedLoad();
  const { prescriptions, patients } = useAppState();

  if (loading) {
    return <LoadingState label="Loading prescriptions..." />;
  }
  if (prescriptions.length === 0) {
    return <EmptyState title="No prescriptions" message="No prescription records available." />;
  }

  return (
    <section data-testid="page-prescriptions-root">
      <PageTitle title="Prescriptions" subtitle="Medication and dosage visibility by role" />
      <div className="card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Medication</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((entry) => (
              <tr key={entry.id} data-testid={`prescription-row-${entry.id}`}>
                <td>{entry.id}</td>
                <td>{patientName(patients, entry.patientId)}</td>
                <td>{entry.medication}</td>
                <td>{entry.dosage}</td>
                <td>{entry.frequency}</td>
                <td>
                  <StatusBadge status={entry.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

