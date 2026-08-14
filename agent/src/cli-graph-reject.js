const { AgentRuntime } = require("./agent-runtime");
const { formatGraphState } = require("./cli-graph-utils");

function run() {
  const graphRunId = process.argv[2];
  if (!graphRunId) {
    process.stderr.write("Usage: npm run agent:graph:reject -- \"<graphRunId>\"\n");
    process.exitCode = 1;
    return;
  }
  const runtime = new AgentRuntime();
  const state = runtime.rejectGraph(graphRunId);
  process.stdout.write(`${formatGraphState(state)}\n`);
}

run();
