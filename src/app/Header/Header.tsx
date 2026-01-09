import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Basket from '../../assets/basket.svg'
import Human from '../../assets/human.svg'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <span className={styles.menuItem}>КАТАЛОГ</span>

          <span className={styles.menuItem}>
            <Link to="/about" className={styles.link}>
              ПРО НАС
            </Link>
          </span>

          <span className={styles.menuItem}>КОНТАКТИ</span>
        </nav>

        <div className={styles.actions}>
          <img src={Basket} alt="" className={styles.Icons} />
          <img src={Human} alt="" className={styles.Icons} />
        </div>
      </div>
    </header>
  )
}

export default Header
