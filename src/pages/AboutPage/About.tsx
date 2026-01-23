import styles from "./About.module.css";
import aboutImg from "../../assets/tower.png";
import officeImg from "../../assets/room.png";
import teamImg from "../../assets/people.png";

export function About(){
  return (
    <>
      
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

    </>
  );
};