import styles from "./About.module.css";
import aboutImg from "../../assets/tower.png";
import officeImg from "../../assets/room.png";
import teamImg from "../../assets/people.png";

const About = () => {
  return (
    <>
      {/* CONTENT */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>ПРО НАС</h1>

          <p className={styles.description}>
            Ми — команда, яка спеціалізується на розробці та продажі сучасних дронів.
          </p>

          <img
            src={aboutImg}
            alt=""
            className={styles.mainImage}
          />

          <div className={styles.block}>
            <div>
              <h2>НАША МІСІЯ</h2>
              <p>
                Ми прагнемо впроваджувати інноваційні технології.
              </p>
            </div>
            <img src={officeImg} alt="" />
          </div>

          <div className={`${styles.block} ${styles.reverse}`}>
            <img src={teamImg} alt="" />
            <div>
              <h2>НАША КОМАНДА</h2>
              <p>
                Команда професіоналів з великим досвідом.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.stats}>
            <div>
              <strong>1K+</strong>
              <span>Успішних проєктів</span>
            </div>
            <div>
              <strong>1.5K+</strong>
              <span>Задоволених клієнтів</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Підтримка</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;