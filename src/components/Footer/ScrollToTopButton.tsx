'use client';

import { ArrowUpIcon } from '@radix-ui/react-icons';
import styles from './Footer.module.scss';
import { useEffect, useState } from 'react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Додаємо трошки throttle для оптимізації
    const throttledToggleVisibility = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            toggleVisibility();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    window.addEventListener('scroll', throttledToggleVisibility());
    return () => window.removeEventListener('scroll', throttledToggleVisibility());
  }, []);

  return (
    <button
      className={`${styles.backToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label='Scroll to top'
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUpIcon />
    </button>
  );
};
