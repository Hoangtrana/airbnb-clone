import React from "react";
import photoGrid from "../images/photoGrid.png";

function Banner() {
  return (
    <banner className="banner">
      <img src={photoGrid} alt="banner" className="banner-photo" />

      <h1 className="banner--header">Online Experiences</h1>
      <p className="banner--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </banner>
  );
}

export default Banner;
