import { ReactNode } from "react";
import Headers from "@/components/Headers";
import {auth} from "@/auth"
import {redirect} from "next/navigation";

const Layout = async ({children}: {children:ReactNode}) => {
    const session = await auth();

    if(!session ) redirect("/sign-in")
    return (
        <main>
            <div className="flex min-h-screen flex-1 flex-col bg-pattern bg-cover bg-top px-5 xs:px-10 md:px-16">
                <Headers session={session} />
                <div>{children}</div>
            </div>
        </main>
    )
}

export default Layout;