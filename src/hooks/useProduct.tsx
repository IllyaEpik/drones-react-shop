import { useEffect, useState } from "react";
import type { IProduct } from "../shared/types";
export function useProduct(
	defaultCount: number,
	defaultSkip: number,
	defaultSort: string,
): [
	IProduct[] | undefined,
	boolean,
	unknown,
	{
		setCount: (count: number) => void;
		setSkip: (take: number) => void;
		setSort: (sort: string) => void;
	},
	{
		count: number;
		skip: number;
		sort: string;
	},
] {
	// const [ products, loading, error, refresh] = useFetch<IProduct[]>()
	const [products, setData] = useState<IProduct[]>();
	const [error, setError] = useState<unknown>(null);
	const [loading, setLoading] = useState<boolean>(true);
	// const [refetchIndex, setRefetchIndex] = useState(0);

	const [count, setCount] = useState(defaultCount);
	const [skip, setSkip] = useState(defaultSkip);
	const [sort, setSort] = useState(defaultSort);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://127.0.0.1:8000/products/?count=${count}&skip=${skip}&sort=${sort}`,
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
	}, [count, skip, sort]);
	return [
		products,
		loading,
		error,
		{
			setCount,
			setSkip,
			setSort,
		},
		{
			count,
			skip,
			sort,
		},
	];
}
