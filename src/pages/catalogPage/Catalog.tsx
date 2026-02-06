import { useEffect, useRef } from "react";
import { ViewProducts } from "../../components/viewProducts";
import styles from "./Catalog.module.css";

export function Catalog() {
	let offsetWidth = document.body.clientWidth-49
	console.log(offsetWidth)
	const drone = 322
	const space = 16
	
	let drones = Number.parseInt(String(offsetWidth / (drone+space)))
	
	drones *= 4
	return (<div>

				<ViewProducts count={drones} pages={true} />
			</div>
            )
}
