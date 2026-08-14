const { AgentRuntime } = require("./agent-runtime");
const { formatGraphState } = require("./cli-graph-utils");

function run() {
  const graphRunId = process.argv[2];
  if (!graphRunId) {
    process.stderr.write("Usage: npm run agent:graph:status -- \"<graphRunId>\"\n");
    process.exitCode = 1;
    return;
  }
  const runtime = new AgentRuntime();
  const state = runtime.getGraphState(graphRunId);
  if (!state) {
    process.stderr.write(`Graph run ${graphRunId} not found.\n`);
    process.exitCode = 1;
    return;
  }
  process.stdout.write(`${formatGraphState(state)}\n`);
}

run();
