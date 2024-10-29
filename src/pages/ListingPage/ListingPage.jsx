import React, { useState } from "react";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import SizeSelector from "../../components/SizeSelector/SizeSelector";
import "./ListingPage.css";
import Navbar from "../../components/NavBar/NavBar";
import BottomBar from "../../components/BottomBar/BottomBar";

const ListingPage = ({ images, description, sizes }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
        <Navbar />
        <main className="listing-page">
        <div className="slideshow">
            <button onClick={prevSlide} className="arrow left-arrow">{"<"}</button>
            <img src={images[currentImageIndex]} alt="Product" className="slide-image" />
            <button onClick={nextSlide} className="arrow right-arrow">{">"}</button>
        </div>
        <div className="listing-info">
            <p className="listing-description">{description}</p>
            <SizeSelector sizes={sizes} />
            <AddToCartButton onClick={() => alert("Added to cart")} />
        </div>
        </main>
        <BottomBar />
    </>
  );
};

export default ListingPage;
