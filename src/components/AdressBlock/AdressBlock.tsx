
import { useState } from "react";
import { SVG } from "../../shared";
import styles from "./AdressBlock.module.css";
import { Input } from "../Input";

export function AdressBlock() {
    const [isOpen, setOpen] = useState(true)
	return (
        <div>
            <h2 className={styles.title}>Адреса доставки</h2>
            <div className={styles.adress}>
                <header className={styles.headerOfAdress}>
                    <div className={styles.headerTitleBlock}>
                        <input type="radio" className={styles.radioInput}  />
                        <span>м. Дніпро, Відділення №1: вул. Маршала Малиновського, 114</span>

                    </div>
                    <SVG.Edit onClick={() => setOpen(!isOpen)} className={`${isOpen && styles.chosen}`}/>
                    
                </header>
                {
                    isOpen &&
                <main className={styles.main}>
                    <Input placeholder="Введить місто" label="місто"/>
                    <Input placeholder="Введить Вулицю" label="Вулиця"/>
                    <Input placeholder="Номер будинку" label="Будинок"/>
                    <Input placeholder="Номер квартири" label="Квартира"/>
                    <Input placeholder="Номер підїзду" label="Підїзд"/>
                    <button type="submit" className={styles.button}>Зберегти зміни</button>
                </main>
                
                }
            </div>
        </div>
	);
}
