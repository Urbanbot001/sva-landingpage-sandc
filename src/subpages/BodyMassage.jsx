import React from "react";
import { useNavigate } from "react-router-dom";
import "./BodyMassage.css";

const BodyMassage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/herosectioneight");
  };
  return (
    <div className="imagemassage-container">
      <div className="imagemassage-wrapper">
      <div onClick={handleRoleChange} className="linkDiv">
        <img
          src="woman_using_laptop.jpg"
          alt="Person working on laptop"
          className="imagemassage"
        />
      </div>
      </div>
      <div className="imagemassage-wrapper">
        <img
          src="women_candle.jpg"
          alt="Meditation session"
          className="imagemassage"
        />
      </div>
      <div className="imagemassage-wrapper">
        <div onClick={handleRoleChange} className="linkDiv">
        <img
          src="woman and man_bodymassage.jpg"
          alt="Relaxing massage"
          className="imagemassage"
        />
      </div>
      </div>
      <div className="imagemassage-wrapper">
        <img
          src="women_under shed.jpg"
          alt="Outdoor yoga session"
          className="imagemassage"
        />
      </div>
      <div className="imagemassagebackground-wrapper">
  <div className="imagemassagebackground">
    <p className="overlayimagemassage-text">Ready to be a part of our Community?</p>
  </div>
</div>
</div>
  );
};

export default BodyMassage;
