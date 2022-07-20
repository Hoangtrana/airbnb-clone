import React from "react";

function Banner() {
  return (
    <banner className="banner">
      <img
        src={"/images/photoGrid.png"}
        alt="banner"
        className="banner-photo"
      />

      <h1 className="banner--header">Online Experiences</h1>
      <p className="banner--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </banner>
  );
}

export default Banner;
