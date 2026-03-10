import React from 'react';

const AboutSection = () => (
  <section className="py-16 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
    <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm Victor Hillan, a software engineer passionate about building scalable solutions that drive real impact. With expertise in full-stack development, AI integration, and community-focused technology, I transform complex challenges into elegant digital products.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">My Approach</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• User-centered design and development</li>
            <li>• Scalable, maintainable code architecture</li>
            <li>• Data-driven decision making</li>
            <li>• Cross-functional collaboration</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What I'm Building</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• AI-powered web applications</li>
            <li>• Full-stack platforms at scale</li>
            <li>• Technology for social impact</li>
            <li>• Open-source contributions</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
