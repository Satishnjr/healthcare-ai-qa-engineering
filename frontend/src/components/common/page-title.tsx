import type { ReactNode } from "react";

export function PageTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <header className="page-title" data-testid={`page-title-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {action ? <div className="page-title-action">{action}</div> : null}
    </header>
  );
}
