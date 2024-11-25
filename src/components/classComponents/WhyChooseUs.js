// src/components/classComponents/WhyChooseUs.js
import React, { Component } from 'react';
import './WhyChooseUs.css';

class WhyChooseUs extends Component {
  render() {
    const features = [
      { icon: '💡', title: 'AI-Driven Matching', description: 'Get paired with the best partners for your learning journey.' },
      { icon: '🌍', title: 'Global Community', description: 'Connect with learners and teachers from around the world.' },
      { icon: '📈', title: 'Personalized Learning', description: 'Customize your learning experience based on your goals.' },
    ];

    return (
      <section className="why-choose-us-container">
        <div className="text-center">
          <h2 className="section-heading">Why Choose Us?</h2>
          <p className="section-subtitle">
            Discover why Cambloo is the best platform for skill exchange.
          </p>
        </div>
        <div className="features-container">
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
