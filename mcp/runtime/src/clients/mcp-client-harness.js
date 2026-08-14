const { spawn } = require("child_process");
const path = require("path");
const readline = require("readline");

class McpClientHarness {
  constructor() {
    this.process = null;
    this.pending = new Map();
    this.nextId = 1;
  }

  async connect() {
    const startScript = path.join(__dirname, "..", "cli-start.js");
    this.process = spawn(process.execPath, [startScript], {
      stdio: ["pipe", "pipe", "pipe"],
    });

    const rl = readline.createInterface({
      input: this.process.stdout,
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      let payload;
      try {
        payload = JSON.parse(line);
      } catch {
        return;
      }
      const resolver = this.pending.get(payload.id);
      if (resolver) {
        this.pending.delete(payload.id);
        resolver(payload);
      }
    });

    await this.send("initialize", {});
  }

  send(method, params) {
    const id = this.nextId++;
    const payload = {
      jsonrpc: "2.0",
      id,
      method,
      params,
    };
    return new Promise((resolve) => {
      this.pending.set(id, resolve);
      this.process.stdin.write(`${JSON.stringify(payload)}\n`);
    });
  }

  async listTools() {
    const response = await this.send("tools/list", {});
    return response.result.tools;
  }

  async callTool(name, input, role = "Doctor") {
    return this.send("tools/call", { name, input, role });
  }

  async listResources() {
    const response = await this.send("resources/list", {});
    return response.result.resources;
  }

  async disconnect() {
    if (!this.process) {
      return;
    }
    await this.send("shutdown", {});
    this.process.stdin.end();
    this.process.kill();
    this.process = null;
  }
}

module.exports = {
  McpClientHarness,
};
