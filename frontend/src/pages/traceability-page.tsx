import { useMemo, useState } from "react";
import { PageTitle } from "../components/common/page-title";
import { traceabilityNodes } from "../data/jira-confluence-data";

export function TraceabilityPage() {
  const [selectedNodeId, setSelectedNodeId] = useState(traceabilityNodes[0]?.id ?? "");

  const selectedNode = useMemo(
    () => traceabilityNodes.find((node) => node.id === selectedNodeId) ?? null,
    [selectedNodeId],
  );

  const related = useMemo(() => {
    if (!selectedNode) {
      return [];
    }
    return traceabilityNodes.filter(
      (node) => selectedNode.linksTo.includes(node.id) || node.linksTo.includes(selectedNode.id),
    );
  }, [selectedNode]);

  return (
    <section data-testid="page-traceability-root">
      <PageTitle
        title="Traceability View"
        subtitle="Cross-layer chain from business requirement to future MCP tools and AI agents."
      />

      <article className="card" data-testid="traceability-view">
        <div className="traceability-chain">
          {traceabilityNodes.map((node) => (
            <button
              key={node.id}
              type="button"
              className={`traceability-node ${selectedNode?.id === node.id ? "active" : ""}`}
              onClick={() => setSelectedNodeId(node.id)}
            >
              {node.type}: {node.id}
            </button>
          ))}
        </div>
      </article>

      <article className="card">
        <h3>Selected Entity</h3>
        {selectedNode ? (
          <>
            <p>
              <strong>{selectedNode.type}</strong> - {selectedNode.id}
            </p>
            <p>{selectedNode.label}</p>
            <p>Direct links: {selectedNode.linksTo.join(", ") || "None"}</p>
          </>
        ) : (
          <p>No selected node.</p>
        )}

        <h3>Related Entities</h3>
        <ul className="dashboard-list">
          {related.length === 0 ? <li>No direct related entities.</li> : null}
          {related.map((node) => (
            <li key={node.id}>
              {node.type}: {node.id} - {node.label}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
