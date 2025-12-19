import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.stats}>
        <div>
          <h3>1K+</h3>
          <p>Успішних відправок</p>
        </div>
        <div>
          <h3>1.5K+</h3>
          <p>Задоволених клієнтів</p>
        </div>
        <div>
          <h3>24/7</h3>
          <p>Підтримка клієнтів</p>
        </div>
      </div>

      <div className={styles.bgText}>DRONES</div>

      <ul className={styles.menu}>
        <li>Каталог</li>
        <li>Про нас</li>
        <li>Контакти</li>
        <li>Кошик</li>
        <li>Кабінет</li>
      </ul>

      <div className={styles.copy}>
        © 2025 Drones Всі права захищені.
      </div>
    </footer>
  )
}

export default Footer
