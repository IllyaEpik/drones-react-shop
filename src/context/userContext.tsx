import {createContext, type ReactNode, useEffect, useState } from "react"
// import { useRegister } from "../hooks/useRegister"
import type { IUser, LoginCredentials, RegisterCredentials } from "../shared/types"


export interface IHeaderContract {
    user:IUser | null
    registration:(registerData: RegisterCredentials) => Promise<string>
    login:(registerData: LoginCredentials) => void
}
interface IProps {
    children:React.ReactNode
}
export const UserContext = createContext<IHeaderContract | null>(null)

export function UserContextWrapper(props:IProps) {
    const {children} = props

    const [token, setToken] = useState<string>("");
    const [user, setUser] = useState<IUser | null>(null);

    async function registration(userData: RegisterCredentials): Promise<string> {
        try {
            const response = await fetch("http://localhost:8000/register", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const result = await response.json();
            if (response.status !== 201) {
                return result.message;
            }
            setToken(result.token);
            localStorage.setItem("token", result.token);
            return token
        } catch {
            return "Bad backend";
        }
    }

    async function login(userData: LoginCredentials) {
        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const result = await response.json();
            if (response.status !== 200) {
                return result.message;
            }
            setToken(result.token);
            localStorage.setItem("token", result.token);
        } catch {
            return "Network error";
        }
    }

    async function me() {
        try {
            const response = await fetch("http://localhost:8000/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            if (response.status === 404) {
                return result.message;
            }
            setUser(result);
        } catch {
            return "Network error";
        }
    }
    useEffect(() => {
        if (!token) return;
        me();
    }, [token]);

    useEffect(() => {
        const localStorageToken = localStorage.getItem("token");
        if (!localStorageToken) return;
        setToken(localStorageToken);
    }, []);

    return (
        <UserContext value={{ user, registration, login }}>
            {children}
        </UserContext>
    );
}