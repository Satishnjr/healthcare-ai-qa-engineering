import { defineConfig, devices } from "@playwright/test";
import { runtimeConfig } from "./src/config/env";

export default defineConfig({
  testDir: "./features",
  timeout: runtimeConfig.timeouts.scenarioMs,
  expect: {
    timeout: runtimeConfig.timeouts.expectMs,
  },
  retries: runtimeConfig.isCI ? 1 : 0,
  workers: runtimeConfig.isCI ? 1 : undefined,
  reporter: [["list"]],
  use: {
    baseURL: runtimeConfig.baseUrl,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: runtimeConfig.timeouts.actionMs,
    navigationTimeout: runtimeConfig.timeouts.navigationMs,
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});
