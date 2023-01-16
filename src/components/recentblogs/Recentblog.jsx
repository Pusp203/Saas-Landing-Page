import React from "react";
import "./recentblog.scss";
import blogimage from "../../assets/blogimage.png";
import rightarrow from "../../assets/rightarrow.png";
import blogleft from "../../assets/blogleft.png";
import blogmiddle from "../../assets/blogmiddle.png";
import blogright from "../../assets/blogright.png";

const Recentblog = () => {
  return (
    <div className="main__container ">
      {/* <div className="main__headings"> */}
      <h2>Recent Blogs</h2>
      {/* </div> */}
      <div className="blog__mainrow flex ">
        <div className="mainrow__leftdetails">
          <h6>best practices</h6>
          <p>
            In design active temper be uneasy. Thirty for remove plenty regard.
          </p>
          <div className="textbutton__readmore flex">
            Read More{" "}
            <div>
              {" "}
              <img src={rightarrow} alt="" />
            </div>
          </div>
        </div>
        <img src={blogimage} alt="" />
      </div>
      {/* secondrow */}
      <div className="blog__secondrow flex">
        <div className="related__blogs1">
          <h6>best practices</h6>
          <p>Partiality on or continuing particular principles as. </p>

          <img src={blogleft} alt="" />
        </div>

        <div className="related__blogs2">
          <div>
            <h6>best practices</h6>
            <p>Village did removed enjoyed explain </p>
          </div>
          <div>
            <img src={blogmiddle} alt="" />
          </div>
        </div>

        <div className="related__blogs3">
          <h6>best practices</h6>
          <p>Wise busy past both park when an ye no. Nay likely her length. </p>
          <img src={blogright} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recentblog;
