import React from 'react';

const ProjectCard = ({ title, tech, problem, outcome, image, demo, github }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 max-w-md mx-auto mb-6">
    {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-3" />}
    <h3 className="text-xl font-bold mb-1">{title}</h3>
  <div className="text-sm mb-2 text-black dark:text-white">{tech}</div>
  <p className="mb-2 text-black dark:text-white"><span className="font-semibold">Problem:</span> {problem}</p>
  <p className="mb-2 text-black dark:text-white"><span className="font-semibold">Outcome:</span> {outcome}</p>
    <div className="flex gap-3 mt-2">
  {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Live on</a>}
  {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white underline">GitHub</a>}
    </div>
  </div>
);

export default ProjectCard;
