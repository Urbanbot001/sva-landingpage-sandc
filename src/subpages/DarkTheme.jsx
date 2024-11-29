import React from "react";
import { useNavigate } from "react-router-dom";
import "./DarkTheme.css";

const DarkTheme = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/darkthemetwo");
  };
  return (
    <div className="dark-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="dark-text">
          Hidden Behind The Darkness Lies Your <br /> True Potential.
        </p>
      </div>
      {/* Use the public folder path */}
      <img src="/Group_hot.png" alt="Sun" className="sun-image1" />
    </div>
  );
};

export default DarkTheme;
