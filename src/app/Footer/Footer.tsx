import { Link } from "react-router-dom";
import { SVG } from "../../shared/images";
import styles from "./Footer.module.css";

export function Footer() {
	return (
		<footer className={styles.footer}>

			<div className={styles.oval}>
				<div className={styles.stats}>
					<div className={styles.stat}>
						<strong>1K+</strong>
						<span>Успішних проєктів</span>
					</div>
					<div className={styles.stat}>
						<strong>1.5K+</strong>
						<span>Задоволених клієнтів</span>
					</div>
					<div className={styles.stat}>
						<strong>24/7</strong>
						<span>Підтримка</span>
					</div>
				</div>
			</div>
			
			<SVG.FooterDrones />
			<ul className={styles.menu}>
				<li>Каталог</li>
				<li className={styles.link}>
					<Link to="/about" className={styles.link}>
						Про нас
					</Link>
				</li>
				<li>Контакти</li>
				<li>Кошик</li>
				<li>Кабінет</li>
			</ul>

			<div className={styles.copy}>© 2025 Drones Всі права захищені.</div>
		</footer>
	);
}
