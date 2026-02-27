import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../components/Input";
import { Home } from "../HomePage";
import styles from "./ConfirmResetPssword.module.css";
import { Button } from "../../shared";
import type{ IReset } from "./ConfirmResetPasswordTypes";
import { useForm } from "react-hook-form";
import { useConfirmChangePassword } from "../../hooks/useConfirmChangePassword";
import { useEffect, useState } from "react";
import { ConfirmModal } from "../../components/ConfirmModal";

export function ConfrimResetPassword() {
	const [mode, setMode] = useState<"confirmed" | "changing">("changing");
	
	const navigate = useNavigate();
	const {token} = useParams<{token:string}>()
	const {handleSubmit, register, formState: {errors}} = useForm<IReset>()
	const [data,loading,error,confirmChanges] = useConfirmChangePassword()
	// useEffect(() => {
    //     if (data) {
    //         navigate("/auth"); 
    //     }
    // }, [data, navigate]);
	// if (!token) return null 
	async function onSubmit(data:IReset) {
		if (!token) return 
		if (data.confrimPassword !== data.password) return
		setMode("confirmed")
		await confirmChanges(token,data.password)
	}
	return (
		<>
					<Home/>
					<div className={styles.wrapper}>
						{mode === "changing" ?
					
						<form className={styles.card}  onSubmit={handleSubmit(onSubmit)}>
							<div className={styles.header}>
							<h3>Відновлення пароля</h3>
							<button onClick={() => navigate("/")} type="button">✕</button>
							</div>

							<Input label="Пароль" placeholder="•••••••" {...register("password")} />
							<Input label="Підтвердження пароля" placeholder="•••••••" {...register("confrimPassword")} />

							<div className={styles.actions}>
							<Button to="/" black={false} img={false} className={styles.cancel}>Скасувати</Button>

							<button className={`${styles.submit} ${loading && styles.loading}`} type="submit">
								Зберегти новий пароль
							</button>
							</div>
						</form>
						: 
							<ConfirmModal buttonText="Увійти" to="/auth" text="Пароль успішно змінено! 
			Тепер ви можете увійти з новим паролем." title="Новий пароль"/>
				
				
						}
						
					</div>
		</>
  );
}
