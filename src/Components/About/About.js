import React from 'react';
import './About.css';
import AboutImg from './AboutImg';
import Client from '../Client/Client';
import FaqSection from '../FaqSection';
const About = () => {
  return (
    <>
      <div className="main-heading">
        <h1>About us</h1>
      </div>
      <AboutImg />

      <Client />
      <FaqSection />
    </>
  );
};

export default About;
