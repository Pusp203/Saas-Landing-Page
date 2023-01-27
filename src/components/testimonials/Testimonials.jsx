import React from "react";
import "./testimonials.scss";
import testimonialimage from "../../assets/testimonialimage.png";
import testimonialimage1 from "../../assets/testimonialimage1.png";
import appostrophy from "../../assets/appostrophy.png";
import curve from "../../assets/curve.png";

const Testimonials = () => {
  return (
    <div className="testimonial ">
      <div className="testimonial__main">
        <div className="testimonial__top">
          <img src={curve} alt="" />
          <h1>Testimonials</h1>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh <br /> ought.His defective nor convinced residence own.
          </p>
        </div>
        <div className="testimonial__bottom">
          <div className="testimonial__bottom-left">
            <img src={appostrophy} alt="" />
            <div className="testimonial__bottom-left-main">
              <p>
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown lively income.The expense windows.Blessing
                welcomed ladyship.{" "}
              </p>
              <p>-Mike Taylor, Web Designer </p>
            </div>
            <div>
              <img src={testimonialimage1} alt="" />
            </div>
          </div>
          <div className="testimonial__bottom-left">
            <img src={appostrophy} alt="" />
            <div className="testimonial__bottom-left-main">
              <p className="">
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown lively income.The expense windows.Blessing
                welcomed ladyship.{" "}
              </p>
              <p>-Mike Taylor, Web Designer </p>
            </div>
            <div>
              <img src={testimonialimage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
