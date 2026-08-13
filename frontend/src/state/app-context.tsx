import { createContext, useContext, useMemo, useState } from "react";
import { defaultPreferences, demoCredentials } from "../data/mock-data";
import { routeAccess } from "../constants/route-access";
import { mockService } from "../services/mock-service";
import type {
  AppNotification,
  AppPreference,
  Appointment,
  AppointmentStatus,
  BillingItem,
  Claim,
  InsuranceItem,
  Patient,
  Prescription,
  Provider,
  Role,
  User,
} from "../types/domain";

type LoginResult = { success: true } | { success: false; message: string };

interface AppState {
  isAuthenticated: boolean;
  currentUser: User | null;
  currentPatientId: string | null;
  role: Role;
  users: User[];
  patients: Patient[];
  providers: Provider[];
  appointments: Appointment[];
  prescriptions: Prescription[];
  billingItems: BillingItem[];
  insuranceItems: InsuranceItem[];
  claims: Claim[];
  notifications: AppNotification[];
  preferences: AppPreference;
  login: (role: Role, username: string, password: string) => LoginResult;
  logout: () => void;
  switchRole: (role: Role) => void;
  canAccess: (path: string) => boolean;
  addPatient: (payload: Omit<Patient, "id">) => { ok: boolean; message?: string };
  updatePatient: (
    patientId: string,
    payload: Partial<Patient>,
  ) => { ok: boolean; message?: string };
  createAppointment: (
    payload: Omit<Appointment, "id" | "status">,
  ) => { ok: boolean; message?: string };
  updateAppointmentStatus: (id: string, status: AppointmentStatus) => void;
  markNotificationRead: (id: string) => void;
  updatePreferences: (payload: AppPreference) => void;
}

const AppContext = createContext<AppState | null>(null);

function toRoutePattern(pathname: string): string {
  if (pathname.startsWith("/patients/") && pathname !== "/patients/search") {
    return "/patients/:patientId";
  }
  if (pathname.startsWith("/appointments/") && pathname !== "/appointments") {
    return "/appointments/:appointmentId";
  }
  return pathname;
}

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const users = useMemo(() => mockService.getUsers(), []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<Role>("Receptionist");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [patients, setPatients] = useState<Patient[]>(() => mockService.getPatients());
  const [providers] = useState<Provider[]>(() => mockService.getProviders());
  const [appointments, setAppointments] = useState<Appointment[]>(() =>
    mockService.getAppointments(),
  );
  const [prescriptions] = useState<Prescription[]>(() =>
    mockService.getPrescriptions(),
  );
  const [billingItems] = useState<BillingItem[]>(() => mockService.getBillingItems());
  const [insuranceItems] = useState<InsuranceItem[]>(() =>
    mockService.getInsuranceItems(),
  );
  const [claims] = useState<Claim[]>(() => mockService.getClaims());
  const [notifications, setNotifications] = useState<AppNotification[]>(() =>
    mockService.getNotifications(),
  );
  const [preferences, setPreferences] = useState<AppPreference>(defaultPreferences);
  const currentPatientId =
    role === "Patient" ? (currentUser?.linkedPatientId ?? null) : null;

  const login = (targetRole: Role, username: string, password: string): LoginResult => {
    const expected = demoCredentials[targetRole];
    if (!username.trim() || !password.trim()) {
      return { success: false, message: "Username and password are required." };
    }

    if (username.trim() !== expected.username || password !== expected.password) {
      return { success: false, message: "Invalid demo credentials for selected role." };
    }

    const user = users.find((entry) => entry.role === targetRole);
    if (!user) {
      return { success: false, message: "No user mapped for selected role." };
    }

    setRole(targetRole);
    setCurrentUser(user);
    setIsAuthenticated(true);
    return { success: true };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setRole("Receptionist");
  };

  const switchRole = (nextRole: Role) => {
    const user = users.find((entry) => entry.role === nextRole) ?? null;
    setRole(nextRole);
    setCurrentUser(user);
  };

  const canAccess = (path: string): boolean => {
    const normalized = toRoutePattern(path);
    const allowed = routeAccess[normalized];
    if (!allowed) {
      return true;
    }
    return allowed.includes(role);
  };

  const addPatient = (payload: Omit<Patient, "id">) => {
    const duplicateEmail = patients.some(
      (entry) => entry.email.toLowerCase() === payload.email.toLowerCase(),
    );
    if (duplicateEmail) {
      return { ok: false, message: "Duplicate patient email not allowed." };
    }

    const nextIndex = patients.length + 1;
    const nextId = `PAT-${String(nextIndex).padStart(3, "0")}`;
    const nextPatient: Patient = { id: nextId, ...payload };
    setPatients((prev) => [nextPatient, ...prev]);
    return { ok: true };
  };

  const updatePatient = (patientId: string, payload: Partial<Patient>) => {
    const exists = patients.some((entry) => entry.id === patientId);
    if (!exists) {
      return { ok: false, message: "Patient not found." };
    }

    setPatients((prev) =>
      prev.map((entry) => (entry.id === patientId ? { ...entry, ...payload } : entry)),
    );
    return { ok: true };
  };

  const createAppointment = (payload: Omit<Appointment, "id" | "status">) => {
    const conflict = appointments.some(
      (entry) =>
        entry.providerId === payload.providerId && entry.dateTime === payload.dateTime,
    );
    if (conflict) {
      return { ok: false, message: "Provider already has an appointment at this time." };
    }
    const nextIndex = appointments.length + 1;
    const nextId = `APT-${String(nextIndex).padStart(3, "0")}`;
    const next: Appointment = { id: nextId, status: "SCHEDULED", ...payload };
    setAppointments((prev) => [next, ...prev]);
    return { ok: true };
  };

  const updateAppointmentStatus = (id: string, status: AppointmentStatus) => {
    setAppointments((prev) =>
      prev.map((entry) => (entry.id === id ? { ...entry, status } : entry)),
    );
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((entry) => (entry.id === id ? { ...entry, read: true } : entry)),
    );
  };

  const updatePreferences = (payload: AppPreference) => {
    setPreferences(payload);
  };

  const value: AppState = {
    isAuthenticated,
    currentUser,
    currentPatientId,
    role,
    users,
    patients,
    providers,
    appointments,
    prescriptions,
    billingItems,
    insuranceItems,
    claims,
    notifications,
    preferences,
    login,
    logout,
    switchRole,
    canAccess,
    addPatient,
    updatePatient,
    createAppointment,
    updateAppointmentStatus,
    markNotificationRead,
    updatePreferences,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// oxlint-disable-next-line react/only-export-components
export function useAppState(): AppState {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider.");
  }
  return context;
}
