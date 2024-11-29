import React from "react";
import { useNavigate } from "react-router-dom";
import "./DarkThemethree.css";

const DarkThemethree = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/darkthemefour");
  };
  return (
    <div className="dark-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="dark-text">
          What New Path Opens Up When Your <br /> Soul Find Its Light?
        </p>
      </div>
      {/* Use the public folder path */}
      <img src="/Group_hot.png" alt="Sun" className="sun-imagethree" />
    </div>
  );
};

export default DarkThemethree;
