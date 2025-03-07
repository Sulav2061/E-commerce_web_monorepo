import React from "react";

import DashCard from "./card";

const Dashboard = () => {
  return (
    <div
      style={{
        backgroundColor: "#EFF3F5",
        height: "100vh",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      <div>
        <DashCard />
      </div>
    </div>
  );
};

export default Dashboard;
