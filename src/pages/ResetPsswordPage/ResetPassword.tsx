import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Home } from "../HomePage";
import styles from "./ResetPssword.module.css";
import { Button } from "../../shared";
import { useChangePassword } from "../../hooks/useChangePassword";
import type{ IReset } from "./ResetPasswordTypes";
import { useForm } from "react-hook-form";

export function ResetPassword() {
	const navigate = useNavigate();
	const {handleSubmit, register, formState: {errors}} = useForm<IReset>()
	const [data,loading,error,onSubmit] = useChangePassword()
	return (
		<>
			<Home/>
			<div className={styles.wrapper}>
				<form className={styles.card}  onSubmit={handleSubmit((data) => onSubmit(data.email))}>
					<div className={styles.header}>
					<h3>Відновлення пароля</h3>
					<button onClick={() => navigate("/")} type="button">✕</button>
					</div>

					<Input label="Email" placeholder="Введіть email" {...register("email")} />

					<div className={styles.actions}>
					<Button to="/" black={false} img={false} className={styles.cancel}>Скасувати</Button>

					<button className={`${styles.submit} ${loading && styles.loading}`} type="submit">
						Надіслати лист
					</button>
					</div>
				</form>
			</div>
		</>
  );
}
