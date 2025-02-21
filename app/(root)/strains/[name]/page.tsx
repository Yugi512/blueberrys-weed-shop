"use client"

import React from 'react'
import StrainCard from "@/components/StrainCard";
import {data} from "@/components/StrainsList";

const Page = async ({params} : {params: Promise<{name: string}>}) => {
    const name = (await params).name
    const strain = name.replace(/%20/g," ")
    const strainData = data.find(item => item.name === strain);

    if(!strainData) return <div>Strain not found</div>;

    return (
        <StrainCard strain={strainData} />
    )
}
export default Page
