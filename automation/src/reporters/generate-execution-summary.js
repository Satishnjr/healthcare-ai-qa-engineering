const fs = require("node:fs");
const path = require("node:path");
const { execSync } = require("node:child_process");

const cucumberDir = path.join(process.cwd(), "test-results", "cucumber");
const outputPath = path.join(process.cwd(), "test-results", "cucumber", "execution-summary.json");

function safeCommitSha() {
  try {
    return execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "UNKNOWN";
  }
}

function collectScenarioTags(scenario) {
  return (scenario.tags ?? []).map((tag) => tag.name);
}

function collectCaseIds(tags) {
  return tags.filter((tag) => tag.startsWith("@tc-")).map((tag) => tag.replace("@tc-", ""));
}

function run() {
  const reportPath = pickLatestReportPath();
  if (!fs.existsSync(reportPath)) {
    console.warn(`[report:summary] Missing cucumber json at ${reportPath}`);
    process.exitCode = 0;
    return;
  }

  const raw = fs.readFileSync(reportPath, "utf8");
  const features = JSON.parse(raw);
  const runId = `run-${new Date().toISOString().replace(/[:.]/g, "-")}`;

  const scenarios = [];
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  let durationMs = 0;

  for (const feature of features) {
    for (const scenario of feature.elements ?? []) {
      const tags = collectScenarioTags(scenario);
      const tcIds = collectCaseIds(tags);
      const stepResults = (scenario.steps ?? []).map((step) => step.result ?? {});
      const isFailed = stepResults.some((result) => result.status === "failed");
      const isSkipped = stepResults.some((result) => result.status === "skipped" || result.status === "pending");
      const scenarioDuration = stepResults.reduce(
        (sum, result) => sum + Math.floor((result.duration ?? 0) / 1_000_000),
        0,
      );
      durationMs += scenarioDuration;

      if (isFailed) {
        failed += 1;
      } else if (isSkipped) {
        skipped += 1;
      } else {
        passed += 1;
      }

      scenarios.push({
        run_id: runId,
        scenario_id: scenario.id ?? scenario.name,
        scenario_name: scenario.name,
        feature: feature.name,
        browser: process.env.BROWSER ?? "chromium",
        environment: process.env.BASE_URL ?? "http://127.0.0.1:5173",
        status: isFailed ? "FAILED" : isSkipped ? "SKIPPED" : "PASSED",
        duration_ms: scenarioDuration,
        tags,
        test_case_ids: tcIds,
      });
    }
  }

  const summary = {
    run_id: runId,
    commit_sha: safeCommitSha(),
    environment: process.env.BASE_URL ?? "http://127.0.0.1:5173",
    browser: process.env.BROWSER ?? "chromium",
    totals: {
      features: features.length,
      scenarios: scenarios.length,
      passed,
      failed,
      skipped,
      duration_ms: durationMs,
    },
    scenarios,
  };

  fs.writeFileSync(outputPath, JSON.stringify(summary, null, 2), "utf8");
  console.log(`[report:summary] wrote ${outputPath}`);
}

function pickLatestReportPath() {
  if (!fs.existsSync(cucumberDir)) {
    return path.join(cucumberDir, "cucumber-report.json");
  }
  const files = fs
    .readdirSync(cucumberDir)
    .filter((file) => file.endsWith(".json") && file !== "execution-summary.json")
    .map((file) => ({
      file,
      mtime: fs.statSync(path.join(cucumberDir, file)).mtimeMs,
    }))
    .sort((a, b) => b.mtime - a.mtime);
  if (files.length === 0) {
    return path.join(cucumberDir, "cucumber-report.json");
  }
  return path.join(cucumberDir, files[0].file);
}

run();
