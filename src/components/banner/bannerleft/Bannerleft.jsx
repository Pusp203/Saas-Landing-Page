import React from "react";
import "./bannerleft.scss";
import playbutton from "../../../assets/playbutton.png";

const Bannerleft = () => {
  return (
    <div class="bannerLeft">
      <h1>Managing freelance payments has never been easier</h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing.Not thoughts
        all exercise blessing.
      </p>

      <div class="bannerLeft__buttons">
        <button class="bannerLeft__buttons-primaryBtn ">Get Started</button>
        <a href="" class="bannerLeft__buttons-howItWorksBtn">
          <img src={playbutton} alt="" />
          See How it Works
        </a>
      </div>
    </div>
  );
};

export default Bannerleft;
