import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Then("Step 7 element {string} should be visible", async function (this: CustomWorld, testId: string) {
  await expect(this.page.getByTestId(testId)).toBeVisible();
});

Then("Step 7 tool list should include {string}", async function (this: CustomWorld, toolName: string) {
  await expect(this.page.getByTestId("mcp-tool-list")).toContainText(toolName);
});

When("I select Step 7 MCP tool {string}", async function (this: CustomWorld, toolName: string) {
  const toolRow = this.page
    .getByTestId("mcp-tool")
    .filter({ hasText: toolName })
    .first();
  await expect(toolRow).toBeVisible();
  await toolRow.getByRole("button", { name: toolName }).click();
});

When("I execute the selected Step 7 MCP tool", async function (this: CustomWorld) {
  await this.page.getByTestId("mcp-tool-execute").click();
});

When("I switch Step 7 role to {string}", async function (this: CustomWorld, role: string) {
  await this.page.getByLabel("Role").selectOption(role);
});

Then("Step 7 tool result should contain {string}", async function (this: CustomWorld, value: string) {
  await expect(this.page.getByTestId("mcp-tool-result")).toContainText(value);
});
