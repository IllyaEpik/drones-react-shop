import { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	label?: string;
	type?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	
}

export function Input(props: InputProps) {
	const {
		label,
		type = "text",
		placeholder,
		value,
		onChange,
		...other
	} = props
	
	return (
		<div className={styles.wrapper}>
			{label && <label htmlFor={placeholder}>{label}</label>}

			<input
				id={placeholder}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={styles.input}
				{...other}
			/>

		</div>
	);
}
