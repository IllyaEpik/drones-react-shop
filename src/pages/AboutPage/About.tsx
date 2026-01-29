import { PNG } from "../../shared/images";
import styles from "./About.module.css";
export function About() {
	return (<div>
				<section className={styles.section}>
					<div className={styles.container}>
						<h1 className={styles.title}>ПРО НАС</h1>

						<p className={styles.description}>
							Ми — команда, яка спеціалізується на розробці та продажі сучасних
							дронів.
						</p>

						<img src={PNG.tower} alt="" className={styles.mainImage} />

						<div className={styles.block}>
							<div>
								<h2>НАША МІСІЯ</h2>
								<p>Ми прагнемо впроваджувати інноваційні технології.</p>
							</div>
							<img src={PNG.room} alt="" />
						</div>

						<div className={`${styles.block} ${styles.reverse}`}>
							<img src={PNG.people} alt="" />
							<div>
								<h2>НАША КОМАНДА</h2>
								<p>Команда професіоналів з великим досвідом.</p>
							</div>
						</div>
					</div>
				</section>
			</div>)
}
