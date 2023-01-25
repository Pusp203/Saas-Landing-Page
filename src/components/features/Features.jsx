import React from "react";
import "./features.scss";

import Featuressubcontainercards from "./Features-subcontainer-cards";

const Features = () => {
  return (
    <div className="features__container ">
      <div className="features__subcontainer">
        <div className="features__subcontainer-description ">
          <h1>Features that blows mind</h1>
          <p>
            we so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
        </div>
        <Featuressubcontainercards />
      </div>
    </div>
  );
};

export default Features;
