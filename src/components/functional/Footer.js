// src/components/functional/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="#terms" className="footer-link">Terms & Conditions</a>
        <a href="#privacy" className="footer-link">Privacy Policy</a>
        <a href="#contact" className="footer-link">Contact Us</a>
      </div>
      <p>© 2024 Cambloo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
