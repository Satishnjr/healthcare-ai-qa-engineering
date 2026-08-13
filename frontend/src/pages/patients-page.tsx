import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { EmptyState, LoadingState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";

interface PatientForm {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  insurancePlan: string;
}

const initialForm: PatientForm = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  phone: "",
  email: "",
  insurancePlan: "CFH-SILVER",
};

export function PatientsPage() {
  const loading = useSimulatedLoad();
  const { patients, addPatient, role } = useAppState();
  const [query, setQuery] = useState("");
  const [form, setForm] = useState<PatientForm>(initialForm);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const isCreateAllowed = role === "Receptionist";

  const filtered = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (!text) {
      return patients;
    }
    return patients.filter((item) =>
      `${item.id} ${item.firstName} ${item.lastName} ${item.phone} ${item.email}`
        .toLowerCase()
        .includes(text),
    );
  }, [patients, query]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError("First name and last name are required.");
      return;
    }
    if (!form.dateOfBirth) {
      setError("Date of birth is required.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (form.phone.length < 7) {
      setError("Phone number must be at least 7 characters.");
      return;
    }
    const result = addPatient(form);
    if (!result.ok) {
      setError(result.message ?? "Unable to create patient.");
      return;
    }
    setForm(initialForm);
    setShowForm(false);
  };

  if (loading) {
    return <LoadingState label="Loading patient management..." />;
  }

  return (
    <section data-testid="page-patients-root">
      <PageTitle
        title="Patient Management"
        subtitle="Manage synthetic patient records with deterministic IDs"
        action={
          isCreateAllowed ? (
            <button
              type="button"
              className="btn primary"
              onClick={() => setShowForm((prev) => !prev)}
              data-testid="patient-create-toggle"
            >
              {showForm ? "Close form" : "Register patient"}
            </button>
          ) : null
        }
      />
      <div className="card">
        <label htmlFor="patient-query">Search</label>
        <input
          id="patient-query"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by ID, name, email, phone"
          data-testid="patient-search"
        />
      </div>

      {showForm && isCreateAllowed ? (
        <form className="card form-grid" onSubmit={handleSubmit} data-testid="patient-create-form">
          <h3>Patient Registration</h3>
          <label htmlFor="patient-first-name">First Name</label>
          <input
            id="patient-first-name"
            value={form.firstName}
            onChange={(event) => setForm((prev) => ({ ...prev, firstName: event.target.value }))}
          />
          <label htmlFor="patient-last-name">Last Name</label>
          <input
            id="patient-last-name"
            value={form.lastName}
            onChange={(event) => setForm((prev) => ({ ...prev, lastName: event.target.value }))}
          />
          <label htmlFor="patient-dob">Date of Birth</label>
          <input
            id="patient-dob"
            type="date"
            value={form.dateOfBirth}
            onChange={(event) => setForm((prev) => ({ ...prev, dateOfBirth: event.target.value }))}
          />
          <label htmlFor="patient-phone">Phone</label>
          <input
            id="patient-phone"
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          />
          <label htmlFor="patient-email">Email</label>
          <input
            id="patient-email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
          <label htmlFor="patient-plan">Insurance Plan</label>
          <select
            id="patient-plan"
            value={form.insurancePlan}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, insurancePlan: event.target.value }))
            }
          >
            <option value="CFH-SILVER">CFH-SILVER</option>
            <option value="CFH-GOLD">CFH-GOLD</option>
            <option value="CFH-PLATINUM">CFH-PLATINUM</option>
          </select>
          {error ? (
            <p className="error-text" role="alert" data-testid="patient-create-error">
              {error}
            </p>
          ) : null}
          <div>
            <button type="submit" className="btn primary" data-testid="patient-create-submit">
              Create Patient
            </button>
          </div>
        </form>
      ) : null}

      {filtered.length === 0 ? (
        <EmptyState title="No patients found" message="Try a different search term." />
      ) : (
        <div className="card table-wrapper" data-testid="patient-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>DOB</th>
                <th>Phone</th>
                <th>Plan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((patient) => (
                <tr key={patient.id} data-testid={`patient-row-${patient.id}`}>
                  <td>{patient.id}</td>
                  <td>
                    {patient.firstName} {patient.lastName}
                  </td>
                  <td>{patient.dateOfBirth}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.insurancePlan}</td>
                  <td>
                    <Link
                      className="btn secondary small"
                      to={`/patients/${patient.id}`}
                      data-testid={`patient-open-${patient.id}`}
                    >
                      Open
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
