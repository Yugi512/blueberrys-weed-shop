"use client"

interface NavBarProps {
    pathName: string;
}

import React from "react"
import Link from "next/link"

const NavBar: React.FC<NavBarProps> = ({pathName}) => {
    return (
        <section className="flex justify-center">
            <ul className="flex flex-row items-center gap-9  h-1/4 text-2xl">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/strains">Strains</Link></li>
            </ul>
        </section>
    )
}
export default NavBar;