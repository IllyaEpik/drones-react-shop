import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
// import Basket from '../../assets/basket.svg'
import { useMediaQuery } from "react-responsive";
// import Human from '../../assets/human.svg'

import type{ IProbs } from "./HeaderTypes";
import { SVG } from "../../shared";
import { HeaderContext } from "../../context";
import { useUserContext } from "../../context/useUserContext";
export function Header(probs: IProbs) {
	const typeOfHeader = probs.typeOfHeader;
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
	const headerContext = useContext(HeaderContext)
	const navigate = useNavigate()
	const userContext = useUserContext()

	function profile() {
		if (!userContext.user){
			navigate("/auth")
		}
		navigate("/profile")
	}
	return (
		<div
			className={`${styles.headerContainer} ${typeOfHeader !== 1 && styles.whiteHeaderContainer}`}
		>
			<header className={styles.header}>
				<div className={styles.container}>
					{!isTabletOrMobile && (
						<nav className={styles.menu}>
							<span className={styles.menuItem}>
								<Link to="/catalog" className={styles.link}>
									КАТАЛОГ
								</Link>
								</span>

							<span className={styles.menuItem}>
								<Link to="/about" className={styles.link}>
									ПРО НАС
								</Link>
							</span>
							<span className={styles.menuItem}>
								<Link to="/contacts" className={styles.link}>
									КОНТАКТИ
								</Link>
							</span>
						</nav>
					)}
						<Link className={styles.logoDiv} to="/">
							<SVG.HeaderDrones className={styles.dronesLogo} />
						</Link>
					<div className={styles.actions}>
						<SVG.Basket className={styles.Icons} />
						<SVG.Human className={styles.Icons} onClick={profile}/>
						{isTabletOrMobile && <SVG.Burger className={styles.Icons} />}
					</div>
				</div>
			</header>
			{
				typeOfHeader===1 && <div className={styles.curveContainer}>
					<h1 className={`${styles.title} ${isTabletOrMobile && styles.phoneTitle}`}>
						{headerContext?.headerText}
					</h1>
					<div className={`${styles.curve} ${isTabletOrMobile && styles.phoneCurve}`}></div>

				</div>
			}
			
		</div>
	);
}
