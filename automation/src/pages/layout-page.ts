import { expect, type Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LayoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  navLinkTestId(label: string): string {
    return `nav-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-link`;
  }

  async openNavigation(label: string): Promise<void> {
    await this.testId(this.navLinkTestId(label)).click();
  }

  async expectNavigationVisible(label: string): Promise<void> {
    await expect(this.testId(this.navLinkTestId(label))).toBeVisible();
  }

  async expectNavigationHidden(label: string): Promise<void> {
    await expect(this.page.getByTestId(this.navLinkTestId(label))).toHaveCount(0);
  }

  async logoutFromSidebar(): Promise<void> {
    await this.testId("nav-logout-link").click();
  }

  async expectUserNameVisible(): Promise<void> {
    await expect(this.testId("current-user-indicator")).toBeVisible();
  }
}
