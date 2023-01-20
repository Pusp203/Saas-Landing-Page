import React, { useState } from "react";
import "./rightnavbar.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Rightnavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div class="rightNav ">
      <a href="#" class="rightNav__signIn signin__startfree">
        Sign in{" "}
      </a>

      <button class="rightNav__startFreeBtn signin__startfree ">
        Start Free{" "}
      </button>
      <div className="nav__items__hamburgerMenu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line
            className="nav__items__hamburgerMenu--ri__menuline"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="nav__items__hamburgerMenu-container ">
            <div class="nav__items__hamburgerMenu-container__links  ">
              <p>
                <a
                  href="#"
                  class="nav__items__hamburgerMenu-container__links-items"
                >
                  Product{" "}
                  <img src="assets/Vector 3.png" alt="" class="drop__down" />
                </a>
              </p>
              <p>
                <a
                  href="#"
                  class="nav__items__hamburgerMenu-container__links-items"
                >
                  Template
                  <img src="assets/Vector 3.png" alt="" class="drop__down" />
                </a>
              </p>
              <p>
                <a
                  href="#"
                  class="nav__items__hamburgerMenu-container__links-items"
                >
                  Blog
                </a>
              </p>
              <p>
                <a
                  href="#"
                  class="nav__items__hamburgerMenu-container__links-items"
                >
                  Pricing
                </a>
              </p>

              <a
                href="#"
                class="nav__items__hamburgerMenu-container__links-items"
              >
                Sign in{" "}
              </a>

              <button class="nav__items__hamburgerMenu-container__links-items rightNav__startFreeBtn">
                Start Free{" "}
              </button>
            </div>

            <div>
              {toggleMenu ? (
                <RiCloseLine
                  className="ri__closeline"
                  size={27}
                  onClick={() => setToggleMenu(false)}
                />
              ) : (
                <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rightnavbar;
