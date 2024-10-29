import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ListingPage from './pages/ListingPage/ListingPage';
import Cart from './pages/Cart/Cart';

const images = [
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/400",
];

const description = "A beautiful forest green hoodie, perfect for any season. Made with eco-friendly materials.";
const sizes = ["S", "M", "L", "XL"];
const cartItems = [
  {
    name: "Forest Green Hoodie",
    price: 59.99,
    quantity: 1,
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Classic Brown T-Shirt",
    price: 29.99,
    quantity: 2,
    image: "https://via.placeholder.com/80",
  },
];

const handleCheckout = () => {
  alert("Proceeding to checkout!");
};

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/shirt",
    element: <ListingPage images={images} description={description} sizes={sizes} />,
  },
  {
    path: "/cart",
    element: <Cart cartItems={cartItems} onCheckout={handleCheckout} />,
  },
]);

function Main() {
  return (
      <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);