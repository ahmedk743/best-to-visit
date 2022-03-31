import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { isUserLoggedIn } = useAuth();

  const location = useLocation();

  return isUserLoggedIn() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
