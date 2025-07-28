import React from 'react';
import styles from './Button.module.scss';
import { ComponentProps } from 'react';

export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ComponentProps<'button'> {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button({
  label,
  size = 'medium',
  variant = 'contained',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        styles.button,
        styles[`button--${size}`],
        styles[`button--${variant}`],
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
}
