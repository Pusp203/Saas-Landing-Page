import React from "react";
import "./bannerleft.scss";
import playbutton from "../../../assets/playbutton.png";

const Bannerleft = () => {
  return (
    <div class="banner__division-left">
      <h1>Managing freelance payments has never been easier</h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing.Not thoughts
        all exercise blessing.
      </p>

      <div class="banner__division-left__buttons">
        <button class="banner__division-left__buttons-primaryBtn ">
          Get Started
        </button>
        <a href="" class="banner__division-left__buttons-howItWorksBtn">
          <img src={playbutton} alt="" />
          See How it Works
        </a>
      </div>
    </div>
  );
};

export default Bannerleft;
