import { useEffect, useMemo, useState } from "react";
import { PageTitle } from "../components/common/page-title";
import { invokeMcpToolDemo, loadMcpToolCatalog } from "../services/mcp-client";
import type { McpToolCallEnvelope, McpToolDefinition } from "../types/mcp";

const demoToolDefaults: Record<string, string> = {
  search_jira: `{"query":"patient search","issueType":"Story","status":"QA Testing"}`,
  get_traceability: `{"entityType":"TEST_CASE","entityId":"TC-TS-003-007-01","direction":"both"}`,
  query_rag: `{"query":"patient search acceptance criteria","role":"Doctor","topK":3}`,
  get_rag_evaluation: `{}`,
};

export function McpPage() {
  const [tools, setTools] = useState<McpToolDefinition[]>([]);
  const [selectedTool, setSelectedTool] = useState<string>("");
  const [role, setRole] = useState("Doctor");
  const [input, setInput] = useState(demoToolDefaults.search_jira);
  const [result, setResult] = useState<McpToolCallEnvelope | null>(null);
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    loadMcpToolCatalog()
      .then((catalog) => {
        setTools(catalog.tools);
        setSelectedTool(catalog.tools[0]?.name ?? "");
      })
      .catch((reason) => setError(reason instanceof Error ? reason.message : "Failed to load MCP tools."));
  }, []);

  useEffect(() => {
    if (!selectedTool) {
      return;
    }
    setInput(demoToolDefaults[selectedTool] ?? "{}");
  }, [selectedTool]);

  const selectedToolData = useMemo(
    () => tools.find((tool) => tool.name === selectedTool) ?? null,
    [tools, selectedTool]
  );

  const execute = async () => {
    if (!selectedTool) {
      return;
    }
    setIsRunning(true);
    setError("");
    try {
      setResult(await invokeMcpToolDemo(selectedTool, role));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "MCP execution failed.");
      setResult(null);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <section data-testid="mcp-page">
      <PageTitle
        title="MCP Runtime Tools"
        subtitle="Step 7 deterministic MCP tool discovery and invocation demonstration."
      />
      <article className="card" data-testid="mcp-runtime-status">
        <h3>Runtime Status</h3>
        <p><strong>Mode:</strong> Local deterministic MCP bridge for frontend demo.</p>
        <p><strong>Transport Boundary:</strong> Browser reads generated MCP artifacts; server/client runtime executes in Node (stdio).</p>
      </article>

      <article className="card" data-testid="mcp-tool-list">
        <h3>Available Tools</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.name} data-testid="mcp-tool">
                  <td data-testid="mcp-tool-name">
                    <button type="button" className="btn secondary" onClick={() => setSelectedTool(tool.name)}>
                      {tool.name}
                    </button>
                  </td>
                  <td data-testid="mcp-tool-description">{tool.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {selectedToolData ? (
        <article className="card">
          <h3>Tool Invocation</h3>
          <p><strong>Selected Tool:</strong> {selectedToolData.name}</p>
          <label htmlFor="mcp-role">Role</label>
          <select id="mcp-role" value={role} onChange={(event) => setRole(event.target.value)}>
            <option>Doctor</option>
            <option>Nurse</option>
            <option>Receptionist</option>
            <option>Healthcare Administrator</option>
            <option>Patient</option>
          </select>

          <p><strong>Input Schema</strong></p>
          <pre data-testid="mcp-tool-input">{JSON.stringify(selectedToolData.inputSchema, null, 2)}</pre>

          <label htmlFor="mcp-input">Demo Input (display only)</label>
          <textarea
            id="mcp-input"
            rows={5}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled
          />

          <button
            type="button"
            className="btn primary"
            onClick={execute}
            disabled={isRunning}
            data-testid="mcp-tool-execute"
          >
            {isRunning ? "Executing..." : "Execute"}
          </button>
        </article>
      ) : null}

      {error ? (
        <article className="card" data-testid="mcp-error">
          <p className="error-text">{error}</p>
        </article>
      ) : null}

      {result ? (
        <article className="card" data-testid="mcp-tool-result">
          <h3>Tool Result</h3>
          <p data-testid="mcp-tool-status"><strong>Status:</strong> {result.status ?? "ERROR"}</p>
          <p data-testid="mcp-request-id"><strong>Request ID:</strong> {result.requestId ?? result.error?.requestId ?? "n/a"}</p>
          <p><strong>Authorization:</strong> {result.authorization?.allowed === false ? "DENIED" : "ALLOWED"}</p>
          <p data-testid="mcp-source">
            <strong>Source:</strong> {Array.isArray((result.result as { sourceSystems?: string[] })?.sourceSystems)
              ? ((result.result as { sourceSystems?: string[] }).sourceSystems ?? []).join(", ")
              : (result.result as { sourceSystem?: string })?.sourceSystem ?? "n/a"}
          </p>
          <pre>{JSON.stringify(result.error ?? result.result, null, 2)}</pre>
        </article>
      ) : null}
    </section>
  );
}
