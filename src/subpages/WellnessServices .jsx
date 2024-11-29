import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./WellnessServices.css";

const WellnessServices = () => {
  const navigate = useNavigate();

  // Memoize the services array to prevent re-creation on each render
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
    [] // Empty dependency array ensures it is only created once
  );

  const [imageIndices, setImageIndices] = useState(
    services.map(() => 0) // Initialize each service's index to 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prevIndices) =>
        prevIndices.map((index, serviceIdx) => (index + 1) % services[serviceIdx].images.length)
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [services]);

  const handleRoleChange = () => {
    navigate("/wellnessservicestwo");
  };

  return (
    <div className="wellness-container">
      {/* Central Image */}
      <div className="central-image">
        <div onClick={handleRoleChange} className="linkDiv">
          <img src="hand_on_the_chest.jpg" alt="Meditating Woman" />
        </div>
      </div>

      {/* Services with Slideshow */}
      {services.map((service, idx) => (
        <div key={service.key} className={`service-item ${service.key}`}>
          <img
            src={service.images[imageIndices[idx]]}
            alt={service.title}
          />
          <p>{service.title}</p>
        </div>
      ))}
    </div>
  );
};

export default WellnessServices;
