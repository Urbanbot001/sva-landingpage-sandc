import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sanctuarytwo.css";

const Sanctuarytwo = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/sanctuary");
  };
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage((prevState) => !prevState);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="sanctuary-container">
      <div className="sanctuary-content">
        <div className="image-container">
          <div onClick={handleRoleChange} className="linkDiv">
            <img
              src={isFirstImage ? "/forest_walk.png" : "/lonely_woman.jpg"} // Replace paths
              alt="Changing Scene"
              className="rounded-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sanctuarytwo;
