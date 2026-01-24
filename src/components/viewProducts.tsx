import React, { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "./viewProducts.module.css";
import { IProduct } from "../shared/types";
import { SVG } from "../shared/SVG";
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
        <div className={styles.allComponent}>
            <div className={styles.productList}>

                {allProducts.map((product)=>{

                    return <div className={styles.product}>
                        <img src={product.img} alt="" className={styles.img} />
                        {/* <div className={styles.data}> */}
                        <strong  className={styles.name}>{product.name}</strong>

                        <span className={styles.price}>{product.price}₴</span>
                        {/* </div> */}
                    </div>
                })}
            </div>
            <button className={styles.button} onClick={nextProductsFunc}><span>Дивитись всі</span> <SVG.RightArrow/></button>
        </div>
    )
}