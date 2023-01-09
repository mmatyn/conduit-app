import { PropsWithChildren } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const PageContainer = ({children}: PropsWithChildren) => 
<>
    <Header/>
    {children}
    <Footer/>
</>