import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import styles from "./ResetPssword.module.css";
import { Home } from "../HomePage";

export function ResetPassword() {
  const navigate = useNavigate();

  return (
	<>
		<Home/>
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.header}>
				<h3>Відновлення пароля</h3>
				<button onClick={() => navigate("/")} type="button">✕</button>
				</div>

				<Input label="Email" placeholder="Введіть email" />

				<div className={styles.actions}>
				<button
					className={styles.cancel}
					onClick={() => navigate("/")}
					type="button"
				>
					Скасувати
				</button>

				<button className={styles.submit} type="submit">
					Надіслати лист
				</button>
				</div>
			</div>
		</div>
	</>
  );
}
