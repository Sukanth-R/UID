import React from 'react';
import './Header.css'; // Import the updated CSS file

function Header({ title, subtitle, tagline, profileImage, socialLinks }) {
  return (
    <header className="header-section">
      <div className="intro">
        <div className="intro-content">
          <div className="intro-left">
            <img src={profileImage} alt="Profile" className="profile-img" />
          </div>
          <div className="intro-right">
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <p className="tagline">{tagline}</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            <a href="#contact" className="cta-button">Contact Me</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
