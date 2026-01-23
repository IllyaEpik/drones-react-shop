import React, { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "./viewProducts.module.css";
import { IProduct } from "../shared/types";
export function ViewProducts(){
    // const [count, setCount] = useState(4)
    // const [skip, setSkip] = useState(4)
    const [staticProducts, setStaticProducts] = useState<IProduct[]>([])
    const [ products, loading, error, update,info] = useProduct(4,0,"new")
    
    if (!products) return <div></div>
    
    const allProducts = staticProducts.concat(products)
    const nextProductsFunc = () => {
        setStaticProducts(allProducts)
        update.setSkip(info.skip+4)
    }
    return (
        <div>
            <div className={styles.productList}>

                {allProducts.map((product)=>{

                    return <div className={styles.product}>
                        <h2>{product.name}</h2>
                        <h3>description: {product.description}</h3>
                        <h3>price: {product.price}</h3>
                        <h3>discount: {product.discount}</h3>
                        <h3>quantity limit: {product.quantityLimit}</h3>

                    </div>
                })}
            </div>
            <button onClick={nextProductsFunc}>next</button>
        </div>
    )
}