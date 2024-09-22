import React from "react";
import "./section1.scss";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";

function Section1() {
  return (
    <div className="section1">
      <div className="left-div">
        <div className="left-wrapper">
          <h1>Create and sell custom products</h1>
          <div className="paras">
            <div className="para">
              <IoMdCheckmark />
              <p>100% Free to use</p>
            </div>
            <div className="para">
              <IoMdCheckmark />
              <p>900+ High-Quality Products</p>
            </div>
            <div className="para">
              <IoMdCheckmark />
              <p>Largest global print network</p>
            </div>
          </div>

          <div className="btns">
            <div className="btn1 btn">Start for free</div>
            <div className="btn2 btn">
              <FaRegCirclePlay />
              How it works?
            </div>
          </div>
          <p className="green-para">
            Trusted by over 8M sellers around the world
          </p>
        </div>
      </div>
      <div className="right-div">
        <div className="right-img">
          <img src="hero_img.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
