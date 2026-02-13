export interface IAuthProps {
    mode: "login" | "register",
    setMode: (mode: "login" | "register") => void
}