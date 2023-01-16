// import React from "react";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.scss";

import Arshakir from "../../assets/Arshakir.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    // <div className="about__fold">

    <div class="container main__nav flex">
      <div class="flex arshakir__logo ">
        <a href="">
          {" "}
          <img src={Arshakir} />
        </a>
      </div>
      <div class="nav__items flex">
        <p>
          <a href="#" class="nav__links">
            Product <img src="assets/Vector 3.png" alt="" class="drop__down" />
          </a>
        </p>
        <p>
          <a href="#" class="nav__links">
            Template
            <img src="assets/Vector 3.png" alt="" class="drop__down" />
          </a>
        </p>
        <p>
          <a href="#" class="nav__links">
            Blog
          </a>
        </p>
        <p>
          <a href="#" class="nav__links">
            Pricing
          </a>
        </p>
      </div>
      <div class="sign flex">
        <p>
          <a href="#" class="nav__links">
            Sign in{" "}
          </a>
        </p>
        <p class="">
          <a href="#" class="nav__links primary-button">
            Start Free{" "}
          </a>
        </p>
      </div>
      <div className="sass__navbar-menu ">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="sass__navbar-menu_container flex">
            <div class="nav__items1 flex ">
              <p>
                <a href="#" class="nav__links1">
                  Product{" "}
                  <img src="assets/Vector 3.png" alt="" class="drop__down" />
                </a>
              </p>
              <p>
                <a href="#" class="nav__links1">
                  Template
                  <img src="assets/Vector 3.png" alt="" class="drop__down" />
                </a>
              </p>
              <p>
                <a href="#" class="nav__links1">
                  Blog
                </a>
              </p>
              <p>
                <a href="#" class="nav__links1">
                  Pricing
                </a>
              </p>

              <div class="sign1 flex">
                <p>
                  <a href="#" class="nav__links1">
                    Sign in{" "}
                  </a>
                </p>
                <p class="">
                  <a href="#" class="nav__links1 primary-button">
                    Start Free{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
