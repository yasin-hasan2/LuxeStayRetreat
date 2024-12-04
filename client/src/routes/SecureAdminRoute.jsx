/* eslint-disable react/prop-types */
// import React from 'react';

import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";

const SecureAdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (role === "admin") {
    return children;
  }

  return <Navigate to={"/dashboard"} />;
};

export default SecureAdminRoute;
