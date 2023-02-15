import React from 'react';
import AboutComponent from '../components/AboutComponent';
import Header from '../components/Header';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <Header />
      <AboutComponent />
    </div>
  );
}

export default About;