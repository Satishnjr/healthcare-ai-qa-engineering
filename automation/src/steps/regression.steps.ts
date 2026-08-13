import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { testUsers, type Role } from "../data/test-users";
import { CustomWorld } from "../support/world";

Given("I am logged in as {string}", async function (this: CustomWorld, role: Role) {
  const user = testUsers[role];
  await this.loginPage.open();
  await this.loginPage.login(role, user.username, user.password);
  await this.dashboardPage.expectLoaded();
});

Given(
  "I am on the login page",
  async function (this: CustomWorld) {
    await this.loginPage.open();
  },
);

When(
  "I attempt login as {string} with invalid password",
  async function (this: CustomWorld, role: Role) {
    const user = testUsers[role];
    await this.loginPage.login(role, user.username, "invalid-password");
  },
);

Then("I should see login validation error", async function (this: CustomWorld) {
  await this.loginPage.expectLoginError();
});

When("I open navigation item {string}", async function (this: CustomWorld, label: string) {
  await this.layoutPage.openNavigation(label);
});

Then(
  "I should see module root {string}",
  async function (this: CustomWorld, rootTestId: string) {
    await this.regressionPage.expectRootVisible(rootTestId);
  },
);

Then(
  "navigation item {string} should be visible",
  async function (this: CustomWorld, label: string) {
    await this.layoutPage.expectNavigationVisible(label);
  },
);

Then(
  "navigation item {string} should be hidden",
  async function (this: CustomWorld, label: string) {
    await this.layoutPage.expectNavigationHidden(label);
  },
);

When("I open route {string} directly", async function (this: CustomWorld, path: string) {
  await this.regressionPage.open(path);
});

Then("I should see unauthorized page", async function (this: CustomWorld) {
  await this.regressionPage.expectRootVisible("page-unauthorized-root");
});

When("I search patients with value {string}", async function (this: CustomWorld, value: string) {
  await this.regressionPage.fill("patient-search", value);
});

Then("I should see patient table row {string}", async function (this: CustomWorld, id: string) {
  await this.regressionPage.expectVisible(`patient-row-${id}`);
});

Then("I should see empty patient state", async function (this: CustomWorld) {
  await this.regressionPage.expectVisible("state-empty");
});

When("I open patient registration form", async function (this: CustomWorld) {
  await this.regressionPage.click("patient-create-toggle");
  await this.regressionPage.expectVisible("patient-create-form");
});

When(
  "I submit patient form with short phone",
  async function (this: CustomWorld) {
    await this.page.locator("#patient-first-name").fill("Demo");
    await this.page.locator("#patient-last-name").fill("User");
    await this.page.locator("#patient-dob").fill("1992-01-01");
    await this.page.locator("#patient-phone").fill("123");
    await this.page.locator("#patient-email").fill("valid.user@demo.local");
    await this.regressionPage.click("patient-create-submit");
  },
);

Then(
  "I should see patient form error {string}",
  async function (this: CustomWorld, text: string) {
    await this.regressionPage.expectVisible("patient-create-error");
    await this.regressionPage.expectText(text);
  },
);

When("I submit appointment form without required fields", async function (this: CustomWorld) {
  await this.regressionPage.click("appointment-create-submit");
});

Then(
  "I should see appointment form error {string}",
  async function (this: CustomWorld, text: string) {
    await this.regressionPage.expectVisible("appointment-create-error");
    await this.regressionPage.expectText(text);
  },
);

When("I mark notification {string} as read", async function (this: CustomWorld, id: string) {
  await this.regressionPage.click(`notification-mark-read-${id}`);
});

Then("unread counter should show {string}", async function (this: CustomWorld, value: string) {
  await expect(this.page.getByTestId("notification-unread-count")).toContainText(`Unread: ${value}`);
});

When("I save profile with empty name", async function (this: CustomWorld) {
  await this.regressionPage.fill("profile-name", "");
  await this.regressionPage.fill("profile-email", "valid.profile@demo.local");
  await this.regressionPage.click("profile-save");
});

Then("I should see hint text {string}", async function (this: CustomWorld, text: string) {
  await this.regressionPage.expectText(text);
});

When("I save settings", async function (this: CustomWorld) {
  await this.regressionPage.click("settings-save");
});

When(
  "I switch viewport to {int} by {int}",
  async function (this: CustomWorld, width: number, height: number) {
    await this.regressionPage.setViewport(width, height);
  },
);

Then("login fields should be accessible by label", async function (this: CustomWorld) {
  await expect(this.page.getByLabel("Role")).toBeVisible();
  await expect(this.page.getByLabel("Username")).toBeVisible();
  await expect(this.page.getByLabel("Password")).toBeVisible();
});

Then("topbar user indicator should be visible", async function (this: CustomWorld) {
  await this.regressionPage.expectVisible("current-user-indicator");
});
