import React from "react";
import NoImageAvailable from "../../assets/no-image-available.jpg";

const NoPoster = () => {
  return (
    <div className="no--image__container">
      <img src={NoImageAvailable} alt="" className="no--image"/>
    </div>
  );
};

export default NoPoster;
