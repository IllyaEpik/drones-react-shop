import { Link } from "react-router-dom";
import { SVG } from "../images";
import styles from "./button.module.css";
import type{ IProbs } from "./buttonTypes";

export function Button(probs:IProbs) {
    const {
        to,
        children,
        img,
        className,
        id,
        type,
        black
    } = probs
    return (
        <Link to={to} className={styles.link}>
            <button type={type} id={id && id} className={`${styles.button} ${black && styles.black} ${className && className}`}>
                <span className={styles.span}>{children}</span> 
                {img && <SVG.RightArrow/>}
            </button>
        </Link>
    )
}