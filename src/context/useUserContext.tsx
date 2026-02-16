import {createContext, useContext, useEffect, useState } from "react"
// import { useRegister } from "../hooks/useRegister"
import type { IUser, LoginCredentials, RegisterCredentials } from "../shared/types"
import { isNullOrUndefined } from "util"


export interface IHeaderContract {
    user:IUser | null
    registration:(registerData: RegisterCredentials) => Promise<boolean | string>
    login:(registerData: LoginCredentials) => Promise<boolean | string>
    logout: () => void
}
interface IProps {
    children:React.ReactNode
}
export const UserContext = createContext<IHeaderContract | null>(null)

export function useUserContext() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("context not defined");
    }
    return context;
}
export function UserContextWrapper(props:IProps) {
    const {children} = props
    const [token, setToken] = useState<string>("");
    const [user, setUser] = useState<IUser | null>(null);

    async function registration(userData: RegisterCredentials): Promise<string> {
        console.log("regggggggggggggggggggggggggggggggggggggggggggg,","send active")
        const {confirmPassword, ...fields} = userData
        try {
            const response = await fetch("http://localhost:8000/user/register", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(fields),
            });
            const result = await response.json();
            if (response.status !== 201) {
                return result;
            }
            console.log(result)
            setToken(result);
            localStorage.setItem("token", result);
            return token
        } catch {
            return "Network error";
        }
    }

    async function login(userData: LoginCredentials) {
        try {
            const response = await fetch("http://localhost:8000/user/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const result = await response.json();
            if (response.status !== 200) {
                return result;
            }
            setToken(result);
            localStorage.setItem("token", result);
        } catch {
            return "Network error";
        }
    }

    async function me() {
        try {
            const response = await fetch("http://localhost:8000/user/me", {
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
    async function logout() {
        localStorage.removeItem("token")
        setToken("")
        setUser(null)
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
        <UserContext value={{ user, registration, login, logout }}>
            {children}
        </UserContext>
    );
}