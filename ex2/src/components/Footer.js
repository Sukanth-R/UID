// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
