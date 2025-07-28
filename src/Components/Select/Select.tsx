import React, {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './Select.module.scss';
import { ComponentProps } from 'react';

export interface SelectProps extends ComponentProps<'select'> {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({
  label,
  value = '',
  onChange,
  ...props
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const isValue = (value ?? '' !== '') || open ? styles.isValue : '';
  const containerRef = useRef<HTMLDivElement>(null);

  const options = Children.toArray(props.children).filter(
    isValidElement,
  ) as React.ReactElement<{
    value: string;
    children: React.ReactNode;
  }>[];

  const selectedOption = options.find((opt) => opt.props.value === value);

  const handleSelect = (val: string) => {
    if (onChange) {
      const selectEvent = {
        target: {
          value: val,
          name: props.name,
        },
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange(selectEvent);
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className={`${styles.selectWrap} ${isValue}`} ref={containerRef}>
      <input type="hidden" name={props.name} value={value}></input>
      <div
        className={`${styles.selectInput} ${isValue}`}
        onClick={() => !props.disabled && setOpen((openState) => !openState)}
        tabIndex={0}
      >
        {selectedOption?.props.children ?? ''}
        <span className={styles.arrow}>{open ? '▲' : '▼'}</span>
      </div>
      <label className={styles.selectLabel}>{label}</label>

      {open && (
        <div className={styles.selectDropdown}>
          {options.map((opt) => (
            <div
              key={opt.props.value}
              className={`${styles.option} ${value === opt.props.value ? styles.selected : ''}`}
              data-value={opt.props.value}
              onClick={() => handleSelect(opt.props.value)}
            >
              {opt.props.children}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
