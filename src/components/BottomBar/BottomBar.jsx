import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./BottomBar.css";

const BottomBar = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.linkSection}>
        <a href="/contact" style={styles.footerLink}>Contact Us</a>
        <a href="/about" style={styles.footerLink}>About Us</a>
        <p>&copy; {new Date().getFullYear()} LivenLife</p>
      </div>
      <div style={styles.socialIcons}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#d1b89d",
    color: "#fff",
  },
  linkSection: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "center",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
  },
  icon: {
    color: "#fff",
    fontSize: "24px",
    transition: "transform 0.3s, background-color 0.3s",
  },
  // Individual background colors on hover
  iconHover: {
    backgroundColor: "#3b5998", // Facebook color as example
  },
};

export default BottomBar;
