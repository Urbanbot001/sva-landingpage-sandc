import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSectionthree.css";

const HeroSectionthree = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/sanctuarytwo");
  };
  return (
    <div className="hero-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="herothree-subtitle">
        A Healthier & Happier World Starts Here
        </p>
        <div className="hero-divider">|</div>
        <h1 className="herothree-title">
        Awaken and Align as You Embrace Your <br/ > Growth
        </h1>
      </div>
    </div>
  );
};

export default HeroSectionthree;
