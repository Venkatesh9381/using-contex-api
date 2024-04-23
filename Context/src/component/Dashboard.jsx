// Dashboard.jsx
import React, { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";

const Dashboard = () => {
  const { authState, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! Your token is: {authState.token}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
