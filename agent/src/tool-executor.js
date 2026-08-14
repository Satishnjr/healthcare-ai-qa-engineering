const { stableId } = require("../../rag/src/hash");
const { LocalMcpServer } = require("../../mcp/runtime/src");

class AgentMcpClient {
  constructor() {
    this.server = new LocalMcpServer();
    this.connected = false;
  }

  connect() {
    if (this.connected) {
      return;
    }
    this.server.handle({
      jsonrpc: "2.0",
      id: 1,
      method: "initialize",
      params: {},
    });
    this.connected = true;
  }

  callTool({ tool, input, role }) {
    this.connect();
    const requestId = stableId("AGT-REQ", tool, role, String(Date.now()));
    const started = Date.now();
    const response = this.server.handle({
      jsonrpc: "2.0",
      id: 2,
      method: "tools/call",
      params: {
        name: tool,
        input,
        role,
        requestId,
      },
    });
    const durationMs = Date.now() - started;
    if (response.error) {
      return {
        requestId,
        tool,
        input,
        status: "ERROR",
        source: "mcp-runtime",
        durationMs,
        error: response.error.data ?? response.error,
      };
    }
    const envelope = response.result;
    return {
      requestId: envelope.requestId ?? requestId,
      tool,
      input,
      status: envelope.status,
      source: envelope.result?.sourceSystem ?? "mcp-runtime",
      durationMs,
      output: envelope.result,
      audit: envelope.audit,
    };
  }
}

function executePlan({ plan, role, mcpClient = new AgentMcpClient() }) {
  const toolCalls = [];
  for (const step of plan.steps) {
    const toolCall = mcpClient.callTool({
      tool: step.tool,
      input: step.input,
      role,
    });
    toolCalls.push(toolCall);
  }
  return toolCalls;
}

module.exports = {
  AgentMcpClient,
  executePlan,
};
