import React from "react";
import { useNavigate } from "react-router-dom";
import "./DarkThemetwo.css";

const DarkThemetwo = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/darkthemethree");
  };
  return (
    <div className="dark-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <p className="dark-text">
          Are You Ready To Peel Off Those<br /> Layers And Uncover Your Best Self?
        </p>
      </div>
      {/* Use the public folder path */}
      <img src="/Group_hot.png" alt="Sun" className="sun-image" />
    </div>
  );
};

export default DarkThemetwo;
