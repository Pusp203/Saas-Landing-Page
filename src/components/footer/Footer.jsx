import React from "react";
import "./footer.scss";
import Arshakir from "../../assets/Arshakir.png";
// import { BsTwitter } from "react-icons/Bs";

const Footer = () => {
  return (
    // <div className="container ">
    <div class=" footer-maincontainer  ">
      <div className="footer__subcontainer flex">
        <div class="companies__description flex ">
          <a href="#" class="sass-logo">
            <img src={Arshakir} alt="" />
          </a>
          <p>Finance helps companies manage payments easily.</p>

          <div className="socialmedia__icons flex">
            <a href="">{/* <BsTwitter /> */}</a>
            <a href="">{/* <BsTwitter /> */}</a>
            <a href="">{/* <BsTwitter /> */}</a>
            <a href="">{/* <BsTwitter /> */}</a>
          </div>
        </div>
        <div className="nav__itemswrap flex">
          <div class="link-column1 flex ">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Pricing</p>
          </div>
          <div class="link-column2 flex">
            <h4>Resources</h4>
            <p>Proposal Template</p>
            <p>Invoice Template</p>
            <p>Tuturoial</p>
            <p>How to write a contract</p>
          </div>
          <div class="link-column3 flex">
            <h4>Join Our Newsletter</h4>

            <div class="email__1 flex">
              <input
                class="input"
                type="text"
                name="address"
                id="address"
                placeholder="Your email address"
              />
              <button class="blue__btn">Subscribe</button>
            </div>
            <div className="news__letter">
              <p>
                * Wil send you weekly updates for your better finance
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */} <hr />
      <div className="sub__footer">
        {" "}
        <p>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
