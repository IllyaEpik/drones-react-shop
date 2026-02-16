import { HeaderContextWrapper, UserContextWrapper } from "../context";
import { AppRoutes } from "./AppRoutes";

export function App() {
    return (
            <UserContextWrapper>
                <HeaderContextWrapper>
                    <AppRoutes/>
                </HeaderContextWrapper>
            </UserContextWrapper>
            )
}