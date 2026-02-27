import { useState } from "react";

export function useConfirmChangePassword(): [string | undefined, boolean, unknown, (token:string, password:string) => Promise<void>] {
    const [data, setData] = useState<string | undefined>();
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const fetchData = async (token:string, password: string) => {
        setLoading(true)
        try {
            const response = await fetch(`http://127.0.0.1:8000/user/confirm-password-change/${token}/`, {
                method:"POST",
                headers: { 
                    "Content-Type": "application/json"
                    // "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({password})
            });
            const json = (await response.json());
            setData(await json);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        } 
    };
    
    return [data, loading, error, fetchData];
}
