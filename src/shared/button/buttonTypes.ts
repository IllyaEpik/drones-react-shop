export interface IProbs{
    to:string
    children:React.ReactNode
    img:boolean
    black:boolean
    className?:string
    id?:string,
    type?:"button" | "submit" | "reset" | undefined
}