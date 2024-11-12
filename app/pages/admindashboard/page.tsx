"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/adminDashboard.scss";
import AdminHeader from "@/app/components/AdminHeader";
export default function AdminDashboard() {
  return (
    <div className="admin-dashboard-page">
      <AdminHeader />
      <div className="page">
        <div className="cards">
          <div className="card">
            <span>Total Posts</span>
            <p>####</p>
          </div>
          <div className="card">
            <span>Total Sells</span>
            <p>####</p>
          </div>
          <div className="card">
            <span>Total Users</span>
            <p>####</p>
          </div>
        </div>
        <div className="chart"></div>
      </div>
    </div>
  );
}
