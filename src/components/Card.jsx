import React from "react";

function Card(props) {
  let soldOut;
  if (props.person.openSpots === 0) {
    soldOut = "SOLD OUT";
  } else if (props.person.location === "Online") {
    soldOut = "ONLINE";
  }
  return (
    <div className="card">
      {soldOut && <div className="card--badge">{soldOut}</div>}
      <img
        src={`../images/${props.person.coverImg}`}
        alt="katieZaferes"
        className="card--photo"
      />
      <div className="card--content">
        <p>
          <img src={"/images/star.png"} alt="star" className="card--star" />
          {props.person.stats.rating}({props.person.stats.reviewCount}).
          {props.person.location}
        </p>

        <p>{props.person.title}</p>
        <p>
          <span>From ${props.person.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
