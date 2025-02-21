import Image from "next/image";
import {Strain} from "@/types";
// write functions that add to cart, update the cart inventory
// write function that updates the quantity and when its added to amount is added to the cart, so if they want 3 ounces it shows in the user cart that they choose to buy 3 ounces and it shows the amount, it would look like this " 3ct x $200 = $600 " and if they add the same item again it should update to 4 instead of three or the set amount that was added to the cart,
// we need to add a size portion to the product or the inventory, so that its easier to handle that so we can wait on the select quantity for now
// buy now should go towards lead to our checkout page so that they can still update it and when they wanna buy, they click on the buy button and then it leads them to the stripe checkout so they can pay
// we need to figure out how to make it so that we can get the receipt and add it the orders then we would also have to add a receipt number to the order details table and then have a function that updates that part of the table and then handle things like refunds and complaints


const StrainCard = ({strain} : {strain: Pick<Strain, "name" | "img_url" | "type" | "thc_level" | "description" | "effects" >}) => {
    const {name,type ,description, img_url,  thc_level ,effects } = strain;
        // price,inventory
    // destructure the name and then replace the "%20" with spaces
    // we plug in the string with dashes and then we destructure it in the strain/[name] page
    const onChange = () => console.log("Hiiiiii")

    return (
        <div >
            <div id={"image"}>
                <Image src={img_url} alt={name} height={1000} width={1000} />
            </div>
            <div id={"info-container"}>
                <span id={"title"}>
                    <h1>{name}</h1>
                </span>
                {/*<div>*/}
                {/*    <h2>{price}</h2>*/}
                {/*    <span>{inventory.availability ? "In-Stock" : "Not In-Stock"}</span>*/}
                {/*</div>*/}
                {Object.entries(effects).map(([key,value]) => {
                    return (
                    <div key={key} id={key}>
                        <ul>
                            <p>
                                {key} : {value}
                            </p>
                        </ul>
                    </div>
                    )
                })}
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
                    <p>{type}</p>
                    <p>{thc_level}</p>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    )
}

export default StrainCard;