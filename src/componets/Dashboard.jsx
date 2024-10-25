import React from "react";
import Navbar from "./Navbar";

const Dashboard = ({ sidebarToggle, setsidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setsidebarToggle={setsidebarToggle}
      />
    </div>
  );
};

export default Dashboard;
