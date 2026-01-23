import { Link } from 'react-router-dom'
import { SVG } from '../../shared/SVG'
import styles from './Footer.module.css'


export function Footer(){
  return (
    <footer className={styles.footer}>
      
		
	<SVG.FooterDrones/>
	<ul className={styles.menu}>
		<li>Каталог</li>
		<li className={styles.link}><Link to="/about" className={styles.link}>
			Про нас
			</Link></li>
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