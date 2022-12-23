import { PropsWithChildren } from "react"

type ButtonProps = PropsWithChildren<{
    className: string,
}>

export const Button = ({className, children}: ButtonProps) => {
    return(
        <button className={className}>
            {children}
        </button>
    )
}