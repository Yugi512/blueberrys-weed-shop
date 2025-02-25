import type { Metadata } from "next";
import {ReactNode} from "react";
import localFont from "next/font/local"
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";

const ibmPlexSans = localFont({
    src: [
        { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
        { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
        { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
        { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
    ],
});

const bebasNeue = localFont({
    src: [
        { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
    ],
    variable: "--bebas-neue",
});

export const metadata: Metadata = {
    title: "Blueberry's Weed Store",
    description: "Mock cannabis store, its just a template and the payment and authorization will be added soon, the app will use stripe for payment processing. It will be configured for retail sales but incase this is used for a actual cannabis store then there must be a license to sell cannabis to collect taxes on it so like I would need it to change and get approval from stripe to host this kind of website",
};

const RootLayout = async ({children}: {children: ReactNode}) => {
    const session = await auth();

    return (
        <html lang="en">
            <SessionProvider session={session}>
                <body
                    className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
                >
                    {children}
                    <Toaster />
                </body>
            </SessionProvider>
        </html>
    );
}

export default RootLayout;
