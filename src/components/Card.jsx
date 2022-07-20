import React from "react";

function Card(props) {
  let soldOut;
  if (props.openSpots === 0) {
    soldOut = "SOLD OUT";
  } else if (props.location === "Online") {
    soldOut = "ONLINE";
  }
  return (
    <div className="card">
      {soldOut && <div className="card--badge">{soldOut}</div>}
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
    </div>
  );
}

export default Card;
