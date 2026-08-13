const path = require("node:path");
const reporter = require("multiple-cucumber-html-reporter");

const reportJson = path.join(process.cwd(), "reports", "cucumber", "cucumber-report.json");

reporter.generate({
  jsonDir: path.dirname(reportJson),
  reportPath: path.join(process.cwd(), "reports", "html"),
  metadata: {
    browser: {
      name: process.env.BROWSER || "chromium",
      version: "dynamic",
    },
    device: "local",
    platform: {
      name: process.platform,
      version: process.version,
    },
  },
  customData: {
    title: "CareFlow Automation Foundation",
    data: [
      { label: "Project", value: "Healthcare AI QA Engineering Platform" },
      { label: "Step", value: "1.13 Playwright + Cucumber foundation" },
      { label: "Base URL", value: process.env.BASE_URL || "http://127.0.0.1:5173" },
    ],
  },
  openReportInBrowser: false,
  pageTitle: "CareFlow Cucumber Report",
  reportName: "CareFlow Smoke Automation Report",
});
