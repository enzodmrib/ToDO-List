import { HTMLProps } from "react";

import styles from './styles.module.css'

export function Input({ ...props }: HTMLProps<HTMLInputElement>) {
  return (
    <input
      className={styles.input}
      {...props}
    />
  )
}