import styles from './Hero.module.scss';
import { Button } from '../Button/Button';

export const Hero = () => {
  return (
    <section className={styles.hero} id='home'>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Roman Sosnovskyi</h1>
          <h2 className={styles.heroSubtitle}>Frontend Developer</h2>
          <p className={styles.heroDescription}>
            I build exceptional digital experiences with focus on performance, accessibility and
            cutting-edge technologies.
          </p>
          <div className={styles.heroButtons}>
            <Button href='/RomanSosnovskyi_CV.pdf' download variant='primary' size='lg'>
              Download CV
            </Button>
            <Button href='#contact' variant='secondary' size='lg'>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.imagePlaceholder}></div>
      </div>
    </section>
  );
};
