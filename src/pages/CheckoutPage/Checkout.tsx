import styles from "./Checkout.module.css";
import { SVG } from "../../shared";
import { useState } from "react";
import { Input } from "../../components/Input";
import { useBasketContext } from "../../context";

export function Checkout() {
	const [showDepartment, setShowDepartment] = useState(false);
	const [delivery, setDelivery] = useState("");
	const [payment, setPayment] = useState("");
	const {productsFromBasket} = useBasketContext()

	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<div className={styles.left}>
					<h1 className={styles.title}>ОФОРМИТИ ЗАМОВЛЕННЯ</h1>

					<section className={styles.block}>
						<h3>Ваші контактні дані</h3>

						<div className={styles.field}>
							<Input label="Прізвище" placeholder="Ваше прізвище"></Input>
						</div>

						<div className={styles.field}>
							<Input label="Імʼя" placeholder="Ваше імʼя"></Input>
						</div>

						<div className={styles.field}>
							<Input label="Телефон" placeholder="+38 0"></Input>
						</div>

						<div className={styles.field}>
							<Input label="E-mail" placeholder="Ваш E-mail"></Input>
						</div>

						<div className={styles.field}>
							<Input
								label="Коментар"
								placeholder="Що б ви хотіли уточнити"
							></Input>
						</div>
					</section>

					<section className={styles.Delblock}>
						<h3>Доставка</h3>
						<label className={styles.radioItem}>
							<input
								type="radio"
								name="delivery"
								value="postomat"
								checked={delivery === "postomat"}
								onChange={(e) => setDelivery(e.target.value)}
							/>
							<span>Нова пошта до поштомату</span>
						</label>

						{delivery === "postomat" && (
							<div className={styles.npExtr}>
								<input placeholder="Місто" />
								<input placeholder="Поштомат" />
							</div>
						)}
						<label className={styles.radioItem}>
							<input
								type="radio"
								name="delivery"
								onChange={(event) => setShowDepartment(event.target.checked)}
							/>
							<span>
								Нова Пошта до відділення <SVG.Np className={styles.DelImg} />
							</span>
						</label>
						{showDepartment && (
							<div className={styles.npExtra}>
								<div className={styles.field}>
									<Input placeholder="Дніпро" label="Місто"></Input>
								</div>

								<div className={styles.field}>
									<Input
										label="Відділення"
										placeholder="Відділення №1: вул. Маршала Малиновського, 11"
									></Input>
								</div>
							</div>
						)}

						<label className={styles.radioItem}>
							<input
								type="radio"
								name="delivery"
								value="courier"
								onChange={(e) => setDelivery(e.target.value)}
							/>
							<span>
								Нова Пошта кур’єром <SVG.Np className={styles.DelImg} />
							</span>
						</label>
					</section>

					<section className={styles.Delblock}>
						<h3 className={styles.Mark}>Оплата</h3>

						<div className={styles.radioItem}>
							<input
								type="radio"
								name="payment"
								value="cod"
								checked={payment === "cod"}
								onChange={(e) => setPayment(e.target.value)}
								className={styles.ame}
							/>
							<span>Оплата при отриманні</span>
						</div>

						<div className={styles.radioItem}>
							<div className={styles.Ma}>
								<input
									type="radio"
									name="payment"
									value="online"
									checked={payment === "online"}
									onChange={(e) => setPayment(e.target.value)}
								/>
								<span>
									Оплатити зараз <SVG.Payment className={styles.Payment} />
								</span>
							</div>
						</div>

						{payment === "online" && (
							<div className={styles.npExtra}>
								<div className={styles.subOption}>
									<input type="radio" name="onlineMethod" />
									<span>Карткою онлайн</span>
								</div>

								<div className={styles.subOption}>
									<input type="radio" name="onlineMethod" />
									<span>Privat Pay</span>
								</div>

								<div className={styles.subOption}>
									<input type="radio" name="onlineMethod" />
									<span>Apple Pay</span>
								</div>

								<div className={styles.subOption}>
									<input type="radio" name="onlineMethod" />
									<span>Google Pay</span>
								</div>
							</div>
						)}
						<SVG.kil className={styles.Butdel}></SVG.kil>
					</section>
				</div>

				<div className={styles.right}>
					<h3>Замовлення</h3>
					{
						productsFromBasket.map((product) => {
							return (
								<>
									<div key={product.id} className={styles.product}>
										<div className={styles.productBackground}>
											<img src={product.img} alt="" className={styles.productImage}/>

										</div>
										<div>
											<p>{product.name}</p>
											<span>{product.price} ₴ </span>
										</div>
										{/* <div>

										</div> */}
									</div>
									<div className={styles.gap}></div>
								</>
							)
						})
					}
					{/* <div className={styles.product}>

						<div>
							<p>Тепловізор ARMASIGHT Q14</p>
							<span>29 990 ₴ </span>
						</div>
					</div> */}

					<div className={styles.summary}>
						<div>
							<span>Загальна сума</span>
							<span>28 985 ₴</span>
						</div>

						<button className={styles.confirm} type="button">
							ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
