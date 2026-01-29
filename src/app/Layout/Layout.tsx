import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import styles from "./layout.module.css";
import type{ IProbs } from "./layoutTypes";
export function Layout(probs: IProbs) {
	const { typeOfHeader, typeOfFooter } = probs;
	return (
		<div className={styles.page}>
			<Header typeOfHeader={typeOfHeader} />
			<Main header={typeOfHeader} footer={typeOfFooter}>
				<Outlet />
			</Main>
			<Footer />
		</div>
	);
}
