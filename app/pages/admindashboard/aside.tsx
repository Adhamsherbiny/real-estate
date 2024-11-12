"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import "../../styles/asideNav.scss";
import Link from "next/link";

export default function SideNavAmdin() {
  const [visablePost, setVisablePost] = useState<boolean>(false);
  const [visableSettings, setVisableSettings] = useState<boolean>(false);
  const postMenuRef = useRef<HTMLElement | any>();
  const settingsMenuRef = useRef<HTMLElement | any>();

  function postMenu() {
    if (!visablePost) {
      postMenuRef.current.style.display = "flex";
      setVisablePost(!visablePost);
    } else {
      postMenuRef.current.style.display = "none";
      setVisablePost(!visablePost);
    }
  }
  function settingsMenu() {
    if (!visableSettings) {
      settingsMenuRef.current.style.display = "flex";
      setVisableSettings(!visableSettings);
    } else {
      settingsMenuRef.current.style.display = "none";
      setVisableSettings(!visableSettings);
    }
  }
  return (
    <div className="aside-nav">
      <ul>
        <li>
          <Link onClick={postMenu} href={""} className="menu">
            Post Definition
          </Link>
          <ul ref={postMenuRef} className="menu-container">
            <li>
              <Link
                className="menu-link"
                href={"/pages/admindashboard/routes/createpost"}
              >
                Create Post
              </Link>
            </li>
            <li>
              <Link className="menu-link" href={""}>
                Update Post
              </Link>
            </li>
            <li>
              <Link className="menu-link" href={""}>
                Delete Post
              </Link>
            </li>
            <li>
              <Link className="menu-link" href={""}>
                Show All Post
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={""} className="aside-link">
            Real Estate Page
          </Link>
        </li>
        <li>
          <Link onClick={settingsMenu} href={""} className="menu">
            Settings
          </Link>
          <ul ref={settingsMenuRef} className="menu-container">
            <li>
              <Link className="menu-link" href={""}>
                Admin Users
              </Link>
            </li>
            <li>
              <Link className="menu-link" href={""}>
                Create User
              </Link>
            </li>
            <li>
              <Link className="menu-link" href={""}>
                Edit User
              </Link>
            </li>
            <li>
              <Link className="menu-link" href={""}>
                Delete User
              </Link>
            </li>
            <li>
              <Link className="menu-link" href={""}>
                Create Role
              </Link>
            </li>
            <li>
              <Link className="menu-link" href={""}>
                Change Password
              </Link>
            </li>
            <li>
              <Link className="menu-link" href={""}>
                Show All Users
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={""} className="aside-link">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
