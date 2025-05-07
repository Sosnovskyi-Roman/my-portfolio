'use client';
import styles from './Projects.module.scss';
import { ProjectCard } from './ProjectCard';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with cart and payment integration',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/projects/project.png',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Modern portfolio built with Next.js and TypeScript',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      image: '/projects/project.png',
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com',
    },
  ];

  const filters = ['All', ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section className={styles.projects} id='projects' ref={ref}>
      <div className={styles.sectionContainer}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterButton} ${filter === tag ? styles.active : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
