import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ExpertsPage.module.css"; // Import the CSS module

const ExpertsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/expertssubpageone"); // Navigate to the experts subpage
  };

  const images = [
    "meditating_woman.png",
    "man_exercising.png",
    "group_of_women.png",
    "yoga_teacher.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Image Section */}
        <div className={styles.imageWrapper}>
          <img
            src={images[currentImageIndex]} // Dynamically display the current image
            alt={`Meditating person ${currentImageIndex + 1}`}
            className={styles.image}
          />
        </div>

        {/* Text Section */}
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>Explore, Engage and Evolve</h1>
          <p className={styles.description}>
            Find the guidance and experiences you need to grow across all
            dimensions of your wellbeing, at your fingertips.
          </p>
          {/* Use the button with handleRoleChange */}
          <button onClick={handleRoleChange} className={styles.linkButton}>
            SEE THE IMPACT OF EMBRACING WELLNESS{" "}
            <span className={styles.icon}>➝</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertsPage;
