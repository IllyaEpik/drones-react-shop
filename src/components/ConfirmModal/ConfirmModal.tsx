import type{ IProps } from "./ConfirmModalType";
import { Button, SVG } from "../../shared";
import styles from "./ConfirmModal.module.css";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export function ConfirmModal(probs: IProps) {
	// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
	const { to,buttonText, text,title } = probs;
    const navigate = useNavigate()
    
	return (
		<div className={styles.modal}>
            <header className={styles.header}>
                <span className={styles.title}>{title}</span>
                {/* <button onClick={()=> navigate(to)} type="button">✕</button> */}
                <SVG.Exit></SVG.Exit>

            </header>
            <footer className={styles.footer}>

                <p className={styles.description}>{text}</p>
                <Button to={to} black={true} img={false} className={styles.button}>{buttonText}</Button>
            </footer>
		</div>
	);
}
