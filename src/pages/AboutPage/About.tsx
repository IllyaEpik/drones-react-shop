import { PNG } from "../../shared/images";
import styles from "./About.module.css";
export function About() {
	return (<div>
				<section className={styles.section}>
					<div className={styles.container}>
						<h2 className={styles.title}>ПРО НАС</h2>

						<p className={styles.description}>
							Ми — команда, яка об'єднана спільною метою: зробити передові технології доступними для кожного, хто потребує точності, безпеки та інновацій. З 2022 року ми спеціалізуємось на постачанні дронів і тепловізорів для професійного, цивільного та волонтерського використання.
						</p>

						<img src={PNG.tower} alt="" className={styles.mainImage} />

						<div className={styles.block}>
							<div className={styles.textBlock}>
								<h2 className={styles.titleOfBlock}>НАША МІСІЯ</h2>
								<p className={styles.descriptionOfBlock}>Допомагати тим, хто стоїть на передовій — у прямому й переносному сенсі. Ми обираємо тільки надійну техніку, яку перевіряємо самі. Наша мета — якість, простота, і підтримка на кожному етапі: від покупки до використання.</p>
							</div>
							<img src={PNG.room} alt="" />
						</div>

						<div className={styles.block}>
							<img src={PNG.people} alt="" />
							<div className={styles.textBlock}>
								<h2 className={styles.titleOfBlock}>Команда, якій можна довіряти</h2>
								<p className={styles.descriptionOfBlock}>Ми — не просто магазин. Ми — фахівці, які самі працюють із цією технікою й консультують з досвіду. Засновники проєкту — волонтери, військові та IT-спеціалісти, які об'єднали зусилля задля важливої справи.</p>
							</div>
						</div>
					</div>
				</section>
			</div>)
}
