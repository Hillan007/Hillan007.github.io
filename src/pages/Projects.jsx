import React from 'react';
import ProjectCard from '../components/ProjectCard';

import moodlyImg from '../assets/images/moodly.png';
import homeworkImg from '../assets/images/homework.png';
import unitradeImg from '../assets/images/Unitrade.png';

const projects = [
  {
    title: 'SPN Nigeria Platform',
    tech: 'Node.js,Google Forms, Vercel',
    problem: 'Building a scalable backend for a faith-based organization based in Nigeria.',
    outcome: 'A friendly website platform where new users can easily register and access resources.',
    image: '/Images/SPN.png',
    demo: 'https://spn-nigeria.vercel.app/',
    github: '', // Add GitHub repo if public
  },
  {
    title: 'Moodly',
    tech: 'Flask, React, Music API, OpenAI',
    problem: 'Help users discover music that matches their mood.',
    outcome: 'Enhanced user engagement and music discovery.',
    image: moodlyImg,
    demo: 'https://moodly-2-0.vercel.app/',
    github: 'https://github.com/Hillan007/Moodly-2.0.1',
  },
  {
    title: 'Homework-Ally',
    tech: 'Python, FastAPI, Jinja2, Vercel, OpenAI',
    problem: 'A friendly homework assistant for young learners.',
    outcome: 'Saved 3+ study hours.',
    image: homeworkImg,
    demo: 'https://homework-ally.vercel.app/',
    github: 'https://github.com/Hillan007/Homework-ally-2.0',
  },
  {
    title: 'Campus Based trading platform',
    tech: 'React, Node.js, MongoDB ',
    problem: 'Improve discoverability for a nonprofit organization.',
    outcome: 'Improved discoverability by 60%.',
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
