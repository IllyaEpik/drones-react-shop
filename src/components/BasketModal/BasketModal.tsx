
import { useBasketContext } from "../../context";
import { Button } from "../../shared";
import { BasketProduct } from "../BasketProduct";
import { Modal } from "../Modal";
import styles from "./BasketModal.module.css";
import type{ IProps } from "./BasketModal.types";

export function BasketModal(props:IProps) {
	const {open, onClose} = props
	const {productsFromBasket} = useBasketContext()
	const price = (productsFromBasket.map((product) => product.price)).reduce((previous, nextValue) => previous + nextValue,0)
	const discount = (productsFromBasket.map((product) => product.discount)).reduce((previous, nextValue) => previous + nextValue,0)
	const priceWithDiscount = price - discount
	
	return (
		<Modal open = {open} onClose={onClose} title="Кошик" className={styles.modal}>
			<div className={styles.productArray}>
				{productsFromBasket.map((product) => {
					return <BasketProduct key={product.id} product={product}/>
				})}
			</div>
			<hr />
			<div>
				<div className={styles.orderInfo}>
					<span>Загальна сума</span>
					<span>{price} ₴</span>
				</div>
				<div className={styles.orderInfo}>
					<span>Заощаджено</span>
					<span>{discount} ₴</span>
				</div>
				<div className={styles.orderInfo}>
					<span>Зі знижкою</span>
					<span>{priceWithDiscount} ₴</span>
				</div>
			</div>
			<hr />
			<div className={styles.buttons}>

				<Button to="/" img={false} black={false} className={styles.whiteButton} onclick={onClose}>
					Перейти до кошика
				</Button>
				<Button to="/checkout" img={true} black={true} onclick={onClose}>
					Оформити замовлення
				</Button>
			</div>
		</Modal>
	);
}
