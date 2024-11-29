import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SvaVeda.css";

const SvaVeda = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/herosectionthree");
  };
  const [isFirstImage, setIsFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage((prevState) => !prevState); // Toggle the image state
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="svaVeda-containerveda">
      <div className="svaVeda-contentveda">
          <div className="image-containerveda">
            <div className="decorative-patternveda">
              <img
                src="/round_vector.png"
                alt="Decorative Pattern"
                className="pattern-imageveda"
              />
            </div>
            <img
              src={isFirstImage ? "/sunset_yoga.jpg" : "/in_yoga.png"}
              alt="Meditation"
              className="circle-imageveda"
            />
          </div>
          <div onClick={handleRoleChange} className="linkDiv">
          <div className="text-contentveda">
            <h2>What is SvaVeda?</h2>
            <p>
              A digital platform where holistic Experts can showcase their
              programs & services, allowing Seekers to explore & book their
              offerings with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvaVeda;
