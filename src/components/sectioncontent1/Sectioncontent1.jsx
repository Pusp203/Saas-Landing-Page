import React from "react";
import "./sectioncontent1.scss";
import Ellipse40 from "../../assets/Ellipse40.png";
import graycheckbox from "../../assets/graycheckbox.png";
const Sectioncontent1 = () => {
  return (
    <div className="section__content flex   ">
      <div className="section__contentright  ">
        {" "}
        <p className="p2">why choose us</p>{" "}
        <h2>Track your payments on the go with the best way possible.</h2>
        <div className="paraa_graph ">
          indulgence way everything joy alternation boisterous the attachment
          Party we years to order allow asked of.
        </div>
        <hr />
        <div>
          <img src={graycheckbox} alt="" />
          {/* <input type="checkbox" name="" id="" /> */}
          <div className="para-graph2 flex">
            Get over view at a glance
            <div />
            <img src={graycheckbox} alt="" />
            <div className="para-graph2 flex">
              Deposite funds easily,security
            </div>
            <img src={graycheckbox} alt="" />
            <div className="para-graph2 flex">Get live support</div>
          </div>
        </div>
        <div className="section__contentleft  ">
          {/* <div className="box__items "> */}

          <div className="first__box flex ">
            <img src={Ellipse40} alt="" />
            <p className="numbers ">+$28,900</p>
            <p>Received from Michael V</p>
          </div>
          <div className="second__box ">
            <img src={Ellipse40} alt="" />
            <p className="numbers ">+$28,900</p>
            <p>Received from Michael V</p>
          </div>
          <div className="third__box ">
            <img src={Ellipse40} alt="" />
            <p className="numbers ">+$28,900</p>
            <p>Received from Michael V</p>
          </div>
          <div className="fourth__box ">
            <p className="numbers ">+$28,900</p>
            <img src={Ellipse40} alt="" />
            <p>Received from Michael V</p>
          </div>
          <div className="fifth__box ">
            <p className="numbers ">+$28,900</p>
            <img src={Ellipse40} alt="" />
            <p>Received from Michael V</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectioncontent1;
