const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const baseDir = path.join(repoRoot, ".tmp", "langgraph-runtime");
const checkpointsDir = path.join(baseDir, "checkpoints");
const runsDir = path.join(baseDir, "runs");

function ensureDirs() {
  fs.mkdirSync(checkpointsDir, { recursive: true });
  fs.mkdirSync(runsDir, { recursive: true });
}

function checkpointPath(graphRunId) {
  return path.join(checkpointsDir, `${graphRunId}.json`);
}

function runPath(graphRunId) {
  return path.join(runsDir, `${graphRunId}.json`);
}

function saveCheckpoint(state, status = "RUNNING") {
  ensureDirs();
  const payload = {
    graphRunId: state.graphRunId,
    state,
    currentNode: state.currentNode,
    completedNodes: state.nodeHistory.map((item) => item.node),
    pendingNode: state.finalStatus === "RUNNING" ? state.currentNode : null,
    timestamp: new Date().toISOString(),
    status,
  };
  fs.writeFileSync(checkpointPath(state.graphRunId), JSON.stringify(payload, null, 2));
  fs.writeFileSync(runPath(state.graphRunId), JSON.stringify(payload, null, 2));
  return payload;
}

function loadCheckpoint(graphRunId) {
  ensureDirs();
  const file = checkpointPath(graphRunId);
  if (!fs.existsSync(file)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function loadRun(graphRunId) {
  ensureDirs();
  const file = runPath(graphRunId);
  if (!fs.existsSync(file)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function listCheckpoints() {
  ensureDirs();
  return fs
    .readdirSync(checkpointsDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const value = JSON.parse(
        fs.readFileSync(path.join(checkpointsDir, file), "utf8"),
      );
      return {
        graphRunId: value.graphRunId,
        currentNode: value.currentNode,
        status: value.status,
        timestamp: value.timestamp,
      };
    })
    .sort((left, right) => right.timestamp.localeCompare(left.timestamp));
}

function cleanupCheckpoints(retain = 100) {
  ensureDirs();
  const items = listCheckpoints();
  const remove = items.slice(retain);
  remove.forEach((item) => {
    const file = checkpointPath(item.graphRunId);
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
  });
  return {
    retained: Math.min(items.length, retain),
    removed: remove.length,
  };
}

module.exports = {
  saveCheckpoint,
  loadCheckpoint,
  loadRun,
  listCheckpoints,
  cleanupCheckpoints,
  checkpointsDir,
  runsDir,
};
