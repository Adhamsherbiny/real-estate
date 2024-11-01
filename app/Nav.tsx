"use client";
import "./styles/nav.scss";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Nav() {
  const [login, setLogin] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get("https://realestate-server-one.vercel.app/checkLog")
      .then((response) => {
        setLogin(response.data.message);
        setUser(response.data.username);
      });
  });
  return (
    <div className="nav">
      <div className="logo">
        <FontAwesomeIcon icon={faHouse} className="Logo-icon" />
        <h3>Real Estate</h3>
      </div>
      <div className="menu">
        <Link className="link" href="">
          Home
        </Link>
        <Link className="link" href="">
          Explore
        </Link>
        <Link className="link" href="">
          About Us
        </Link>
        {login != null ? (
          <Link
            className="link"
            href=""
            onClick={() => {
              localStorage.removeItem("login-status");
              window.location.reload();
            }}
          >
            Logout
          </Link>
        ) : user == null ? (
          <Link className="link" href="/singup">
            Singup
          </Link>
        ) : (
          <Link className="link" href="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
