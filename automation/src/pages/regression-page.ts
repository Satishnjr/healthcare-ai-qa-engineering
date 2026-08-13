import { expect, type Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class RegressionPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async expectCurrentPath(path: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
  }

  async expectRootVisible(rootTestId: string): Promise<void> {
    await this.expectPageRoot(rootTestId);
  }

  async click(testId: string): Promise<void> {
    await this.testId(testId).click();
  }

  async fill(testId: string, value: string): Promise<void> {
    await this.testId(testId).fill(value);
  }

  async select(testId: string, value: string): Promise<void> {
    await this.testId(testId).selectOption(value);
  }

  async expectVisible(testId: string): Promise<void> {
    await expect(this.testId(testId)).toBeVisible();
  }

  async expectHidden(testId: string): Promise<void> {
    await expect(this.page.getByTestId(testId)).toHaveCount(0);
  }

  async expectText(text: string): Promise<void> {
    await expect(this.page.getByText(text, { exact: false })).toBeVisible();
  }

  async expectAlertText(text: string): Promise<void> {
    await expect(this.page.getByRole("alert")).toContainText(text);
  }

  async setViewport(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }
}
