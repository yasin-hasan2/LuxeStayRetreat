// import React from 'react';
import LoadingSpinner from "../../../components/Shared/LoadingSpinner.jsx";
import useRole from "../../../hooks/useRole.js";
import AdminStatistics from "../admin/AdminStatistics.jsx";
import GuestStatistics from "../guest/GuestStatistics.jsx";
import HostStatistics from "../host/HostStatistics.jsx";

const Statistics = () => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      {/* <h1>Welcome to dashboard: statistics page for : {role} </h1> */}
      {role === "admin" && <AdminStatistics />}
      {role === "host" && <HostStatistics />}
      {role === "guest" && <GuestStatistics />}
    </div>
  );
};

export default Statistics;
