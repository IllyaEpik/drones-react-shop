import { useState } from "react";
import { Input } from "../../components/Input";
import styles from "./Auth.module.css";

export function Auth() {
  const [mode, setMode] = useState<"login" | "register">("register");

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.top}>
          <span
            className={mode === "login" ? styles.active : ""}
            onClick={() => setMode("login")}
          >
            Авторизація
          </span>
          /
          <span
            className={mode === "register" ? styles.active : ""}
            onClick={() => setMode("register")}
          >
            Реєстрація
          </span>
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

        <div className={styles.actions}>
          <button className={styles.cancel}>Скасувати</button>
          <button className={styles.submit}>
            {mode === "login" ? "Увійти" : "Зареєструватися"}
          </button>
        </div>

        <p className={styles.footer}>
          При вході або реєстрації, я підтверджую згоду з умовами{" "}
          <span>публічного договору</span>
        </p>
      </div>
    </div>
  );
}
