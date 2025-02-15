import React, { useState, useEffect } from "react";
import styles from "./ExpertsSubpage.module.css";
import { useNavigate } from "react-router-dom";

const ExpertsSubpageone = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/expertssubpagetwo"); // Navigate to the experts subpage
  };
  const GroupImages = [
    "meditating_woman.png",
    "man_exercising.png",
    "meditating_woman2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % GroupImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [GroupImages.length]);

  return (
    <div className={styles.container}>
      <div className={styles.versatileListings}>
        <div className={styles.content}>
          {/* Left Section with Image and Icons */}
          <div className={styles.leftSection}>
            {/* Circular Outline */}
            <div className={styles.circleOutline}></div>
            <div className={styles.imageWrapper}>
              <img
                src={GroupImages[currentImageIndex]} // Dynamically display the current image
                alt={`Group of women ${currentImageIndex + 1}`}
                className={styles.image}
              />
            </div>
            {/* Circular Icons */}
            <div className={styles.circleIcons}>
              <div className={`${styles.icon} ${styles.iconTop}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 41.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 50.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "120px", // Adjust size as needed
                  height: "120px", // Match width for a perfect circle
                  borderRadius: "50%", // Ensures the container is circular
                  overflow: "hidden", // Hides overflow from child elements
                  marginTop: "6rem", // Moves the entire overlay down
                }}
              >
                <img
                  src="ellipse 40.png"
                  alt="Ellipse"
                  style={{
                    position: "absolute",
                    top: 0, // Moves the ellipse down inside the container
                    left: 0,
                    width: "100%", // Ensures the image fills the container
                    height: "100%", // Matches container dimensions
                    borderRadius: "50%", // Ensures circular shape for the image
                    zIndex: 1, // Places the ellipse below the component
                  }}
                />
                <img
                  src="Component 49.svg"
                  alt="Component"
                  style={{
                    position: "absolute",
                    top: "55%", // Adjust this value to move the component lower
                    left: "50%", // Centers horizontally
                    transform: "translate(-50%, -50%)", // Adjusts position for perfect centering
                    width: "70%", // Adjust relative size of the component
                    height: "70%", // Matches width for proportional scaling
                    zIndex: 2, // Places the component above the ellipse
                  }}
                />
              </div>

              <div className={`${styles.icon} ${styles.iconBottom}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 42.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 48.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Text */}
          <div className={styles.rightSection}>
            {/* Use the button with handleRoleChange */}
            <div onClick={handleRoleChange} className={styles.linkDiv}>
              <h2 className={styles.heading}>Discover To Thrive</h2>
            </div>
            <p className={styles.description}>
              SvaVeda is your go-to wellbeing destination. Increase awareness
              about what all possibilities lie in the realm of personal
              transformation. Explore a range of experts, destinations,
              programmes, services and modalities. There is something new to
              uncover for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertsSubpageone;
