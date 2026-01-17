import React from 'react';
import AboutSection from '../components/AboutSection';
import TechStack from '../components/TechStack';
import Values from '../components/Values';
import HowIWork from '../components/HowIWork';
import LookingFor from '../components/LookingFor';

const About = () => {
  return (
    <main>
      <AboutSection />
      <TechStack />
      <HowIWork />
      <LookingFor />
      <Values />
    </main>
  );
};

export default About;
