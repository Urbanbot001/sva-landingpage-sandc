import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./PhysicalWellbeing.css";

const PhysicalWellbeing = () => {
  const navigate = useNavigate();

  const handleRoleChange = () => {
    navigate("/herosectionsix");
  };
  const slides = useMemo(
    () => [
      {
        title: "Body",
        subtitle: "Physical Wellbeing",
        description: `At SvaVeda, we focus on physical wellbeing <br /> with a range of
            body-centered programs. <br /> Explore yoga, bio-hacking, and
            holistic <br />
            therapies like functional medicine and <br /> Ayurveda. Our platform
            links you with experts <br /> dedicated to helping you achieve
            vibrant <br /> health and lasting vitality.`,
        images: [
          "young_couple.jpg",
          "woman_exercising.jpg",
          "hand_on_the_chest.jpg",
          "group_meditation.png",
        ],
      },
      {
        title: "Mind",
        subtitle: "Mental Wellbeing",
        description: `SvaVeda is your sanctuary for mental wellbeing, <br /> offering
            practices that foster and strengthen the mind. <br /> From
            meditation and mindfulness to nervous system re-training, <br /> we
            provide a range of programs and experts <br />
            to enhance emotional intelligence and <br /> support your mental
            growth.`,
        images: [
          "reiki_therapy.jpg",
          "covered_face.jpg",
          "woman_exercising.jpg",
        ],
      },
      {
        title: "Soul",
        subtitle: "Spiritual Wellbeing",
        description: `On your path to spiritual growth, SvaVeda is here to support you.
            <br /> Connect with compassionate healers, experts, energy workers,
            and guides who help you find inner peace, deepen self-awareness, and
            live with purpose. <br />
            Explore practices that nurture your soul and <br /> connect you with
            the Divine.`,
        images: ["wellness_practice.jpg", "stream.png"],
      },

      {
        title: "Relationships",
        subtitle: "Social Wellbeing",
        description: `At SvaVeda, we recognize how vital healthy relationships and <br />
            strong social connections are for your well-being. <br />
            Our programs and services, including parenting courses, couple
            sessions, and <br />
            social dynamics therapy, are designed to improve communication and
            build meaningful connections, fostering a supportive and <br />
            harmonious environment.`,
        images: ["children.png"],
      },

      {
        title: "Living",
        subtitle: "Lifestyle & Environmental Wellbeing",
        description: `We support a balanced lifestyle and environmental harmony with
            resources that embrace sustainable living and spatial balance.{" "}
            <br />
            Whether through eco-tourism, wellness retreats, or practices like
            Vastu and <br /> Feng Shui, SvaVeda helps you align with nature,
            your surroundings, <br /> and your personal values.`,
        images: [
          "stone_on_sand.png",
          "group_meditation.png",
          "hand_on_the_chest.jpg",
        ],
      },

      {
        title: "Development",
        subtitle: "Occupational, Intellectual & Financial Wellbeing",
        description: `SvaVeda helps you thrive by enhancing your outer persona and
            fostering a growth mindset.
            <br /> We offer support in cognitive skills, life skills, and
            professional development.
            <br /> Whether you’re looking for image coaching or skill-building,
            we’re here to guide you toward success and fulfillment in every
            aspect of your life.`,
        images: ["book.png"],
      },
    ],
    []
  );

  const [activeImages, setActiveImages] = useState(
    Array(slides.length).fill(0)
  );

  useEffect(() => {
    const intervals = slides.map((_, index) =>
      setInterval(() => {
        setActiveImages((prev) =>
          prev.map((current, i) =>
            i === index ? (current + 1) % slides[index].images.length : current
          )
        );
      }, 3000)
    );

    return () => intervals.forEach(clearInterval); // Clear intervals on unmount
  }, [slides]); // Dependency on memoized slides

  return (
    <div className="physicalwellbeing-section">
      {slides.map((slide, index) => (
        <div key={index} className="physicalwellbeing-container">
          <div className="physical-image-container">
            <img
              src={slide.images[activeImages[index]]}
              alt={slide.subtitle}
              className="physicalwellbeing-image"
            />
          </div>
          <div className="physicalwellbeing-text-container">
            <div onClick={handleRoleChange} className="linkDiv">
              <h2 className="physicalwellbeing-title">{slide.title}</h2>
              <h3 className="physicalwellbeing-subtitle">{slide.subtitle}</h3>
            </div>
            <p
              className="physicalwellbeing-description"
              dangerouslySetInnerHTML={{ __html: slide.description }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhysicalWellbeing;
