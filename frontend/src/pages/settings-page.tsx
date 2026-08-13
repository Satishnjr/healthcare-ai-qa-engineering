import { useState } from "react";
import type { FormEvent } from "react";
import { PageTitle } from "../components/common/page-title";
import { useAppState } from "../state/app-context";

export function SettingsPage() {
  const { preferences, updatePreferences } = useAppState();
  const [local, setLocal] = useState(preferences);
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updatePreferences(local);
    setMessage("Settings saved in this frontend simulation.");
  };

  return (
    <section data-testid="page-settings-root">
      <PageTitle title="Settings" subtitle="Notification and display preferences" />
      <form className="card form-grid" onSubmit={onSubmit}>
        <label className="checkbox-line">
          <input
            type="checkbox"
            checked={local.emailNotifications}
            onChange={(event) =>
              setLocal((prev) => ({ ...prev, emailNotifications: event.target.checked }))
            }
            data-testid="settings-email-notifications"
          />
          Email notifications
        </label>
        <label className="checkbox-line">
          <input
            type="checkbox"
            checked={local.smsNotifications}
            onChange={(event) =>
              setLocal((prev) => ({ ...prev, smsNotifications: event.target.checked }))
            }
            data-testid="settings-sms-notifications"
          />
          SMS notifications
        </label>
        <label className="checkbox-line">
          <input
            type="checkbox"
            checked={local.compactMode}
            onChange={(event) =>
              setLocal((prev) => ({ ...prev, compactMode: event.target.checked }))
            }
            data-testid="settings-compact-mode"
          />
          Compact layout mode
        </label>
        <button type="submit" className="btn primary" data-testid="settings-save">
          Save Settings
        </button>
        {message ? <p className="hint">{message}</p> : null}
      </form>
    </section>
  );
}
