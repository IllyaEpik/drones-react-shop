import { SVG } from '../../shared/SVG'
import styles from './Footer.module.css'


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      
		
      {/* <div className={styles.bgText}>DRONES</div> */}
	  <SVG.footerDrones/>
      <ul className={styles.menu}>
        <li>Каталог</li>
        <li>Про нас</li>
        <li>Контакти</li>
        <li>Кошик</li>
        <li>Кабінет</li>
      </ul>

      {/* <div></div> */}
      <div className={styles.copy}>
		
        © 2025 Drones Всі права захищені.
      </div>
    </footer>
  )
}

export default Footer
