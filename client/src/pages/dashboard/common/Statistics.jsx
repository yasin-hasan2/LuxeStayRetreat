// import React from 'react';
import useRole from "../../../hooks/useRole.js";
import AdminStatistics from "../admin/AdminStatistics.jsx";

const Statistics = () => {
  const [role, isLoading] = useRole();

  return (
    <div>
      {/* <h1>Welcome to dashboard: statistics page for : {role} </h1> */}
      {role === "admin" && <AdminStatistics isLoading={isLoading} />}
    </div>
  );
};

export default Statistics;
