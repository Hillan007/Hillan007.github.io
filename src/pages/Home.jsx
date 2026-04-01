import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';

const Stats = lazy(() => import('../components/Stats'));
const CTAButtons = lazy(() => import('../components/CTAButtons'));

const SectionLoader = () => (
  <div className="py-8 text-center text-gray-500">Loading section...</div>
);

const Home = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CTAButtons />
      </Suspense>
    </main>
  );
};

export default Home;
