
// import { useProduct } from '../../hooks/useProduct';
// import { useState } from 'react';
// import { ViewProducts } from '../../components/viewProducts';
import { ViewProducts } from "../../components/viewProducts";
import { Card } from "../../components/card";
import { SVG } from "../../shared/images";
import { Blocks } from "../../shared/images/SVG";
import styles from "./Home.module.css";
export function Home() {
	return (
		<>
			<div>
				<section className={styles.hero}>
				

				
				<SVG.Drone className={styles.drone}/>
				{/* <img src={PNG.drone} alt="Drone" className={styles.drone} /> */}

				<div className={styles.sideInfo}>
					<p>
						Передові технології нового покоління. <br />
						Обирай найкраще для себе.
					</p>
					<button type="submit">ДО КАТАЛОГУ</button>
				</div>
			</section>

			<div className={styles.aboutUs}>
				<h2 className={styles.sectionTitle}>Про нас</h2>
				<span>
					Ми — команда, що об'єднує технології та надійність. Пропонуємо дрони й
					тепловізори, перевірені у найскладніших умовах. Обираємо тільки те,
					чому довіряємо самі.
				</span>
				<button
					className={styles.button}
					type="submit"
				>
				<span>Дивитись всі</span> <SVG.RightArrow className={styles.rightArrow}/>
			</button>
			</div>
			</div>
			<h2 className={styles.sectionTitle}>НОВЕ НА САЙТІ</h2>
			<section className={styles.newSection}>

				<div className={styles.cards}>
					<Card ImageBlock={Blocks.leftBlock} />
					<Card ImageBlock={Blocks.centerBlock} />
					<Card ImageBlock={Blocks.rightBlock} />
				</div>
			</section>

			<section className={styles.catalog}>
				<h2 className={styles.sectionTitle}>КАТАЛОГ</h2>

				
					<ViewProducts/>
			</section>
		</>
	);
}

export default Home;
