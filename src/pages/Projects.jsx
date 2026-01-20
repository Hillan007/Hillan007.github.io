import React from 'react';
import ProjectCard from '../components/ProjectCard';

import moodlyImg from '../assets/images/moodly.png';
import homeworkImg from '../assets/images/homework.png';
import unitradeImg from '../assets/images/Unitrade.png';

const projects = [
  {
    title: 'SPN Nigeria Platform',
    tech: 'Node.js, Google Forms, Vercel',
    problem: 'Developed a scalable backend for a faith-based organization in Nigeria, enabling seamless user registration and resource access.',
    outcome: 'Launched a user-friendly platform that empowers new members to join, connect, and benefit from community resources.',
    image: '/Images/SPN.png',
    demo: 'https://spn-nigeria.vercel.app/',
    github: '', // Add GitHub repo if public
  },
  {
    title: 'Moodly',
    tech: 'Flask, React, Music API, OpenAI',
    problem: 'Created a solution for users to discover music tailored to their mood, enhancing emotional well-being and engagement.',
    outcome: 'Boosted user satisfaction and music exploration through personalized recommendations and interactive features.',
    image: moodlyImg,
    demo: 'https://moodly-2-0.vercel.app/',
    github: 'https://github.com/Hillan007/Moodly-2.0.1',
  },
  
  {
    title: 'Campus Based Trading Platform',
    tech: 'React, Node.js, MongoDB',
    problem: 'Addressed the lack of a trusted peer-to-peer marketplace for campus communities.',
    outcome: 'Engineered a secure, transparent digital hub for student commerce—empowering entrepreneurship, smart reuse, and growth.',
    image: unitradeImg,
    demo: 'https://unitradeproject.netlify.app/',
    github: 'https://github.com/Hillan007/UniTrade.io-',
  },
];

const Projects = () => {
  return (
    <main>
      <h2 className="text-3xl font-bold text-center my-8">Featured Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
