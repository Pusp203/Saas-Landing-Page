import React from "react";
import "./banner.scss";
import banner from "../../assets/banner.png";
import playbutton from "../../assets/playbutton.png";
import checkbox from "../../assets/checkbox.png";

const Banner = () => {
  return (
    <div class="container header-section flex">
      <div class="header-left">
        <h1>Managing freelance payments has never been easier</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing.Not
          thoughts all exercise blessing.
        </p>

        <div class="flex buttons">
          <a href="" class="primary-button1 flex">
            Get Started
          </a>
          <a href="" class="how__it-works flex">
            <img src={playbutton} alt="" />
            See How it Works
          </a>
        </div>
        <div class="flex bottom-header">
          <p class="flex">
            {" "}
            <img src={checkbox} alt="" />
            <a href=""> Free Register </a>
          </p>
          <p class="flex">
            {" "}
            <img src={checkbox} alt="" /> <a href=""> Great Service </a>
          </p>
        </div>
      </div>

      <div class="header-right flex">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
