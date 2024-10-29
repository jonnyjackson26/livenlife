import React, { useState } from "react";
import "./SizeSelector.css";

const SizeSelector = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="size-selector">
      <p>Select Size:</p>
      <div className="size-options">
        {sizes.map((size) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? "selected" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
