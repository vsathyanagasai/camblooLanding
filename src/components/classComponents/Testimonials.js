// src/components/classComponents/Testimonials.js
import React, { Component } from 'react';
import testImg from '../../testimonialsImg.png'
import './Testimonials.css';

class Testimonials extends Component {
  render() {
    const testimonials = [
      {
        name: 'John Doe',
        quote: 'Cambloo has completely transformed the way I learn new skills!',
        image: testImg, 
      },
      {
        name: 'Jane Smith',
        quote: 'The community is amazing, and the AI-driven matching is spot on!',
        image: testImg,
      },
      {
        name: 'Mark Johnson',
        quote: 'I love how easy it is to connect with others and exchange knowledge.',
        image: testImg,
      },
    ];

    return (
      <section className="testimonials-container" id='testimonialSection'>
        <h2 className="section-title">Testimonials</h2>
        <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="testimonial-item">
                  <img src={testimonial.image} alt={`${testimonial.name}'s testimonial`} className="testimonial-image" />
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Testimonials;
