import React from "react";
import { useNavigate } from "react-router-dom";
import "./SunTheme.css";

const SunTheme = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/iconoverlay");
  };
  return (
    <div className="light-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <img src="/sun_new.png" alt="Sun" className="sun-imagefour" />
      </div>
    </div>
  );
};

export default SunTheme;
