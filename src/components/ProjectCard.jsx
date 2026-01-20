import React from 'react';


const ProjectCard = ({ title, tech, problem, outcome, image, demo, video, github, note }) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-80 flex flex-col items-center">
    {image && <img src={image} alt={title} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-400" />}
    <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">{title}</h3>
    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Tech: {tech}</p>
    <p className="mb-2 text-md text-indigo-700 dark:text-indigo-300 font-medium">Problem: {problem}</p>
    <p className="mb-2 text-md text-green-700 dark:text-green-300 font-medium">Outcome: {outcome}</p>
    <div className="flex gap-4 mt-4">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Live
        </a>
      )}
      {video && (
        <a
          href={video}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Version 2.0
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
        >
          GitHub
        </a>
      )}
    </div>
    {note && <p className="mt-3 text-sm text-purple-600 dark:text-purple-300 text-center">{note}</p>}
  </div>
);

export default ProjectCard;
