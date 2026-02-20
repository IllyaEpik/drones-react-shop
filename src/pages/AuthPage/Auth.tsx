import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Home } from "../HomePage";
import styles from "./Auth.module.css";
import {useUserContext } from "../../context/useUserContext";
import type{ AuthCredentials,RegisterCredentials } from "../../shared";
import { AuthToggle } from "../../components/AuthToggle/AuthToggle";
import { ConfirmModal } from "../../components/ConfirmModal";
// import { AuthCredentials } from "../../shared/types/dbTypes";

export function Auth() {
  	const [mode, setMode] = useState<"login" | "register">("register");
	const navigate = useNavigate()
	const {handleSubmit, register, formState: {errors}} = useForm<AuthCredentials>()
    const {registration,login,user} = useUserContext()
	const [confirm, setConfirm] = useState<boolean>(false)

	useEffect(() => {
		if (!user) return
		if (mode==="register"){
			setConfirm(true)
			return
		}
		navigate("/")
	},[user])

	const emailError = errors.email?.message
	const passwordError = errors.password?.message
	const rootError = errors.root?.message
	const usernameError = errors.username?.message
	const confirmPasswordError = errors.confirmPassword?.message
	
	function isRegisterData(data: AuthCredentials): data is RegisterCredentials {
		return Boolean(data.username && data.confirmPassword);
	}
    function onSubmit(data:AuthCredentials){
        if (mode === "register") {
			if (!isRegisterData(data)) return
            registration(data);
        } else {
            if (!login(data)) return
        }
    }
	function change() {
		if (mode==="register"){
			setMode("login")
			return null
		}

		navigate("/reset-password")
	}
	return (
		<>
			<Home></Home>
			<div className={styles.background}></div>
			{
				confirm ? <ConfirmModal to="/" buttonText="Перейти на сайт" text="Акаунт успішно створено!" title="Реестрація"></ConfirmModal>
				:
				<form noValidate className={styles.wrapper} method="GET"  onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.card}>
						<AuthToggle mode={mode} setMode={setMode}/>
						<p>{rootError}</p>
						<div className={styles.inputs}>
							{mode === "register" && (
								<>
								<Input 
									label="Імʼя" 
									placeholder="Введіть імʼя"
									{...register("username", { required: "Обов'язкове поле" })}
								/>
								{usernameError && <p className={styles.fieldError}>{usernameError}</p>}
								</>
							)}

							<Input 
								label="Email" 
								placeholder="Введіть email" 
								type="email"
								{...register("email", { 
									required: "Обов'язкове поле" ,
									validate: (value) => {
										if (value.startsWith('@') || value.endsWith("@") || !value.includes("@")){
											return "invalid email"
										} else if (typeof value !== 'string') {
											return "Email must contain only letters or numbers"
										}
									}
								})}
								
							/>
							{emailError && <p className={styles.fieldError}>{emailError}</p>}

							<Input 
								label="Пароль" 
								type="password" 
								placeholder="Введіть пароль"
								{...register("password", { required: "Обов'язкове поле" })}
							/>

							{passwordError && <p className={styles.fieldError}>{passwordError}</p>}

							{mode === "register" && (
								<>
									<Input
										label="Підтвердження пароля"
										type="password"
										placeholder="Повторіть пароль"
										{...register("confirmPassword", { required: "Обов'язкове поле" })}
									/>
								
									{confirmPasswordError && <p className={styles.fieldError}>{confirmPasswordError}</p>}
								</>
							)}

							<span onClick={change} className={styles.smallText}>{
								mode === "register" ? "Вже є акаунт? Увійти" : "Забули пароль?"
							}</span>
						</div>

						<div className={styles.actions}>
							<button 
								className={styles.cancel} 
								type="button"
								onClick={() => navigate("/")}
							>Скасувати</button>
							<button 
								className={styles.submit} 
								type="submit"
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
			}
			
		</>
	);
}
