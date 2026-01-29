import { useEffect, useState } from "react";
export function useFetch<T>(
	url: string,
	params = {
		method: "GET",
	},
): [T | undefined, boolean, unknown, () => void] {
	const [data, setData] = useState<T>();
	const [error, setError] = useState<unknown>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [refetchIndex, setRefetchIndex] = useState(0);
	const refresh = () => setRefetchIndex(refetchIndex + 1);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url, params);
				const json = (await response.json()) as T;
				setData(await json);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [refetchIndex]);
	return [data, loading, error, refresh];
}
