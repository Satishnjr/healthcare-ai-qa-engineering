import { EmptyState, LoadingState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";

export function MedicalRecordsPage() {
  const loading = useSimulatedLoad();
  const { patients } = useAppState();

  if (loading) {
    return <LoadingState label="Loading medical records..." />;
  }
  if (patients.length === 0) {
    return <EmptyState title="No records" message="No medical records available." />;
  }

  return (
    <section data-testid="page-medical-records-root">
      <PageTitle title="Medical Records" subtitle="Simulated records visibility by role" />
      <div className="card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Record Type</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((entry, index) => (
              <tr key={entry.id} data-testid={`medical-record-row-${entry.id}`}>
                <td>{entry.id}</td>
                <td>
                  {entry.firstName} {entry.lastName}
                </td>
                <td>{index % 2 === 0 ? "Visit Summary" : "Lab Snapshot"}</td>
                <td>2026-08-{String(index + 10).padStart(2, "0")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

