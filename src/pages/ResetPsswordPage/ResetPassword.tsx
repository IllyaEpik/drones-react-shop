import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import styles from "./ResetPassword.module.css";

export function ResetPassword() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3>Відновлення пароля</h3>
          <button onClick={() => navigate(-1)}>✕</button>
        </div>

        <Input label="Email" placeholder="Введіть email" />

        <div className={styles.actions}>
          <button
            className={styles.cancel}
            onClick={() => navigate(-1)}
          >
            Скасувати
          </button>

          <button className={styles.submit}>
            Надіслати лист
          </button>
        </div>
      </div>
    </div>
  );
}
