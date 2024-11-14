"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/adminDashboard.scss";
import AdminHeader from "@/app/components/AdminHeader";
import { useRouter } from "next/navigation";
export default function AdminDashboard() {
  const router = useRouter();
  return (
    <div className="admin-dashboard-page">
      <AdminHeader />
      <div className="admin-log">
        <form action="">
          <div className="form-div">
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div className="form-div">
            <label htmlFor="">Password</label>
            <input type="text" />
          </div>
          <input
            onClick={(e) => {
              e.preventDefault();
              router.push("/pages/admindashboard/routes/createpost");
            }}
            className="sub"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}
