import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSectionthree.css";

const HeroSectionfive = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/physicalwellbeing");
  };
  return (
    <div className="hero-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="herothree-subtitle">
          We Nourish Whole Health for the Whole Self
        </p>
        <div className="hero-divider">|</div>
        <h1 className="herothree-title">Dimensions of Wellbeing We <br /> Nurture</h1>
      </div>
    </div>
  );
};

export default HeroSectionfive;
