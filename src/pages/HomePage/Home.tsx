import styles from './Home.module.css';
import droneImg from '../../assets/drone.png';

const Home = () => {
  return (
    <>
      
      <section className={styles.hero}>
        <h1 className={styles.title}>
          ТЕХНОЛОГІЇ <br /> ЯКІ ЗМІНЮЮТЬ РЕАЛЬНІСТЬ
        </h1>

        <div className={styles.curve}></div>

        <img src={droneImg} alt="Drone" className={styles.drone} />

        <div className={styles.sideInfo}>
          <p>
            Передові технології нового покоління. <br />
            Обирай найкраще для себе.
          </p>
          <button>ДО КАТАЛОГУ</button>
        </div>
      </section>

      
      <section className={styles.newSection}>
        <h2 className={styles.sectionTitle}>НОВЕ НА САЙТІ</h2>

        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.yellow}`}>
            <img src={droneImg} alt="Drone" />
            <h3>DJI Mini 4K</h3>
            <span>from 18 999 ₴</span>
            <button>КУПИТИ</button>
          </div>

          <div className={`${styles.card} ${styles.green}`}>
            <img src={droneImg} alt="Drone" />
            <h3>DJI Mini 4 Pro</h3>
            <span>from 28 999 ₴</span>
            <button>КУПИТИ</button>
          </div>

          <div className={`${styles.card} ${styles.blue}`}>
            <img src={droneImg} alt="Drone" />
            <h3>DJI Mini 4K</h3>
            <span>from 19 999 ₴</span>
            <button>КУПИТИ</button>
          </div>
        </div>
      </section>

      
      <section className={styles.catalog}>
        <h2 className={styles.sectionTitle}>КАТАЛОГ</h2>

        <div className={styles.catalogGrid}>
          <div className={styles.catalogItem}>
            <img src={droneImg} alt="Drone" />
            <p>DJI Mini 4K</p>
            <span>19 999 ₴</span>
          </div>

          <div className={styles.catalogItem}>
            <img src={droneImg} alt="Drone" />
            <p>DJI Mini 4 Pro</p>
            <span>29 999 ₴</span>
          </div>

          <div className={styles.catalogItem}>
            <img src={droneImg} alt="Drone" />
            <p>DJI Mini 4K</p>
            <span>18 999 ₴</span>
          </div>

          <div className={styles.catalogItem}>
            <img src={droneImg} alt="Drone" />
            <p>DJI Flip</p>
            <span>21 999 ₴</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;