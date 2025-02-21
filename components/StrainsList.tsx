"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const data = [{
    "name":"GG4",
    "img_url":"https://images.leafly.com/flower-images/gg-4.jpg",
    "type":"Hybrid",
    "thc_level":"20%",
    "most_common_terpene":"Caryophyllene",
    "description":"Original Glue (GG4), developed by GG Strains, is a potent hybrid strain that delivers heavy-handed euphoria and relaxation, leaving you feeling \u201cglued\u201d to the couch. Its chunky, resin-covered buds fill the room with pungent earthy and sour aromas inherited from its parent strains, Chem\u2019s Sister, Sour Dubb, and Chocolate Diesel. Taking first place in both the Michigan and Los Angeles 2014 Cannabis Cups as well as the High Times Jamaican World Cup, this multiple award-winning hybrid's supremacy is no longer a secret, and consumers will search far and wide to get their hands sticky with Original Glue (GG4).",
    "effects":{
        "relaxed":"66%",
        "happy":"54%",
        "euphoric":"51%",
        "uplifted":"39%",
        "sleepy":"27%",
        "dry_mouth":"24%",
        "dry_eyes":"12%",
        "dizzy":"5%",
        "paranoid":"4%",
        "anxious":"4%",
        "stress":"29%",
        "pain":"24%",
        "depression":"23%",
        "anxiety":"22%",
        "insomnia":"17%"
    },

},
    {
        "name":"Wedding Cake",
        "img_url":"https://images.leafly.com/flower-images/wedding-cake.jpg",
        "type":"Hybrid",
        "thc_level":"22%",
        "most_common_terpene":"Limonene",
        "description":"Wedding Cake is a potent indica-hybrid marijuana strain made by crossing Cherry Pie with Girl Scout Cookies. Wedding Cake provides relaxing and euphoric effects that calm the body and mind. This strain features a rich and tangy flavor profile with undertones of earthy pepper. Medical marijuana patients choose Wedding Cake to help relieve symptoms associated with pain, insomnia and appetite loss. Consumers with a low THC tolerance should enjoy this strain with an extra slice of care due to its high THC content. Wedding Cake has soared in popularity over the years and was named Leafly Strain of the Year in 2019. Fun fact: In Canada, this strain is known as Pink Cookies.",
        "effects":{
            "relaxed":"60%",
            "happy":"50%",
            "euphoric":"41%",
            "uplifted":"35%",
            "hungry":"23%",
            "dry_mouth":"17%",
            "dry_eyes":"7%",
            "dizzy":"4%",
            "anxious":"2%",
            "paranoid":"2%",
            "stress":"19%",
            "anxiety":"16%",
            "depression":"14%",
            "pain":"12%",
            "insomnia":"8%"
        },

    },
    {
        "name":"Runtz",
        "img_url":"https://images.leafly.com/flower-images/runtz-nug-image.jpg",
        "type":"Hybrid",
        "thc_level":"19%",
        "most_common_terpene":"Limonene",
        "description":"Runtz is a rare\u00a0hybrid marijuana strain by Cookies.\u00a0It's made by crossing\u00a0Zkittlez\u00a0with\u00a0Gelato\u00a0and is loved\u00a0for its incredibly fruity flavor profile that smells just like a bag of the sugary candy we all know and love. Because of the rising popularity of this strain, it's no surprise Runtz was named Leafly\u00a0Strain of the Year in 2020. Growers say this strain has resin-drenched buds that range in color from rich purple to lime green. Runtz is celebrated for its creamy smoke that is smooth and welcoming. This strain produces euphoric and uplifting effects that are known to be long-lasting.",
        "effects":{
            "happy":"62%",
            "euphoric":"48%",
            "relaxed":"47%",
            "uplifted":"43%",
            "talkative":"31%",
            "dry_mouth":"9%",
            "dry_eyes":"4%",
            "dizzy":"3%",
            "anxious":"1%",
            "headache":"1%",
            "stress":"13%",
            "depression":"11%",
            "anxiety":"11%",
            "pain":"7%",
            "ptsd":"6%"
        },

    },
    {
        "name":"Gelato",
        "img_url":"https://images.leafly.com/flower-images/gelato.jpg",
        "type":"Hybrid",
        "thc_level":"17%",
        "most_common_terpene":"Caryophyllene",
        "description":"Gelato, aka Larry Bird, is a hybrid marijuana strain made by crossing Sunset Sherbet and Thin Mint Girl Scout Cookies. The effects of Gelato produce a euphoric high accompanied by strong feelings of relaxation. Consumers say the physical sensation comes on strong, but many find themselves still mentally agile enough to stay productive and creative during the day. Gelato gets its name from the fruity, dessert-like aroma it smells like. Novice consumers may want to approach this THC Powerhouse with caution, but those armed with a high THC tolerance will delight in the heavy-handed effects of this strain. Medical marijuana patients choose Gelato to help relieve symptoms associated with pain, fatigue, and insomnia. Growers say this strain produces buds that bloom in dark purple hues and is illuminated by fiery orange hairs and a shining white coat of crystal resin.",
        "effects":{
            "relaxed":"54%",
            "happy":"49%",
            "euphoric":"46%",
            "uplifted":"37%",
            "creative":"27%",
            "dry_mouth":"20%",
            "dry_eyes":"9%",
            "dizzy":"4%",
            "paranoid":"3%",
            "anxious":"3%",
            "stress":"22%",
            "anxiety":"19%",
            "depression":"18%",
            "pain":"16%",
            "insomnia":"10%"
        },

    },]


const StrainsList = () => {

    return (
        <div className="border-8 border-blue-900 grid grid-cols-5 gap-2">
            {data.map((item: any, index: number) => {
                return (
                    <Link key={index} href={`/strains/${item.name}`}>
                       <li className="flex flex-col gap-1">
                            <div className="border-white relative flex flex-col justify-between h-full shadow-low rounded" >
                                <section>
                                    <Image src={item.img_url} alt="leafly-image" width={350} height={350}/>
                                </section>
                                <section>
                                    <div>{item.type}</div>
                                    <div>{item.name}</div>
                                    <div>
                                        <span>{item.thc_level}</span>
                                        <span>{item.most_common_terpene}</span>
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