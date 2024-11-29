import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sanctuary.css";

const Sanctuary = () => {
    const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/herosectionfour"); 
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
          <img
            src={isFirstImage ? "/forest_walk.png" : "/lonely_woman.jpg"} // Replace paths
            alt="Changing Scene"
            className="rounded-image"
          />
        </div>
        <div onClick={handleRoleChange} className="linkDiv">
        <div className="text-container">
        
          <p>
            Imagine a Sanctuary Where Your Growth is at the Heart of
            Everything—Growth Realized Through Educating, Experiencing, and
            Evolving. Growth That is Nurtured by the Community, for the
            Community.
          </p>
          <p>This Growth Traces Its Path Through SvaVeda.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sanctuary;
