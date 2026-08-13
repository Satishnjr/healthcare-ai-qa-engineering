export function LoadingState({ label }: { label: string }) {
  return (
    <div className="state-panel" data-testid="state-loading">
      <p>{label}</p>
    </div>
  );
}

export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="state-panel" data-testid="state-empty">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export function ErrorState({ title, message }: { title: string; message: string }) {
  return (
    <div className="state-panel error" data-testid="state-error">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

