const { createError } = require("../security/error-contract");

function schema(type, options = {}) {
  return { type, ...options };
}

const roleEnum = [
  "Healthcare Administrator",
  "Doctor",
  "Nurse",
  "Receptionist",
  "Patient",
];

const directionEnum = ["outbound", "inbound", "both"];

const toolSchemas = {
  search_jira: {
    query: schema("string", { optional: true }),
    issueType: schema("string", { optional: true }),
    status: schema("string", { optional: true }),
    priority: schema("string", { optional: true }),
    assignee: schema("string", { optional: true }),
    labels: schema("array:string", { optional: true }),
    project: schema("string", { optional: true }),
  },
  get_jira_issue: {
    issueKey: schema("string"),
  },
  search_confluence: {
    query: schema("string", { optional: true }),
    space: schema("string", { optional: true }),
    labels: schema("array:string", { optional: true }),
    sourceType: schema("string", { optional: true }),
  },
  get_confluence_page: {
    pageId: schema("string"),
  },
  get_traceability: {
    entityType: schema("string"),
    entityId: schema("string"),
    direction: schema("string", { optional: true, enum: directionEnum }),
  },
  search_test_cases: {
    query: schema("string", { optional: true }),
    classification: schema("string", { optional: true }),
    module: schema("string", { optional: true }),
    automationStatus: schema("string", { optional: true }),
  },
  get_rag_context: {
    query: schema("string"),
    role: schema("string", { optional: true, enum: roleEnum }),
    topK: schema("number", { optional: true }),
    filters: schema("object", { optional: true }),
  },
  query_rag: {
    query: schema("string"),
    role: schema("string", { optional: true, enum: roleEnum }),
    topK: schema("number", { optional: true }),
  },
  get_rag_evaluation: {
    runId: schema("string", { optional: true }),
    caseId: schema("string", { optional: true }),
  },
  get_qa_knowledge: {
    query: schema("string"),
    role: schema("string", { optional: true, enum: roleEnum }),
  },
};

function validateType(value, type) {
  if (type === "string") {
    return typeof value === "string";
  }
  if (type === "number") {
    return typeof value === "number" && Number.isFinite(value);
  }
  if (type === "object") {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  }
  if (type === "array:string") {
    return Array.isArray(value) && value.every((item) => typeof item === "string");
  }
  return false;
}

function validateToolInput(toolName, input, requestId) {
  const schemaForTool = toolSchemas[toolName];
  if (!schemaForTool) {
    throw createError({
      code: "TOOL_NOT_AVAILABLE",
      message: `Tool ${toolName} is not registered`,
      tool: toolName,
      requestId,
      retryable: false,
    });
  }

  const normalized = input ?? {};
  if (typeof normalized !== "object" || Array.isArray(normalized)) {
    throw createError({
      code: "INVALID_INPUT",
      message: "Tool input must be a JSON object",
      tool: toolName,
      requestId,
      retryable: false,
    });
  }

  for (const [key, definition] of Object.entries(schemaForTool)) {
    const value = normalized[key];
    if ((value === undefined || value === null) && !definition.optional) {
      throw createError({
        code: "INVALID_INPUT",
        message: `Missing required input field: ${key}`,
        tool: toolName,
        requestId,
        retryable: false,
      });
    }
    if (value === undefined || value === null) {
      continue;
    }
    if (!validateType(value, definition.type)) {
      throw createError({
        code: "INVALID_INPUT",
        message: `Invalid field type for ${key}. Expected ${definition.type}`,
        tool: toolName,
        requestId,
        retryable: false,
      });
    }
    if (definition.enum && !definition.enum.includes(value)) {
      throw createError({
        code: "INVALID_INPUT",
        message: `Invalid value for ${key}`,
        tool: toolName,
        requestId,
        retryable: false,
        details: { allowedValues: definition.enum },
      });
    }
  }

  return normalized;
}

module.exports = {
  roleEnum,
  directionEnum,
  toolSchemas,
  validateToolInput,
};
