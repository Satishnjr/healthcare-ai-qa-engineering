import { LoadingState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";

export function NotificationsPage() {
  const loading = useSimulatedLoad();
  const { notifications, role, markNotificationRead } = useAppState();
  const filtered = notifications.filter((entry) => entry.role === "All" || entry.role === role);

  if (loading) {
    return <LoadingState label="Loading notifications..." />;
  }

  return (
    <section data-testid="page-notifications-root">
      <PageTitle title="Notifications" subtitle="Role-filtered notification center" />
      <div className="card">
        {filtered.length === 0 ? <p>No notifications for this role.</p> : null}
        {filtered.map((entry) => (
          <article
            className={`notification-item ${entry.read ? "read" : "unread"}`}
            key={entry.id}
            data-testid={`notification-row-${entry.id}`}
          >
            <div>
              <h3>{entry.type}</h3>
              <p>{entry.message}</p>
              <small>{entry.timestamp.replace("T", " ")}</small>
            </div>
            <button
              type="button"
              className="btn secondary small"
              onClick={() => markNotificationRead(entry.id)}
              disabled={entry.read}
              data-testid={`notification-mark-read-${entry.id}`}
            >
              {entry.read ? "Read" : "Mark as Read"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

