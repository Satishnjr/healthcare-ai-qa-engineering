class ToolContractError extends Error {
  constructor({
    code,
    message,
    tool,
    requestId,
    retryable = false,
    details = null,
  }) {
    super(message);
    this.name = "ToolContractError";
    this.code = code;
    this.tool = tool;
    this.requestId = requestId;
    this.retryable = retryable;
    this.details = details;
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      tool: this.tool,
      requestId: this.requestId,
      retryable: this.retryable,
      details: this.details,
    };
  }
}

function createError(payload) {
  return new ToolContractError(payload);
}

module.exports = {
  ToolContractError,
  createError,
};
