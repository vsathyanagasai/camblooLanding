import React, { Component } from 'react';
import './NavBar.css'; // Ensure you have the corresponding CSS

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="Cambloo Logo" className="Cambloo-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-link active" href="#wcuSection">
                Why Choose Us?
                <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#how-it-works-section">How it Works</a>
              <a className="nav-link" href="#testimonialSection">Testimonials</a>
              <a className="nav-link" href="#followusSection">Follow Us</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
