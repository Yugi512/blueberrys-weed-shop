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
    // console.log(session?.user)
    // need to create shopping session(cart) so we need to access shopping session for the cart
    // session?user?.name is passed into the fetch call and then we just create the shopping session, first we check if they had a sopping session before and if they did they resume the new session, if not then there

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
                <div>
                    <Link href={`/profile/${session?.user?.name!}`}>
                        <Avatar>
                            <AvatarFallback className="bg-slate-400 text-white" >
                                {getInitials(session?.user?.name ?? "?")}
                            </AvatarFallback>
                        </Avatar>
                    </Link>
                </div>
                <div>
                    <button>cart button that redirects to users cart </button>
                </div>
            </section>
        </div>
    )
}
export default Headers;