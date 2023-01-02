import logo from '../../assets/todo-logo.svg'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo}/>
    </header>
  )
}