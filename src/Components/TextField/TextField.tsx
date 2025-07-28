import { useId, useState } from 'react';
import React from 'react';
import styles from './TextField.module.scss';
import { ComponentProps } from 'react';

type errorType = boolean | (() => boolean);

export interface TextFieldProps extends ComponentProps<'input'> {
  label: string;
  error?: errorType;
}

export default function TextField({
  label,
  error = false,
  value: valueFromProps,
  onChange,
  ...props
}: TextFieldProps) {
  const [defaultInput, setDefaultInput] = useState('');
  const generatedId = useId();
  const selectId = props.id ?? generatedId;

  const isValueFromProps = valueFromProps !== undefined;
  const value = isValueFromProps ? valueFromProps : defaultInput;
  const isPlaceholder = (props.placeholder ?? '') === '';
  const isValue =
    (value ?? '') === '' && isPlaceholder ? styles.emptyValue : styles.isValue;
  const isErrorFunction = typeof error === 'function' ? error() : error;
  const isError = isErrorFunction ? styles.isError : styles.isValid;

  const wrapFieldClass = [styles.textFieldWrap, isError].join(' ');
  const inputFieldClass = [styles.textFieldInput, isValue, isError].join(' ');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValueFromProps) {
      setDefaultInput(e.target.value);
    }
    onChange?.(e);
  };

  return (
    <div className={wrapFieldClass}>
      <input
        id={selectId}
        className={inputFieldClass}
        value={value}
        onChange={handleInputChange}
        {...props}
      />
      <label className={styles.textFieldLabel} htmlFor={selectId}>
        {isErrorFunction ? 'Error' : label}
      </label>
    </div>
  );
}
