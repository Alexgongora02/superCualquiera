import React from "react";

export default function Tarjeta({ card }) {
  return (
    <div className="card col-sm-4">
      <div className="card-body d-flex justify-content-around">
        <button className="btn fs-4 fw-bold">25%</button>
        <button className="btn">
          <img
            src={card.img}
            alt=""
            style={{ width: "1.8rem" }}
          />
        </button>
      </div>
      <div className="card-body">
        <p className="card-text" style={{ fontSize: ".8rem" }}>
          {card.desc}
        </p>
      </div>
    </div>
  );
}
