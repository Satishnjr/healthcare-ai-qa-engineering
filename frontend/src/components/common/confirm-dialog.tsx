interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  open,
  title,
  description,
  confirmText,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) {
    return null;
  }
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
      <div className="modal-card" data-testid="confirm-dialog">
        <h2 id="confirm-title">{title}</h2>
        <p>{description}</p>
        <div className="modal-actions">
          <button type="button" className="btn secondary" onClick={onCancel} data-testid="confirm-cancel">
            Cancel
          </button>
          <button type="button" className="btn danger" onClick={onConfirm} data-testid="confirm-submit">
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

