import { useEffect, useRef } from "react";
import { ViewProducts } from "../../components/viewProducts";
import styles from "./Catalog.module.css";
import { BETA, PNG } from "../../shared/images";

export function Catalog() {
	const categories = [
		{
			img:BETA.drone,
			id:1,
			name:"drone"
		},
		{
			img:BETA.catalog,
			id:2,
			name:"thermal imager"
		}
	]
	const offsetWidth = document.body.clientWidth-49
	console.log(offsetWidth)
	const drone = 322
	const space = 16
	
	let drones = Number.parseInt(String(offsetWidth / (drone+space)))
	drones *= 4
	return (<div>
				<div className={styles.categories}>
					<div className={`${styles.iconDiv} ${styles.all}`}>Всі</div>
					{categories.map((category)=>{
						return <div key={category.id} className={styles.iconDiv}>
							<img src={category.img} alt="" className={styles.icon}/>
						</div>
					})}
				</div>
				<ViewProducts count={drones} pages={true} />
			</div>
            )
}

