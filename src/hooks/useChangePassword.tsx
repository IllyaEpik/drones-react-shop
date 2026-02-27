import { useState, useEffect } from "react";

export function useChangePassword(): [string | undefined, boolean, unknown, (email:string) => void] {
    const [data, setData] = useState<string>();
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("")
    useEffect(() => {
        if (!email || email==="") return
        // if (!token || token==="") return
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/user/password-change/`, {
                    method:"POST",
                    headers: { 
                        "Content-Type": "application/json"
                        // "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({email})
                });
                const json = (await response.json());
                setData(await json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [email]);
    return [data, loading, error, setEmail];
}
