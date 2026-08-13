import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { EmptyState, LoadingState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";

export function PatientSearchPage() {
  const loading = useSimulatedLoad();
  const { patients } = useAppState();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (!text) {
      return [];
    }
    return patients.filter((entry) =>
      `${entry.id} ${entry.firstName} ${entry.lastName} ${entry.dateOfBirth} ${entry.phone}`
        .toLowerCase()
        .includes(text),
    );
  }, [patients, query]);

  if (loading) {
    return <LoadingState label="Preparing patient search..." />;
  }

  return (
    <section data-testid="page-patient-search-root">
      <PageTitle title="Patient Search" subtitle="Search by ID, name, DOB, or phone" />
      <div className="card">
        <label htmlFor="patient-search-input">Search Query</label>
        <input
          id="patient-search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="PAT-001, Aarav, 1990-06-12, +1-555..."
          data-testid="patient-search-input"
        />
      </div>
      {query && results.length === 0 ? (
        <EmptyState title="No matching patient" message="No records matched this query." />
      ) : null}
      {results.length > 0 ? (
        <div className="card table-wrapper" data-testid="patient-search-results">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>DOB</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {results.map((entry) => (
                <tr key={entry.id} data-testid={`patient-result-row-${entry.id}`}>
                  <td>{entry.id}</td>
                  <td>
                    {entry.firstName} {entry.lastName}
                  </td>
                  <td>{entry.dateOfBirth}</td>
                  <td>{entry.phone}</td>
                  <td>
                    <Link
                      to={`/patients/${entry.id}`}
                      className="btn secondary small"
                      data-testid={`patient-search-open-${entry.id}`}
                    >
                      Open
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}

