import React from "react";
import "./features.scss";
import valueprops1 from "../../assets/valueprops1.png";
import valueprops2 from "../../assets/valueprops2.png";

const Features = () => {
  return (
    <div className="features__container flex">
      <div className="sub__container">
        <div className="features__description ">
          <h1>Features that blows mind</h1>
          <p>
            we so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
        </div>
        <div className="features__cards flex">
          <div className="features__cards1 ">
            <img src={valueprops1} alt="" />
            <h2>Really boy law county she unable her sister</h2>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought
            </p>
          </div>
          <div className="features__cards2 ">
            <img src={valueprops2} alt="" />
            <h2>Really boy law county she unable her sister</h2>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought
            </p>
          </div>

          <div className="remaining__cards flex ">
            <div className="features__cards3 ">
              <h2>Merits behind on afraid or warmly</h2>
            </div>
            <div className="features__cards4">
              <h2>Believing neglected so so allowance existence</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
