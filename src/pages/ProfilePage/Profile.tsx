import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context";
import { type AuthCredentials, Button, ContactCredentials, SVG } from "../../shared";
import styles from "./Profile.module.css";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { useState } from "react";

export function Profile() {
	const {logout,user,update} = useUserContext()
	const {handleSubmit, register, formState: {errors}} = useForm<ContactCredentials>()
	const navigate = useNavigate()
	
	if (!user && !localStorage.getItem("token")){

		navigate("/auth")
	}
	// const [formUser, setFormUser] = useState<ContactCredentials>({
	// 	lastName: user?.lastName ?? "",
	// 	email: user?.email ?? "",
	// 	name: user?.name ?? "",
	// 	fatherName: user?.fatherName ?? "",
	// 	phone: user?.phoneNumber ?? "",
	// 	// lastName: user?.lastName ?? ""
	// })
	function onSubmit(data:ContactCredentials) {
		update(data)
		// setFormUser(data)
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.sideInfo}>
                <span className={styles.title}>Особистий Кабінет</span>
                <span className={`${styles.menuItem} ${styles.selected}`}>Контактні дані</span>
                <span className={styles.menuItem}>Мої замовлення</span>
				<span className={styles.menuItem}>Адреса доставки</span>
				<div className={styles.line}></div>
				<span className={styles.menuItem} onClick={logout}>Вийти</span>
            </div>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h2>Контактні дані</h2>
				<Input label="Прізвище" placeholder="Ваше Прізвище" {...register("lastName")} value={user?.lastName || undefined}></Input>
				<Input label="Ім’я" placeholder="Ваше Ім’я" {...register("name")} value={user?.name || undefined}></Input>
				<Input label="По батькові" placeholder="По батькові" {...register("fatherName")} value={user?.fatherName || undefined}></Input>
				{/* <Input label="По батькові" placeholder="DD / MM / YYYY" {...register("year")}></Input> */}
				<Input label="Телефон" placeholder="+ 38 0" {...register("phoneNumber")} value={user?.phoneNumber || undefined}></Input>
				<Input label="E-mail" placeholder="Ваш E-mail" {...register("email")} value={user?.email || undefined}></Input>
				<button type="submit" className={styles.submitButton}>Зберегти зміни</button>
			</form>

		</div>
	);
}
