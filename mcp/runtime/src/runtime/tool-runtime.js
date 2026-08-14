const { performance } = require("perf_hooks");

const { toolCatalog } = require("../tools/catalog");
const { toolHandlers } = require("../tools/handlers");
const { validateToolInput } = require("../schemas/tool-schemas");
const { authorizeToolCall } = require("../security/authorization");
const { createError, ToolContractError } = require("../security/error-contract");
const { appendAudit } = require("../observability/audit-log");
const { createRequestId, nowIso } = require("./request");

function summarizeInput(input) {
  const summary = {};
  if (!input || typeof input !== "object") {
    return summary;
  }
  for (const [key, value] of Object.entries(input)) {
    if (typeof value === "string") {
      summary[key] = value.length > 80 ? `${value.slice(0, 77)}...` : value;
    } else if (Array.isArray(value)) {
      summary[key] = `array(${value.length})`;
    } else if (value && typeof value === "object") {
      summary[key] = "object";
    } else {
      summary[key] = value;
    }
  }
  return summary;
}

function listTools() {
  return toolCatalog;
}

function callTool({ toolName, input, role = "Doctor", requestId, deps }) {
  const tool = toolCatalog.find((item) => item.name === toolName);
  const id = requestId ?? createRequestId();
  const started = performance.now();
  const timestamp = nowIso();
  const authorization = authorizeToolCall(toolName, role);
  const auditBase = {
    requestId: id,
    timestamp,
    toolName,
    inputSummary: summarizeInput(input),
    role,
    authorizationResult: authorization.reason,
  };

  if (!tool) {
    const error = createError({
      code: "TOOL_NOT_AVAILABLE",
      message: `Tool ${toolName} is not available`,
      tool: toolName,
      requestId: id,
      retryable: false,
    });
    appendAudit({
      ...auditBase,
      durationMs: Number((performance.now() - started).toFixed(2)),
      status: "ERROR",
      errorCode: error.code,
      sourceSystems: [],
      returnedRecordCount: 0,
    });
    throw error;
  }

  if (!authorization.allowed) {
    const error = createError({
      code: "ACCESS_DENIED",
      message: `Role ${role} is not authorized to call ${toolName}`,
      tool: toolName,
      requestId: id,
      retryable: false,
      details: { requiredScope: authorization.requiredScope },
    });
    appendAudit({
      ...auditBase,
      durationMs: Number((performance.now() - started).toFixed(2)),
      status: "ERROR",
      errorCode: error.code,
      sourceSystems: [],
      returnedRecordCount: 0,
    });
    throw error;
  }

  try {
    const normalizedInput = validateToolInput(toolName, input ?? {}, id);
    const handler = toolHandlers[toolName];
    const result = handler({
      input: normalizedInput,
      role,
      requestId: id,
      deps,
    });

    const recordCount =
      result.total ??
      result.issues?.length ??
      result.pages?.length ??
      result.testCases?.length ??
      result.retrievedChunks?.length ??
      result.retrievedDocuments?.length ??
      result.evaluationRun?.totalCases ??
      result.graph?.nodes?.length ??
      1;

    const sourceSystems = result.sourceSystems ?? [result.sourceSystem ?? "unknown"];
    const durationMs = Number((performance.now() - started).toFixed(2));
    const audit = {
      ...auditBase,
      durationMs,
      status: "SUCCESS",
      errorCode: null,
      sourceSystems,
      returnedRecordCount: recordCount,
    };
    appendAudit(audit);

    return {
      requestId: id,
      status: "SUCCESS",
      tool: toolName,
      role,
      authorization: {
        allowed: true,
        requiredScope: authorization.requiredScope,
      },
      result,
      audit,
    };
  } catch (error) {
    const toolError =
      error instanceof ToolContractError
        ? error
        : createError({
            code: "INTERNAL_ERROR",
            message: "Tool execution failed unexpectedly",
            tool: toolName,
            requestId: id,
            retryable: false,
          });
    const durationMs = Number((performance.now() - started).toFixed(2));
    appendAudit({
      ...auditBase,
      durationMs,
      status: "ERROR",
      errorCode: toolError.code,
      sourceSystems: [],
      returnedRecordCount: 0,
    });
    throw toolError;
  }
}

module.exports = {
  listTools,
  callTool,
};
