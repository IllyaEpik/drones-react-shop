
import { BasketContextWrapper, HeaderContextWrapper, UserContextWrapper } from "../context";
import { AppRoutes } from "./AppRoutes";

export function App() {
    return (
            <BasketContextWrapper>
                <UserContextWrapper>
                    <HeaderContextWrapper>
                        <AppRoutes/>
                    </HeaderContextWrapper>
                </UserContextWrapper>
            </BasketContextWrapper>
            )
}