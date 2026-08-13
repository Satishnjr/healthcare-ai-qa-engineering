export type Role =
  | "Patient"
  | "Doctor"
  | "Nurse"
  | "Receptionist"
  | "Healthcare Administrator";

export type AppointmentStatus =
  | "SCHEDULED"
  | "CONFIRMED"
  | "CHECKED_IN"
  | "CANCELLED";

export type ClaimStatus = "OPEN" | "IN_REVIEW" | "APPROVED" | "REJECTED";

export interface User {
  id: string;
  role: Role;
  name: string;
  email: string;
}

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  insurancePlan: string;
}

export interface Provider {
  id: string;
  name: string;
  specialty: string;
  availability: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  providerId: string;
  dateTime: string;
  type: string;
  status: AppointmentStatus;
  reason: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  medication: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  status: "ACTIVE" | "COMPLETED";
}

export interface BillingItem {
  id: string;
  patientId: string;
  amount: number;
  status: "PENDING" | "PAID" | "OVERDUE";
  dueDate: string;
}

export interface InsuranceItem {
  id: string;
  patientId: string;
  provider: string;
  plan: string;
  coverage: string;
}

export interface Claim {
  id: string;
  patientId: string;
  billingId: string;
  status: ClaimStatus;
  submittedDate: string;
}

export interface AppNotification {
  id: string;
  role: Role | "All";
  type: "INFO" | "WARNING" | "SUCCESS";
  message: string;
  timestamp: string;
  read: boolean;
}

export interface AppPreference {
  emailNotifications: boolean;
  smsNotifications: boolean;
  compactMode: boolean;
}

