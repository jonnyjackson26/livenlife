import React from "react";
import "./Listing.css";

const Listing = ({ photo, name, description }) => {
  return (
    <div className="listing-container">
      <img src={photo} alt={name} className="listing-image" />
      <h3 className="listing-name">{name}</h3>
      <p className="listing-description">{description}</p>
    </div>
  );
};

export default Listing;
