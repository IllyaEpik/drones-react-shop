import { Button, ContactsIcons } from "../../shared";
import styles from "./Contact.module.css";
export function Contacts() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>КОНТАКТИ</h1>

      <div className={styles.container}>
       
        <div className={styles.info}>
			<h3>Наші контакти</h3>
			<div className={styles.data}>
				<p><ContactsIcons.Phone/> <span>+38 (067) 123-45-67</span></p>
				<p><ContactsIcons.Mail/> <span>info@dronex.com.ua</span></p>
				<p><ContactsIcons.MapPin/> <span>вул. Університетська, 22, м. Дніпро, 49000, Україна</span></p>
				<p><ContactsIcons.Celendar/> <span>Пн–Пт: 10:00 — 18:00, Сб–Нд: вихідні</span></p>

			</div>
			<div className={styles.socials}>
				<span>Ми в соцмережах:</span>
				<div className={styles.icons}>
					<ContactsIcons.Face />
					<ContactsIcons.TgIcon />
					<ContactsIcons.Inst />
				</div>
			</div>
        </div>
        
    

        
        <div className={styles.form}>
			<h3>Зв’язатися з нами</h3>

			<div className={styles.fields}>
				<div className={styles.field}>
					<label htmlFor="">Імʼя</label>
					<input type="text" placeholder="Ваше імʼя" id="0"/>
				</div>

				<div className={styles.field}>
					<label htmlFor="">Телефон</label>
					<input type="text" placeholder="+380" />
				</div>

				<div className={styles.field}>
					<label htmlFor="">E-mail</label>
					<input type="email" placeholder="Ваш E-mail" />
				</div>

				<div className={styles.field}>
					<label htmlFor="">Повідомлення</label>
					<textarea placeholder="Ваше повідомлення" className={styles.description} />
				</div>
			</div>
			<Button to="" black={true} img={false} className={styles.button}>Надіслати</Button>
			{/* <button className={styles.button} type="button">
				Надіслати
			</button> */}
        </div>
      </div>
    </div>
  );
}