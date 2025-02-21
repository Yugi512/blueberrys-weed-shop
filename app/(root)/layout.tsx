import { ReactNode } from "react";
import Headers from "@/components/Headers";

const Layout = async ({children}: {children:ReactNode}) => {
    // const session = await auth()
    // if(!session) redirect("/")
    return (
        <main>
            <div className="bg-slate-300 flex min-h-screen flex-1 flex-col bg-pattern bg-cover bg-top px-5 xs:px-10 md:px-16">
                <Headers />
                <div>{children}</div>
            </div>
        </main>
    )
}

export default Layout;