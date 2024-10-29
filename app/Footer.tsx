import React from "react";
import Link from "next/link";
import "./styles/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="text">
        <p className="title">Real Estate</p>
        <p className="desc">
          At Real Estate, we are dedicated to helping you find the perfect
          property to call home. Whether you’re looking to buy, sell, or invest,
          our team is here to provide expert guidance every step of the way.
          Explore our listings, get in touch with our agents, and let us make
          your real estate journey seamless and successful.
        </p>
        <p className="copyright">Copyright © 2023. All Rights Reserved</p>
      </div>
      <div className="logo">
        <Link className="link" href="#">
          <FontAwesomeIcon icon={faFacebook} className="Logo-icon" />
        </Link>
        <Link className="link" href="#">
          <FontAwesomeIcon icon={faInstagram} className="Logo-icon" />
        </Link>
        <Link className="link" href="#">
          <FontAwesomeIcon icon={faWhatsapp} className="Logo-icon" />
        </Link>
        <Link className="link" href="#">
          <FontAwesomeIcon icon={faXTwitter} className="Logo-icon" />
        </Link>
        <Link className="link" href="#">
          <FontAwesomeIcon icon={faTelegram} className="Logo-icon" />
        </Link>
      </div>
    </div>
  );
}
