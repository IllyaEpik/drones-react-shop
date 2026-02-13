import { useState, useEffect } from "react";
interface Icount{
    count:number
}
export function useCountProduct(categoryId:number | string): [number | undefined, boolean, unknown, (id:number | string) => void,number | string] {
    const [data, setData] = useState<number>();
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [id, setId] = useState(categoryId)
    useEffect(() => {
        console.log(id)
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/products/count/${id}`);
                const json = (await response.json()) as Icount;
                setData(await json.count);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);
    return [data, loading, error, setId,id];
}
