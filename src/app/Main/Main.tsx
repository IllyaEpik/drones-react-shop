import React from "react";
// import { Link, Outlet } from 'react-router-dom'
import styles from "./Main.module.css";
// import Basket from '../../assets/basket.svg'
// import Human from '../../assets/human.svg'
import type{ IProbs } from "./maInTypes";

export function Main(probs: IProbs) {
	const children = probs.children;
	// const headerType = probs.header;
	return (
		<main>
			{/* {
                headerType === 1 && 
                <div className={`${styles.oval} ${styles.topOval}`}/>

            
            } */}

			<div className={styles.main}>{children}</div>
			
		</main>
	);
}
