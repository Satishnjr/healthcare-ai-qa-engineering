import { PageTitle } from "../components/common/page-title";
import { EmptyState } from "../components/common/state-panel";
import { useAppState } from "../state/app-context";

export function AdminPage() {
  const { users } = useAppState();

  if (users.length === 0) {
    return <EmptyState title="No users" message="No user records available." />;
  }

  return (
    <section data-testid="page-admin-root">
      <PageTitle title="Administration" subtitle="User and configuration-like overview" />
      <div className="card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((entry) => (
              <tr key={entry.id} data-testid={`admin-user-row-${entry.id}`}>
                <td>{entry.id}</td>
                <td>{entry.name}</td>
                <td>{entry.role}</td>
                <td>{entry.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <article className="card">
        <h3>Admin Functions</h3>
        <p>
          Configuration operations are simulated in this frontend-only implementation and are
          intentionally not persisted to a backend system.
        </p>
      </article>
    </section>
  );
}

