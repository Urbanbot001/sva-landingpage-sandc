import React, { useState, useEffect } from "react";
import styles from "./ExpertsSubpage.module.css";

const ExpertsSubpagefive = () => {
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
            <h2 className={styles.heading}>Transformative Journey</h2>

            <p className={styles.description}>
              Embark on a journey of self-discovery and growth. Stay engaged
              with tools, experts, and experiences that will guide you towards a
              healthier, happier, and more fulfilled life. Grow across physical,
              mental, spiritual, social and other dimensions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertsSubpagefive;
