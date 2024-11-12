"use client";
import React, { useRef, useState } from "react";
import "../../styles/SingupAndLogin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faEyeSlash,
  faMessage,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  // const productionLoginRoute: string =
  // "https://realestate-server-one.vercel.app/login";
  // const testLoginRoute: string = "http://localhost:5000/login";
  const passwordInput = useRef<HTMLInputElement>(null);
  const showPassword = useRef<SVGSVGElement>(null);
  const hidePassword = useRef<SVGSVGElement>(null);
  const closeMessage = useRef<SVGSVGElement>(null);
  const messageContainer = useRef<HTMLDivElement>(null);
  const [usernameLog, setUsernameLog] = useState<string>("");
  const [passwordLog, setPasswordLog] = useState<string>("");
  const [messageFormServer, setMessageFromServer] = useState("");
  const route = useRouter();
  function showAndHidePassword() {
    if (passwordInput.current?.type === "password") {
      passwordInput.current.type = "text";
      if (showPassword.current) {
        showPassword.current!.style.display = "block";
        showPassword.current!.style.color = "royalblue";
        hidePassword.current!.style.display = "none";
      }
    } else {
      passwordInput.current!.type = "password";
      if (showPassword.current) {
        showPassword.current!.style.display = "none";
        hidePassword.current!.style.display = "block";
      }
    }
  }

  function sublogin(e: { preventDefault: () => void }) {
    if (
      usernameLog != "" &&
      usernameLog != null &&
      passwordLog != "" &&
      passwordLog != null
    ) {
      axios
        .post("https://realestate-server-one.vercel.app/login", {
          usernameLog,
          passwordLog,
        })
        .then((response) => {
          messageContainer.current!.style.display = "block";
          setTimeout(() => {
            if (messageContainer.current!.style.display == "block") {
              messageContainer.current!.style.display = "none";
            }
          }, 3000);
          setTimeout(() => {
            route.push("/");
          }, 4000);
          setMessageFromServer(response.data.message);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("login-status", response.data.login);
          e.preventDefault();
        })
        .catch((error) => {
          setMessageFromServer(error);
        });
    }
  }

  return (
    <div className="singup">
      <div className="message" ref={messageContainer}>
        <div className="header">
          <h4>Real Estate Notifications</h4>
          <FontAwesomeIcon
            ref={closeMessage}
            onClick={() => {
              messageContainer.current!.style.display = "none";
            }}
            className="close"
            icon={faX}
          />
        </div>
        <p>{messageFormServer}</p>
      </div>
      <form method="post" autoComplete="off" autoSave="off">
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="login-username"
            onChange={(e) => setUsernameLog(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="password">
            <input
              ref={passwordInput}
              type="password"
              id="password"
              onChange={(e) => setPasswordLog(e.target.value)}
            />
            <div className="show-hide-pass">
              <FontAwesomeIcon
                ref={showPassword}
                onClick={showAndHidePassword}
                className="show"
                icon={faEye}
              />
              <FontAwesomeIcon
                ref={hidePassword}
                onClick={showAndHidePassword}
                className="hide"
                icon={faEyeSlash}
              />
            </div>
          </div>
        </div>

        <div>
          <input
            className="submit"
            onClick={sublogin}
            type="button"
            value="Login"
          />
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
            <Link className="link" href="/pages/singup">
              Singup
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
