import React, { useState } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const PublicRoutes = () => {
  const { isUserLoggedIn } = useAuth();

  return isUserLoggedIn() ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
