'use client';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerWrapper}>
        <Link href='/' className={styles.logo} onClick={closeMenu}>
          Roman Sosnovskyi
        </Link>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label='Toggle menu'
          aria-expanded={isOpen}
        >
          {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link href='#about' onClick={closeMenu}>
            About
          </Link>
          <Link href='#skills' onClick={closeMenu}>
            Skills
          </Link>
          <Link href='#projects' onClick={closeMenu}>
            Projects
          </Link>
          <Link href='#contact' onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
