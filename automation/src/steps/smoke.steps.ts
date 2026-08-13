import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { testUsers, type Role } from "../data/test-users";
import { CustomWorld } from "../support/world";

Given("the CareFlow application is available", async function (this: CustomWorld) {
  await this.page.goto("/login");
  await expect(this.page.getByTestId("page-login-root")).toBeVisible();
});

When(
  "I log in as {string} using deterministic credentials",
  async function (this: CustomWorld, role: Role) {
    const user = testUsers[role];
    await this.loginPage.open();
    await this.loginPage.login(role, user.username, user.password);
  },
);

Then("I should land on the dashboard", async function (this: CustomWorld) {
  await this.dashboardPage.expectLoaded();
  await this.dashboardPage.expectUrlContains("/dashboard");
  await this.layoutPage.expectUserNameVisible();
});

When("I navigate to patient search", async function (this: CustomWorld) {
  await this.layoutPage.openNavigation("Patient Search");
  await this.patientSearchPage.expectPageRoot("page-patient-search-root");
});

Then(
  "I can search with patient id {string} and see a matching row",
  async function (this: CustomWorld, patientId: string) {
    await this.patientSearchPage.search(patientId);
    await this.patientSearchPage.expectResultRow(patientId);
  },
);

When("I navigate to appointments", async function (this: CustomWorld) {
  await this.layoutPage.openNavigation("Appointments");
});

Then("I should see the appointments module", async function (this: CustomWorld) {
  await this.appointmentsPage.expectLoaded();
});

Then(
  "I should not see restricted navigation item {string}",
  async function (this: CustomWorld, label: string) {
    await this.layoutPage.expectNavigationHidden(label);
  },
);

When("I log out from the sidebar", async function (this: CustomWorld) {
  await this.layoutPage.logoutFromSidebar();
});

Then("I should be redirected to login page", async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/\/login/);
  await expect(this.page.getByTestId("page-login-root")).toBeVisible();
});
