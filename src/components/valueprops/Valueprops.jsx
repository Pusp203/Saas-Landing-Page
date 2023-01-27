import React from "react";
import "./valueprops.scss";
import valueprops1 from "../../assets/valueprops1.png";
import valueprops2 from "../../assets/valueprops2.png";
import valueprops3 from "../../assets/valueprops3.png";
import Cards from "./Cards";

const Valueprops = () => {
  return (
    <div className="valueprops">
      <div className="valueprops__cards  ">
        <div className=" card">
          <div className="number__counts">01</div>
          <div>
            <img src={valueprops1} alt="" className="card__img1 " />
            <h2>Connect wallets & companies</h2>
            <p>
              Indulgence way everything joy alteration boisterous the
              attacthment. Party we years to order allow asked of.
            </p>
          </div>
        </div>
        <div className="card ">
          <div className="number__counts">02</div>
          <div>
            <img src={valueprops2} alt="" className="card__img2 " />

            <h2>Review transactions</h2>
            <p>
              Indulgence way everything joy alteration boisterous the
              attacthment. Party we years to order allow asked of.
            </p>
          </div>
        </div>

        <div className="card ">
          <div className="number__counts ">03</div>

          <img src={valueprops3} alt="" className="card__img3  " />

          <h2>Get income insights</h2>
          <p>
            Indulgence way everything joy alteration boisterous the attacthment.
            Party we years to order allow asked of.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Valueprops;
