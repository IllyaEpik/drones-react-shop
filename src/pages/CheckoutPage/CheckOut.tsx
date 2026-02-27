import styles from "./Checkout.module.css";

export function Checkout() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        
        <div className={styles.left}>
          <h1 className={styles.title}>ОФОРМИТИ ЗАМОВЛЕННЯ</h1>

          <section className={styles.block}>
            <h3>Ваші контактні дані</h3>

            <div className={styles.field}>
              <label>Прізвище</label>
              <input placeholder="Ваше прізвище" />
            </div>

            <div className={styles.field}>
              <label>Імʼя</label>
              <input placeholder="Ваше імʼя" />
            </div>

            <div className={styles.field}>
              <label>Телефон</label>
              <input placeholder="+38 0" />
            </div>

            <div className={styles.field}>
              <label>E-mail</label>
              <input placeholder="Ваш E-mail" />
            </div>

            <div className={styles.field}>
              <label>Коментар</label>
              <textarea placeholder="Що б ви хотіли уточнити" />
            </div>
          </section>

          <section className={styles.block}>
            <h3>Доставка</h3>

            <div className={styles.radioItem}>
              <input type="radio" name="delivery" />
              <span>Нова Пошта до відділення</span>
            </div>

            <div className={styles.radioItem}>
              <input type="radio" name="delivery" />
              <span>Курʼєром</span>
            </div>
          </section>

          <section className={styles.block}>
            <h3>Оплата</h3>

            <div className={styles.radioItem}>
              <input type="radio" name="payment" />
              <span>Оплата при отриманні</span>
            </div>

            <div className={styles.radioItem}>
              <input type="radio" name="payment" />
              <span>Онлайн карткою</span>
            </div>
          </section>
        </div>

        
        <div className={styles.right}>
          <h3>Замовлення</h3>

          <div className={styles.product}>
            <img
              src="https://via.placeholder.com/70"
              alt=""
            />
            <div>
              <p>DJI Mini 4K</p>
              <span>28 985 ₴</span>
            </div>
          </div>

          <div className={styles.summary}>
            <div>
              <span>Загальна сума</span>
              <span>28 985 ₴</span>
            </div>

            <button className={styles.confirm}>
              ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}