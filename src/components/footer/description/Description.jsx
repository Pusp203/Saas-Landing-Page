import React from "react";
import Arshakir from "../../../assets/Arshakir.png";
import { BsTwitter } from "react-icons/Bs";
import "./description.scss";

const Description = () => {
  return (
    <div className="sass__description  ">
      <img src={Arshakir} alt="" />

      <p>Finance helps companies manage payments easily.</p>

      <div className="sass__description-socialmedialinks">
        <BsTwitter />
        <BsTwitter />
        <BsTwitter />
        <BsTwitter />
      </div>
    </div>
  );
};

export default Description;
