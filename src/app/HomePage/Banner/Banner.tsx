import { PropsWithChildren } from "react";

type BannerProps = PropsWithChildren<{
    title: string
}>
export const Banner = ({title, children}: BannerProps) => {
    return(
        <div className="banner">
            <div className="container">
                <h1 className="logo-front">{title}</h1>
                {
                    children
                }
            </div>
        </div>
    );
}