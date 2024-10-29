import React from "react";
import "../styles/singup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

export default function SingUp() {
  return (
    <div className="singup">
      <form action="" method="post">
        <h2>Singup</h2>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input type="text" />
        </div>
        <div>
          <input className="submit" type="submit" value="Singup" />
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
          Already have an account <span>Login</span>
        </p>
      </div>
    </div>
  );
}
