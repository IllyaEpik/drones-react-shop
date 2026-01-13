import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Basket from '../../assets/basket.svg'
import Human from '../../assets/human.svg'
import { IProbs } from './headerTypes'
import { SVG } from "../../shared/SVG";
export function Header(probs:IProbs){
	const typeOfHeader = probs.typeOfHeader
  	return (
		<div className={`${styles.headerContainer} ${(typeOfHeader != 1 && styles.whiteHeaderContainer)}`}>
			<header 
	
			className={styles.header}
			>
				<div className={styles.container}>
					<nav className={styles.menu}>
						<span className={styles.menuItem}>КАТАЛОГ</span>

						<span className={styles.menuItem}>
							<Link to="/about" className={styles.link}>
							ПРО НАС
							</Link>
						</span>

						<span className={styles.menuItem}>КОНТАКТИ</span>
					</nav>
					<div className={styles.logoDiv}>
						<SVG.headerDrones className={styles.dronesLogo}/>
					</div>
					
					<div className={styles.actions}>
						<img src={Basket} alt="" className={styles.Icons} />
						<img src={Human} alt="" className={styles.Icons} />
					</div>
				</div>
    		</header>
		</div>
    
  )
}