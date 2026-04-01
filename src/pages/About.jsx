import React, { Suspense, lazy } from 'react';
import AboutSection from '../components/AboutSection';

const TechStack = lazy(() => import('../components/TechStack'));
const Values = lazy(() => import('../components/Values'));
const HowIWork = lazy(() => import('../components/HowIWork'));
const LookingFor = lazy(() => import('../components/LookingFor'));

const SectionLoader = () => (
  <div className="py-6 text-center text-gray-500">Loading section...</div>
);

const About = () => {
  return (
    <main>
      <AboutSection />
      <Suspense fallback={<SectionLoader />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <HowIWork />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LookingFor />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Values />
      </Suspense>
    </main>
  );
};

export default About;
