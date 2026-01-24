import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
import styles from './Main.module.css'
// import Basket from '../../assets/basket.svg'
// import Human from '../../assets/human.svg'
import { IProbs } from './maInTypes'

export function Main(probs:IProbs) {
    const children = probs.children
    const headerType = probs.header
    return (
        <main>
            {
                headerType === 1 && 
                <div className={`${styles.oval} ${styles.topOval}`}/>

            
            }
            
            <div className={styles.main}>
            {children}
            </div>
                <div className={styles.oval}>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <strong>1K+</strong>
                            <span>Успішних проєктів</span>
                        </div>
                        <div className={styles.stat}>
                            <strong>1.5K+</strong>
                            <span>Задоволених клієнтів</span>
                        </div>
                        <div className={styles.stat}>
                            <strong>24/7</strong>
                            <span>Підтримка</span>
                        </div>
                    </div>
                </div>
        </main>
    )
}