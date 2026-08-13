import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Then("Step 6 element {string} should be visible", async function (this: CustomWorld, testId: string) {
  await expect(this.page.getByTestId(testId)).toBeVisible();
});

When("I open first failed Step 6 case if available", async function (this: CustomWorld) {
  const failedCases = this.page.getByTestId("rag-evaluation-failed-case");
  const failedCount = await failedCases.count();
  if (failedCount > 0) {
    await failedCases.first().getByRole("button").click();
  }
});

Then("Step 6 case detail should include expected and retrieved sources", async function (this: CustomWorld) {
  const detail = this.page.getByTestId("rag-evaluation-case-detail");
  await expect(detail).toBeVisible();
  await expect(detail).toContainText("Expected Sources:");
  await expect(detail).toContainText("Retrieved Sources:");
});
