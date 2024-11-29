import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/suntheme");
  };
  return (
    <div className="hero-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="hero-subtitle">
          When we first met, I was a flicker of consciousness within you. Your
          outer world grew, and I got lost inside. Now, I'm ready to blossom.
        </p>
        <div className="hero-divider">|</div>
        <h1 className="hero-title">
          I Am YOU. I Am (स्व) <br />Follow Me As We Walk Together On The Path <br /> Towards A
          Renewed Sense Of SELF.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
