import React from 'react';
import styles from './Checkbox.module.scss';
import { ComponentProps } from 'react';

export interface CheckboxProps extends ComponentProps<'input'> {
  label?: string;
}

export default function Checkbox({
  label,
  ...props
}: CheckboxProps): import('react').JSX.Element;

export default function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className={styles.checkboxLabel}>
      <div className={styles.checkboxInputHover}>
        <input type="checkbox" {...props} />
      </div>
      {label}
    </label>
  );
}
