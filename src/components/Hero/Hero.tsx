'use client';
import styles from './Hero.module.scss';
import { Button } from '../Button/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeroProps } from './types/Hero.types';

export const Hero = ({
  name,
  position,
  description = '',
  cvPath,
  avatarPath,
  highlightedWords = ['modern'],
}: HeroProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const formatDescription = (text: string, highlights: string[]) => {
    return text.split(' ').map((word, i) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, '');
      return highlights.includes(cleanWord.toLowerCase()) ? (
        <span key={i} className={styles.highlight}>
          {word}{' '}
        </span>
      ) : (
        <span key={i}>{word} </span>
      );
    });
  };

  return (
    <section className={styles.hero} id='home' ref={ref}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {name}
            </motion.span>
          </h1>
          <h2 className={styles.heroSubtitle}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {position}
            </motion.span>
          </h2>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.9 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {formatDescription(description, highlightedWords)}
          </motion.p>
          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button href={cvPath} download variant='primary' size='lg'>
              Download CV
            </Button>
            <Button href='#contact' variant='secondary' size='lg'>
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={avatarPath}
              alt={`${name} - ${position}`}
              width={350}
              height={350}
              priority
              className={styles.avatarImage}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
