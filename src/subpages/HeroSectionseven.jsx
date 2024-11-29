import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSectionthree.css";

const HeroSectionseven = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/bodymassage");
  };
  return (
    <div className="hero-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="herothree-subtitle">
        An Array of Programs to Support Healing and <br />Advancement
        </p>
        <div className="hero-divider">|</div>
        <h1 className="herothree-title">Programs We Cover</h1>
      </div>
    </div>
  );
};

export default HeroSectionseven;
