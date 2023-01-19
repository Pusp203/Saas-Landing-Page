// import React from "react";
import React from "react";

import "./navbar.scss";

import Arshakir from "../../assets/Arshakir.png";
import Middlenavbar from "./middlenav/Middlenavbar";
import Rightnavbar from "./rightnav/Rightnavbar";

const Navbar = () => {
  return (
    <div className="main__navbar ">
      <div className="navbar__logo ">
        <img src={Arshakir} />
      </div>
      <Middlenavbar />

      <Rightnavbar />
    </div>
  );
};

export default Navbar;
