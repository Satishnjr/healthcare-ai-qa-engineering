const readline = require("readline");
const { LocalMcpServer } = require("../server/mcp-server");

function runStdioServer() {
  const server = new LocalMcpServer();
  const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => {
    const value = String(line ?? "").trim();
    if (!value) {
      return;
    }
    let message;
    try {
      message = JSON.parse(value);
    } catch {
      process.stdout.write(
        `${JSON.stringify({
          jsonrpc: "2.0",
          id: null,
          error: { code: -32700, message: "Parse error" },
        })}\n`
      );
      return;
    }
    const response = server.handle(message);
    process.stdout.write(`${JSON.stringify(response)}\n`);
  });

  rl.on("close", () => {
    process.exit(0);
  });
}

module.exports = {
  runStdioServer,
};
