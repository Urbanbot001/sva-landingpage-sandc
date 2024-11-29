import React, { useState, useEffect } from "react";
import "./ExpertSeeker.css";
import { useNavigate } from "react-router-dom";

const ExpertSeeker = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Array of images for the slideshow
  const expertImages = [
    "group_of_women.png", // Replace with actual image paths
    "teacher.png",
  ];

  const seekerImages = [
    "meditating_woman2.jpg", // Replace with actual image paths
    "facial_yoga.jpg",
    "pool_meditation.jpg",
    "meditating_woman.png",
    "meditation.png",
  ];

  const [currentExpertImage, setCurrentExpertImage] = useState(0);
  const [currentSeekerImage, setCurrentSeekerImage] = useState(0);

  // Change images every 3 seconds
  useEffect(() => {
    const expertInterval = setInterval(() => {
      setCurrentExpertImage((prevIndex) => (prevIndex + 1) % expertImages.length);
    }, 3000);

    const seekerInterval = setInterval(() => {
      setCurrentSeekerImage((prevIndex) => (prevIndex + 1) % seekerImages.length);
    }, 3000);

    // Cleanup intervals
    return () => {
      clearInterval(expertInterval);
      clearInterval(seekerInterval);
    };
  }, [expertImages.length, seekerImages.length]);

  const handleExpertClick = () => {
    navigate("/expertspage"); // Navigate to the experts page
  };

  const handleSeekerClick = () => {
    navigate("/seekerspage"); // Navigate to the seekers page
  };

  return (
    <div className="ExpertSeeker-container">
      {/* Expert Section */}
      <div className="ExpertSeeker-circle">
        <img
          src={expertImages[currentExpertImage]}
          alt="Are You An Expert?"
        />
        <div onClick={handleExpertClick} className="linkDiv">
          <p>Are You An Expert?</p>
        </div>
      </div>

      {/* Seeker Section */}
      <div className="ExpertSeeker-circle">
        <img
          src={seekerImages[currentSeekerImage]}
          alt="Are You A Seeker?"
        />
        <div onClick={handleSeekerClick} className="linkDiv">
          <p>Are You A Seeker?</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertSeeker;
