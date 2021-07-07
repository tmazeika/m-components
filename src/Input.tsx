import React from 'react';
import useId from './hooks/useId';
import styles from './Input.module.css';

export interface InputProps {
  type?: 'text' | 'password';
  label?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export default function Input(props: InputProps): JSX.Element {
  const id = useId();
  return (
    <div className={styles.Container}>
      {props.label && (
        <label className={styles.Label} htmlFor={id}>
          {props.label}
        </label>
      )}
      <input
        id={props.label ? id : undefined}
        className={styles.Input}
        type={props.type ?? 'text'}
        placeholder={props.placeholder ?? undefined}
        disabled={props.disabled}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </div>
  );
}
