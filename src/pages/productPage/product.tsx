import { Link } from "react-router-dom";
import styles from "./product.module.css";
import { PNG, SVG } from "../../shared/images";
import { useMediaQuery } from "react-responsive";
import { Button } from "../../shared/button";

export function Product(){
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
    return (
        <div>
            <section className={styles.hero}>
                <SVG.Drone className={`${styles.drone} ${isTabletOrMobile && styles.phoneDrone}`}/>

                <div className={`${styles.sideInfo} ${isTabletOrMobile && styles.phoneSideInfo}`}>
                    <div className={styles.previewSideInfo}>
                        <SVG.Drone className={styles.miniDrone}/>
                        <div className={styles.textSideInfo}>
                            <span className={styles.titleSideInfo}>DJI Mini 4 Pro</span>
                            <span className={styles.priceSideInfo}>29 900 ₴ </span>
                        </div>
                    </div>
                    <div className={styles.innerSideInfo}>
                        <SVG.Order />
                        <Button to="makeOrder/" img={true} black={true}>Замовити</Button>
                    </div>
                </div>
            </section>
            <div className={styles.imageBlock}>

                <img src={PNG.tower} alt="" className={styles.mainImage} />

                <div className={styles.block}>
                    <div>
                        <h2>НАША МІСІЯ</h2>
                        <p>Ми прагнемо впроваджувати інноваційні технології.</p>
                    </div>
                    <img src={PNG.room} alt="" />
                </div>

                <div className={styles.block}>
                    <img src={PNG.people} alt="" />
                    <div>
                        <h2>НАША КОМАНДА</h2>
                        <p>Команда професіоналів з великим досвідом.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}