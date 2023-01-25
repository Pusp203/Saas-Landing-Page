import React from "react";
import "./featuresubcontainercards.scss";
import valueprops1 from "../../assets/valueprops1.png";
import valueprops2 from "../../assets/valueprops2.png";

const Featuressubcontainercards = () => {
  return (
    <div className="features__subcontainer-cards ">
      {/* flex gao30 */}
      <div className="features__subcontainer-cards__left ">
        <div className="features__subcontainer-cards__left-card1">
          <img src={valueprops1} alt="" />
          <h2>Really boy law county she unable her sister</h2>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought
          </p>
        </div>
        <div className="features__subcontainer-cards__left-card1 ">
          <img src={valueprops2} alt="" />
          <h2>Really boy law county she unable her sister</h2>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought
          </p>
        </div>
      </div>

      <div className="features__subcontainer-cards__right  ">
        <div className="features__subcontainer-cards__right-card ">
          <h2>Merits behind on afraid or warmly</h2>
        </div>
        <div className="features__subcontainer-cards__right-card">
          <h2>Believing neglected so so allowance existence</h2>
        </div>
      </div>
    </div>
  );
};

export default Featuressubcontainercards;
