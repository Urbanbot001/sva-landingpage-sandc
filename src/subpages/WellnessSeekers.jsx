import React from "react";
import { useNavigate } from "react-router-dom";
import "./WellnessSeekers.css";

const WellnessSeekers = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/herosectionfive");
  };

  return (
    <div className="wellnessseekers-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <div className="circleseekers-container">
          <img
            src="/wellness_seekers.jpg" 
            alt="Wellness Seekers"
            className="circle-imageseekers"
          />
          <div className="textseekers-overlay">Wellness Seekers</div>
        </div>
      </div>
    </div>
  );
};

export default WellnessSeekers;
