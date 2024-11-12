import React from "react";

export default function AdminHeader() {
  const styles = {
    marginTop: "10px",
    marginLeft: "10px",
    letterSpacing: "1px",
    color: "royalblue",
  };
  return (
    <div>
      <h1 style={styles} className="header">
        {" "}
        Admin Dashboard
      </h1>
    </div>
  );
}
