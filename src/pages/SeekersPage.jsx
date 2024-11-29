import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SeekersPage.module.css'; // Import the CSS module

const SeekersPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate('/seekerssubpagetwo'); // Navigate to the seekers subpage
  };

  const images = [
    'meditating_woman.png',
    'meditating_woman2.jpg',
    'man_exercising.png',
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
          <h1 className={styles.heading}>Simplify, Grow And Thrive</h1>
          <p className={styles.description}>
            From streamlined bookings to increased visibility – find out how SVA helps you focus
            on doing what you love.
          </p>
          {/* Use the button with handleRoleChange */}
          <button onClick={handleRoleChange} className={styles.linkButton}>
            SEE THE IMPACT OF EMBRACING WELLNESS <span className={styles.icon}>➝</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeekersPage;
