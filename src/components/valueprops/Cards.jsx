import React from "react";
import valueprops1 from "../../assets/valueprops1.png";

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card__info">
          <div>{props.number}</div>
          <img src={props.img} alt="" className="card__img" />

          <h2 className="card__title"></h2>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
