import React from "react";
import { useNavigate } from "react-router-dom";
import ellipseImage from "../assets/images/Ellipse 40.png"; // Adjust path
import iconImage from "../assets/images/Group.png"; // Adjust path
import "./IconOverlay.css";

const IconOverlay = () => {
  const navigate = useNavigate();

  const handleRoleChange = () => {
    navigate("/iconoverlaytwo");
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
      </div>
    </div>
  );
};

export default IconOverlay;
