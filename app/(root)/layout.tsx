import { ReactNode } from "react";


const Layout = async ({children}: {children:ReactNode}) => {
    // const session = await auth()
    // if(!session) redirect("/")
    return (
        <main>
            <div className="bg-blue-900 flex min-h-screen flex-1 flex-col bg-pattern bg-cover bg-top px-5 xs:px-10 md:px-16">
                <div>{children}</div>
            </div>
        </main>
    )
}

export default Layout;