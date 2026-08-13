const path = require("node:path");
const fs = require("node:fs");
const reporter = require("multiple-cucumber-html-reporter");

const cucumberDir = path.join(process.cwd(), "test-results", "cucumber");
const filteredDir = path.join(process.cwd(), "test-results", "cucumber-html-input");

function prepareCucumberJsonInput() {
  if (!fs.existsSync(cucumberDir)) {
    return;
  }

  fs.rmSync(filteredDir, { recursive: true, force: true });
  fs.mkdirSync(filteredDir, { recursive: true });

  const files = fs.readdirSync(cucumberDir).filter((name) => name.endsWith(".json"));

  for (const file of files) {
    const src = path.join(cucumberDir, file);
    const raw = fs.readFileSync(src, "utf8");
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      continue;
    }

    // multiple-cucumber-html-reporter expects an array of features in each JSON file.
    if (Array.isArray(parsed)) {
      fs.writeFileSync(path.join(filteredDir, file), JSON.stringify(parsed, null, 2), "utf8");
    }
  }
}

prepareCucumberJsonInput();

reporter.generate({
  jsonDir: filteredDir,
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
    title: "CareFlow Regression Automation",
    data: [
      { label: "Project", value: "Healthcare AI QA Engineering Platform" },
      { label: "Step", value: "1.14 Full Regression Automation Expansion" },
      { label: "Base URL", value: process.env.BASE_URL || "http://127.0.0.1:5173" },
    ],
  },
  openReportInBrowser: false,
  pageTitle: "CareFlow Cucumber Report",
  reportName: "CareFlow Regression Automation Report",
});
