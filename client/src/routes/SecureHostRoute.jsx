/* eslint-disable react/prop-types */
// import React from 'react';

import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";

const SecureHostRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (role === "host") {
    return children;
  }

  return <Navigate to={"/dashboard"} />;
};

export default SecureHostRoute;
