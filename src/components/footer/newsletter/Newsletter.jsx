import React from "react";
import "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter ">
      <h4>Join Our Newsletter</h4>

      <div className="newsletter__subscriber-form">
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Your email address"
        />
        <button className="newsletter__subscriber-form__btn ">Subscribe</button>
      </div>

      <div className="newsletter__requiredfield">
        * Wil send you weekly updates for your better finance management.
      </div>
    </div>
  );
};

export default Newsletter;
