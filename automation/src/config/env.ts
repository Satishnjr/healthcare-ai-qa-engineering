export type SupportedBrowser = "chromium" | "firefox" | "webkit";

function asNumber(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function asBool(value: string | undefined, fallback: boolean): boolean {
  if (!value) {
    return fallback;
  }
  return value.toLowerCase() !== "false";
}

function asBrowser(value: string | undefined): SupportedBrowser {
  if (value === "firefox" || value === "webkit") {
    return value;
  }
  return "chromium";
}

export const runtimeConfig = {
  baseUrl: process.env.BASE_URL ?? "http://127.0.0.1:5173",
  browserName: asBrowser(process.env.BROWSER),
  headless: asBool(process.env.HEADLESS, true),
  isCI: asBool(process.env.CI, false),
  artifactRoot: process.cwd(),
  timeouts: {
    scenarioMs: asNumber(process.env.SCENARIO_TIMEOUT_MS, 90_000),
    expectMs: asNumber(process.env.EXPECT_TIMEOUT_MS, 12_000),
    actionMs: asNumber(process.env.ACTION_TIMEOUT_MS, 10_000),
    navigationMs: asNumber(process.env.NAVIGATION_TIMEOUT_MS, 20_000),
  },
};
