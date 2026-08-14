const assert = require("assert");
const { McpClientHarness } = require("../src");

async function run() {
  const client = new McpClientHarness();
  await client.connect();

  const tools = await client.listTools();
  assert.strictEqual(tools.length, 10);
  const toolNames = tools.map((tool) => tool.name);
  assert(toolNames.includes("query_rag"));

  const jiraCall = await client.callTool(
    "search_jira",
    { query: "patient", issueType: "Story" },
    "Doctor"
  );
  assert(jiraCall.result.status === "SUCCESS");
  assert(jiraCall.result.result.total >= 1);

  const deniedCall = await client.callTool(
    "search_jira",
    { query: "patient" },
    "Patient"
  );
  assert(deniedCall.error);
  assert.strictEqual(deniedCall.error.data.code, "ACCESS_DENIED");

  const resources = await client.listResources();
  assert(resources.length >= 5);

  await client.disconnect();
  process.stdout.write("PASS: Step 7 MCP client/server test passed\n");
}

run().catch((error) => {
  process.stderr.write(`FAIL: ${error.message}\n`);
  process.exit(1);
});
