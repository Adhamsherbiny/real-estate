"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import "../styles/SingupAndLogin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faEyeSlash,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Login() {
  const passwordInput = useRef<any>();
  const showPassword = useRef<any>();
  const hidePassword = useRef<any>();
  function showAndHidePassword() {
    if (passwordInput.current?.type === "password") {
      passwordInput.current.type = "text";
      if (showPassword == null || undefined) {
        showPassword.current!.style.display = "block";
        hidePassword.current!.style.display = "none";
      }
    } else {
      passwordInput.current.type = "password";
      if (showPassword == null || undefined) {
        showPassword.current!.style.display = "none";
        hidePassword.current!.style.display = "block";
      }
    }
  }
  return (
    <div className="singup">
      <form action="" method="post" autoComplete="off" autoSave="off">
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="login-username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="password">
            <input ref={passwordInput} type="password" id="password" />
            <div className="show-hide-pass">
              <FontAwesomeIcon
                onClick={showAndHidePassword}
                className="show"
                icon={faEye}
              />
              <FontAwesomeIcon
                onClick={showAndHidePassword}
                className="hide"
                icon={faEyeSlash}
              />
            </div>
          </div>
        </div>

        <div>
          <input className="submit" type="submit" value="Login" />
        </div>
        <div>
          <Link className="reset-password" href="">
            Forgot Password
          </Link>
        </div>
      </form>
      <div className="space">
        <div className="line"></div>
        <div className="text">Or Login With</div>
      </div>
      <div className="links">
        <button>
          <FontAwesomeIcon className="icon" icon={faFacebook} />
        </button>
        <button>
          <FontAwesomeIcon className="icon" icon={faGoogle} />
        </button>
        <button>
          <FontAwesomeIcon className="icon" icon={faMessage} />
        </button>
      </div>
      <div className="goto-login">
        <p>
          Don`t have an account?{" "}
          <span>
            <Link className="link" href="/singup">
              Singup
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
