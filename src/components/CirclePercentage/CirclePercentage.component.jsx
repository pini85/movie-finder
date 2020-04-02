import React from "react";
import "./styles.css";

const CirclePercentage = ({ color1, color2, color3, rating }) => {
  return (
    <div
      style={{ backgroundColor: color2, color: color2 }}
      className="circle-wrap"
    >
      <div className="circle">
        <div className="mask full">
          <div style={{ backgroundColor: color1 }} className="fill"></div>
        </div>

        <div className="mask half">
          <div style={{ backgroundColor: color1 }} className="fill"></div>
        </div>

        <div className="inside-circle">
          {rating}%
          <div
            style={{ backgroundColor: color3 }}
            className="inside-circle-background"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CirclePercentage;
