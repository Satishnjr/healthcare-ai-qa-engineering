import fs from "node:fs";
import path from "node:path";

export function sanitizeName(value: string): string {
  return value.replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/-+/g, "-").toLowerCase();
}

export function ensureDir(dirPath: string): string {
  fs.mkdirSync(dirPath, { recursive: true });
  return dirPath;
}

export function timestamp(): string {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

export function artifactPath(...parts: string[]): string {
  return path.join(process.cwd(), ...parts);
}
