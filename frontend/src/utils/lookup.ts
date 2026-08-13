import type { Appointment, Patient, Provider } from "../types/domain";

export function patientName(patients: Patient[], patientId: string): string {
  const patient = patients.find((entry) => entry.id === patientId);
  if (!patient) {
    return "Unknown Patient";
  }
  return `${patient.firstName} ${patient.lastName}`;
}

export function providerName(providers: Provider[], providerId: string): string {
  const provider = providers.find((entry) => entry.id === providerId);
  return provider?.name ?? "Unknown Provider";
}

export function appointmentById(appointments: Appointment[], id: string): Appointment | null {
  return appointments.find((entry) => entry.id === id) ?? null;
}

