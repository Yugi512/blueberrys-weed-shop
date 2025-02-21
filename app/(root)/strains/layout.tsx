import { ReactNode } from "react";
import Headers from "@/components/Headers";


const Layout = async ({children}: {children:ReactNode}) => {

    return (
        <main>
            <div className="bg-white flex min-h-screen flex-1 flex-col bg-pattern bg-cover bg-top px-5 xs:px-10">
                <div>{children}</div>
            </div>
        </main>
    )
}

export default Layout;