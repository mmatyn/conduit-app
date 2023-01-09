import { PropsWithChildren } from "react"

type ButtonProps = PropsWithChildren<{
    className: string,
    onClick: () => void
}>

export const Button = ({className, onClick, children}: ButtonProps) => {
    return(
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}