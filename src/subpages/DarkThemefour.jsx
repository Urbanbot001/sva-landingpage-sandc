import React from "react";
import { useNavigate } from "react-router-dom";
import "./DarkThemefour.css";

const DarkThemefour = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/herosection");
  };
  return (
    <div className="dark-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <img src="/Group_hot.png" alt="Sun" className="sun-imagefour" />
      </div>
    </div>
  );
};

export default DarkThemefour;
