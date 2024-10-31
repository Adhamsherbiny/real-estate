"use client";
import React, { useRef, useState } from "react";
// import gsap from "gsap";
import axios from "axios";
import "../styles/SingupAndLogin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faEyeSlash,
  faMessage,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// import { useGSAP } from "@gsap/react";

export default function SingUp() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const showPassword = useRef<SVGSVGElement>(null);
  const hidePassword = useRef<SVGSVGElement>(null);
  const closeMessage = useRef<SVGSVGElement>(null);
  const messageContainer = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [messageFormServer, setMessageFromServer] = useState("");
  const usernameRegexp = /^[a-zA-Z0-9]{3,15}$/;
  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegexp = /^[0-9]{11}$/;
  const validMsgEmail = useRef<HTMLParagraphElement>(null);
  const validMsgPhone = useRef<HTMLParagraphElement>(null);
  const validMsgUsername = useRef<HTMLParagraphElement>(null);
  const vaildMsgPassword = useRef<HTMLParagraphElement>(null);
  // useGSAP(() => {
  //   gsap.to(messageContainer.current, { y: "50px" });
  // });

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

  function validCheck(event: { preventDefault: () => void }) {
    if (username == "") {
      event.preventDefault();
      validMsgUsername.current!.style.display = "block";
      validMsgUsername.current!.style.color = "red";
      validMsgUsername.current!.innerHTML = "Username cannot be empty";
    }
    if (email == "") {
      event.preventDefault();
      validMsgEmail.current!.style.display = "block";
      validMsgEmail.current!.style.color = "red";
      validMsgEmail.current!.innerHTML = "Email cannot be empty";
    }
    if (phone == "") {
      event.preventDefault();
      validMsgPhone.current!.style.display = "block";
      validMsgPhone.current!.style.color = "red";
      validMsgPhone.current!.innerHTML = "Phone cannot be empty";
    }
    if (password == "") {
      event.preventDefault();
      vaildMsgPassword.current!.style.display = "block";
      vaildMsgPassword.current!.style.color = "red";
      vaildMsgPassword.current!.innerHTML = "Password cannot be empty";
    }

    if (
      usernameRegexp.test(username) &&
      emailRegexp.test(email) &&
      phoneRegexp.test(phone) &&
      password != ""
    ) {
      event.preventDefault();
      validMsgUsername.current!.style.display = "none";
      validMsgEmail.current!.style.display = "none";
      validMsgPhone.current!.style.display = "none";
      vaildMsgPassword.current!.style.display = "none";
      axios
        .post("https://realestate-server-one.vercel.app/singup", {
          username,
          email,
          password,
          phone,
        })
        .then((response) => {
          messageContainer.current!.style.display = "block";
          setTimeout(() => {
            if (messageContainer.current!.style.display == "block") {
              messageContainer.current!.style.display = "none";
            }
          }, 3000);
          setMessageFromServer(response.data.message);
        })
        .catch((error) => {
          console.log(error);
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
      <form method="post" autoComplete="off" autoCorrect="off">
        <h2>Singup</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={() => {
              if (username == "") {
                validMsgUsername.current!.style.display = "block";
                validMsgUsername.current!.style.color = "red";
                validMsgUsername.current!.innerHTML =
                  "Username cannot be empty";
              } else if (usernameRegexp.test(username)) {
                validMsgUsername.current!.style.display = "none";
                setUsername(username.toLowerCase());
              } else {
                validMsgUsername.current!.style.display = "block";
                validMsgUsername.current!.style.color = "red";
                validMsgUsername.current!.innerHTML =
                  "not valid type only character and number";
              }
            }}
          />
          <p ref={validMsgUsername}></p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyUp={() => {
              if (email == "") {
                validMsgEmail.current!.style.display = "block";
                validMsgEmail.current!.style.color = "red";
                validMsgEmail.current!.innerHTML = "Email cannot be empty";
              } else if (emailRegexp.test(email)) {
                validMsgEmail.current!.style.display = "none";
                setEmail(email.toLowerCase());
              } else {
                validMsgEmail.current!.style.display = "block";
                validMsgEmail.current!.style.color = "red";
                validMsgEmail.current!.innerHTML =
                  "Please check Email is not valid";
              }
            }}
          />
          <p ref={validMsgEmail}></p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="password">
            <input
              ref={passwordInput}
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={() => {
                if (password == "") {
                  vaildMsgPassword.current!.style.display = "block";
                  vaildMsgPassword.current!.style.color = "red";
                  vaildMsgPassword.current!.innerHTML = "Email cannot be empty";
                } else if (password.length < 8) {
                  vaildMsgPassword.current!.innerHTML = "Weak Password";
                  vaildMsgPassword.current!.style.color = "orange";
                } else {
                  vaildMsgPassword.current!.style.display = "block";
                  vaildMsgPassword.current!.style.color = "green";
                  vaildMsgPassword.current!.innerHTML = "Good Password";
                }
              }}
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
          <p ref={vaildMsgPassword}></p>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            onKeyUp={() => {
              if (phone == "") {
                validMsgPhone.current!.style.display = "block";
                validMsgPhone.current!.style.color = "red";
                validMsgPhone.current!.innerHTML = "Email cannot be empty";
              } else if (phoneRegexp.test(phone)) {
                validMsgPhone.current!.style.display = "none";
              } else {
                validMsgPhone.current!.style.display = "block";
                validMsgPhone.current!.style.color = "red";
                validMsgPhone.current!.innerHTML =
                  "Phone is not Valid enter your Vaild phone";
              }
            }}
          />
          <p ref={validMsgPhone}></p>
        </div>
        <div>
          <input
            className="submit"
            onClick={validCheck}
            type="submit"
            value="Singup"
          />
        </div>
      </form>
      <div className="space">
        <div className="line"></div>
        <div className="text">Or Singup With</div>
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
          Already have an account{" "}
          <span>
            <Link className="link" href="/login">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
