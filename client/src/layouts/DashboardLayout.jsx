// import React from 'react';

import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* Side bar */}
      <div>
        <Sidebar></Sidebar>
      </div>

      {/* Outlet ==> dynamic content */}
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
