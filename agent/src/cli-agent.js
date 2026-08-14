const { AgentRuntime } = require("./agent-runtime");

function parseArgs(argv) {
  const parts = argv.slice(2);
  let role = "Doctor";
  const filtered = [];
  for (let index = 0; index < parts.length; index += 1) {
    const value = parts[index];
    if (value === "--role") {
      role = parts[index + 1] ?? role;
      index += 1;
      continue;
    }
    filtered.push(value);
  }
  return {
    role,
    request: filtered.join(" ").trim(),
  };
}

function render(response) {
  const lines = [];
  lines.push("AI Agent Runtime Response");
  lines.push("-------------------------");
  lines.push(`Status: ${response.status}`);
  lines.push(`Task ID: ${response.taskId}`);
  lines.push(`Task Type: ${response.taskType}`);
  lines.push(`Confidence: ${response.confidence.score} (${response.confidence.band})`);
  lines.push("");
  lines.push("Answer:");
  lines.push(response.answer);
  lines.push("");
  lines.push("Tools:");
  response.toolCalls.forEach((call) => {
    lines.push(`- ${call.tool} | ${call.status} | ${call.requestId} | ${call.durationMs}ms`);
  });
  lines.push("");
  lines.push("Citations:");
  response.citations.forEach((citation) => {
    lines.push(`- ${citation.sourceSystem}:${citation.sourceId}`);
  });
  if (response.warnings.length > 0) {
    lines.push("");
    lines.push("Warnings:");
    response.warnings.forEach((warning) => lines.push(`- ${warning}`));
  }
  return lines.join("\n");
}

function run() {
  const { request, role } = parseArgs(process.argv);
  if (!request) {
    process.stderr.write("Usage: npm run agent:task -- \"<query>\" [--role Doctor]\n");
    process.exitCode = 1;
    return;
  }

  const runtime = new AgentRuntime();
  const response = runtime.executeTask({
    request,
    role,
  });
  process.stdout.write(`${render(response)}\n`);
}

run();
