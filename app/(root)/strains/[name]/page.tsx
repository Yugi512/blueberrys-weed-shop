import React from 'react'
import StrainCard from "@/components/StrainCard";
import {data} from "@/components/StrainsList";

const Page = async ({params} : {params: Promise<{name: string}>}) => {
    const name = (await params).name
    const strain = name.replace(/%20/g," ")


    // if(!strain) return <div>Strain not found</div>;
    console.log(strain);
    // return (
    //     <StrainCard strain={strain} />
    //     <h1>hello</h1>
    // )
}
export default Page
