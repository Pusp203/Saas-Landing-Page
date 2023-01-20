import React from "react";
import "./bottombanner.scss";
import icon from "../../../assets/icon.svg";

const Bottombanner = () => {
  return (
    <div>
      <div class="bottom__banner">
        <div className="bottom__banner-left">
          <div>
            <img src={icon} />
          </div>

          <div> Free Register </div>
        </div>

        <div className="bottom__banner-right">
          <div>
            <img src={icon} />
          </div>
          <div> Great Service </div>
        </div>
      </div>
    </div>
  );
};

export default Bottombanner;
