import { useEffect, useState } from "react";
import { IProduct } from "../shared/types";

export function useIdProduct(id:number): [IProduct | undefined, boolean, unknown] {
    const [data, setData] = useState<IProduct>();
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/products/${id}`);
                const json = (await response.json()) as IProduct;
                setData(await json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return [data, loading, error];
}
