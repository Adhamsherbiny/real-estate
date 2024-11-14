/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../styles/adminPostWidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faChartArea,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

interface typeOfProps {
  id?: string;
  pic?: string;
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
  function deletePost() {
    axios
      .post("https://realestate-server-one.vercel.app/deletepost", {
        id: props.id,
      })
      .then((response) => {
        response.data.message;
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="admin-post-widget">
      <div className="user">
        <div className="pic">
          <div className="type">{props.type}</div>
          <img
            src={`https://realestate-server-one.vercel.app/img/pics/${props.pic}`}
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
            <button onClick={deletePost} className="del">
              Delete
            </button>
            <button className="edt">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
