import { useBasketContext } from "../../context";
import { SVG } from "../../shared";
import styles from "./BasketProduct.module.css";
import type{ IProps } from "./BasketProductTypes";

export function BasketProduct(props:IProps) {
	const product = props.product
	const {removeProduct,changeCount,getBasketProductById} = useBasketContext()
	const basketProduct = getBasketProductById(product.id)
	if (!product) return	null
	return (
		<div className={styles.wrapper}>
			<div className={styles.imageBack}>
				<img src={product.img} alt="" className={styles.img}/>	

			</div>
			<div className={styles.infoBlock}>
				<div>
					<h2>{product.name}</h2>
					<div className={styles.priceBlock}>
						<p className={`${product.discount!==0 && styles.crossedPrice}`}>{product.price}</p>
						{product.discount !==0 && <p className={styles.discount}>{product.price - product.discount}</p>}
					</div>

				</div>
				<div className={styles.countBlock}>
					<button 
						type="button" 
						className={styles.curcleButton}
						onClick={() => changeCount(product.id,-1)}
							><SVG.Minus/></button>
					<h2>{basketProduct?.count}</h2>
					<button 
						type="button"
						className={styles.curcleButton}
						onClick={() => changeCount(product.id,1)}
						><SVG.Plus/></button>
					<SVG.Trash onClick={() => {removeProduct(product.id)}}/>

				</div>
			</div>
		</div>
	);
}
