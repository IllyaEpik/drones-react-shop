import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, ...rest }: Props) {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label} htmlFor={label}>{label}</label>}

      <input
        {...rest}
		id={label}
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
      />

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
