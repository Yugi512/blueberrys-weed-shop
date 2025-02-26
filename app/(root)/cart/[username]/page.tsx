import React from 'react'
import BottomNavbar from "@/components/BottomNavbar";
//
// Figure out how to implement subscription and price to then give a discount to those who are a premium user
// should be routes as /cart/user in that we can access the users info through the header as the cart button is in the header, so we create the component and then pass down the info to the cart comp
// check out is rerouted from the cart component
const Page = () => {
    return (
        <div>
            <div>Page</div>
            <div>component div</div>
            <div>bottom navbar div</div>
            <BottomNavbar />
        </div>
    )
}
export default Page
