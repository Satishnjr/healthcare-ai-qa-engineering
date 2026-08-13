import { useState } from "react";
import { PageTitle } from "../components/common/page-title";
import { jiraBoardCards } from "../data/jira-confluence-data";
import type { JiraBoardCard } from "../types/jira-confluence";

const boardColumns: JiraBoardCard["column"][] = ["BACKLOG", "SELECTED", "IN_PROGRESS", "IN_REVIEW", "DONE"];

const nextColumn: Record<JiraBoardCard["column"], JiraBoardCard["column"]> = {
  BACKLOG: "SELECTED",
  SELECTED: "IN_PROGRESS",
  IN_PROGRESS: "IN_REVIEW",
  IN_REVIEW: "DONE",
  DONE: "DONE",
};

export function JiraBoardPage() {
  const [cards, setCards] = useState(jiraBoardCards);

  const moveCard = (issueKey: string) => {
    setCards((previous) =>
      previous.map((card) =>
        card.issueKey === issueKey ? { ...card, column: nextColumn[card.column] } : card,
      ),
    );
  };

  return (
    <section data-testid="page-jira-board-root">
      <PageTitle
        title="Jira Sprint Board"
        subtitle="Kanban-style board for current sprint simulation."
      />

      <article className="board-grid card" data-testid="jira-board">
        {boardColumns.map((column) => (
          <section key={column} className="board-column" data-testid={`jira-board-${column.toLowerCase()}`}>
            <h3>{column.replace(/_/g, " ")}</h3>
            <div className="board-column-cards">
              {cards
                .filter((card) => card.column === column)
                .map((card) => (
                  <article key={card.issueKey} className="board-card">
                    <p className="board-card-key">{card.issueKey}</p>
                    <p>{card.summary}</p>
                    <p className="hint">{card.assignee} | {card.priority}</p>
                    <button
                      type="button"
                      className="btn secondary small"
                      onClick={() => moveCard(card.issueKey)}
                      disabled={card.column === "DONE"}
                    >
                      Move Forward
                    </button>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </article>
      <p className="hint">Board interaction is local-state only and intentionally excludes drag-and-drop complexity.</p>
    </section>
  );
}
