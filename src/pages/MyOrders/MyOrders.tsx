
import { ProfileSideInfo } from "../../components/ProfileSideInfo";
import styles from "./MyOrders.module.css";

export function MyOrders() {
	return (
		<div className={styles.wrapper}>
			<ProfileSideInfo selected="MyOrders" />
			<div>

			</div>
		</div>
	);
}
