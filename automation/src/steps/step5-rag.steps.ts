import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

When("I ask knowledge query {string}", async function (this: CustomWorld, query: string) {
  await this.page.getByTestId("rag-query-input").fill(query);
  await this.page.getByTestId("rag-query-submit").click();
  await expect(this.page.getByTestId("rag-query-result")).toBeVisible();
});

Then("Step 5 element {string} should be visible", async function (this: CustomWorld, testId: string) {
  await expect(this.page.getByTestId(testId)).toBeVisible();
});

Then("Step 5 source list should be visible", async function (this: CustomWorld) {
  await expect(this.page.getByTestId("rag-source").first()).toBeVisible();
});

Then("Step 5 response should include citation metadata", async function (this: CustomWorld) {
  const firstSource = this.page.getByTestId("rag-source").first();
  await expect(firstSource).toBeVisible();
  await expect(firstSource).toContainText("chunkId:");
  await expect(firstSource).toContainText("documentId:");
});

When("I open first Step 5 citation source", async function (this: CustomWorld) {
  await this.page.getByTestId("rag-citation-open-source").first().click();
});

Then("Step 5 source route should be visible", async function (this: CustomWorld) {
  const jiraVisible = await this.page.getByTestId("page-jira-issue-detail-root").count();
  const confluenceVisible = await this.page
    .getByTestId("page-confluence-page-detail-root")
    .count();
  const traceabilityVisible = await this.page.getByTestId("page-traceability-root").count();
  const knowledgeVisible = await this.page.getByTestId("page-knowledge-root").count();
  expect(jiraVisible + confluenceVisible + traceabilityVisible + knowledgeVisible).toBeGreaterThan(0);
});
