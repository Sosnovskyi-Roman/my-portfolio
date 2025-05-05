import styles from './About.module.scss';

export const About = () => {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.sectionContainer}>
        <h3 className={styles.sectionTitle}>About Me</h3>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Hello! I&apos;m Roman, a passionate frontend developer with 3+ years of experience
              specializing in modern JavaScript frameworks.
            </p>
            <p>
              My expertise includes building responsive web applications, optimizing performance,
              and creating accessible user interfaces.
            </p>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
