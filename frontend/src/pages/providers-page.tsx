import { EmptyState, LoadingState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";

export function ProvidersPage() {
  const loading = useSimulatedLoad();
  const { providers } = useAppState();

  if (loading) {
    return <LoadingState label="Loading providers..." />;
  }
  if (providers.length === 0) {
    return <EmptyState title="No providers" message="No provider records available." />;
  }

  return (
    <section data-testid="page-providers-root">
      <PageTitle title="Provider Management" subtitle="Provider directory and schedule visibility" />
      <div className="card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((entry) => (
              <tr key={entry.id} data-testid={`provider-row-${entry.id}`}>
                <td>{entry.id}</td>
                <td>{entry.name}</td>
                <td>{entry.specialty}</td>
                <td>{entry.availability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

