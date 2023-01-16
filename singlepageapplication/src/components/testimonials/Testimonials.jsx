import React from "react";
import "./testimonials.scss";
import testimonialimage from "../../assets/testimonialimage.png";
import testimonialimage1 from "../../assets/testimonialimage1.png";
import appostrophy from "../..//assets/appostrophy.png";

const Testimonials = () => {
  return (
    <div className="testimonial__section ">
      <div className="testimonial__top">
        <h1>Testimonials</h1>
        <p>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought.His defective nor convinced residence own.
        </p>
      </div>
      <div className="testimonials__division flex">
        {/* <div className="testimonial__left flex"> */}
        {/* <div className="testimonial__left1 flex ">
          <p>
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown lively income.The expense windows.Blessing welcomed ladyship.{" "}
          </p>

          <h6> -Mike Taylor, Web Designer </h6>
          
        </div> */}
        <div className="testimonial__left flex">
          <div>
            <p>
              {" "}
              Wise busy past both park when an ye no. Nay likely her length
              sooner thrown lively income.The expense windows.Blessing welcomed
              ladyship.{" "}
            </p>
            <div className="designers__say">-Mike Taylor, Web Designer </div>
          </div>
          <img src={testimonialimage1} alt="" />
        </div>

        <div className="testimonial__right flex">
          <div>
            <p>
              {" "}
              Wise busy past both park when an ye no. Nay likely her length
              sooner thrown lively income.The expense windows.Blessing welcomed
              ladyship.{" "}
            </p>
            <div className="designers__say">-Mike Taylor, Web Designer </div>
          </div>
          <img src={testimonialimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
