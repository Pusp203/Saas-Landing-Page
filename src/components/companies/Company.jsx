import React from "react";
import "./company.scss";
import oracle from "../../assets/oracle.png";
import monday from "../../assets/monday.png";
import morpheus from "../../assets/morpheus.png";
import openZeppelin from "../../assets/openZeppelin.png";
import segment from "../../assets/segment.png";
import samsung from "../../assets/samsung.png";
import protonet from "../../assets/protonet.png";

const Company = () => {
  return (
    <div className="companies">
      <div className="companies__section ">
        {" "}
        <p>Over 32k+ software businesses growing with AR Shakir</p>{" "}
      </div>
      <div className="companies__images ">
        <img src={protonet} alt="" />
        <img src={samsung} alt="" />
        <img src={segment} alt="" />
        <img src={openZeppelin} alt="" />
        <img src={morpheus} alt="" />
        <img src={monday} alt="" />
        <img src={oracle} alt="" />
      </div>
    </div>
  );
};

export default Company;
