import { Check } from 'phosphor-react'

import styles from './styles.module.css';

interface CheckboxProps {
  isChecked: boolean;
  onCheck: () => void;
}

export function Checkbox({ isChecked, onCheck }: CheckboxProps) {
  return (
    <button
      title='Marcar/desmarcar como feito'
      onClick={onCheck}
      className={styles.checkbox}
    >
      <div className={isChecked ? styles.checked : styles.unchecked}>
        {isChecked ? <Check size={12} /> : <div></div>}
      </div>
    </button>
  )
}