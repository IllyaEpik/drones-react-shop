import styles from './Home.module.css';
import droneImg from '../../assets/drone.png'; 

const Home = () => {
  return (
    <section className={styles.hero}>
      <h1>
        ТЕХНОЛОГІЇ <br /> ЯКІ ЗМІНЮЮТЬ РЕАЛЬНІСТЬ
      </h1>

      <img src={droneImg} alt="Drone" />

      <div className={styles.textBlock}>
        <p>
          Передові технології сьогодення. <br />
          Обирай найкраще для себе.
        </p>
        <button>ДО КАТАЛОГУ</button>
      </div>
    </section>
  );
};

export default Home;
