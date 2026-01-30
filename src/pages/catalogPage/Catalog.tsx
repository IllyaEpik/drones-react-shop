import { ViewProducts } from "../../components/viewProducts";
import styles from "./Catalog.module.css";

export function Catalog() {
	return (<div>
				<ViewProducts count={4*4} />
			</div>
            )
}
