import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./WellnessServicestwo.css";

const WellnessServicestwo = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Memoize the services array to prevent re-initialization on every render
  const services = useMemo(
    () => [
      {
        key: "coaching",
        images: ["woman_with_tarots.jpg", "pestle_mortar.jpg"],
        title: "Esoteric Practices",
      },
      {
        key: "alternative-medicine",
        images: ["herbs_spices.jpg", "covered_face.jpg", "in_yoga.png"],
        title: "Alternative Medicine",
      },
      {
        key: "esoteric",
        images: ["stacking_rock.jpg", "wellness_practice.jpg", "in_yoga.png"],
        title: "Mindfulness",
      },
      {
        key: "energy-healing",
        images: ["therapist.jpg"],
        title: "Energy Healing",
      },
      {
        key: "mindfulness",
        images: ["active_woman.jpg", "woman_exercising.jpg", "in_yoga.png"],
        title: "Mind-Body Practices",
      },
      {
        key: "mind-body",
        images: ["woman_expressing.jpg", "in_yoga.png"],
        title: "Life & Wellness Coaching",
      },
    ],
    []
  );

  // Initialize image indices for each service
  const [imageIndices, setImageIndices] = useState(services.map(() => 0));

  useEffect(() => {
    // Set up an interval to update the image indices
    const interval = setInterval(() => {
      setImageIndices((prevIndices) =>
        prevIndices.map((index, serviceIdx) => (index + 1) % services[serviceIdx].images.length)
      );
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [services]);

  const handleRoleChange = () => {
    navigate("/herosectionseven");
  };

  return (
    <div className="wellness-container">
      {/* Central Background with Overlay Text */}
      <div className="central-background">
        <div onClick={handleRoleChange} className="linkDiv">
          <div className="text-overlay">
            <p>Reiki</p>
            <p>Sound Healing</p>
            <p>Pranic Healing</p>
            <p>Chakra Balancing</p>
            <p>Aura Cleansing</p>
            <p>Quantum Healing</p>
          </div>
        </div>
      </div>

      {/* Service Items with Cycling Images */}
      {services.map((service, idx) => (
        <div key={service.key} className={`service-item ${service.key}`}>
          <img
            src={service.images[imageIndices[idx]]} // Display the current image for this service
            alt={service.title}
          />
          <p>{service.title}</p>
        </div>
      ))}
    </div>
  );
};

export default WellnessServicestwo;
