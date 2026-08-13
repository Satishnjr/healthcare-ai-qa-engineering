import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ROLES } from "../constants/roles";
import { useAppState } from "../state/app-context";
import { navigationItems } from "../routes/navigation-items";

function Breadcrumbs() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <span>Home</span>
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        return (
          <span key={`${segment}-${index}`}>
            {" / "}
            {isLast ? <strong>{segment.replace(/-/g, " ")}</strong> : segment.replace(/-/g, " ")}
          </span>
        );
      })}
    </nav>
  );
}

export function AppShell() {
  const { role, currentUser, switchRole, notifications, logout } = useAppState();
  const navigate = useNavigate();
  const location = useLocation();
  const unreadCount = notifications.filter(
    (entry) => !entry.read && (entry.role === "All" || entry.role === role),
  ).length;

  const links = navigationItems.filter((item) => item.roles.includes(role));
  const mainLinks = links.filter((item) => !["/reports", "/settings", "/help", "/profile"].includes(item.path));
  const generalLinks = links.filter((item) => ["/reports", "/settings", "/help", "/profile"].includes(item.path));
  const canSwitchRole = role === "Healthcare Administrator";

  return (
    <div className="app-shell" data-testid="app-shell-root">
      <aside className="sidebar" data-testid="nav-sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo" aria-hidden="true">
            CF
          </div>
          <div>
            <h2 className="brand">CareFlow Health</h2>
            <p className="brand-subtitle">Healthcare Operations Portal</p>
          </div>
        </div>

        <label className="sidebar-search" htmlFor="sidebar-search">
          <span>Search modules</span>
          <input id="sidebar-search" type="search" placeholder="Search" data-testid="sidebar-search" />
        </label>

        <p className="sidebar-group-title">Main Menu</p>
        <nav>
          {mainLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              data-testid={`nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-link`}
              className={location.pathname.startsWith(item.path) ? "active-link" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="sidebar-group-title">General</p>
        <nav>
          {generalLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              data-testid={`nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-link`}
              className={location.pathname.startsWith(item.path) ? "active-link" : ""}
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            className="link-like-button"
            onClick={() => {
              logout();
              navigate("/login");
            }}
            data-testid="nav-logout-link"
          >
            Logout
          </button>
        </nav>

        <div className="sidebar-user-card" data-testid="sidebar-user-card">
          <p className="sidebar-user-name">{currentUser?.name ?? "Guest"}</p>
          <p className="sidebar-user-role">{role}</p>
        </div>
      </aside>
      <div className="main-area">
        <header className="topbar">
          <div>
            <Breadcrumbs />
            <p className="topbar-title">Role: {role}</p>
          </div>
          <div className="topbar-controls">
            <button type="button" className="btn secondary small" data-testid="topbar-export">
              Export Data
            </button>
            {canSwitchRole ? (
              <>
                <label htmlFor="role-switcher" className="label-inline">
                  Simulated Role
                </label>
                <select
                  id="role-switcher"
                  value={role}
                  onChange={(event) => switchRole(event.target.value as typeof role)}
                  data-testid="role-switcher"
                >
                  {ROLES.map((entry) => (
                    <option key={entry} value={entry}>
                      {entry}
                    </option>
                  ))}
                </select>
              </>
            ) : null}
            <div className="notification-pill" data-testid="notification-unread-count">
              Unread: {unreadCount}
            </div>
            <div className="user-pill" data-testid="current-user-indicator">
              {currentUser?.name ?? "Guest"}
            </div>
          </div>
        </header>
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
