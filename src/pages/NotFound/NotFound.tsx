import styles from "./NotFound.module.css";
import { SVG } from "../../shared/images";
import React from "react";

export function NotFound() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Ви перейшли не на ту сторінку </h1>
			<h2 className={styles.subtitle}>Немає такої сторінки</h2>

			{/* <img src={} alt="drone" className={styles.drone} /> */}
			<SVG.Drone className={styles.drone}/>
			{/* <div className={styles.circle}></div> */}
		</div>
	);
}
