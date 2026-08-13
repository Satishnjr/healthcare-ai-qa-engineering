import { expect, type Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class PatientSearchPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async search(term: string): Promise<void> {
    await this.testId("patient-search-input").fill(term);
  }

  async expectResultRow(patientId: string): Promise<void> {
    await expect(this.testId(`patient-result-row-${patientId}`)).toBeVisible();
  }
}
