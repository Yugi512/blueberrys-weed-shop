"use client";

import React,{useEffect,useState} from "react";
import Image from "next/image";
import Link from "next/link";

const StrainsList = () => {
    const [strains, setStrains] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/strains",{method: "GET"})
            .then(res => res.json())
            .then(data => setStrains(data))
            .catch(err => console.log(err));
    }, []);
    console.log(strains);

    return (
        <div className="border-8 grid grid-cols-5 gap-2">
            {strains.map((item: any, index: number) => {
                console.log(item);
                return (
                    <Link key={index} href={`/strains/${item.name}`}>
                       <li className="flex flex-col gap-1">
                            <div className="relative flex flex-col justify-between h-full shadow-low rounded" >
                                <section>
                                    <Image src={item.imgUrl} alt="leafly-image" width={100} height={100}/>
                                </section>
                                <section>
                                    <div>{item.type}</div>
                                    <div>{item.name}</div>
                                    <div>
                                        <span>{item.thcLevel}</span>
                                        <span>{item.mostCommonTerpene}</span>
                                    </div>
                                </section>
                            </div>
                           <section className="m-md mt-none">
                               <button className="">see more</button>
                           </section>
                       </li>
                    </Link>
                )
            })}
        </div>
    )
}

export default StrainsList;