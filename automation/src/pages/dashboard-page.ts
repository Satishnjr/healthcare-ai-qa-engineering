import { type Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async expectLoaded(): Promise<void> {
    await this.expectPageRoot("page-dashboard-root");
    await this.expectPageRoot("dashboard-kpi-grid");
  }
}
