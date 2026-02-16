
import { ViewProducts } from "../../components/ViewProducts";
import { Card } from "../../components/Card";
import { SVG,Blocks } from "../../shared";
import styles from "./Home.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../../context";
export function Home() {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
	const headerContext = useContext(HeaderContext)
	
	useEffect(() => {
		if (!headerContext) return
		headerContext.setHeaderText((
			<>
				<span>ТЕХНОЛОГІЇ</span>
				<span>ЯКІ ЗМІНЮЮТЬ РЕАЛЬНІСТЬ</span>
			</>
		))
	},[])
					
	return (
		<>
			<div>
				<section className={styles.hero}>
					<SVG.Drone className={`${styles.drone} ${isTabletOrMobile && styles.phoneDrone}`}/>

					<div className={`${styles.sideInfo} ${isTabletOrMobile && styles.phoneSideInfo}`}>
						<p>
							Передові технології нового покоління. <br />
							Обирай найкраще для себе.
						</p>
						<Link to="/catalog"><button type="button"><span>ДО КАТАЛОГУ</span>  <SVG.RightArrow/></button></Link>
					</div>
				</section>
				
				<div className={styles.aboutUs}>
					<h2 className={`${styles.sectionTitle} ${isTabletOrMobile && styles.phoneSectionTitle}`}>Про нас</h2>
					<span className={styles.aboutUsDescription}>
						Ми — команда, що об'єднує технології та надійність. 
						Пропонуємо дрони й тепловізори, перевірені у найскладніших умовах. 
						Обираємо тільки те, чому довіряємо самі.
					</span>
					<button
						className={styles.button}
						type="button"
					>
						<span>Читати більше</span> <SVG.RightArrow className={styles.rightArrow}/>
					</button>
				</div>
			</div>
			<h2 className={`${styles.sectionTitle} ${isTabletOrMobile && styles.phoneSectionTitle}`}>НОВЕ НА САЙТІ</h2>
			<section className={styles.newSection}>

				<div className={`${styles.cards} ${isTabletOrMobile	 && styles.phoneCards}`}>
					<Card ImageBlock={Blocks.leftBlock} />
					<Card ImageBlock={Blocks.centerBlock} />
					<Card ImageBlock={Blocks.rightBlock} />
				</div>
			</section>

			<section className={styles.catalog}>
				<h2 className={`${styles.sectionTitle} ${isTabletOrMobile && styles.phoneSectionTitle}`}>КАТАЛОГ</h2>
				<ViewProducts count={isTabletOrMobile ? 3 : 4} pages={false}/>
			</section>
			<div className={`${isTabletOrMobile && styles.phoneEmpty} ${styles.empty}`}/>
		</>
	);
}