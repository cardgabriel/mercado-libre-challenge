import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button 
      className={`${styles.button} ${variant === 'secondary' ? styles.secondary : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}; 