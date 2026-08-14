const { McpClientHarness } = require("./clients/mcp-client-harness");

async function run() {
  const client = new McpClientHarness();
  await client.connect();

  const tools = await client.listTools();
  const toolNames = tools.map((tool) => tool.name);

  const searchJiraResponse = await client.callTool(
    "search_jira",
    { query: "patient search", issueType: "Story" },
    "Doctor"
  );
  const traceabilityResponse = await client.callTool(
    "get_traceability",
    { entityType: "TEST_CASE", entityId: "TC-TS-003-007-01", direction: "both" },
    "Doctor"
  );
  const ragResponse = await client.callTool(
    "query_rag",
    { query: "patient search acceptance criteria", role: "Doctor", topK: 3 },
    "Doctor"
  );

  process.stdout.write(
    `${JSON.stringify(
      {
        toolCount: tools.length,
        tools: toolNames,
        sampleCalls: {
          search_jira: searchJiraResponse.result?.status ?? searchJiraResponse.error?.message,
          get_traceability:
            traceabilityResponse.result?.status ?? traceabilityResponse.error?.message,
          query_rag: ragResponse.result?.status ?? ragResponse.error?.message,
        },
      },
      null,
      2
    )}\n`
  );

  await client.disconnect();
}

run().catch((error) => {
  process.stderr.write(`MCP client demo failed: ${error.message}\n`);
  process.exit(1);
});
