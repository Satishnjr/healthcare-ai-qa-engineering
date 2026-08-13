const reportPrefix = process.env.REPORT_PREFIX ?? "cucumber-report";

module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["src/support/world.ts", "src/hooks/hooks.ts", "src/steps/**/*.ts"],
    paths: ["features/**/*.feature"],
    format: [
      "progress",
      `json:test-results/cucumber/${reportPrefix}.json`,
      `message:test-results/cucumber/${reportPrefix}-messages.ndjson`
    ],
    parallel: 1,
    retry: 0,
    failFast: false
  }
};
