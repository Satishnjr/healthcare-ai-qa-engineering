const { AgentRuntime } = require("./agent-runtime");
const { formatMultiAgentState } = require("./cli-multi-agent-utils");

function parseArgs(argv) {
  const parts = argv.slice(2);
  let role = "Doctor";
  let approvalDecision = "APPROVED";
  const requestParts = [];
  for (let index = 0; index < parts.length; index += 1) {
    const token = parts[index];
    if (token === "--role") {
      role = parts[index + 1] ?? role;
      index += 1;
      continue;
    }
    if (token === "--approval") {
      approvalDecision = parts[index + 1] ?? approvalDecision;
      index += 1;
      continue;
    }
    requestParts.push(token);
  }
  return {
    role,
    approvalDecision,
    request: requestParts.join(" ").trim(),
  };
}

function run() {
  const { request, role, approvalDecision } = parseArgs(process.argv);
  if (!request) {
    process.stderr.write(
      "Usage: npm run agent:multi -- \"<query>\" [--role Doctor] [--approval APPROVED|REJECTED]\n",
    );
    process.exitCode = 1;
    return;
  }
  const runtime = new AgentRuntime();
  const state = runtime.executeMultiAgentTask({
    request,
    role,
    approvalDecision,
  });
  process.stdout.write(`${formatMultiAgentState(state)}\n`);
}

run();

