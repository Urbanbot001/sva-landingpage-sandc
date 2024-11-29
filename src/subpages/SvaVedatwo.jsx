import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SvaVedatwo.css";

const SvaVedatwo = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/svaveda");
  };
  const [isFirstImage, setIsFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage((prevState) => !prevState); // Toggle the image state
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="svaVeda-container">
      <div className="svaVeda-content">
        <div onClick={handleRoleChange} className="linkDiv">
          <div className="image-container">
            <div className="decorative-pattern">
              <img
                src="/round_vector.png"
                alt="Decorative Pattern"
                className="pattern-image"
              />
            </div>
            <img
              src={isFirstImage ? "/sunset_yoga.jpg" : "/in_yoga.png"}
              alt="Meditation"
              className="circle-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvaVedatwo;
