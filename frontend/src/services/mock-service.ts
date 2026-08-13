import {
  appointments as appointmentSeed,
  billingItems as billingSeed,
  claims as claimsSeed,
  insuranceItems as insuranceSeed,
  notifications as notificationSeed,
  patients as patientSeed,
  prescriptions as prescriptionSeed,
  providers as providerSeed,
  users as userSeed,
} from "../data/mock-data";
import type {
  AppNotification,
  Appointment,
  BillingItem,
  Claim,
  InsuranceItem,
  Patient,
  Prescription,
  Provider,
  User,
} from "../types/domain";

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export const mockService = {
  getUsers(): User[] {
    return clone(userSeed);
  },
  getPatients(): Patient[] {
    return clone(patientSeed);
  },
  getProviders(): Provider[] {
    return clone(providerSeed);
  },
  getAppointments(): Appointment[] {
    return clone(appointmentSeed);
  },
  getPrescriptions(): Prescription[] {
    return clone(prescriptionSeed);
  },
  getBillingItems(): BillingItem[] {
    return clone(billingSeed);
  },
  getInsuranceItems(): InsuranceItem[] {
    return clone(insuranceSeed);
  },
  getClaims(): Claim[] {
    return clone(claimsSeed);
  },
  getNotifications(): AppNotification[] {
    return clone(notificationSeed);
  },
};

