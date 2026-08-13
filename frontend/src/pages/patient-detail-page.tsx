import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { ErrorState, LoadingState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";

export function PatientDetailPage() {
  const loading = useSimulatedLoad();
  const { patientId } = useParams();
  const { patients, role, updatePatient } = useAppState();
  const patient = useMemo(
    () => patients.find((entry) => entry.id === patientId) ?? null,
    [patients, patientId],
  );
  const canEdit = role === "Receptionist" || role === "Patient";
  const [phone, setPhone] = useState(patient?.phone ?? "");
  const [email, setEmail] = useState(patient?.email ?? "");
  const [message, setMessage] = useState("");

  if (loading) {
    return <LoadingState label="Loading patient profile..." />;
  }

  if (!patient) {
    return <ErrorState title="Patient Not Found" message="Invalid patient ID." />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canEdit) {
      setMessage("Your role has read-only access.");
      return;
    }
    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }
    if (phone.trim().length < 7) {
      setMessage("Phone number must be at least 7 characters.");
      return;
    }
    updatePatient(patient.id, { email, phone });
    setMessage("Profile section updated successfully.");
  };

  return (
    <section data-testid="page-patient-detail-root">
      <PageTitle
        title={`Patient Profile - ${patient.id}`}
        subtitle={`${patient.firstName} ${patient.lastName}`}
      />
      <div className="grid-two">
        <article className="card">
          <h3>Demographics</h3>
          <p>Date of Birth: {patient.dateOfBirth}</p>
          <p>Insurance Plan: {patient.insurancePlan}</p>
        </article>
        <article className="card">
          <h3>Contact</h3>
          <form onSubmit={handleSubmit} className="form-grid" data-testid="patient-detail-form">
            <label htmlFor="patient-detail-phone">Phone</label>
            <input
              id="patient-detail-phone"
              value={phone}
              disabled={!canEdit}
              onChange={(event) => setPhone(event.target.value)}
              data-testid="patient-detail-phone"
            />
            <label htmlFor="patient-detail-email">Email</label>
            <input
              id="patient-detail-email"
              type="email"
              value={email}
              disabled={!canEdit}
              onChange={(event) => setEmail(event.target.value)}
              data-testid="patient-detail-email"
            />
            <button type="submit" className="btn primary" data-testid="patient-detail-save">
              Save
            </button>
            {message ? <p className="hint">{message}</p> : null}
          </form>
        </article>
      </div>
    </section>
  );
}
