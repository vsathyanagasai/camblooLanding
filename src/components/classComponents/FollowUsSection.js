import React, { Component } from 'react';
import './FollowUsSection.css'; // Ensure this path is correct

class FollowUsSection extends Component {
  render() {
    return (
      <div className="follow-us-section" id="followusSection">
        <h1 className="follow-us-section-heading">Follow Us</h1>
        <div className="d-flex flex-row justify-content-center">
          <div className="follow-us-icon-container">
            <i className="fab fa-twitter-square icon"></i>
          </div>
          <div className="follow-us-icon-container">
            <i className="fab fa-instagram-square icon"></i>
          </div>
          <div className="follow-us-icon-container">
            <i className="fab fa-facebook-square icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowUsSection;
