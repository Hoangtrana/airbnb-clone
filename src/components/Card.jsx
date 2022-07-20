import React from "react";

function Card(props) {
  return (
    <card className="card">
      <img
        src={`../images/${props.coverImg}`}
        alt="katieZaferes"
        className="card--photo"
      />
      <div className="card--content">
        <p>
          <img src={"/images/star.png"} alt="star" className="card--star" />
          {props.rating}({props.reviewCount}).{props.location}
        </p>

        <p>{props.title}</p>
        <p>
          <span>From ${props.price}</span> / person
        </p>
      </div>
    </card>
  );
}

export default Card;
