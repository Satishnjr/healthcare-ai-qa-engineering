import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppState } from "../state/app-context";

export function LogoutPage() {
  const { logout } = useAppState();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/login" replace />;
}

