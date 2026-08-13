import { useState } from "react";
import type { FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { ROLES } from "../constants/roles";
import { demoCredentials } from "../data/mock-data";
import { useAppState } from "../state/app-context";
import type { Role } from "../types/domain";

interface FormState {
  role: Role;
  username: string;
  password: string;
}

export function LoginPage() {
  const { isAuthenticated, login } = useAppState();
  const [formState, setFormState] = useState<FormState>({
    role: "Receptionist",
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const result = login(formState.role, formState.username, formState.password);
    window.setTimeout(() => {
      setSubmitting(false);
      if (!result.success) {
        setError(result.message);
      }
    }, 250);
  };

  return (
    <main className="login-layout" data-testid="page-login-root">
      <aside className="login-help">
        <p className="login-kicker">CareFlow Health</p>
        <h1>Operations Command Center</h1>
        <p>
          A production-style healthcare operations UI designed for QA automation, role-aware routing,
          and deterministic workflows.
        </p>
        <div className="login-feature-grid" aria-hidden="true">
          <article className="login-feature-card">
            <p className="login-feature-label">Daily Outpatient</p>
            <p className="login-feature-value">1,248</p>
          </article>
          <article className="login-feature-card">
            <p className="login-feature-label">Avg. Wait Time</p>
            <p className="login-feature-value">12 min</p>
          </article>
          <article className="login-feature-card">
            <p className="login-feature-label">Bed Occupancy</p>
            <p className="login-feature-value">78%</p>
          </article>
        </div>
        <h2>Demo Credentials</h2>
        <ul className="credential-list">
          {ROLES.map((entry) => (
            <li key={entry}>
              <strong>{entry}:</strong> {demoCredentials[entry].username} /{" "}
              {demoCredentials[entry].password}
            </li>
          ))}
        </ul>
      </aside>

      <section className="login-card">
        <p className="login-panel-kicker">Secure Access</p>
        <h2>Sign in to CareFlow</h2>
        <p className="hint">Use synthetic credentials listed in the left panel.</p>
        <form onSubmit={handleSubmit} noValidate data-testid="login-form">
          <label htmlFor="login-role">Role</label>
          <select
            id="login-role"
            value={formState.role}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                role: event.target.value as Role,
              }))
            }
            data-testid="login-role-select"
          >
            {ROLES.map((entry) => (
              <option key={entry} value={entry}>
                {entry}
              </option>
            ))}
          </select>

          <label htmlFor="login-username">Username</label>
          <input
            id="login-username"
            type="text"
            value={formState.username}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, username: event.target.value }))
            }
            data-testid="login-email"
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={formState.password}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, password: event.target.value }))
            }
            data-testid="login-password"
          />
          {error ? (
            <p className="error-text" role="alert" data-testid="login-error">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            className="btn primary full"
            disabled={submitting}
            data-testid="login-submit"
          >
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </section>
    </main>
  );
}
