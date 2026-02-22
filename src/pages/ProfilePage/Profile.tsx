
import { useUserContext } from "../../context";
import type{ ContactCredentials } from "../../shared";
import styles from "./Profile.module.css";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { ProfileSideInfo } from "../../components/ProfileSideInfo";

export function Profile() {
	const {user,update} = useUserContext()
	const {handleSubmit, register, formState: {errors}} = useForm<ContactCredentials>()
	
	function onSubmit(data:ContactCredentials) {
		if (!user) return
		if (data.email===""){
			data.email = user.email
		}
		if (data.lastName===""){
			data.lastName = user.lastName
		}
		if (data.name===""){
			data.name = user.name
		}
		if (data.fatherName===""){
			data.fatherName = user.fatherName
		}
		if (data.phoneNumber===""){
			data.phoneNumber = user.phoneNumber
		}
		
		update(data)
	}
	
	return (
		<div className={styles.wrapper}>

			<ProfileSideInfo selected="contacts" />

			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h2>Контактні дані</h2>
				<Input 
					label="Прізвище" 
					placeholder="Ваше Прізвище" 
					{...register("lastName")} 
					defaultValue={user?.lastName || undefined}
					error={errors.lastName?.message}
				></Input>
				<Input 
					label="Ім’я" 
					placeholder="Ваше Ім’я" 
					{...register("name")} 
					defaultValue={user?.name || undefined}
					error={errors.name?.message}

				></Input>
				<Input 
					label="По батькові" 
					placeholder="По батькові" 
					{...register("fatherName")} 
					defaultValue={user?.fatherName || undefined}
					
					error={errors.fatherName?.message}
				></Input>
				{/* <Input label="По батькові" placeholder="DD / MM / YYYY" {...register("year")}></Input> */}
				<Input 
					label="Телефон" 
					placeholder="+ 38 0" 
					{...register("phoneNumber")} 
					defaultValue={user?.phoneNumber || undefined}
					
					error={errors.phoneNumber?.message}
				></Input>
				<Input 
					label="E-mail" 
					placeholder="Ваш E-mail" 
					{...register("email")} 
					defaultValue={user?.email || undefined}
					error={errors.email?.message}

				></Input>
				<button type="submit" className={styles.submitButton}>Зберегти зміни</button>
			</form>
			

		</div>
	);
}
