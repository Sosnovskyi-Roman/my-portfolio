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
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '15+', label: 'Happy Clients' },
    { number: '5', label: 'Tech Specialties' },
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
              Hello! I&apos;m <span className={styles.highlight}>Roman</span>, a passionate frontend
              developer with expertise in modern web technologies.
            </p>
            <p>
              I specialize in building <span className={styles.highlight}>high-performance</span>,{' '}
              <span className={styles.highlight}>accessible</span>, and{' '}
              <span className={styles.highlight}>responsive</span> web applications using
              cutting-edge tools like React, Next.js, and TypeScript.
            </p>
            <p>
              My approach combines technical excellence with attention to detail, ensuring
              pixel-perfect implementations and smooth user experiences across all devices.
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
