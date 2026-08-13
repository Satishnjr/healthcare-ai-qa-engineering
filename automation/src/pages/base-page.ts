import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class BasePage {
  constructor(protected readonly page: Page) {}

  protected testId(id: string): Locator {
    return this.page.getByTestId(id);
  }

  async expectUrlContains(path: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  async expectPageRoot(rootTestId: string): Promise<void> {
    await expect(this.testId(rootTestId)).toBeVisible();
  }
}
