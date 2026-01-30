import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// import Basket from '../../assets/basket.svg'
import { useMediaQuery } from "react-responsive";
// import Human from '../../assets/human.svg'

import type{ IProbs } from "./headerTypes";
import { SVG } from "../../shared/images";
export function Header(probs: IProbs) {
	const typeOfHeader = probs.typeOfHeader;
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
	return (
		<div
			className={`${styles.headerContainer} ${typeOfHeader !== 1 && styles.whiteHeaderContainer}`}
		>
			<header className={styles.header}>
				<div className={styles.container}>
					{!isTabletOrMobile && (
						<nav className={styles.menu}>
							<span className={styles.menuItem}>КАТАЛОГ</span>

							<span className={styles.menuItem}>
								<Link to="/about" className={styles.link}>
									ПРО НАС
								</Link>
							</span>
							<span className={styles.menuItem}>КОНТАКТИ</span>
						</nav>
					)}
					<div className={styles.logoDiv}>
						<SVG.HeaderDrones className={styles.dronesLogo} />
					</div>
					<div className={styles.actions}>
						<SVG.Basket className={styles.Icons} />
						<SVG.Human className={styles.Icons} />
						{isTabletOrMobile && <SVG.Burger className={styles.Icons} />}
					</div>
				</div>
			</header>
			{
				typeOfHeader===1 && <div className={styles.curveContainer}>
					<h1 className={`${styles.title} ${isTabletOrMobile && styles.phoneTitle}`}>
						<span>ТЕХНОЛОГІЇ</span>
						<span>ЯКІ ЗМІНЮЮТЬ РЕАЛЬНІСТЬ</span>  
					</h1>
					<div className={`${styles.curve} ${isTabletOrMobile && styles.phoneCurve}`}></div>

				</div>
			}
			
		</div>
	);
}
