import styles from './NotFound.module.css';
import droneImg from '../../assets/drone.png'; 

import React from "react";



export const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Ви перейшли не на ту сторінку </h1>
      <h2 className={styles.subtitle}>Немає  такої сторінки</h2>

      <img src={droneImg} alt="drone" className={styles.drone} />

      <div className={styles.circle}></div>
    </div>
  );
};

export default NotFound;