const fs = require("fs");
const path = require("path");
const { AgentRuntime } = require("./agent-runtime");

function runSamples(runtime) {
  const runSuccess = runtime.executeGraphTask({
    request: "Find the acceptance criteria for appointment cancellation.",
    role: "Doctor",
  });
  const runNoEvidence = runtime.executeGraphTask({
    request: "Explain lunar surgery workflow controls for Mars colony hospitals.",
    role: "Doctor",
  });
  const runWaiting = runtime.executeGraphTask({
    request: "Create Jira issue for appointment cancellation defect.",
    role: "Doctor",
    approvalDecision: "REJECTED",
  });
  const runApproved = runtime.approveGraph(runWaiting.graphRunId);
  const runRejected = runtime.executeGraphTask({
    request: "Update Confluence page for appointment cancellation.",
    role: "Doctor",
    approvalDecision: "REJECTED",
  });
  const runAccessDenied = runtime.executeGraphTask({
    request: "Which Jira story is related to appointment cancellation?",
    role: "Patient",
  });
  return {
    success: runSuccess,
    noEvidence: runNoEvidence,
    waiting: runtime.getGraphState(runWaiting.graphRunId),
    approved: runApproved,
    rejected: runRejected,
    accessDenied: runAccessDenied,
  };
}

function writeArtifacts(data) {
  const frontendDir = path.join(__dirname, "..", "..", "frontend", "public", "agent");
  const outputPath = path.join(frontendDir, "graph-samples.json");
  try {
    fs.mkdirSync(frontendDir, { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    process.stdout.write(`Generated ${outputPath}\n`);
    return;
  } catch (error) {
    const fallbackDir = path.join(__dirname, "..", "..", ".tmp", "langgraph-runtime");
    fs.mkdirSync(fallbackDir, { recursive: true });
    const fallbackPath = path.join(fallbackDir, "graph-samples.json");
    fs.writeFileSync(fallbackPath, JSON.stringify(data, null, 2));
    process.stdout.write(
      `Frontend graph artifact write failed (${error.code ?? "UNKNOWN"}). Generated fallback ${fallbackPath}\n`,
    );
  }
}

function run() {
  const runtime = new AgentRuntime();
  const sampleRuns = runSamples(runtime);
  const payload = {
    generatedAt: new Date().toISOString(),
    runtime: "langgraph-compatible-development-runtime",
    samples: sampleRuns,
  };
  writeArtifacts(payload);
}

run();
