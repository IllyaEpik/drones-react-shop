import type{ IProbs } from "./MainTypes";
import styles from "./Main.module.css";

export function Main(probs: IProbs) {
	const children = probs.children;
	return (
		<main>

			<div className={styles.main}>{children}</div>
			
		</main>
	);
}
