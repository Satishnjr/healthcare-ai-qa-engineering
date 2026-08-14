const { AgentRuntime } = require("./agent-runtime");
const { formatMultiAgentState } = require("./cli-multi-agent-utils");

function run() {
  const multiAgentRunId = process.argv[2];
  if (!multiAgentRunId) {
    process.stderr.write("Usage: npm run agent:multi:approve -- \"<multiAgentRunId>\"\n");
    process.exitCode = 1;
    return;
  }
  const runtime = new AgentRuntime();
  const state = runtime.approveMultiAgent(multiAgentRunId);
  process.stdout.write(`${formatMultiAgentState(state)}\n`);
}

run();

