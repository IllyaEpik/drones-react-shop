
import { Order } from "../../components/Order";
import { ProfileSideInfo } from "../../components/ProfileSideInfo";
import { SVG } from "../../shared";
import styles from "./MyOrders.module.css";

export function MyOrders() {
	return (
		<div className={styles.wrapper}>
			<ProfileSideInfo selected="MyOrders" />
			<Order/>
		</div>
	);
}
