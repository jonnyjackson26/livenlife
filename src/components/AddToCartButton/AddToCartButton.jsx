import React from "react";
import "./AddToCartButton.css";

const AddToCartButton = ({ onClick }) => {
  return (
    <button className="add-to-cart-button" onClick={onClick}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
