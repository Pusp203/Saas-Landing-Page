import React from "react";
import "./banner.scss";
import banner from "../../assets/banner.png";

import IconRight from "./icons/icon-right";
import IconLeft from "./icons/icon-left";
import Bannerleft from "./bannerleft/Bannerleft";
import Bottombanner from "./bottombanner/Bottombanner";

const Banner = () => {
  return (
    <div>
      <div className="main__banner-section">
        <div className="banner__division  ">
          <img src={banner} className="banner__image" />
          <Bannerleft />
          <Bottombanner />
        </div>
      </div>
      <IconRight />
      {/* // <IconLeft /> */}
    </div>
  );
};

export default Banner;
