import { expect, type Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class Step41Page extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openRoute(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async expectPathContains(path: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  async openNav(label: string): Promise<void> {
    await this.page.getByTestId(`nav-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-link`).click();
  }

  async expectVisibleByTestId(testId: string): Promise<void> {
    await expect(this.page.getByTestId(testId)).toBeVisible();
  }

  async searchJira(value: string): Promise<void> {
    await this.page.getByTestId("jira-search").fill(value);
  }

  async openJiraIssue(issueKey: string): Promise<void> {
    await this.page.getByTestId(`jira-issue-row-${issueKey}`).locator("a").first().click();
  }

  async openLinkedConfluenceFromIssue(): Promise<void> {
    await this.page.getByTestId("jira-linked-confluence-page").click();
  }

  async searchConfluence(value: string): Promise<void> {
    await this.page.getByTestId("confluence-search").locator("input").fill(value);
  }
}
