import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; 
import './NavBar.css';  

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="LivenLife Logo" style={styles.logo} />
      </Link>
      <div style={styles.navLinks}>
        <Link to="/shop" style={styles.navItem}>Shop</Link>
        <Link to="/about" style={styles.navItem}>About Us</Link>
        <Link to="/cart" style={styles.navItem}>Cart</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#3b5f41",
    color: "#fff",
  },
  logo: {
    height: "50px",
    width: "50px",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  navItem: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
  },
};

export default Navbar;
