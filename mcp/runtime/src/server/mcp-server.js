const { listTools, callTool } = require("../runtime/tool-runtime");
const { listResources, readResource } = require("../resources/catalog");
const { createDependencies } = require("../runtime/dependencies");
const { ToolContractError } = require("../security/error-contract");

class LocalMcpServer {
  constructor() {
    this.dependencies = createDependencies();
    this.initialized = false;
  }

  handle(message) {
    const method = message?.method;
    const id = message?.id ?? null;
    const params = message?.params ?? {};

    try {
      if (method === "initialize") {
        this.initialized = true;
        return {
          jsonrpc: "2.0",
          id,
          result: {
            name: "careflow-mcp-runtime",
            version: "7.0.0",
            transport: "stdio-jsonl",
          },
        };
      }

      if (!this.initialized) {
        return {
          jsonrpc: "2.0",
          id,
          error: {
            code: -32002,
            message: "Server not initialized",
          },
        };
      }

      if (method === "tools/list") {
        return {
          jsonrpc: "2.0",
          id,
          result: {
            tools: listTools(),
          },
        };
      }

      if (method === "tools/call") {
        const response = callTool({
          toolName: params.name,
          input: params.input ?? {},
          role: params.role ?? "Doctor",
          requestId: params.requestId,
          deps: this.dependencies,
        });
        return {
          jsonrpc: "2.0",
          id,
          result: response,
        };
      }

      if (method === "resources/list") {
        return {
          jsonrpc: "2.0",
          id,
          result: {
            resources: listResources(),
          },
        };
      }

      if (method === "resources/read") {
        const resource = readResource(params.uri, this.dependencies);
        if (!resource) {
          return {
            jsonrpc: "2.0",
            id,
            error: {
              code: -32004,
              message: "Resource not found",
            },
          };
        }
        return {
          jsonrpc: "2.0",
          id,
          result: resource,
        };
      }

      if (method === "shutdown") {
        return {
          jsonrpc: "2.0",
          id,
          result: {
            status: "bye",
          },
        };
      }

      return {
        jsonrpc: "2.0",
        id,
        error: {
          code: -32601,
          message: `Unknown method: ${method}`,
        },
      };
    } catch (error) {
      if (error instanceof ToolContractError) {
        return {
          jsonrpc: "2.0",
          id,
          error: {
            code: -32010,
            message: error.message,
            data: error.toJSON(),
          },
        };
      }
      return {
        jsonrpc: "2.0",
        id,
        error: {
          code: -32603,
          message: "Internal server error",
        },
      };
    }
  }
}

module.exports = {
  LocalMcpServer,
};
