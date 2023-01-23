import React from "react";
import "./footer.scss";
import Arshakir from "../../assets/Arshakir.png";
import { BsTwitter } from "react-icons/Bs";

const Footer = () => {
  return (
    <div className=" footer-maincontainer  ">
      <div className="footer__subcontainer ">
        <div className="footer__subcontainer--companiesdetails  ">
          <img src={Arshakir} alt="" />

          <p>Finance helps companies manage payments easily.</p>

          <div className="footer__subcontainer--companiesdetails--socialmedialinks">
            <BsTwitter />
            <BsTwitter />
            <BsTwitter />
            <BsTwitter />
          </div>
        </div>

        <div className="footer__subcontainer--navwrap ">
          <h4 className="nav__wrap-heading">Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Pricing</p>
        </div>
        <div className="footer__subcontainer--navwrap ">
          <h4 className="nav__wrap-heading">Resources</h4>
          <p>Proposal Template</p>
          <p>Invoice Template</p>
          <p>Tuturoial</p>
          <p>How to write a contract</p>
        </div>
        <div className="footer__subcontainer--newslettersection ">
          <h4 className="nav__wrap-heading">Join Our Newsletter</h4>

          <div className="email__1">
            <input
              className="input"
              type="text"
              name="address"
              id="address"
              placeholder="Your email address"
            />
            <button className="blue__btn">Subscribe</button>
          </div>
          <div>
            <p className="mandatory__field">
              * Wil send you weekly updates for your better finance management.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="sub__footer">
        {" "}
        Copyright @ AR Shakir 2022. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
