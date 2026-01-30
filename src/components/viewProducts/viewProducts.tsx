import type { IProduct } from "../../shared/types";
import { SVG } from "../../shared/images";
import { useProduct } from "../../hooks/useProduct";
import React, { useState } from "react";
import styles from "./viewProducts.module.css";
import { IProbs } from "./types";
export function ViewProducts(probs:IProbs) {
	// const [count, setCount] = useState(4)
	// const [skip, setSkip] = useState(4)
	const [staticProducts, setStaticProducts] = useState<IProduct[]>([]);
	const [products, loading, error, update, info] = useProduct(probs.count, 0, "new");
	console.log(products);
	if (!products || loading) return null;

	const allProducts = staticProducts.concat(products);
	const nextProductsFunc = () => {
		setStaticProducts(allProducts);
		update.setSkip(info.skip + 4);
	};
	return (
		<div className={styles.allComponent}>
			<div className={styles.productList}>
				{allProducts.map((product) => {
					return (
						<div className={styles.product} key={product.id}>
							<img src={product.img} alt="" className={styles.img} />
							{/* <div className={styles.data}> */}
							<strong className={styles.name}>{product.name}</strong>

							<span className={styles.price}>{product.price}₴</span>
							{/* </div> */}
						</div>
					);
				})}
			</div>
			<button
				className={styles.button}
				type="submit"
				onClick={nextProductsFunc}
			>
				<span>Дивитись всі</span> <SVG.RightArrow />
			</button>
		</div>
	);
}
