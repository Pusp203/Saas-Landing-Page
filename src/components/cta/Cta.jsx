import React from "react";
import "./cta.scss";
import ctaright from "../../assets/ctaright.png";
import ctaleft from "../../assets/ctaleft.png";
import centerleft from "../../assets/centerleft.png";
import centerbottom from "../../assets/centerbottom.png";
import ctarightbottom from "../../assets/ctarightbottom.png";
import Heading from "./heading/Heading";

const Cta = () => {
  return (
    <div className="cta">
      <div className="cta__container">
        <img src={ctaleft} className="cta__container-left" />
        <img src={ctaright} className="cta__container-right" />

        <img src={ctarightbottom} className="cta__container-bottom" />
        <img src={centerleft} className="cta__container-centerleft" />

        <Heading />
      </div>
    </div>
  );
};

export default Cta;
