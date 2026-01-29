import type{ IProbs } from "./cardTypes";
import {SVG } from "../../shared/images";
import React from "react";
import styles from "./card.module.css";

export function Card(probs: IProbs) {
	const { ImageBlock } = probs;
	return (
		<div className={styles.card}>
			<ImageBlock className={styles["backgound-image"]} />
			{/* <img src={PNG.drone} alt="Drone" className={styles.drone} /> */}
			<SVG.Drone className={styles.drone}/>
			<div className={styles["card-content"]}>
				<div className={styles.dataBlock}>
					<span className={styles.title}>DJI Mini 4K</span>
					<span>Easy-To-Use Mini Camera Drone</span>
				</div>
				<div className={styles.priceAndBuy}>
					<span className={styles.price}>from to $299</span>
					<button type="submit" className={styles.buyButton}>
						КУПИТИ <SVG.RightArrow className={styles.rightArrow} />
					</button>
				</div>
			</div>
		</div>
	);
}
