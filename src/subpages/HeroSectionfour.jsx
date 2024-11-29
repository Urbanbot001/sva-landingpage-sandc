import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSectionthree.css";

const HeroSectionfour = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/wellnessexperts");
  };
  return (
    <div className="hero-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="herothree-subtitle">
          A New Home of Wellbeing That Connects Everyone Through <br /> Authenticity,
          Oneness, and Harmony
        </p>
        <div className="hero-divider">|</div>
        <h1 className="herothree-title">
          Empowering Wellness for All the People Involved
        </h1>
      </div>
    </div>
  );
};

export default HeroSectionfour;
