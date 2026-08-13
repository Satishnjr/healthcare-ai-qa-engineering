import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppState } from "../state/app-context";

export function RequireAuth({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAppState();
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <>{children}</>;
}

export function RequireRoleAccess({ children }: { children: ReactNode }) {
  const { canAccess } = useAppState();
  const location = useLocation();
  if (!canAccess(location.pathname)) {
    return <Navigate to="/unauthorized" replace state={{ attempted: location.pathname }} />;
  }
  return <>{children}</>;
}
