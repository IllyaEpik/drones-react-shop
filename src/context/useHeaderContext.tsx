

import {createContext, type ReactNode, useState } from "react"


export interface IHeaderContract {
    headerText:React.ReactNode,
    setHeaderText: (children:React.ReactNode) => void
}
interface IProps {
    children:React.ReactNode
}
export const HeaderContext = createContext<IHeaderContract | null>(null)

export function HeaderContextWrapper(props:IProps) {
    const [headerText,setHeaderText] = useState<null | ReactNode>()
    const {children} = props
    return (
        <HeaderContext value={{headerText,setHeaderText}}>
            {children}
        </HeaderContext>
    )
}