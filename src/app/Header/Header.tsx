import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Basket from '../../assets/basket.svg'
import Human from '../../assets/human.svg'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Каталог</li>

          <li className={styles.menuItem}>
            <Link to="/about" className={styles.link}>
              Про нас
            </Link>
          </li>

          <li className={styles.menuItem}>Контакти</li>
        </ul>

        <div className={styles.actions}>
          <img src={Basket} alt="" className={styles.Icons} />
          <img src={Human} alt="" className={styles.Icons} />
        </div>
      </div>
    </header>
  )
}

export default Header
