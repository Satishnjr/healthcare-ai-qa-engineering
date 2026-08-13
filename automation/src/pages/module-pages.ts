import { expect, type Page } from "@playwright/test";
import { BasePage } from "./base-page";

class ModulePage extends BasePage {
  constructor(page: Page, private readonly rootTestId: string) {
    super(page);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page.getByTestId(this.rootTestId)).toBeVisible();
  }
}

export class ProviderPage extends ModulePage {
  constructor(page: Page) { super(page, "page-providers-root"); }
}
export class PatientDetailPage extends ModulePage {
  constructor(page: Page) { super(page, "page-patient-detail-root"); }
}
export class AppointmentDetailPage extends ModulePage {
  constructor(page: Page) { super(page, "page-appointment-detail-root"); }
}
export class MedicalRecordsPage extends ModulePage {
  constructor(page: Page) { super(page, "page-medical-records-root"); }
}
export class PrescriptionsPage extends ModulePage {
  constructor(page: Page) { super(page, "page-prescriptions-root"); }
}
export class BillingInsurancePage extends ModulePage {
  constructor(page: Page) { super(page, "page-billing-insurance-root"); }
}
export class ClaimsPage extends ModulePage {
  constructor(page: Page) { super(page, "page-claims-root"); }
}
export class NotificationsPage extends ModulePage {
  constructor(page: Page) { super(page, "page-notifications-root"); }
}
export class ReportsPage extends ModulePage {
  constructor(page: Page) { super(page, "page-reports-root"); }
}
export class SettingsPage extends ModulePage {
  constructor(page: Page) { super(page, "page-settings-root"); }
}
export class ProfilePage extends ModulePage {
  constructor(page: Page) { super(page, "page-profile-root"); }
}
export class HelpPage extends ModulePage {
  constructor(page: Page) { super(page, "page-help-root"); }
}
export class AdminPage extends ModulePage {
  constructor(page: Page) { super(page, "page-admin-root"); }
}
