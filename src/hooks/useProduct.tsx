import { useEffect, useState } from "react";
import { useFetch } from "./usefetch";
import type{ IProduct } from "../shared/types";
export function useProduct(count:number,skip:number): [IProduct | undefined, boolean, unknown, ()=> void] {
    const [ data, loading, error, refresh] = useFetch<IProduct>(`http://127.0.0.1:8000/?count=${count}&skip=${skip}`)
    return [ data, loading, error, refresh]
} 