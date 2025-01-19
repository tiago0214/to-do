import styles from './Header.module.css'
import logoRocket from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logoRocket} alt="" />

        <div className={styles.textContainer}>
          <span>to</span>
          <span>do</span>
        </div>
      </div>
    </header>
  )
}
