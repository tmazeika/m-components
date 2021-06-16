import styles from './Button.module.css';

export interface ButtonProps {
  label: string
}

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button className={styles.Button}>
      {props.label}
    </button>
  )
}
