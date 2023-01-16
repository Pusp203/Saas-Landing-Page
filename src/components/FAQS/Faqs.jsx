import React from "react";
import "./faqs.scss";
import saying from "../../assets/saying.png";
import addition from "../../assets/addition.png";

const Faqs = () => {
  return (
    <div className="faqs__container">
      <div className="main__heading">
        <h2>Frequently asked questions</h2>

        <div className="faqs__division flex">
          <div className="faqs__leftsection  ">
            <div className="the__expense-window ">
              <h3>The expense windows adapted sir. Wrong widen drawn.</h3>{" "}
              <img src={addition} alt="" />
              <p>
                Offending belonging promotion provision an be oh consulted
                ourselves it. Blessing welcomed ladyship she met humoured sir
                breeding her.{" "}
              </p>
            </div>
            <div className="six__curiosity  ">
              <h3>Six curiosity day assurance bed necessary?</h3>
              <img src={addition} alt="" />
            </div>
            <div className="produce__say">
              <h3>Produce say the ten moments parties? </h3>
              <img src={addition} alt="" />
            </div>
            <div className="simple__innate">
              <h3>Simple innate summer fat appear basket his desire joy?</h3>
              <img src={addition} alt="" />
            </div>
            <div className="outward__clothes">
              <h3>Outward clothes promise at gravity do excited?</h3>
              <img src={addition} alt="" />
            </div>
          </div>

          <div className="faqs__rightsection">
            <img src={saying} alt="" />
            <h3>Do you have more questions</h3>
            <p>
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
            <div className="btnn">
              <button className="btnnn1">Shoot a Direct Mail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
