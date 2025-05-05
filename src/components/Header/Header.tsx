import styles from './Header.module.scss';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link href='/' className={styles.logo}>
          Roman Sosnovskyi
        </Link>

        <nav className={styles.nav}>
          <Link href='#about'>About</Link>
          <Link href='#skills'>Skills</Link>
          <Link href='#projects'>Projects</Link>
          <Link href='#contact'>Contact</Link>
        </nav>
      </div>
    </header>
  );
};
