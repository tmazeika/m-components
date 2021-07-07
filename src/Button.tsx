import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(styles.Button, {
        [styles.Secondary]: props.variant === 'secondary',
      })}
      disabled={props.disabled}
      onClick={() => props.onClick?.()}
    >
      {props.children}
    </button>
  );
}
