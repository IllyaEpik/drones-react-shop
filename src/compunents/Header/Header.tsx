import React from 'react'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li>Каталог</li>
          <li>Про нас</li>
          <li>Контакти</li>
        </ul>

        <div className={styles.logo}>DRONES</div>

        <div className={styles.actions}>
          <span>🛒</span>
          <span>👤</span>
        </div>
      </div>
    </header>
  )
}

export default Header
