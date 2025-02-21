"use client";

import React from "react";
import NavBar from "../components/NavBar";
import {usePathname} from "next/navigation"

const Headers = () => {
    const pathName = usePathname()
    return (
        <div className="bg-blue-950">
            <section>
                <div>Blueberry's Online Weed Shop</div>
            </section>
            <section>
                <NavBar pathName={pathName} />
            </section>
        </div>
    )
}
export default Headers;