const fs = require("fs");
const path = require("path");
const { AgentRuntime } = require("./agent-runtime");

function run() {
  const runtime = new AgentRuntime();
  const samples = [
    {
      key: "acceptance_criteria",
      request: "Find the acceptance criteria for appointment cancellation.",
      role: "Doctor",
    },
    {
      key: "test_case_coverage",
      request: "What test cases cover appointment cancellation?",
      role: "Doctor",
    },
    {
      key: "rag_evaluation",
      request: "Why did the RAG evaluation fail?",
      role: "Doctor",
    },
    {
      key: "traceability_chain",
      request: "Give me the traceability chain for appointment cancellation.",
      role: "Doctor",
    },
    {
      key: "patient_denied",
      request: "Which Jira story is related to appointment cancellation?",
      role: "Patient",
    },
    {
      key: "no_evidence",
      request: "Explain lunar surgery workflow controls for Mars colony hospitals.",
      role: "Doctor",
    },
  ];

  const data = {
    generatedAt: new Date().toISOString(),
    provider: "DEVELOPMENT_DETERMINISTIC_PROVIDER",
    samples: samples.map((sample) => ({
      ...sample,
      response: runtime.executeTask({
        request: sample.request,
        role: sample.role,
      }),
    })),
  };

  const outputDir = path.join(__dirname, "..", "..", "frontend", "public", "agent");
  const outputPath = path.join(outputDir, "runtime-samples.json");
  try {
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    process.stdout.write(`Generated ${outputPath}\n`);
    return;
  } catch (error) {
    const fallbackDir = path.join(__dirname, "..", "..", ".tmp", "agent-runtime");
    fs.mkdirSync(fallbackDir, { recursive: true });
    const fallbackPath = path.join(fallbackDir, "runtime-samples.json");
    fs.writeFileSync(fallbackPath, JSON.stringify(data, null, 2));
    process.stdout.write(
      `Frontend artifact write failed (${error.code ?? "UNKNOWN"}). Generated fallback ${fallbackPath}\n`,
    );
  }
}

run();
