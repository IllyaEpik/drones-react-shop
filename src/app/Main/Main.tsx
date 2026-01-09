import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './Main.module.css'
import Basket from '../../assets/basket.svg'
import Human from '../../assets/human.svg'
import { IProbs } from './maInTypes'

export function Main(probs:IProbs) {
    const children = probs.children
    return (
        <main>
            <div className={`${styles.oval} ${styles.topOval}`}>

            </div>
            <div className={styles.main}>
            {children}

            </div>
            <div className={styles.oval}>

            </div>
        </main>
    )
}