import React from 'react';
import styles from './Input.module.css';

export interface InputProps {
  type?: 'text' | 'password';
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export default function Input(props: InputProps): JSX.Element {
  return (
    <input
      className={styles.Input}
      type={props.type ?? 'text'}
      placeholder={props.placeholder ?? ''}
      disabled={props.disabled}
      value={props.value}
      onChange={e => props.onChange?.(e.target.value)}
    />
  );
}
