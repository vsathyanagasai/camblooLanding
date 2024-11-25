import React, { Component } from 'react';
import './HowItWorks.css';
import exploreImg from '../../Explore.png';
import connectImg from '../../connectImg.png';
import learnImg from '../../learnImg.png';
import growImg from '../../growImg.png';

class HowItWorks extends Component {
  render() {
    const steps = [
      {
        title: 'Explore Skills',
        description: 'Browse and select a wide range of skills that you want to learn or teach. Whether you are a beginner or an expert, Cambloo has something for everyone.',
        image: exploreImg,
      },
      {
        title: 'Connect',
        description: 'Easily connect with other users who share your interests. Use Cambloo’s powerful AI-driven matching system to find the perfect learning partners.',
        image: connectImg,
      },
      {
        title: 'Learn & Teach',
        description: 'Engage in interactive sessions where you can both learn new skills and share your own knowledge. Experience a collaborative learning environment like never before.',
        image: learnImg,
      },
      {
        title: 'Grow',
        description: 'Expand your skillset and achieve your personal and professional goals. Cambloo provides the tools and community to help you thrive.',
        image: growImg,
      },
    ];

    return (
      <section className="how-it-works-container" id="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <div id="howItWorksCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {steps.map((step, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="carousel-content d-flex justify-content-center align-items-center flex-column">
                  <div className="step-image">
                    <img src={step.image} alt={step.title} />
                  </div>
                  <div className="step-content text-center">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#howItWorksCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#howItWorksCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

export default HowItWorks;
