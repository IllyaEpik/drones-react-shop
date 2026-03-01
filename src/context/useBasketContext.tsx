import {createContext, useContext, useEffect, useState } from "react"
import type{ IProduct } from "../shared"

export interface IBasketContract {
    productsFromBasket: IProduct[]
    getBasketProductById: (id:number) => IProductBasket | undefined
    removeProduct: (id:number) => void
    addProduct: (id:number) => void
    clear: () => void
    changeCount: (id: number, count: number) => void
}
export const BasketContext = createContext<IBasketContract | null>(null)

interface IProps {
    children:React.ReactNode
}
interface IProductBasket {
    count:number 
    id:number
}
export function useBasketContext() {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error("context not defined");
    }
    return context;
}

export function BasketContextWrapper(props:IProps) {
    const [productListId, setListProductsId] = useState<IProductBasket[]>([])
    const [productsFromBasket, setProducts] = useState<IProduct[]>([])
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const {children} = props
    function addProduct(id:number){
        console.log(productListId,12323123,"ewqwqeqew")
        if (productListId.find((basketProduct) => basketProduct.id===id)) return
        const updated = productListId.concat([{id,count:1}])
        setListProductsId(updated)
        console.log(productListId)
        localStorage.setItem("product",JSON.stringify(updated))
    }
    function removeProduct(id:number) {
        
        if (!productListId.find((basketProduct)=> basketProduct.id===id)) return console.log("#a132132132132132",productListId)
        const updated = productListId.filter((value) => value.id !== id)
      
        localStorage.setItem("product",JSON.stringify(updated))
        setListProductsId(updated)
    }
    function changeCount(id:number,count:number) {
        // const foundProduct = productListId.findIndex((basketProduct)=> basketProduct.id===id)
        // if (!foundProduct) return 
        let removeId: number | undefined;
        const updated = productListId.map((product) => {
            if (product.id === id){
                if (product.count + count<1){
                    removeId = id
                }
                product.count += count
            }
            return product
        })
        if (removeId){
            console.log(removeId)
            removeProduct(removeId)
        }else{
            localStorage.setItem("product",JSON.stringify(updated))
            setListProductsId(updated)
        }
    }
    useEffect(() => {
        if (!productListId) return
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/products/idArray`, {
                    method:"POST",
                    headers: { 
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({idArray:productListId.map((product) => product.id)})
                });
                const json = (await response.json()) as IProduct[];
                console.log(json)
                setProducts(await json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [productListId]);
    useEffect(() => {
        const jsonData = JSON.parse(localStorage.getItem("product") as string)
        if (!jsonData) return
        setListProductsId(jsonData)
    }, [])
    return (
        <BasketContext value={{
            addProduct,
            removeProduct,
            clear:localStorage.clear,
            productsFromBasket,
            changeCount,
            getBasketProductById:(id) => productListId.find((basketProduct) => basketProduct.id===id)
        }}>
            {children}
        </BasketContext>
    )
}