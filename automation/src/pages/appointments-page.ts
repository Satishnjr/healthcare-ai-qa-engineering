import { expect, type Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class AppointmentsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async expectLoaded(): Promise<void> {
    await this.expectPageRoot("page-appointments-root");
    await expect(this.testId("appointment-table")).toBeVisible();
  }
}
