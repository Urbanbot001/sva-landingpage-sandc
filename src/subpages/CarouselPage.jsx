import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarouselPage.css";

const CarouselPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/herosectionnine");
  };
  return (
    <div className="carouselpage-container">
      <div className="carouselpage">
        <div className="carouselpage-item">
          <img src="Yoga.gif" alt="Yoga Gif" className="carouselpage-image" />
        </div>
        <div className="carouselpage-item">
          <img
            src="yoga_cta.gif"
            alt="Beach View"
            className="carouselpage-image"
          />
          <div className="play-button">
            <span>&#9654;</span>
          </div>
        </div>
        <div className="carouselpage-item">
          <img
            src="asset4.png"
            alt="Nature Scene"
            className="carouselpage-image"
          />
        </div>
      </div>
      <div className="carouselpage-text">
        <div onClick={handleRoleChange} className="linkDiv">
          Relaxing Music For Stress & Anxiety
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
