import fs from "node:fs";
import path from "node:path";
import { ensureDir, sanitizeName } from "./path-utils";

export interface FailureMetadata {
  feature?: string;
  scenario: string;
  tags: string[];
  browser: string;
  environment: string;
  url: string;
  errorMessage: string;
  timestamp: string;
  acceptanceCriteriaIds: string[];
  testCaseIds: string[];
  testScenarioIds: string[];
  screenshotPath?: string;
  tracePath?: string;
  videoPath?: string;
}

export function writeFailureMetadata(metadata: FailureMetadata): string {
  const dir = ensureDir(path.join(process.cwd(), "reports", "failure-artifacts"));
  const fileName = `${sanitizeName(metadata.scenario)}-${metadata.timestamp}.json`;
  const filePath = path.join(dir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(metadata, null, 2), "utf8");
  return filePath;
}
