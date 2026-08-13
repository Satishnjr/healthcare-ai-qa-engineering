export type Role =
  | "Patient"
  | "Doctor"
  | "Nurse"
  | "Receptionist"
  | "Healthcare Administrator";

export interface TestUser {
  role: Role;
  username: string;
  password: string;
  datasetIds: string[];
}

export const testUsers: Record<Role, TestUser> = {
  Patient: {
    role: "Patient",
    username: "patient",
    password: "careflow123",
    datasetIds: ["TD-USERS-ROLE-001", "TD-PATIENT-BASE-001"],
  },
  Doctor: {
    role: "Doctor",
    username: "doctor",
    password: "careflow123",
    datasetIds: ["TD-USERS-ROLE-001", "TD-PROVIDER-BASE-001"],
  },
  Nurse: {
    role: "Nurse",
    username: "nurse",
    password: "careflow123",
    datasetIds: ["TD-USERS-ROLE-001", "TD-PATIENT-BASE-001"],
  },
  Receptionist: {
    role: "Receptionist",
    username: "reception",
    password: "careflow123",
    datasetIds: ["TD-USERS-ROLE-001", "TD-APPOINTMENT-BASE-001"],
  },
  "Healthcare Administrator": {
    role: "Healthcare Administrator",
    username: "admin",
    password: "careflow123",
    datasetIds: ["TD-USERS-ROLE-001", "TD-NOTIFICATION-BASE-001"],
  },
};
