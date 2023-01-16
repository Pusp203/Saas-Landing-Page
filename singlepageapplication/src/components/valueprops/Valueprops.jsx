import React from "react";
import "./valueprops.scss";
import valueprops1 from "../../assets/valueprops1.png";
import valueprops2 from "../../assets/valueprops2.png";
import valueprops3 from "../../assets/valueprops3.png";

const Valueprops = () => {
  return (
    <div className="valueprops__cards flex ">
      <div className="card__1 ">
        <div className="number__counts1">01</div>
        <img src={valueprops1} alt="" className="card__img1 " />
        <h2>Connect wallets & companies</h2>
        <p>
          Indulgence way everything joy alteration boisterous the attacthment.
          Party we years to order allow asked of.
        </p>
      </div>
      <div className="card__2">
        <div className="number__counts1">02</div>
        <img src={valueprops2} alt="" className="card__img2 " />
        <h2>Review transactions</h2>
        <p>
          Indulgence way everything joy alteration boisterous the attacthment.
          Party we years to order allow asked of.
        </p>
      </div>
      <div className="card__3">
        <div className="number__counts1">03</div>
        <img src={valueprops3} alt="" className="card__img3  " />
        <h2>Get income insights</h2>
        <p>
          Indulgence way everything joy alteration boisterous the attacthment.
          Party we years to order allow asked of.
        </p>
      </div>
    </div>
  );
};

export default Valueprops;
