import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSectionthree.css";

const HeroSectionsix = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/wellnessservices");
  };
  return (
    <div className="hero-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="herothree-subtitle">
        A Wide Array of Options: From Time-Honored Traditions to <br/> New-Age Practices
        </p>
        <div className="hero-divider">|</div>
        <h1 className="herothree-title">Modalities We Embrace</h1>
      </div>
    </div>
  );
};

export default HeroSectionsix;
