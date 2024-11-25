import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="banner-section-bg-container d-flex justify-content-center flex-column">
      <div className="text-center">
        <h1 className="banner-heading mb-3">
          Unleash Your Potential with <span style={{ color: 'black' }}>Cam</span><span className="cambloo-highlight">bloo</span>
        </h1>
        <p className="banner-caption mb-4">The AI-Powered Skill Exchange Platform</p>
        <button className="custom-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
