import type { IProduct } from "../../shared/types";
import { SVG } from "../../shared/images";
import { useProduct } from "../../hooks/useProduct";
import { useState } from "react";
import styles from "./viewProducts.module.css";
import type { IProbs } from "./types";
export function ViewProducts(probs:IProbs) {
	
	
	console.log(probs.count,132132	)
	const [staticProducts, setStaticProducts] = useState<IProduct[]>([]);
	const [products, loading, error, update, info] = useProduct(probs.count, 0, "new");
	console.log(products);
	const {pages} = probs	
	if (!products || loading || typeof pages !== typeof true) return null;

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
			{
				pages ? <div></div> : <button
				className={styles.button}
				type="submit"
				onClick={nextProductsFunc}
				
			>
				<span>Дивитись всі</span> <SVG.RightArrow />
			</button>
			}

			
		</div>
	);
}
