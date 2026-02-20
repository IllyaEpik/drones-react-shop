import styles from "./Contact.module.css";
import { SVG } from "../../shared/SVG/SVG";
export function Contacts() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>КОНТАКТИ</h1>

      <div className={styles.container}>
       
        <div className={styles.info}>
          <h3>Наші контакти</h3>
          <p>+38 (067) 123-45-67</p>
          <p>info@dronex.com.ua</p>
          <p>вул. Університетська, 22, м. Дніпро</p>
          <p>Пн-Пт: 10:00 – 18:00</p>
        </div>
        
        <div className={styles.socials}>
        <span>Ми в соцмережах:</span>
        <div className={styles.icons}>
            <SVG.Face />
            <SVG.TgIcon />
            <SVG.Inst />
        </div>
        </div>
    

        
        <div className={styles.form}>
          <h3>Зв’язатися з нами</h3>

          <div className={styles.field}>
            <label>Імʼя</label>
            <input type="text" placeholder="Ваше імʼя" />
          </div>

          <div className={styles.field}>
            <label>Телефон</label>
            <input type="text" placeholder="+380" />
          </div>

          <div className={styles.field}>
            <label>E-mail</label>
            <input type="email" placeholder="Ваш E-mail" />
          </div>

          <div className={styles.field}>
            <label>Повідомлення</label>
            <textarea placeholder="Ваше повідомлення" />
          </div>

          <button className={styles.button}>
            Надіслати
          </button>
        </div>
      </div>
    </div>
  );
}