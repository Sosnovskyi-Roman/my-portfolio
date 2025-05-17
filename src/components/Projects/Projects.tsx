'use client';
import styles from './Projects.module.scss';
import { ProjectCard } from './ProjectCard';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Project } from './types/Projects.types';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Reco Hair Expert',
      description:
        'Full-stack e-commerce platform for professional hair products with Next.js SSR, MongoDB inventory management, and secure checkout.',
      tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'E-commerce'],
      image: '/projects/Reco.png',
      githubUrl: 'https://github.com/reco-hair-expert/reco-frontend',
      liveUrl: 'https://www.hairexpertreco.com/',
    },
    {
      id: 2,
      title: 'Message App',
      description:
        'Real-time messaging application with CRUD functionality, built with React, Node.js, and MongoDB. Features ShadCN UI and RTK Query.',
      tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'ShadCN'],
      image: '/projects/message-app.png',
      githubUrl: 'https://github.com/Sosnovskyi-Roman/message-app',
      liveUrl: '',
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
