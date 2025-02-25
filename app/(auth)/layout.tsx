import {ReactNode} from "react";
import Image from "next/image";
import {redirect} from "next/navigation";
import {auth} from "@/auth"

const Layout = async ({children}: {children: ReactNode}) => {
    const session = await auth()

    if (session) redirect("/")

    return (
        <main className="relative flex flex-col-reverse text-light-100 sm:flex-row">
                <section className="bg-purple-250 my-auto flex h-full min-h-screen flex-1 items-center bg-pattern bg-cover bg-top bg-dark-100 px-5 py-10">
                    <div className="gradient-vertical mx-auto bg-purple-250 flex max-w-xl flex-col gap-6 rounded-lg p-2">
                        <div className="flex flex-row gap-3">
                            <h1 className="text-2xl font-semibold text-white">Blueberry's online weed store</h1>
                        </div>
                        <div>{children}</div>
                    </div>
                </section>
                <section className="sticky h-40 w-full sm:top-0 sm:h-screen sm:flex-1">
                    <Image
                        src="https://images.unsplash.com/photo-1626083715002-308cb60cd5fb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbm5hYmlzJTIwZmxvd2VyfGVufDB8fDB8fHww"
                        alt="CannaconnectionImage"
                        width={1000}
                        height={1000}
                        className="size-full object-cover object-[70%]"
                    />
                </section>
        </main>
    )
}
export default Layout;