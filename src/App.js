// src/App.js
import React from 'react';
import NavBar from './components/classComponents/NavBar';
import Hero from './components/functional/Hero';
import HowItWorks from './components/classComponents/HowItWorks';
import Footer from './components/functional/Footer';
import WhyChooseUs from './components/classComponents/WhyChooseUs';
import Testimonials from './components/classComponents/Testimonials';
import FollowUsSection from './components/classComponents/FollowUsSection';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FollowUsSection />
      <Footer />
    </div>
  );
};

export default App;
