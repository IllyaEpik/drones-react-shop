import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Home } from "../HomePage";
import styles from "./Auth.module.css";
import { UserContext } from "../../context/userContext";

export function Auth() {
  	const [mode, setMode] = useState<"login" | "register">("register");
	const navigate = useNavigate()
	// const userContext = useContext(UserContext)
	// if (!userContext) return
	// function reg() {
	// 	if (!userContext) return
		// userContext.register({
			
		// })
		
	// }
	function change() {
		if (mode==="register"){
			setMode("login")
			return
		}
		// navigate(to="/forgotPassword")
	}
	return (
		<>
			<Home></Home>
			<div className={styles.background}></div>
			<form className={styles.wrapper} method="GET">
				<div className={styles.card}>
					<div className={styles.top}>
						<button
							className={`${mode === "login" && styles.active} ${styles.button}`}
							onClick={() => setMode("login")}
							type="button"
						>
							Авторизація
						</button>
						/
						<button
							className={`${mode === "register" && styles.active} ${styles.button}`}
							onClick={() => setMode("register")}
							type="button"
						>
							Реєстрація
						</button>
					</div>

					{mode === "register" && (
					<Input label="Імʼя" placeholder="Введіть імʼя" />
					)}

					<Input label="Email" placeholder="Введіть email" />

					<Input label="Пароль" type="password" placeholder="Введіть пароль" />

					{mode === "register" && (
					<Input
						label="Підтвердження пароля"
						type="password"
						placeholder="Повторіть пароль"
					/>
					)}
					<span onClick={change} className={styles.smallText}>{
						mode === "register" ? "Вже є акаунт? Увійти" : "Забули пароль?"
					}</span>
					<div className={styles.actions}>
						<button 
							className={styles.cancel} 
							type="button"
							onClick={() => navigate("/")}
						>Скасувати</button>
						<button 
							className={styles.submit} 
							type="button"
							// onClick={() => navigate("/")}
							>
							{mode === "login" ? "Увійти" : "Зареєструватися"}
						</button>
					</div>

					<p className={styles.footer}>
						При вході або реєстрації, я підтверджую згоду з умовами{" "}
						<span>публічного договору</span>
					</p>
				</div>
			</form>
		</>
	);
}
