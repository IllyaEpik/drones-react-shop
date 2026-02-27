
import { useState } from "react";
import { SVG } from "../../shared";
import styles from "./Order.module.css";

export function Order() {
    const [isOpen, setOpen] = useState(true)
	return (
        <div>
            <h2 className={styles.title}>Мої замовлення</h2>
            <div className={styles.order}>
                <header className={styles.headerOfOrder}>
                    <div className={styles.headerInfoBlock}>
                        <div className={styles.curcle}/>
                        <div className={styles.headerInfo}>
                            <span className={styles.grayText}>№30349 від 20.04.2023</span>
                            <span>Оформлення</span>
                        </div>
                        <div className={styles.headerInfo}>
                            <span className={styles.grayText}>Номер відправлення</span>
                            <span>20030040050000</span>
                        </div>
                        <div className={styles.headerInfo}>
                            <span className={styles.grayText}>Сума замовлення</span>
                            <span>25 830.00 ₴ </span>
                        </div>

                    </div>
                    <div className={styles.iconsBlock}>
                        <SVG.Drone className={styles.icon}/>
                        <SVG.Arrow onClick={() => setOpen(!isOpen)} className={`${!isOpen && styles.closed}`}/>
                    </div>
                </header>
                {
                    isOpen &&
                <><main className={styles.main}>
                    <div className={styles.sendNumber}>
                        <span className={styles.grayText}>Номер відправлення:</span>
                        <span>20030040050000</span>
                        <SVG.Copy className={styles.copy}/>
                    </div>
                    <div className={styles.path}>
                        <div className={styles.line}></div>	
                        <div className={styles.points}>
                            <div className={`${styles.point} ${styles.pointWithCar}`}>
                                <SVG.Car className={styles.car}/>
                            </div>
                            <div className={styles.point}></div>
                            <div className={styles.point}></div>
                            <div className={styles.point}></div>
                            <div className={styles.point}></div>
                        </div>
                    </div>
                    <div className={styles.statuses	}>
                        <span>Оформлено</span>
                        <span className={`${styles.grayText} ${styles.state}`}>Збирається</span>
                        <span className={`${styles.grayText} ${styles.state}`}>У дорозі</span>
                        <span className={`${styles.grayText} ${styles.state}`}>Доставлено</span>
                        <span className={`${styles.grayText} ${styles.state}`}>Отримано</span>
                    </div>
                </main>
                <footer className={styles.footer}>
                    <span className={styles.grayText}>Інформація про замовлення</span>
                    <div className={styles.footerContainer}>
                        <div className={styles.infoFooterBlock}>
                            <div className={styles.infoDetailFooter}>

                                <p className={styles.grayText}>Адреса доставки</p>
                                <p>Нова Пошта до відділення</p>
                                <p>Дніпро, Відділення №1: вул. Маршала Малиновського, 114</p>
                            </div>
                            <div className={styles.infoDetailFooter}>
                                <p className={styles.grayText}>Отримувач</p>
                                <p>Анастасія Павленко</p>
                                <p>+380 99 123 45 68</p>
                            </div>
                        </div>
                        <div className={styles.footerLine}></div>
                        <div className={styles.productData}>
                            <header>
                                <div className={styles.infoLine}>
                                    <span className={styles.productGrayText}>Фото</span>
                                    <span className={styles.productGrayText}>Назва</span>
                                    <span className={styles.productGrayText}>Ціна</span>
                                    <span className={styles.productGrayText}>Кількість</span>
                                    <span className={styles.productGrayText}>Сума</span>
                                </div>
                                <div className={styles.infoLineWithDrone}>
                                    <div className={styles.box}><SVG.Drone className={styles.icon}/></div>
                                    <div className={styles.box}><span>DJI Mini 4K</span></div>
                                    <div className={styles.box}><div className={styles.priceBlock}>
                                        <span className={styles.price}>29 990 ₴</span>
                                        <span className={styles.discount}>28 985₴</span>
                                    </div></div>
                                    <div className={styles.box}><span>1</span></div>
                                    <div className={styles.box}><span>28 985₴  </span></div>
                                </div>
                            </header>
                            <main className={styles.finalData}>
                                <div>
                                    <span className={styles.typeOfData}>Оплата</span>
                                    <span>Накладений платіж</span>
                                </div>
                                <div>
                                    <span className={styles.typeOfData}>Доставка</span>
                                    <span>За тарифами перевізника</span>
                                </div>
                                <div>
                                    <span className={styles.typeOfData}>Загальна сума</span>
                                    <span>29 990 ₴</span>
                                </div>
                                <div>
                                    <span className={styles.typeOfData}>Заощаджено</span>
                                    <span>1 005 ₴</span>
                                </div>
                                <div>
                                    <span className={styles.typeOfData}>Разом</span>
                                    <span>28 985 ₴</span>
                                </div>
                            </main>
                            <button type="button" className={styles.button}>Скасувати</button>
                        </div>
                        
                    </div>
                </footer>
                </>}
            </div>
        </div>
	);
}
