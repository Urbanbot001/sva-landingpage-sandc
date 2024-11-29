import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSectiontwo.css";

const HeroSectiontwo = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/svavedatwo");
  };
  return (
    <div className="hero-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="hero-subtitle">
          Sva (स्व) + Veda (वेद) = Knowledge of the Self
        </p>
        <div className="hero-divider">|</div>
        <h1 className="hero-title">
          Born from the heart of India, the land of the Vedas, we bring to{" "}
          <br /> you a treasure chest of knowledge filled with opportunities to{" "}
          <br /> elevate yourself.
        </h1>
      </div>
    </div>
  );
};

export default HeroSectiontwo;
