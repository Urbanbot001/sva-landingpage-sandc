import React from "react";
import { useNavigate } from "react-router-dom";
import ellipseImage from "../assets/images/Ellipse 40.png";
import iconImage from "../assets/images/Group.png";
import iconImagetwo from "../assets/images/Vector2.png";
import textImage from "../assets/images/SV_Group.png";
import textImagetwo from "../assets/images/SV_Group2.png";
import textImagethree from "../assets/images/Vector.png";
import "./IconOverlaythree.css";

const IconOverlaythree = () => {
  const navigate = useNavigate();

  const handleRoleChange = () => {
    navigate("/iconoverlayfour");
  };

  return (
    <div className="icon-overlay-container">
      <div onClick={handleRoleChange} className="icon-overlay-wrapper">
        <div
          className="ellipse-background"
          style={{
            backgroundImage: `url(${ellipseImage})`,
          }}
        ></div>
        <img src={iconImage} alt="Icon" className="icon-overlay-icon" />
        <img src={iconImagetwo} alt="Icon" className="iconimage-two" />
      </div>
      <div onClick={handleRoleChange} className="linkDiv">
        <img src={textImage} alt="Icon" className="textimage-icon" />
        <img src={textImagetwo} alt="Icon" className="textimagetwo-icon" />
        <img src={textImagethree} alt="Icon" className="textimagethree-icon" />
      </div>
      <>
        <p className="text">Book a Journey Within</p>
      </>
    </div>
  );
};

export default IconOverlaythree;
