module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["src/support/world.ts", "src/hooks/hooks.ts", "src/steps/**/*.ts"],
    paths: ["features/**/*.feature"],
    format: [
      "progress",
      "json:reports/cucumber/cucumber-report.json",
      "message:reports/cucumber/cucumber-messages.ndjson"
    ],
    parallel: 1,
    retry: 0,
    failFast: false
  }
};
