import styles from './Home.module.css';
import droneImg from '../../assets/drone.png'; 
import { useProduct } from '../../hooks/useProduct';
import { useState } from 'react';
import { ViewProducts } from '../../components';

export function Home(){
  const [take, setTake] = useState(10)
  const [skip, setSkip] = useState(0)
  const [ data, loading, error, refresh] = useProduct(take,skip,"new")
  console.log(data)
  return (
    <section className={styles.hero}>
      <h1>
        ТЕХНОЛОГІЇ <br /> ЯКІ ЗМІНЮЮТЬ РЕАЛЬНІСТЬ
      </h1>

      <img src={droneImg} alt="Drone" className={styles.droneImage} />

      <div className={styles.textBlock}>
        <p>
          Передові технології сьогодення. <br />
          Обирай найкраще для себе.
        </p>
        <ViewProducts></ViewProducts>
        {/* <button>ДО КАТАЛОГУ</button> */}
      </div>
    </section>
  );
};