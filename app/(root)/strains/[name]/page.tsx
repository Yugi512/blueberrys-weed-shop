"use client"

import React from 'react'
import StrainCard from "@/components/StrainCard";

const Page = async ({params} : {params: Promise<{name: string}>}) => {
    const name = (await params).name
    const strain = name.replace(/%20/g,"-")
    return (
        <div className="bg-blue-800">
            <StrainCard strain={strain} />
        </div>
    )
}
export default Page
