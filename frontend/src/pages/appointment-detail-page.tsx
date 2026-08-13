import { useParams } from "react-router-dom";
import { ErrorState, LoadingState } from "../components/common/state-panel";
import { PageTitle } from "../components/common/page-title";
import { StatusBadge } from "../components/common/status-badge";
import { useSimulatedLoad } from "../hooks/use-simulated-load";
import { useAppState } from "../state/app-context";
import { appointmentById, patientName, providerName } from "../utils/lookup";

export function AppointmentDetailPage() {
  const loading = useSimulatedLoad();
  const { appointmentId } = useParams();
  const { appointments, patients, providers } = useAppState();
  const appointment = appointmentById(appointments, appointmentId ?? "");

  if (loading) {
    return <LoadingState label="Loading appointment details..." />;
  }
  if (!appointment) {
    return <ErrorState title="Appointment not found" message="Invalid appointment reference." />;
  }

  return (
    <section data-testid="page-appointment-detail-root">
      <PageTitle title={`Appointment ${appointment.id}`} subtitle="Detailed appointment view" />
      <div className="grid-two">
        <article className="card">
          <h3>Overview</h3>
          <p>
            <strong>Patient:</strong> {patientName(patients, appointment.patientId)}
          </p>
          <p>
            <strong>Provider:</strong> {providerName(providers, appointment.providerId)}
          </p>
          <p>
            <strong>Date/Time:</strong> {appointment.dateTime.replace("T", " ")}
          </p>
          <p>
            <strong>Type:</strong> {appointment.type}
          </p>
          <p>
            <strong>Status:</strong> <StatusBadge status={appointment.status} />
          </p>
        </article>
        <article className="card">
          <h3>Reason and Notes</h3>
          <p>{appointment.reason}</p>
          <p className="hint">
            This is a frontend-only simulated detail view for automation and UI testing.
          </p>
        </article>
      </div>
    </section>
  );
}

