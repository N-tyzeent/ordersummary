import React from "react";
import img from "../images/icon-music.svg";
import "./Section3.css";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="newdiv">
       <p></p>
       <div className="plancontainer">
         <div className="plancon">
          <img src={img} alt="" />
          <div>
          <h3 className="plan">Annual Plan</h3>
          <p className="PlanPrice">$59.99/year</p>
          </div>
         </div>
        <a href="#" className="ChangeButton">
          Change
        </a>
      </div>
      
      </div>
    </div>
  );
};

export default Section3;
