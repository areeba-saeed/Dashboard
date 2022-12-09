import React from "react";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";
import SuperadminDashboard from "./superAdminDashboard";
function App() {
  return (
    <div className="app">
      <SuperadminDashboard />
      <AdminDashboard />
    </div>
  );
}

export default App;
