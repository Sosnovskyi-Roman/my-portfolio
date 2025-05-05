import styles from './CTA.module.scss';
import { Button } from '../Button/Button';

export const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContainer}>
        <h3 className={styles.ctaTitle}>Ready to Start a Project?</h3>
        <p className={styles.ctaText}>
          I&apos;m available for freelance work and full-time positions. Let&apos;s build something
          amazing together!
        </p>
        <div className={styles.ctaButtons}>
          <Button href='#contact' variant='primary' size='lg'>
            Get In Touch
          </Button>
          <Button href='/projects' variant='secondary' size='lg'>
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
