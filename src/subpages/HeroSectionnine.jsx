import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSectionthree.css";

const HeroSectionnine = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/expertseeker");
  };
  return (
    <div className="hero-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="herothree-subtitle">
        Choose Your Path of Evolution With SvaVeda
        </p>
        <div className="hero-divider">|</div>
        <h1 className="herothree-title">Maximizing Value for Experts and <br /> Seekers</h1>
      </div>
    </div>
  );
};

export default HeroSectionnine;
