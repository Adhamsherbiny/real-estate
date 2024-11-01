"use client";
import "./styles/nav.scss";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const loginStatus = localStorage.getItem("login-status");
  const username = localStorage.getItem("username");
  const [login, setLogin] = useState(loginStatus);
  const [user, setUser] = useState(loginStatus);
  setLogin(loginStatus);
  setUser(username);
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
