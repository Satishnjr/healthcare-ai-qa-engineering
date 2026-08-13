import type {
  AppNotification,
  AppPreference,
  Appointment,
  BillingItem,
  Claim,
  InsuranceItem,
  Patient,
  Prescription,
  Provider,
  Role,
  User,
} from "../types/domain";

export const users: User[] = [
  {
    id: "USR-PAT-001",
    role: "Patient",
    name: "Aarav Sharma",
    email: "patient.demo@careflow.local",
    linkedPatientId: "PAT-001",
  },
  {
    id: "USR-DOC-001",
    role: "Doctor",
    name: "Dr. Nisha Menon",
    email: "doctor.demo@careflow.local",
  },
  {
    id: "USR-NUR-001",
    role: "Nurse",
    name: "Meera D'Souza",
    email: "nurse.demo@careflow.local",
  },
  {
    id: "USR-REC-001",
    role: "Receptionist",
    name: "Rohit Verma",
    email: "reception.demo@careflow.local",
  },
  {
    id: "USR-ADM-001",
    role: "Healthcare Administrator",
    name: "Priya Kapoor",
    email: "admin.demo@careflow.local",
  },
];

export const patients: Patient[] = [
  {
    id: "PAT-001",
    firstName: "Aarav",
    lastName: "Sharma",
    dateOfBirth: "1990-06-12",
    phone: "+1-555-0101",
    email: "aarav.sharma@demo.local",
    insurancePlan: "CFH-SILVER",
  },
  {
    id: "PAT-002",
    firstName: "Lina",
    lastName: "Patel",
    dateOfBirth: "1987-10-01",
    phone: "+1-555-0102",
    email: "lina.patel@demo.local",
    insurancePlan: "CFH-GOLD",
  },
  {
    id: "PAT-003",
    firstName: "Marcus",
    lastName: "Lee",
    dateOfBirth: "1979-03-23",
    phone: "+1-555-0103",
    email: "marcus.lee@demo.local",
    insurancePlan: "CFH-PLATINUM",
  },
];

export const providers: Provider[] = [
  {
    id: "PROV-001",
    name: "Dr. Nisha Menon",
    specialty: "Cardiology",
    availability: "Mon-Fri 09:00-17:00",
  },
  {
    id: "PROV-002",
    name: "Dr. Arjun Rao",
    specialty: "Dermatology",
    availability: "Mon-Thu 10:00-16:00",
  },
  {
    id: "PROV-003",
    name: "Dr. Emma Clarke",
    specialty: "Pediatrics",
    availability: "Tue-Sat 08:30-15:30",
  },
];

export const appointments: Appointment[] = [
  {
    id: "APT-001",
    patientId: "PAT-001",
    providerId: "PROV-001",
    dateTime: "2026-08-20T10:30",
    type: "Follow-up",
    status: "CONFIRMED",
    reason: "Hypertension review",
  },
  {
    id: "APT-002",
    patientId: "PAT-002",
    providerId: "PROV-002",
    dateTime: "2026-08-21T11:00",
    type: "Consultation",
    status: "SCHEDULED",
    reason: "Skin irritation",
  },
  {
    id: "APT-003",
    patientId: "PAT-003",
    providerId: "PROV-003",
    dateTime: "2026-08-22T14:00",
    type: "Routine Check",
    status: "CHECKED_IN",
    reason: "Pediatric follow-up",
  },
];

export const prescriptions: Prescription[] = [
  {
    id: "RX-001",
    patientId: "PAT-001",
    medication: "Amlodipine",
    dosage: "5 mg",
    frequency: "Once daily",
    prescribedBy: "Dr. Nisha Menon",
    status: "ACTIVE",
  },
  {
    id: "RX-002",
    patientId: "PAT-002",
    medication: "Cetirizine",
    dosage: "10 mg",
    frequency: "Once daily",
    prescribedBy: "Dr. Arjun Rao",
    status: "COMPLETED",
  },
];

export const billingItems: BillingItem[] = [
  {
    id: "BILL-001",
    patientId: "PAT-001",
    amount: 180.0,
    status: "PENDING",
    dueDate: "2026-08-25",
  },
  {
    id: "BILL-002",
    patientId: "PAT-002",
    amount: 75.5,
    status: "PAID",
    dueDate: "2026-08-10",
  },
];

export const insuranceItems: InsuranceItem[] = [
  {
    id: "INS-001",
    patientId: "PAT-001",
    provider: "CareFlow Assurance",
    plan: "Silver 2500",
    coverage: "80%",
  },
  {
    id: "INS-002",
    patientId: "PAT-002",
    provider: "CareFlow Assurance",
    plan: "Gold 1500",
    coverage: "90%",
  },
];

export const claims: Claim[] = [
  {
    id: "CLM-001",
    patientId: "PAT-001",
    billingId: "BILL-001",
    status: "OPEN",
    submittedDate: "2026-08-12",
  },
  {
    id: "CLM-002",
    patientId: "PAT-002",
    billingId: "BILL-002",
    status: "APPROVED",
    submittedDate: "2026-08-03",
  },
];

export const notifications: AppNotification[] = [
  {
    id: "NTF-001",
    role: "All",
    type: "INFO",
    message: "CareFlow maintenance window scheduled for Sunday 02:00.",
    timestamp: "2026-08-13T08:30",
    read: false,
  },
  {
    id: "NTF-002",
    role: "Receptionist",
    type: "WARNING",
    message: "2 appointments need reschedule confirmation.",
    timestamp: "2026-08-13T09:10",
    read: false,
  },
  {
    id: "NTF-003",
    role: "Doctor",
    type: "SUCCESS",
    message: "Daily schedule synced successfully.",
    timestamp: "2026-08-13T07:45",
    read: true,
  },
];

export const defaultPreferences: AppPreference = {
  emailNotifications: true,
  smsNotifications: false,
  compactMode: false,
};

export const demoCredentials: Record<Role, { username: string; password: string }> =
  {
    Patient: {
      username: "patient",
      password: "careflow123",
    },
    Doctor: {
      username: "doctor",
      password: "careflow123",
    },
    Nurse: {
      username: "nurse",
      password: "careflow123",
    },
    Receptionist: {
      username: "reception",
      password: "careflow123",
    },
    "Healthcare Administrator": {
      username: "admin",
      password: "careflow123",
    },
  };
