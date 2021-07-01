import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(styles.Button, {
        [styles.Secondary]: props.variant === 'secondary',
      })}
    >
      {props.label}
    </button>
  );
}
