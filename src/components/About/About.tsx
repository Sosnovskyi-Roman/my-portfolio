'use client';
import styles from './About.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '10', label: 'Tech Specialties' },
  ];

  return (
    <section className={styles.about} id='about' ref={ref}>
      <div className={styles.sectionContainer}>
        <motion.h3
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h3>

        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hi there! I&apos;m <span className={styles.highlight}>Roman</span>, a frontend
              developer who loves building modern websites and apps.
            </p>
            <p>
              I focus on creating interfaces that people enjoy using. My toolkit includes React,
              Next.js and TypeScript.
            </p>
            <p>
              I believe a good website should be fast, intuitive and pleasant to use - that&apos;s
              what I aim for in every project.
            </p>
          </motion.div>

          <motion.div
            className={styles.aboutStats}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className={styles.statItem}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
