import {
  After,
  Before,
  BeforeAll,
  setDefaultTimeout,
  Status,
} from "@cucumber/cucumber";
import type { ITestCaseHookParameter } from "@cucumber/cucumber";
import path from "node:path";
import { runtimeConfig } from "../config/env";
import { AppointmentsPage } from "../pages/appointments-page";
import { DashboardPage } from "../pages/dashboard-page";
import { LayoutPage } from "../pages/layout-page";
import { LoginPage } from "../pages/login-page";
import { PatientSearchPage } from "../pages/patient-search-page";
import { RegressionPage } from "../pages/regression-page";
import { Step41Page } from "../pages/step41-page";
import { writeFailureMetadata } from "../utils/report-writer";
import { artifactPath, ensureDir, sanitizeName, timestamp } from "../utils/path-utils";
import { launchBrowser } from "../utils/browser-factory";
import { CustomWorld } from "../support/world";

setDefaultTimeout(runtimeConfig.timeouts.scenarioMs);

BeforeAll(async () => {
  [
    "reports/html",
    "reports/failure-artifacts",
    "screenshots",
    "videos",
    "traces",
    "test-results",
    "test-results/cucumber",
  ].forEach((dir) => ensureDir(artifactPath(dir)));
});

Before(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  this.scenarioName = scenario.pickle.name;
  this.tags = scenario.pickle.tags.map((t) => t.name);
  this.startedAt = timestamp();

  const browser = await launchBrowser();
  const context = await browser.newContext({
    baseURL: runtimeConfig.baseUrl,
    recordVideo: {
      dir: artifactPath("videos"),
      size: { width: 1280, height: 720 },
    },
  });
  const page = await context.newPage();
  await context.tracing.start({ screenshots: true, snapshots: true, sources: true });

  this.browser = browser;
  this.context = context;
  this.page = page;

  this.loginPage = new LoginPage(page);
  this.layoutPage = new LayoutPage(page);
  this.dashboardPage = new DashboardPage(page);
  this.patientSearchPage = new PatientSearchPage(page);
  this.appointmentsPage = new AppointmentsPage(page);
  this.regressionPage = new RegressionPage(page);
  this.step41Page = new Step41Page(page);
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  const safe = `${sanitizeName(this.scenarioName)}-${this.startedAt}`;
  const tracePath = path.join(artifactPath("traces"), `${safe}.zip`);
  let screenshotPath: string | undefined;
  let videoPath: string | undefined;

  if (scenario.result?.status === Status.FAILED && this.page) {
    screenshotPath = path.join(artifactPath("screenshots"), `${safe}.png`);
    await this.page
      .screenshot({ path: screenshotPath, fullPage: true })
      .then(() => this.attach(`Failure screenshot: ${screenshotPath}`))
      .catch((error) => {
        this.attach(`Failure screenshot skipped: ${(error as Error).message}`);
        screenshotPath = undefined;
      });

    const tcIds = this.tags.filter((t) => t.startsWith("@tc-")).map((t) => t.replace("@tc-", ""));
    const tsIds = this.tags.filter((t) => t.startsWith("@ts-")).map((t) => t.replace("@ts-", ""));
    const acIds = this.tags.filter((t) => t.startsWith("@ac-")).map((t) => t.replace("@ac-", ""));

    try {
      writeFailureMetadata({
        scenario: this.scenarioName,
        tags: this.tags,
        browser: runtimeConfig.browserName,
        environment: runtimeConfig.baseUrl,
        url: this.page.url(),
        errorMessage: scenario.result.message ?? "Scenario failed without explicit message",
        timestamp: this.startedAt,
        testCaseIds: tcIds,
        testScenarioIds: tsIds,
        acceptanceCriteriaIds: acIds,
        screenshotPath,
        tracePath,
        videoPath,
      });
    } catch (error) {
      this.attach(`Failure metadata write skipped: ${(error as Error).message}`);
    }
  }

  if (this.context) {
    await this.context.tracing.stop({ path: tracePath }).catch(() => undefined);
  }
  if (this.page) {
    const video = this.page.video();
    if (video) {
      videoPath = await video.path().catch(() => undefined);
    }
  }

  if (this.page) {
    await this.page.close().catch(() => undefined);
  }
  if (this.context) {
    await this.context.close().catch(() => undefined);
  }
  if (this.browser) {
    await this.browser.close().catch(() => undefined);
  }
});
