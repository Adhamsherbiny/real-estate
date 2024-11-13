/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../styles/adminPostWidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faChartArea,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

interface typeOfProps {
  type?: string;
  adress?: string;
  floor?: string;
  city?: string;
  area?: string;
  rooms?: string;
  bathrooms?: string;
  price?: string;
}

export default function AdminPostWidget(props: typeOfProps) {
  return (
    <div className="admin-post-widget">
      <div className="user">
        <div className="pic">
          <div className="type">{props.type}</div>
          <img
            src="http://localhost:5000/img/pics/imageThree_1731507932176.jpg"
            alt=""
          />
        </div>
        <div className="info">
          <div className="discription">
            <div className="adress">
              <p>{props.adress}</p>
            </div>
            <div className="buliding-info">
              <p>{props.floor}</p>
              <p>{props.city}</p>
            </div>
          </div>
          <div className="line">
            <div className="area">
              <FontAwesomeIcon className="icn" icon={faChartArea} />
              <p>{props.area}</p>
            </div>
            <div className="rooms">
              <FontAwesomeIcon className="icn" icon={faBed} />
              <p>{props.rooms}</p>
            </div>
            <div className="bathrooms">
              <FontAwesomeIcon className="icn" icon={faShower} />
              <p>{props.bathrooms}</p>
            </div>
          </div>
          <div className="price-call">
            <p>Price: {props.price}</p>
            <button>Call</button>
          </div>
          <div className="call"></div>
          <div className="admin">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
