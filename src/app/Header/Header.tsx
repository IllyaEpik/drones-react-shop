import React from 'react'
import styles from './Header.module.css'
import Drones from '../../assets/drone.png'
import Basket from '../../assets/basket.svg'
import Human from '../../assets/human.svg'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <h3 className={styles.menuItem}>Каталог</h3>
          <h3 className={styles.menuItem}>Про нас</h3>
          <h3 className={styles.menuItem}>Контакти</h3>
        </ul>

       {/* <img src={Drones} alt="" className={styles.logo}/> */}

        <div className={styles.actions}>
          <img src={Basket} alt="" className={styles.Icons} />
          <img src={Human} alt="" className={styles.Icons} />
        </div>
      </div>
    </header>
  )
}

export default Header
