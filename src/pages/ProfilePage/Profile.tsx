import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context";
import { type AuthCredentials, Button, ContactCredentials, SVG } from "../../shared";
import styles from "./Profile.module.css";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";

export function Profile() {
	const {logout,user} = useUserContext()
	const {handleSubmit, register, formState: {errors}} = useForm<ContactCredentials>()
	const navigate = useNavigate()
	
	if (!user && !localStorage.getItem("token")){

		navigate("/auth")
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
			<form className={styles.form}>
				<h2>Контактні дані</h2>
				<Input label="Прізвище" placeholder="Ваше Прізвище" {...register("lastName")}></Input>
				<Input label="Ім’я" placeholder="Ваше Ім’я" {...register("lastName")}></Input>
				<Input label="По батькові" placeholder="По батькові" {...register("lastName")}></Input>
				<Input label="По батькові" placeholder="DD / MM / YYYY" {...register("lastName")}></Input>
				<Input label="Телефон" placeholder="+ 38 0" {...register("lastName")}></Input>
				<Input label="E-mail" placeholder="Ваш E-mail" {...register("lastName")}></Input>
				<button type="submit" className={styles.submitButton}>Зберегти зміни</button>
			</form>

		</div>
	);
}
