import { ReactNode } from "react";
import BottomNavbar from "@/components/BottomNavbar";


const Layout = async ({children}: {children:ReactNode}) => {

    return (
        <main>
            <div className="flex min-h-screen flex-1 flex-col bg-pattern bg-cover bg-top px-5 xs:px-10">
                <div>{children}</div>
            </div>
            <BottomNavbar />
        </main>
    )
}

export default Layout;