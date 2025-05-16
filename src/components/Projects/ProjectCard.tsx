'use client';
import styles from './Projects.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { ProjectCardProps } from './types/Projects.types';

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className={styles.projectCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.projectImage}>
        <Image src={project.image} alt={project.title} fill className={styles.image} />
      </div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <FiGithub /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
