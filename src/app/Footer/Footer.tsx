import { Link } from "react-router-dom";
import { SVG } from "../../shared/images";
import styles from "./Footer.module.css";
import { useMediaQuery } from "react-responsive";

export function Footer() {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
	return (
		<footer className={styles.footer}>

			<div className={`${styles.oval} ${isTabletOrMobile && styles.phoneOval}`}>
				<div className={`${styles.stats} ${isTabletOrMobile && styles.phoneStats}`}>
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
			
			<SVG.FooterDrones className={`${styles.drones} ${isTabletOrMobile && styles.phoneDrones}`}/>
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
	);}
// export function Footer(){
//   return (
//     <footer className={styles.footer}>
      
     
//       <div className={styles.bgLogo}>
//         <SVG.FooterDrones/>
//       </div>

//       <ul className={styles.menu}>
//         <li>Каталог</li>
//         <li><Link to="/about" className={styles.link}>Про нас</Link></li>
//         <li>Контакти</li>
//         <li>Кошик</li>
//         <li>Кабінет</li>
//       </ul>

//       <div className={styles.copy}>
//         © 2025 Drones Всі права захищені.
//       </div>

//     </footer>
//   )
// }
