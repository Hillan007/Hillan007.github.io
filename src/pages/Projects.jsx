import React from 'react';
import ProjectCard from '../components/ProjectCard';

import moodlyImg from '../assets/images/moodly.png';
import moodlyImgWebp from '../assets/images/moodly.webp';
import moodlyImgAvif from '../assets/images/moodly.avif';
import unitradeImg from '../assets/images/Unitrade.png';
import unitradeImgWebp from '../assets/images/Unitrade.webp';
import unitradeImgAvif from '../assets/images/Unitrade.avif';

const projects = [
  {
    title: 'SPN Nigeria Platform',
    tech: 'Node.js, Google Forms, Vercel',
    problem: 'Developed a scalable backend for a faith-based organization in Nigeria, enabling seamless user registration and resource access.',
    outcome: 'Launched a user-friendly platform that empowers new members to join, connect, and benefit from community resources.',
    image: '/Images/SPN.png',
    imageWebp: '/Images/SPN.webp',
    imageAvif: '/Images/SPN.avif',
    demo: 'https://spn-nigeria.vercel.app/',
    github: '', // Add GitHub repo if public
  },
  {
    title: 'Moodly',
    tech: 'Flask, React, Music API, OpenAI',
    problem: 'Created a solution for users to discover music tailored to their mood, enhancing emotional well-being and engagement.',
    outcome: 'Boosted user satisfaction and music exploration through personalized recommendations and interactive features.',
    image: moodlyImg,
    imageWebp: moodlyImgWebp,
    imageAvif: moodlyImgAvif,
    demo: 'https://moodly-2-0.vercel.app/',
    video: 'https://drive.google.com/file/d/1MEIKSId7w17cFx85hY5IY4LvGPCGZnQ1/view',
    note: 'Moodly Version 2 coming soon – watch the preview.',
    github: 'https://github.com/Hillan007/Moodly-2.0.1',
  },

  {
    title: 'Campus Based Trading Platform',
    tech: 'React, Node.js, MongoDB',
    problem: 'Addressed the lack of a trusted peer-to-peer marketplace for campus communities.',
    outcome: 'Engineered a secure, transparent digital hub for student commerce—empowering entrepreneurship, smart reuse, and growth.',
    image: unitradeImg,
    imageWebp: unitradeImgWebp,
    imageAvif: unitradeImgAvif,
    demo: 'https://unitradeproject.netlify.app/',
    github: 'https://github.com/Hillan007/UniTrade.io-',
  },
  {
    title: 'Moodly 2.0',
    tech: 'Python, React, Music API, OpenAI,Supabase',
    problem: 'Moodly 2.0 is an enhanced version of the original Moodly app, designed to provide an even more personalized and engaging music discovery experience. The project focused on improving the recommendation algorithm, adding new interactive features, and refining the user interface based on feedback from the initial release.',
    outcome: 'Delivered a more intuitive and engaging user experience with improved personalization and a modernized UI.',
    image: '/Images/Moodly2.0.png',
    imageWebp: '/Images/Moodly2.0.webp',
    imageAvif: '/Images/Moodly2.0.avif',
    demo: 'https://moodly-2.vercel.app/',
    note: '🚧 Work in Progress: Moodly 2.0 is currently under active development. The music API integration may experience occasional issues as we refine the platform.',
    github: 'https://github.com/Hillan007/Moodly-2.0.1',
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
