const assert = require("assert");
const { AgentRuntime } = require("../src/agent-runtime");

function run() {
  const runtime = new AgentRuntime();

  const successState = runtime.executeMultiAgentTask({
    request:
      "Find the acceptance criteria for appointment cancellation and identify the test cases that should cover it.",
    role: "Doctor",
  });
  assert.ok(successState.multiAgentRunId, "multiAgentRunId should be present");
  assert.ok(successState.selectedAgents.includes("qa_analyst"), "QA analyst should be selected");
  assert.ok(successState.selectedAgents.includes("test_analyst"), "Test analyst should be selected");
  assert.ok(successState.finalResponse, "final response should be present");
  assert.ok(successState.evidence.length > 0, "evidence should be collected");
  assert.ok(successState.citations.length > 0, "citations should be present");
  assert.ok(["SUCCESS", "PARTIAL"].includes(successState.finalStatus), "final status should be terminal");

  const ragState = runtime.executeMultiAgentTask({
    request: "What is the RAG quality for appointment cancellation?",
    role: "Doctor",
  });
  assert.ok(ragState.selectedAgents.includes("rag_knowledge"), "RAG specialist should be selected");
  assert.ok(ragState.agentResults.rag_knowledge, "RAG specialist should execute");
  assert.ok(ragState.confidence.score >= 0, "confidence score should be computed");

  const unauthorizedState = runtime.executeMultiAgentTask({
    request: "Find all defect insights.",
    role: "Patient",
  });
  assert.strictEqual(
    unauthorizedState.finalStatus,
    "UNAUTHORIZED",
    "patient role should be blocked for agent runtime",
  );

  const history = runtime.getMultiAgentHistory(successState.multiAgentRunId);
  assert.ok(history, "history should be available");
  assert.ok(Array.isArray(history.executionHistory), "executionHistory should be array");

  const checkpointState = runtime.getMultiAgentState(successState.multiAgentRunId);
  assert.ok(checkpointState, "checkpoint state should be retrievable");

  const rejectRun = runtime.executeMultiAgentTask({
    request: "Create Jira issue for appointment cancellation defect.",
    role: "Doctor",
    approvalDecision: "REJECTED",
  });
  assert.ok(rejectRun.multiAgentRunId, "approval run should produce run id");
  const rejected = runtime.rejectMultiAgent(rejectRun.multiAgentRunId);
  assert.strictEqual(rejected.approvalStatus, "REJECTED", "reject action should set approval to REJECTED");

  const approved = runtime.approveMultiAgent(rejectRun.multiAgentRunId);
  assert.strictEqual(approved.approvalStatus, "APPROVED", "approve action should set approval to APPROVED");

  console.log("PASS: Step 10 multi-agent runtime tests passed");
}

run();

