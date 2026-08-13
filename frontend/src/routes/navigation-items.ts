import type { Role } from "../types/domain";

export interface NavigationItem {
  path: string;
  label: string;
  roles: Role[];
}

export const navigationItems: NavigationItem[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    roles: [
      "Patient",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Healthcare Administrator",
    ],
  },
  {
    path: "/patients",
    label: "Patient Management",
    roles: ["Doctor", "Nurse", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/patients/search",
    label: "Patient Search",
    roles: ["Doctor", "Nurse", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/appointments",
    label: "Appointments",
    roles: [
      "Patient",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Healthcare Administrator",
    ],
  },
  {
    path: "/providers",
    label: "Providers",
    roles: ["Doctor", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/medical-records",
    label: "Medical Records",
    roles: ["Patient", "Doctor", "Nurse", "Healthcare Administrator"],
  },
  {
    path: "/prescriptions",
    label: "Prescriptions",
    roles: ["Patient", "Doctor", "Nurse", "Healthcare Administrator"],
  },
  {
    path: "/billing-insurance",
    label: "Billing & Insurance",
    roles: ["Patient", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/claims",
    label: "Claims",
    roles: ["Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/notifications",
    label: "Notifications",
    roles: [
      "Patient",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Healthcare Administrator",
    ],
  },
  {
    path: "/reports",
    label: "Reports",
    roles: ["Doctor", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/jira/dashboard",
    label: "Jira QA",
    roles: ["Doctor", "Nurse", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/jira/issues",
    label: "Jira Issues",
    roles: ["Doctor", "Nurse", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/jira/test-cases",
    label: "Jira Test Cases",
    roles: ["Doctor", "Nurse", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/jira/defects",
    label: "Jira Defects",
    roles: ["Doctor", "Nurse", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/jira/board",
    label: "Jira Board",
    roles: ["Doctor", "Nurse", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/confluence",
    label: "Confluence",
    roles: [
      "Patient",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Healthcare Administrator",
    ],
  },
  {
    path: "/confluence/search",
    label: "Confluence Search",
    roles: [
      "Patient",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Healthcare Administrator",
    ],
  },
  {
    path: "/traceability",
    label: "Traceability",
    roles: ["Doctor", "Nurse", "Receptionist", "Healthcare Administrator"],
  },
  {
    path: "/knowledge",
    label: "Knowledge",
    roles: [
      "Patient",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Healthcare Administrator",
    ],
  },
  {
    path: "/knowledge/evaluation",
    label: "RAG Evaluation",
    roles: [
      "Patient",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Healthcare Administrator",
    ],
  },
  {
    path: "/admin",
    label: "Administration",
    roles: ["Healthcare Administrator"],
  },
  {
    path: "/profile",
    label: "Profile",
    roles: [
      "Patient",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Healthcare Administrator",
    ],
  },
  {
    path: "/settings",
    label: "Settings",
    roles: [
      "Patient",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Healthcare Administrator",
    ],
  },
  {
    path: "/help",
    label: "Help",
    roles: [
      "Patient",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Healthcare Administrator",
    ],
  },
];
