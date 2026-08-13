import { expect, type Page } from "@playwright/test";
import { BasePage } from "./base-page";
import type { Role } from "../data/test-users";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.page.goto("/login");
    await this.expectPageRoot("page-login-root");
  }

  async login(role: Role, username: string, password: string): Promise<void> {
    await this.testId("login-role-select").selectOption(role);
    await this.testId("login-email").fill(username);
    await this.testId("login-password").fill(password);
    await this.testId("login-submit").click();
  }

  async expectLoginError(): Promise<void> {
    await expect(this.testId("login-error")).toBeVisible();
  }
}
