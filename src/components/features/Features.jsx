import React from "react";
import "./features.scss";
import feature from "../../assets/feature.png";
import Featuressubcontainercards from "./Features-subcontainer-cards";

const Features = () => {
  return (
    <div className="features ">
      <div className="features__main">
        <img src={feature} alt="" />
        <div className="features__main__subcontainer">
          <div className="features__main__subcontainer-description ">
            <h1>Features that blows mind</h1>
            <p>
              we so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
          </div>
        </div>
        <Featuressubcontainercards />
      </div>
    </div>
  );
};

export default Features;
