const ROLE_SCOPES = {
  Patient: new Set(["public"]),
  Doctor: new Set(["public", "team"]),
  Nurse: new Set(["public", "team"]),
  Receptionist: new Set(["public", "team"]),
  "Healthcare Administrator": new Set(["public", "team", "admin"]),
};

const TOOL_SCOPE_REQUIREMENTS = {
  search_jira: "team",
  get_jira_issue: "team",
  search_confluence: "public",
  get_confluence_page: "public",
  get_traceability: "team",
  search_test_cases: "team",
  get_rag_context: "public",
  query_rag: "public",
  get_rag_evaluation: "team",
  get_qa_knowledge: "public",
};

function isValidRole(role) {
  return Object.prototype.hasOwnProperty.call(ROLE_SCOPES, role);
}

function hasScope(role, scope) {
  if (!isValidRole(role)) {
    return false;
  }
  return ROLE_SCOPES[role].has(scope);
}

function authorizeToolCall(toolName, role) {
  const requiredScope = TOOL_SCOPE_REQUIREMENTS[toolName];
  if (!requiredScope) {
    return {
      allowed: false,
      reason: "TOOL_NOT_AVAILABLE",
      requiredScope: "unknown",
    };
  }
  if (!isValidRole(role)) {
    return {
      allowed: false,
      reason: "ACCESS_DENIED",
      requiredScope,
    };
  }

  const allowed = hasScope(role, requiredScope);
  return {
    allowed,
    reason: allowed ? "AUTHORIZED" : "ACCESS_DENIED",
    requiredScope,
  };
}

module.exports = {
  ROLE_SCOPES,
  TOOL_SCOPE_REQUIREMENTS,
  isValidRole,
  hasScope,
  authorizeToolCall,
};
