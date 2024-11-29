import React from "react";
import { useNavigate } from "react-router-dom";
import "./Section.css";

const Section = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/darktheme"); 
  };
  return (
    <div className="container">
      <div className="half-circle">
      <div onClick={handleRoleChange} className="linkDiv">
          <p className="textsection">
            Step Into Well being and be <br /> your true self
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
