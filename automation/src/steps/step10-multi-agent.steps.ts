import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

When("I enter Step 10 task {string}", async function (this: CustomWorld, value: string) {
  await this.page.getByTestId("multi-agent-request-input").fill(value);
});

When("I submit Step 10 task", async function (this: CustomWorld) {
  await this.page.getByTestId("multi-agent-submit").click();
});

Then("Step 10 element {string} should be visible", async function (this: CustomWorld, testId: string) {
  await expect(this.page.getByTestId(testId)).toBeVisible();
});

Then("Step 10 page text should contain {string}", async function (this: CustomWorld, text: string) {
  await expect(this.page.locator("body")).toContainText(text);
});

Then("Step 10 page should show unauthorized root", async function (this: CustomWorld) {
  await expect(this.page.getByTestId("page-unauthorized-root")).toBeVisible();
});

