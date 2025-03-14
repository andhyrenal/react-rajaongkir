import { MouseEventHandler, ReactNode } from "react"

export type ButtonProps = {
    onClick?: MouseEventHandler,
    className?: string;
    type?: string;
    children: ReactNode
}