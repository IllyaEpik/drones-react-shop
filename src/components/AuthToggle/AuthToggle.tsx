import styles from "./AuthToggle.module.css";
import type { IAuthProps } from "./AuthToggleTypes";

export function AuthToggle(props: IAuthProps) {
    const { mode, setMode } = props
    
    return (
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
    )
}