import { useState } from "react";
import type { FormEvent } from "react";
import { PageTitle } from "../components/common/page-title";
import { useAppState } from "../state/app-context";

export function ProfilePage() {
  const { currentUser } = useAppState();
  const [name, setName] = useState(currentUser?.name ?? "");
  const [email, setEmail] = useState(currentUser?.email ?? "");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) {
      setMessage("Name is required.");
      return;
    }
    if (!email.includes("@")) {
      setMessage("Valid email is required.");
      return;
    }
    setMessage("Profile preferences saved in current UI session.");
  };

  return (
    <section data-testid="page-profile-root">
      <PageTitle title="Profile" subtitle="Self profile configuration" />
      <form className="card form-grid" onSubmit={handleSubmit}>
        <label htmlFor="profile-name">Name</label>
        <input
          id="profile-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          data-testid="profile-name"
        />
        <label htmlFor="profile-email">Email</label>
        <input
          id="profile-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          data-testid="profile-email"
        />
        <button type="submit" className="btn primary" data-testid="profile-save">
          Save Profile
        </button>
        {message ? <p className="hint">{message}</p> : null}
      </form>
    </section>
  );
}
