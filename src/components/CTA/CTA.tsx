import styles from './CTA.module.scss';
import { Button } from '../Button/Button';

export const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContainer}>
        <h3 className={styles.ctaTitle}>Open to New Opportunities</h3>
        <p className={styles.ctaText}>
          As a passionate Junior Front-End Developer, I&apos;m actively looking for full-time
          positions and internship opportunities. Eager to contribute my skills and grow within a
          professional team while learning modern web technologies.
        </p>
        <div className={styles.ctaButtons}>
          <Button href='#contact' variant='primary' size='lg'>
            Contact Me
          </Button>
          <Button
            href='
          #projects'
            variant='secondary'
            size='lg'
          >
            See My Work
          </Button>
        </div>
      </div>
    </section>
  );
};
