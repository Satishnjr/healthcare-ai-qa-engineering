import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

When("I enter Step 9 task {string}", async function (this: CustomWorld, value: string) {
  await this.page.getByTestId("agent-task-input").fill(value);
});

When("I submit Step 9 task", async function (this: CustomWorld) {
  await this.page.getByTestId("agent-task-submit").click();
});

When("I click Step 9 action {string}", async function (this: CustomWorld, testId: string) {
  await this.page.getByTestId(testId).click();
});

Then("Step 9 element {string} should be visible", async function (this: CustomWorld, testId: string) {
  await expect(this.page.getByTestId(testId)).toBeVisible();
});

Then("Step 9 graph should include node {string}", async function (this: CustomWorld, nodeName: string) {
  await expect(this.page.getByTestId("agent-graph")).toContainText(nodeName);
});

Then("Step 9 page text should contain {string}", async function (this: CustomWorld, value: string) {
  await expect(this.page.locator("body")).toContainText(value);
});

Then("Step 9 page should show unauthorized root", async function (this: CustomWorld) {
  await expect(this.page.getByTestId("page-unauthorized-root")).toBeVisible();
});
