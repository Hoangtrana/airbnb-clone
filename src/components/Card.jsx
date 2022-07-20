import React from "react";
import katieZaferes from "../images/katieZaferes.png";
import star from "../images/star.png";

function Card() {
  return (
    <card className="card">
      <img src={katieZaferes} alt="katieZaferes" className="card--photo" />
      <div className="card--content">
        <p>
          <img src={star} alt="star" className="card--star" />
          5.0(6).USA
        </p>

        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span>From $136</span> / person
        </p>
      </div>
    </card>
  );
}

export default Card;
