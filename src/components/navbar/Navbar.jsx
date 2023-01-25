// import React from "react";
import React from "react";

import "./navbar.scss";

import Arshakir from "../../assets/Arshakir.png";
import Middlenavbar from "./middlenav/Middlenavbar";
import Rightnavbar from "./rightnav/Rightnavbar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container--logo ">
          <img src={Arshakir} />
        </div>

        <Middlenavbar />

        <Rightnavbar />
      </div>
    </div>
  );
};

export default Navbar;
