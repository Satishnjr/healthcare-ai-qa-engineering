import { chromium, firefox, webkit, type Browser } from "@playwright/test";
import { runtimeConfig } from "../config/env";

export async function launchBrowser(): Promise<Browser> {
  switch (runtimeConfig.browserName) {
    case "firefox":
      return firefox.launch({ headless: runtimeConfig.headless });
    case "webkit":
      return webkit.launch({ headless: runtimeConfig.headless });
    default:
      return chromium.launch({ headless: runtimeConfig.headless });
  }
}
