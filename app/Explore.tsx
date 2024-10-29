/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./styles/explore.scss";
import cards from "./json/cards.json";
export default function Explore() {
  return (
    <div className="explore-section">
      <h1>Explore Our World</h1>
      <div className="digits">
        <div className="shape">
          <div className="first">
            <span>1M People turst us</span>
          </div>
        </div>
      </div>
      <p className="message-for-insight">
        Our real estate network spans across countries and cultures, bringing
        together trusted professionals from every corner of the globe. With a
        presence worldwide, we ensure you’re connected to experts who are as
        committed to integrity and reliability as we are. Whether you’re buying,
        selling, or investing, rest assured that you have a global team working
        to support your dreams with professionalism and trust.
      </p>
      <div className="card">
        {cards.map((card: any, index) => (
          <div className="card-item" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
