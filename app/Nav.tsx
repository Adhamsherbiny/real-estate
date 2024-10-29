import "./styles/nav.scss";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
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
        {true ? (
          <Link className="link" href="">
            Singup
          </Link>
        ) : (
          <Link className="link" href="">
            Profile
          </Link>
        )}
      </div>
    </div>
  );
}
