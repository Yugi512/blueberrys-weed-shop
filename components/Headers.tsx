"use client";

import React from "react";
import NavBar from "../components/NavBar";
import {usePathname} from "next/navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link";
import {Session} from "next-auth";
import {getInitials} from "@/lib/utils";

const Headers = ({session}: {session: Session}) => {
    const pathName = usePathname()
    console.log(session?.user)

    return (
        <div className="bg-purple-250">
            <section>
                <div>
                    <h1>Blueberry's Online Weed Shop</h1>
                </div>
            </section>
            <section>
                <NavBar pathName={pathName} />
            </section>
            <section>
                <li>
                    <Link href="/profile">
                        <Avatar>
                            <AvatarFallback className="bg-slate-400 text-white" >
                                {getInitials(session?.user?.name ?? "?")}
                            </AvatarFallback>
                        </Avatar>
                    </Link>
                </li>
            </section>
        </div>
    )
}
export default Headers;