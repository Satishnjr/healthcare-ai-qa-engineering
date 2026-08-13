const fs = require("fs");
const path = require("path");

function ensureDir(target) {
  fs.mkdirSync(target, { recursive: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  ensureDir(path.dirname(filePath));
  const tempFilePath = `${filePath}.tmp`;
  fs.writeFileSync(tempFilePath, JSON.stringify(value, null, 2));
  fs.renameSync(tempFilePath, filePath);
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

module.exports = {
  ensureDir,
  readJson,
  writeJson,
  readText,
};
