import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSectionthree.css";

const HeroSectioneight = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/carouselpage");
  };
  return (
    <div className="hero-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="herothree-subtitle">
        Pause and Refresh
        </p>
        <div className="hero-divider">|</div>
        <h1 className="herothree-title">A Brief and Serene Break Can Restore <br /> Your Balance and Peace</h1>
      </div>
    </div>
  );
};

export default HeroSectioneight;
