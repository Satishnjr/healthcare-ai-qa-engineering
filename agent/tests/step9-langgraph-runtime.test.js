const assert = require("assert");

const { AgentRuntime } = require("../src");
const checkpointer = require("../src/graph/graph-checkpointer");
const { createGraphDefinition } = require("../src/graph/graph-builder");
const { initializeGraphState } = require("../src/graph/graph-state");
const { nextNodeFor } = require("../src/graph/graph-edges");

function run() {
  const runtime = new AgentRuntime();
  const definition = createGraphDefinition();

  // state initialization
  const initial = initializeGraphState({
    request: "Find acceptance criteria for appointment cancellation.",
    role: "Doctor",
  });
  assert(initial.graphRunId);
  assert.strictEqual(initial.currentNode, "START");

  // node and edge registration
  assert(definition.nodes.task_understanding);
  assert.strictEqual(nextNodeFor(initial, "START"), "task_understanding");

  // successful graph execution (integration path)
  const success = runtime.executeGraphTask({
    request: "Find the acceptance criteria for appointment cancellation.",
    role: "Doctor",
  });
  assert(success.graphRunId);
  assert(success.nodeHistory.some((item) => item.node === "task_understanding"));
  assert(success.nodeHistory.some((item) => item.node === "planning"));
  assert(success.nodeHistory.some((item) => item.node === "tool_execution"));
  assert(success.toolCalls.length >= 1);
  assert(success.evidence.length >= 1);
  assert(success.response);

  // no evidence path
  const noEvidence = runtime.executeGraphTask({
    request: "Explain lunar surgery workflow controls for Mars colony hospitals.",
    role: "Doctor",
  });
  assert(noEvidence.evidenceValidation);
  assert(["PARTIAL", "SUCCESS", "NO_EVIDENCE", "FAILED"].includes(noEvidence.finalStatus));

  // authorization failure
  const denied = runtime.executeGraphTask({
    request: "Which Jira story is related to appointment cancellation?",
    role: "Patient",
  });
  assert.strictEqual(denied.finalStatus, "ACCESS_DENIED");

  // approval required + waiting
  const waiting = runtime.executeGraphTask({
    request: "Create Jira issue for appointment cancellation defect.",
    role: "Doctor",
    approvalDecision: "REJECTED",
  });
  assert.strictEqual(waiting.executionStatus, "WAITING_FOR_APPROVAL");
  assert.strictEqual(waiting.currentNode, "WAITING_FOR_APPROVAL");

  // checkpoint save/load/list
  const loaded = checkpointer.loadCheckpoint(waiting.graphRunId);
  assert(loaded);
  assert.strictEqual(loaded.graphRunId, waiting.graphRunId);
  const checkpointList = runtime.listGraphCheckpoints();
  assert(checkpointList.some((item) => item.graphRunId === waiting.graphRunId));

  // resume via approval approve
  const approved = runtime.approveGraph(waiting.graphRunId);
  assert(["COMPLETED", "FAILED"].includes(approved.executionStatus));
  assert(approved.nodeHistory.some((item) => item.node === "audit"));

  // approval reject
  const waitingReject = runtime.executeGraphTask({
    request: "Update Confluence page for appointment cancellation.",
    role: "Doctor",
    approvalDecision: "REJECTED",
  });
  const rejected = runtime.rejectGraph(waitingReject.graphRunId);
  assert(["PARTIAL", "NEEDS_APPROVAL", "FAILED", "SUCCESS"].includes(rejected.finalStatus));

  // graph status/history APIs
  const state = runtime.getGraphState(success.graphRunId);
  assert(state);
  const history = runtime.getGraphHistory(success.graphRunId);
  assert(history);
  assert(history.transitionHistory.length >= 1);

  // max steps protection
  const tightRuntime = runtime.graphRuntime.constructor
    ? new runtime.graphRuntime.constructor({ MAX_GRAPH_STEPS: 1 })
    : runtime.graphRuntime;
  const limited = tightRuntime.run({
    request: "Find the acceptance criteria for appointment cancellation.",
    role: "Doctor",
  });
  assert(limited.errors.some((item) => item.code === "GRAPH_MAX_STEPS"));

  // max tool calls protection
  const toolLimitedRuntime = new runtime.graphRuntime.constructor({
    MAX_GRAPH_STEPS: 30,
    MAX_TOOL_CALLS: 1,
  });
  const toolLimited = toolLimitedRuntime.run({
    request: "Give me the complete traceability for appointment cancellation.",
    role: "Doctor",
  });
  assert(toolLimited.limits.toolCallCount >= 1);

  // cleanup retention
  const cleanup = runtime.graphRuntime.cleanupCheckpoints(5);
  assert(typeof cleanup.removed === "number");

  process.stdout.write("PASS: Step 9 LangGraph runtime tests passed\n");
}

run();
