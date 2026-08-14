import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "../layouts/app-shell";
import { RequireAuth, RequireRoleAccess } from "../routes/guarded-route";
import { AdminPage } from "../pages/admin-page";
import { AppointmentDetailPage } from "../pages/appointment-detail-page";
import { AppointmentsPage } from "../pages/appointments-page";
import { BillingInsurancePage } from "../pages/billing-insurance-page";
import { ClaimsPage } from "../pages/claims-page";
import { ConfluenceHomePage } from "../pages/confluence-home-page";
import { ConfluencePageDetailPage } from "../pages/confluence-page-detail-page";
import { ConfluencePagesPage } from "../pages/confluence-pages-page";
import { ConfluenceSearchPage } from "../pages/confluence-search-page";
import { ConfluenceSpacesPage } from "../pages/confluence-spaces-page";
import { DashboardPage } from "../pages/dashboard-page";
import { HelpPage } from "../pages/help-page";
import { JiraBoardPage } from "../pages/jira-board-page";
import { JiraDashboardPage } from "../pages/jira-dashboard-page";
import { JiraDefectsPage } from "../pages/jira-defects-page";
import { JiraIssueDetailPage } from "../pages/jira-issue-detail-page";
import { JiraIssuesPage } from "../pages/jira-issues-page";
import { JiraTestCasesPage } from "../pages/jira-test-cases-page";
import { KnowledgePage } from "../pages/knowledge-page";
import { KnowledgeEvaluationPage } from "../pages/knowledge-evaluation-page";
import { LoginPage } from "../pages/login-page";
import { LogoutPage } from "../pages/logout-page";
import { MedicalRecordsPage } from "../pages/medical-records-page";
import { McpPage } from "../pages/mcp-page";
import { NotFoundPage } from "../pages/not-found-page";
import { NotificationsPage } from "../pages/notifications-page";
import { PatientDetailPage } from "../pages/patient-detail-page";
import { PatientSearchPage } from "../pages/patient-search-page";
import { PatientsPage } from "../pages/patients-page";
import { PrescriptionsPage } from "../pages/prescriptions-page";
import { ProfilePage } from "../pages/profile-page";
import { ProvidersPage } from "../pages/providers-page";
import { ReportsPage } from "../pages/reports-page";
import { SearchPage } from "../pages/search-page";
import { SettingsPage } from "../pages/settings-page";
import { TraceabilityPage } from "../pages/traceability-page";
import { UnauthorizedPage } from "../pages/unauthorized-page";

function ProtectedOutlet({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <RequireRoleAccess>{children}</RequireRoleAccess>
    </RequireAuth>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <AppShell />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route
          path="dashboard"
          element={
            <ProtectedOutlet>
              <DashboardPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="patients"
          element={
            <ProtectedOutlet>
              <PatientsPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="patients/search"
          element={
            <ProtectedOutlet>
              <PatientSearchPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="patients/:patientId"
          element={
            <ProtectedOutlet>
              <PatientDetailPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="appointments"
          element={
            <ProtectedOutlet>
              <AppointmentsPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="appointments/:appointmentId"
          element={
            <ProtectedOutlet>
              <AppointmentDetailPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="providers"
          element={
            <ProtectedOutlet>
              <ProvidersPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="medical-records"
          element={
            <ProtectedOutlet>
              <MedicalRecordsPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="prescriptions"
          element={
            <ProtectedOutlet>
              <PrescriptionsPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="billing-insurance"
          element={
            <ProtectedOutlet>
              <BillingInsurancePage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="claims"
          element={
            <ProtectedOutlet>
              <ClaimsPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="notifications"
          element={
            <ProtectedOutlet>
              <NotificationsPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="reports"
          element={
            <ProtectedOutlet>
              <ReportsPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="admin"
          element={
            <ProtectedOutlet>
              <AdminPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedOutlet>
              <ProfilePage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedOutlet>
              <SettingsPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="help"
          element={
            <ProtectedOutlet>
              <HelpPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="search"
          element={
            <ProtectedOutlet>
              <SearchPage />
            </ProtectedOutlet>
          }
        />
        <Route path="jira" element={<Navigate to="/jira/dashboard" replace />} />
        <Route
          path="jira/dashboard"
          element={
            <ProtectedOutlet>
              <JiraDashboardPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="jira/issues"
          element={
            <ProtectedOutlet>
              <JiraIssuesPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="jira/issues/:issueKey"
          element={
            <ProtectedOutlet>
              <JiraIssueDetailPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="jira/test-cases"
          element={
            <ProtectedOutlet>
              <JiraTestCasesPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="jira/defects"
          element={
            <ProtectedOutlet>
              <JiraDefectsPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="jira/board"
          element={
            <ProtectedOutlet>
              <JiraBoardPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="confluence"
          element={
            <ProtectedOutlet>
              <ConfluenceHomePage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="confluence/spaces"
          element={
            <ProtectedOutlet>
              <ConfluenceSpacesPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="confluence/pages"
          element={
            <ProtectedOutlet>
              <ConfluencePagesPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="confluence/pages/:pageId"
          element={
            <ProtectedOutlet>
              <ConfluencePageDetailPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="confluence/search"
          element={
            <ProtectedOutlet>
              <ConfluenceSearchPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="traceability"
          element={
            <ProtectedOutlet>
              <TraceabilityPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="knowledge"
          element={
            <ProtectedOutlet>
              <KnowledgePage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="knowledge/evaluation"
          element={
            <ProtectedOutlet>
              <KnowledgeEvaluationPage />
            </ProtectedOutlet>
          }
        />
        <Route
          path="mcp"
          element={
            <ProtectedOutlet>
              <McpPage />
            </ProtectedOutlet>
          }
        />
        <Route path="logout" element={<LogoutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
