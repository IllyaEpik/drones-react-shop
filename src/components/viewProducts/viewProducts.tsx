import { useEffect, useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import { SVG } from "../../shared/Images";
import type { IProduct } from "../../shared/types";
import type { IProbs } from "./ViewProductsTypes";
import styles from "./ViewProducts.module.css";
import { useNavigate } from "react-router-dom";
export function ViewProducts(probs:IProbs) {
	
	const {pages,categoryId, skip} = probs
	console.log(skip,213132231)
	const [staticProducts, setStaticProducts] = useState<IProduct[]>([]);
	const [products, loading, error, update, info] = useProduct(probs.count, skip ? skip : 0, "new",categoryId);
	const navigate = useNavigate()
	useEffect(() => {
		update.setSkip(skip || 0);
        update.setCategory(categoryId || "all");
		},[skip,categoryId]
	)
	if (!products || loading || typeof pages !== typeof true) return null;

	const allProducts = pages ? products : staticProducts.concat(products)
	const nextProductsFunc = () => {
		setStaticProducts(allProducts);
		update.setSkip(info.skip + 4);
	};
	function redirect(id:number) {
		navigate(`/product/${id}`)
	}
	return (
		<div className={styles.allComponent}>
			<div className={styles.productList}>
				{allProducts.map((product) => {
					return (
						<button 
							className={styles.product} 
							key={product.id} 
							type="button"
							onClick={() => redirect(product.id)}
							>
							<img src={product.img} alt="" className={styles.img} />
							<div className={styles.description}>

								<strong className={styles.name}>{product.name}</strong>

								<span className={styles.price}>{product.price}₴</span>
							</div>
							<SVG.BasketButton className={styles.basketButton}/>
						</button>
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
