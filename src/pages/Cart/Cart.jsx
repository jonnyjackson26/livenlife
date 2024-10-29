import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, onCheckout }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="checkout-button" onClick={onCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
