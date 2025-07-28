import React from 'react';
import styles from './Switch.module.scss';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Switch({ checked, disabled, onChange }: SwitchProps) {
  return (
    <label className={`${styles.switch}  ${disabled ? styles.isDisabled : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className={`${styles.slider}`}></span>
      <span className={`${styles.sliderCircle}`}></span>
    </label>
  );
}
