import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ConfirmDialog } from "../components/common/confirm-dialog";
import { PageTitle } from "../components/common/page-title";
import { EmptyState, LoadingState } from "../components/common/state-panel";
import { StatusBadge } from "../components/common/status-badge";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";
import { patientName, providerName } from "../utils/lookup";

interface AppointmentForm {
  patientId: string;
  providerId: string;
  dateTime: string;
  type: string;
  reason: string;
}

const initialForm: AppointmentForm = {
  patientId: "",
  providerId: "",
  dateTime: "",
  type: "Consultation",
  reason: "",
};

export function AppointmentsPage() {
  const loading = useSimulatedLoad();
  const {
    role,
    currentPatientId,
    appointments,
    providers,
    patients,
    createAppointment,
    updateAppointmentStatus,
  } = useAppState();
  const [form, setForm] = useState<AppointmentForm>(initialForm);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [confirmTarget, setConfirmTarget] = useState<string | null>(null);
  const canCreate = role === "Receptionist";

  const filtered = useMemo(() => {
    const scopedAppointments =
      role === "Patient" && currentPatientId
        ? appointments.filter((entry) => entry.patientId === currentPatientId)
        : appointments;
    if (statusFilter === "ALL") {
      return scopedAppointments;
    }
    return scopedAppointments.filter((entry) => entry.status === statusFilter);
  }, [appointments, currentPatientId, role, statusFilter]);

  const onCreate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (!canCreate) {
      setError("Only Receptionist role can create appointments.");
      return;
    }
    if (!form.patientId || !form.providerId || !form.dateTime || !form.reason.trim()) {
      setError("All fields are required.");
      return;
    }
    const result = createAppointment(form);
    if (!result.ok) {
      setError(result.message ?? "Unable to create appointment.");
      return;
    }
    setForm(initialForm);
  };

  if (loading) {
    return <LoadingState label="Loading appointments..." />;
  }

  return (
    <section data-testid="page-appointments-root">
      <PageTitle
        title="Appointments"
        subtitle={role === "Patient" ? "Showing your appointments only" : "Create, review, and update appointment statuses"}
      />
      <div className="grid-two">
        {canCreate ? (
          <form className="card form-grid" onSubmit={onCreate} data-testid="appointment-create">
            <h3>Create Appointment</h3>
            <label htmlFor="apt-patient">Patient</label>
            <select
              id="apt-patient"
              value={form.patientId}
              onChange={(event) => setForm((prev) => ({ ...prev, patientId: event.target.value }))}
            >
              <option value="">Select</option>
              {patients.map((entry) => (
                <option key={entry.id} value={entry.id}>
                  {entry.id} - {entry.firstName} {entry.lastName}
                </option>
              ))}
            </select>
            <label htmlFor="apt-provider">Provider</label>
            <select
              id="apt-provider"
              value={form.providerId}
              onChange={(event) => setForm((prev) => ({ ...prev, providerId: event.target.value }))}
            >
              <option value="">Select</option>
              {providers.map((entry) => (
                <option key={entry.id} value={entry.id}>
                  {entry.name}
                </option>
              ))}
            </select>
            <label htmlFor="apt-time">Date and Time</label>
            <input
              id="apt-time"
              type="datetime-local"
              value={form.dateTime}
              onChange={(event) => setForm((prev) => ({ ...prev, dateTime: event.target.value }))}
            />
            <label htmlFor="apt-type">Type</label>
            <select
              id="apt-type"
              value={form.type}
              onChange={(event) => setForm((prev) => ({ ...prev, type: event.target.value }))}
            >
              <option>Consultation</option>
              <option>Follow-up</option>
              <option>Routine Check</option>
            </select>
            <label htmlFor="apt-reason">Reason</label>
            <input
              id="apt-reason"
              value={form.reason}
              onChange={(event) => setForm((prev) => ({ ...prev, reason: event.target.value }))}
            />
            {error ? (
              <p className="error-text" role="alert" data-testid="appointment-create-error">
                {error}
              </p>
            ) : null}
            <button type="submit" className="btn primary" data-testid="appointment-create-submit">
              Create Appointment
            </button>
          </form>
        ) : (
          <article className="card">
            <h3>Read-only appointment access</h3>
            <p>This role can view appointment status but cannot create or cancel records.</p>
          </article>
        )}
        <article className="card">
          <h3>Status Filter</h3>
          <label htmlFor="appointment-status-filter">Filter by status</label>
          <select
            id="appointment-status-filter"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            data-testid="appointment-status-filter"
          >
            <option value="ALL">All</option>
            <option value="SCHEDULED">SCHEDULED</option>
            <option value="CONFIRMED">CONFIRMED</option>
            <option value="CHECKED_IN">CHECKED_IN</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        </article>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No appointments" message="No records match selected status." />
      ) : (
        <div className="card table-wrapper" data-testid="appointment-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Provider</th>
                <th>Date/Time</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((entry) => (
                <tr key={entry.id} data-testid={`appointment-row-${entry.id}`}>
                  <td>{entry.id}</td>
                  <td>{patientName(patients, entry.patientId)}</td>
                  <td>{providerName(providers, entry.providerId)}</td>
                  <td>{entry.dateTime.replace("T", " ")}</td>
                  <td>{entry.type}</td>
                  <td>
                    <StatusBadge status={entry.status} />
                  </td>
                  <td>
                    <div className="inline-actions">
                      <Link
                        to={`/appointments/${entry.id}`}
                        className="btn secondary small"
                        data-testid={`appointment-open-${entry.id}`}
                      >
                        Open
                      </Link>
                      {canCreate && entry.status !== "CANCELLED" ? (
                        <button
                          type="button"
                          className="btn danger small"
                          onClick={() => setConfirmTarget(entry.id)}
                          data-testid={`appointment-cancel-${entry.id}`}
                        >
                          Cancel
                        </button>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ConfirmDialog
        open={Boolean(confirmTarget)}
        title="Cancel appointment"
        description="Are you sure you want to cancel this appointment?"
        confirmText="Confirm Cancel"
        onCancel={() => setConfirmTarget(null)}
        onConfirm={() => {
          if (confirmTarget) {
            updateAppointmentStatus(confirmTarget, "CANCELLED");
          }
          setConfirmTarget(null);
        }}
      />
    </section>
  );
}
