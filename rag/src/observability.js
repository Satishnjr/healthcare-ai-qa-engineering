const path = require("path");
const { ensureDir } = require("./fs-utils");
const { runtimeLogPath } = require("./runtime-paths");

class RagObservabilityLogger {
  constructor(options = {}) {
    this.logPath = options.logPath ?? runtimeLogPath;
    ensureDir(path.dirname(this.logPath));
  }

  log(entry) {
    const line = `${JSON.stringify(entry)}\n`;
    require("fs").appendFileSync(this.logPath, line);
  }
}

module.exports = {
  RagObservabilityLogger,
};
