import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";

When("I open route {string}", async function (this: CustomWorld, path: string) {
  await this.step41Page.openRoute(path);
});

When("I search Jira issues with {string}", async function (this: CustomWorld, value: string) {
  await this.step41Page.searchJira(value);
});

Then("Jira issue row {string} should be visible", async function (this: CustomWorld, issueKey: string) {
  await this.step41Page.expectVisibleByTestId(`jira-issue-row-${issueKey}`);
});

When("I open Jira issue {string}", async function (this: CustomWorld, issueKey: string) {
  await this.step41Page.openJiraIssue(issueKey);
});

Then("Step 4.1 page root {string} should be visible", async function (this: CustomWorld, testId: string) {
  await this.step41Page.expectVisibleByTestId(testId);
});

When("I open linked Confluence page from Jira issue", async function (this: CustomWorld) {
  await this.step41Page.openLinkedConfluenceFromIssue();
});

When("I search Confluence knowledge with {string}", async function (this: CustomWorld, value: string) {
  await this.step41Page.searchConfluence(value);
});
