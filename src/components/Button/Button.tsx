import styles from './Button.module.scss';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  icon?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  onClick,
  className = '',
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return download ? (
      <Link href={href} download className={buttonClass}>
        {children}
      </Link>
    ) : (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
