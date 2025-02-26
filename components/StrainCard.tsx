"use client"
import Image from "next/image";
import {useEffect, useState} from "react";
import {AddAPIsRequestFromJSON} from "@kinde-oss/kinde-typescript-sdk";
import {AddToCartButton} from "@/components/AddToCartButton";
// need to implement effects but we need to figure it out after we are done

interface data {
    strain: {
        id: string
        name: string,
        imgUrl: string,
        price: number,
        type: string,
        mostCommonTerpene: string,
        thcLevel: string,
        description: string,
        categoryID: string,
        discountID: string,
    },
    effects: Array<effectsObject>,
    inventory: Array<inventory>,
}
interface Effects{
    tingly: string,
    cancer: string,
    pms: string,
    spinalCordInjury: string,
    pain: string,
    relaxed: string,
    aroused: string,
    muscleSpasms: string,
    depression: string,
    migraines: string,
    paranoid: string,
    inflammation: string,
    phantomLimbPain: string,
    talkative: string,
    dryEyes: string,
    dryMouth: string,
    stress: string,
    alzheimers: string,
    eyePressure: string,
    ptsd: string,
    fibromyalgia: string,
    anxious: string,
    dizzy: string,
    addADHD: string,
    epilepsy: string,
    anorexia: string,
    multipleSclerosis: string,
    headaches: string,
    sleepy: string,
    fatigue: string,
    hivAids: string,
    nausea: string,
    euphoric: string,
    asthma: string,
    energetic: string,
    giggly: string,
    tourettesSyndrome: string,
    gastrointestinalDisorder: string,
    spasticity: string,
    anxiety: string,
    uplifted: string,
    cramps: string,
    parkinsons: string,
    hypertension: string,
    glaucoma: string,
    crohnsDisease: string,
    insomnia: string,
    focused: string,
    hungry: string,
    muscularDystrophy: string,
    creative: string,
    happy: string,
    lackOfAppetite: string,
    seizures: string,
    bipolarDisorder: string,
    tinnitus: string,
    arthritis:string,
    headache: string
}

interface effectsObject{
    effects: object,
    id: string,
    productID: string,
}

interface inventory{
    id: string,
    productID: string,
    availability: boolean,
    quantity: number
}


const StrainCard = ({strain} : {strain: string}) => {
    // destructure the name and then replace the "%20" with spaces
    // we plug in the string with dashes and then we destructure it in the strain/[name] page
    const [data, setData] = useState<data>();
    const [isLoading, setIsLoading] = useState(true);

    const onChange = () => console.log("Hiiiiii")
    useEffect(() => {
        fetch(`http://localhost:3000/api/strains/${strain}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(!isLoading)
            })
            .catch(err => console.log(err));
    }, [])

    // console.log(typeof data?.effects[0].effects!)
    // console.log(data?.inventory[0].availability!)
    // console.log(data?.inventory[0].quantity!)

    // const mapp  =  JSON.parse(data?.effects?[0].map((item)=> {
    //     console.log(item)
    // }))
    // const mapp = JSON.parse(data?.effects[0]?.effects!)

    if(isLoading) return <h1>Loading...</h1>;
    if(!data) return null;
    console.log(data?.inventory[0].availability)

    return (
        <div id={data?.strain?.id} className="bg-slate-400">
            <div id={"image"}>
                <Image src={data?.strain?.imgUrl!} alt={data?.strain?.name!} height={300} width={300} />
            </div>
            <div id={"info-container"}>
                <span id={"title"}>
                    <h1>{data?.strain?.name!}</h1>
                </span>
                <div>
                    <h2>{data?.strain?.price ? data?.strain?.price! : "" }</h2>
                    <span>{data?.inventory[0].availability ? "in-stock" : "Not Available at the moment"}</span>
                    <span>{data?.inventory[0].quantity}</span>
                </div>
                {/*<div>*/}
                {/*    /!*{ Object.entries(data?.effects[0].effects!).map((effect,index) =>*!/*/}
                {/*    /!*        <div>*!/*/}
                {/*    /!*            <h1>{effect}</h1>*!/*/}
                {/*    /!*            <h1>{index}</h1>*!/*/}
                {/*    /!*        </div>*!/*/}
                {/*    /!*)}*!/*/}
                {/*</div>*/}
                <br/>
                <div id="options">
                    <select>
                        <option>Choose quantity</option>
                        <option>3.5g (Eighth)</option>
                        <option>7.5g (Quarter ounce)</option>
                        <option>14g (half ounce)</option>
                        <option>28g (ounce)</option>
                    </select>
                </div>
                <div id={"quantity"}>
                    <input id="quantity" type="number" value={1} min={1} max={""} placeholder={""} inputMode={"numeric"} step={1} size={4} onChange={onChange}/>
                    <button id={"decrease"}> - </button>
                    <button id={"increase"}> + </button>
                </div>
                <div>
                    <h2>Product information</h2>
                    <p>{data?.strain?.type}</p>
                    <p>{data?.strain?.thcLevel}</p>
                    <p>{data?.strain?.description}</p>
                </div>
                <div>
                    <AddToCartButton />
                </div>

            </div>
        </div>
    )
}

export default StrainCard;