import type {
  AppointmentStatus,
  ClaimStatus,
} from "../../types/domain";

type BadgeStatus =
  | AppointmentStatus
  | ClaimStatus
  | "NORMAL"
  | "MODERATE"
  | "HIGH_LOAD"
  | "PENDING"
  | "PAID"
  | "OVERDUE"
  | "ACTIVE"
  | "COMPLETED";

const toneMap: Record<BadgeStatus, string> = {
  SCHEDULED: "badge-info",
  CONFIRMED: "badge-success",
  CHECKED_IN: "badge-success",
  CANCELLED: "badge-danger",
  OPEN: "badge-warning",
  IN_REVIEW: "badge-info",
  APPROVED: "badge-success",
  REJECTED: "badge-danger",
  NORMAL: "badge-success",
  MODERATE: "badge-warning",
  HIGH_LOAD: "badge-danger",
  PENDING: "badge-warning",
  PAID: "badge-success",
  OVERDUE: "badge-danger",
  ACTIVE: "badge-success",
  COMPLETED: "badge-info",
};

export function StatusBadge({ status }: { status: BadgeStatus }) {
  return (
    <span className={`badge ${toneMap[status]}`} data-testid={`status-${status.toLowerCase()}`}>
      {status}
    </span>
  );
}
