const ALLOWED_ROLES = new Set([
  "Doctor",
  "Nurse",
  "Receptionist",
  "Healthcare Administrator",
]);

function enforceAgentAccess(role) {
  if (ALLOWED_ROLES.has(role)) {
    return { allowed: true };
  }
  return {
    allowed: false,
    status: "ACCESS_DENIED",
    reason: `Role ${role} is not authorized to access the AI agent runtime.`,
  };
}

module.exports = {
  enforceAgentAccess,
};
