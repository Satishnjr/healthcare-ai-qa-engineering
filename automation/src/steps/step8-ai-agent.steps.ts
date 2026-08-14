import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Then("Step 8 element {string} should be visible", async function (this: CustomWorld, testId: string) {
  await expect(this.page.getByTestId(testId)).toBeVisible();
});

When("I enter Step 8 task {string}", async function (this: CustomWorld, value: string) {
  await this.page.getByTestId("agent-task-input").fill(value);
});

When("I submit Step 8 task", async function (this: CustomWorld) {
  await this.page.getByTestId("agent-task-submit").click();
});

Then("Step 8 page text should contain {string}", async function (this: CustomWorld, value: string) {
  await expect(this.page.locator("body")).toContainText(value);
});

Then("Step 8 page should show unauthorized root", async function (this: CustomWorld) {
  await expect(this.page.getByTestId("page-unauthorized-root")).toBeVisible();
});
