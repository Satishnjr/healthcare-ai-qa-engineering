const FORBIDDEN_PATTERNS = [
  "delete all",
  "drop table",
  "bypass authorization",
  "expose secret",
  "expose phi",
];

function applyGuardrails({ request }) {
  const normalized = String(request ?? "").toLowerCase();
  const violation = FORBIDDEN_PATTERNS.find((pattern) => normalized.includes(pattern));
  if (!violation) {
    return {
      allowed: true,
      warnings: [],
    };
  }
  return {
    allowed: false,
    warnings: [`GUARDRAIL_BLOCKED:${violation}`],
    answer: "Request blocked by safety guardrails.",
  };
}

module.exports = {
  applyGuardrails,
};
