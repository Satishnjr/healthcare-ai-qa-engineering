const APPROVAL_ACTIONS = [
  { token: "create jira", action: "CREATE_JIRA_ISSUE" },
  { token: "update jira", action: "UPDATE_JIRA_ISSUE" },
  { token: "create confluence", action: "CREATE_CONFLUENCE_PAGE" },
  { token: "update confluence", action: "UPDATE_CONFLUENCE_PAGE" },
  { token: "delete", action: "DELETE_OPERATION" },
  { token: "destructive test", action: "DESTRUCTIVE_TEST_EXECUTION" },
  { token: "production", action: "PRODUCTION_IMPACTING_ACTION" },
];

function detectApprovalRequirement(request) {
  const normalized = String(request ?? "").toLowerCase();
  const matched = APPROVAL_ACTIONS.find((item) => normalized.includes(item.token));
  if (!matched) {
    return {
      required: false,
      action: null,
      reason: "Read-only request.",
      status: "NOT_REQUIRED",
    };
  }
  return {
    required: true,
    action: matched.action,
    reason: `Action ${matched.action} requires human approval.`,
    status: "REQUIRED",
  };
}

module.exports = {
  detectApprovalRequirement,
};
