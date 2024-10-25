import { useState } from "react";
import "./App.css";
import Dashboard from "./componets/Dashboard";
import Sidebar from "./componets/Sidebar";

function App() {
  const [sidebarToggle, setsidebarToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setsidebarToggle={setsidebarToggle}
      />
    </div>
  );
}

export default App;
