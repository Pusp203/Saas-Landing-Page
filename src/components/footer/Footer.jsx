import React from "react";
import "./footer.scss";
import Description from "../../components/footer/description/Description";
import Newsletter from "./newsletter/Newsletter";
const Footer = () => {
  return (
    <div className=" footer ">
      <div className="footer__top ">
        <Description />
        <div className="footer__top-navwrap ">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Pricing</p>
        </div>
        <div className="footer__top-navwrap ">
          <h4>Resources</h4>
          <p>Proposal Template</p>
          <p>Invoice Template</p>
          <p>Tuturoial</p>
          <p>How to write a contract</p>
        </div>
        <Newsletter />
      </div>
      <hr />
      <div className="footer__bottom">
        {" "}
        Copyright &copy; AR Shakir 2022. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
