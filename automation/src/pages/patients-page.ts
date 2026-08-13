import { expect, type Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class PatientsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async expectLoaded(): Promise<void> {
    await this.expectPageRoot("page-patients-root");
    await expect(this.testId("patient-search")).toBeVisible();
  }
}
