import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, PlayCircle } from 'lucide-react';

const ProjectCard = ({ title, tech, problem, outcome, image, imageWebp, imageAvif, demo, video, github, note }) => {
  const techList = useMemo(() => tech.split(',').map((t) => t.trim()), [tech]);
  return (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ duration: 0.25 }}
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
  >
    {/* Project Thumbnail */}
    {image && (
      <div className="relative overflow-hidden h-48 bg-gray-100 dark:bg-gray-700">
        <picture>
          {imageAvif && <source srcSet={imageAvif} type="image/avif" />}
          {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </picture>
      </div>
    )}

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      {/* Title + tech stack */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {techList.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Problem & Outcome */}
      <div className="space-y-3 mb-4 flex-1">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Problem</span>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">{problem}</p>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Outcome</span>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">{outcome}</p>
        </div>
      </div>

      {/* Note badge */}
      {note && (
        <p className="mb-4 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg px-3 py-2">
          {note}
        </p>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
        {video && (
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <PlayCircle size={15} />
            Preview
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={15} />
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
  );
};

export default ProjectCard;
