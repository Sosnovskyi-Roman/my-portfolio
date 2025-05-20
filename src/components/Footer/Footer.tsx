import Link from 'next/link';
import styles from './Footer.module.scss';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { ScrollToTopButton } from './ScrollToTopButton';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Roman Sosnovskyi. All rights reserved.
        </p>

        <div className={styles.socialLinks}>
          <Link
            href='https://github.com/Sosnovskyi-Roman'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubLogoIcon /> GitHub
          </Link>
          <Link
            href='https://www.linkedin.com/in/roman-sosnovskyi-86743229a/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInLogoIcon /> LinkedIn
          </Link>
        </div>

        <ScrollToTopButton />
      </div>
    </footer>
  );
};
