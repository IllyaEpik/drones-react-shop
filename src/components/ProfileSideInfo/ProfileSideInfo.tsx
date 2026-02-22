
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context";
import styles from "./ProfileSideInfo.module.css";
import type{  IProps } from "./ProfileSideInfoTypes";

export function ProfileSideInfo(props:IProps) {
    const {logout,user} = useUserContext()
    const navigate = useNavigate()
        
    if (!user && !localStorage.getItem("token")){
        navigate("/auth")
    }
    const {selected} = props
    return (
        <div className={styles.sideInfo}>
            <span className={styles.title}>Особистий Кабінет</span>
            <Link to={"/profile"} className={`${styles.menuItem} ${selected === "contacts" && styles.selected}`}>Контактні дані</Link>
            <Link to={"/my-orders"}  className={`${styles.menuItem} ${selected === "MyOrders" && styles.selected}`}>Мої замовлення</Link>
            <Link to={"/delivery-addresses"}  className={`${styles.menuItem} ${selected === "DeliveryAddresses" && styles.selected}`}>Адреса доставки</Link>
            <div className={styles.line}></div>
            <span className={styles.menuItem} onClick={logout}>Вийти</span>
        </div>
    );
}
