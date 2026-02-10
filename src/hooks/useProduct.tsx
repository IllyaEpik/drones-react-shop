import { useEffect, useState } from "react";
import type { IProduct } from "../shared/types";
export function useProduct(
	defaultCount: number,
	defaultSkip: number,
	defaultSort: string,
	defaultCategoryId?: string | number
): [
	IProduct[] | undefined,
	boolean,
	unknown,
	{
		setCount: (count: number) => void;
		setSkip: (take: number) => void;
		setSort: (sort: string) => void;
		setCategory: (categoryId:number | string) => void;
	},
	{
		count: number;
		skip: number;
		sort: string;
		categoryId: number | string
	},
] {
	const [products, setData] = useState<IProduct[]>();
	const [error, setError] = useState<unknown>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const [count, setCount] = useState(defaultCount);
	const [skip, setSkip] = useState(defaultSkip);
	const [sort, setSort] = useState(defaultSort);
	const [categoryId, setCategory] = useState<string | number>(defaultCategoryId !== undefined ? defaultCategoryId : "all"); 
	console.log("!1wqeweq",skip)
	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(categoryId)
				const response = await fetch(
					`http://127.0.0.1:8000/products/?count=${count}&skip=${skip}&sort=${sort}&id=${categoryId}`,
				);
				const json = (await response.json()) as IProduct[];
				setData(await json);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [count, skip, sort,categoryId]);
	return [
		products,
		loading,
		error,
		{
			setCount,
			setSkip,
			setSort,
			setCategory
		},
		{
			count,
			skip,
			sort,
			categoryId
		},
	];
}
