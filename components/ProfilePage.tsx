"use client"

import React, {useEffect, useState} from 'react'
import UserOrders from "@/components/UserOrders";
import UserAddress from "@/components/UserAddress";
import UserPurchaseHistory from "@/components/UserPurchaseHistory";
import UserInformation from "@/components/UserInformation";

// so we need to create a settings part at the end but at the moment we just need to create the forms to add the users address
// payments is later but users information comes first then its the users addresses, so address form and then it displays the address

// make it like leafly
const ProfilePage = ({username} : {username: string}) => {

    // useEffect(() => {
    //     fetchData(`http://localhost:3000/api/users/${username}`,setUserInfo)
    //     fetchData(`http://localhost:3000/api/address/${username}`,setUserAddress)
    //     fetchData(`http://localhost:3000/api/user-payments/${username}`,setUserPayment)
    //     fetchData(`http://localhost:3000/api/orders/user-order/${username}`,setUserPayment)
    //     setLoading(!loading)
    // }, []);

    // if(loading) return <h1>Loading...</h1>;
    // we need to use bcryptjs compare in order to validate passwords when we are updating the users information
    // We need to implement stripe first but lets finish up the other projects
    //
    // CREATE A BUTTON THAT MAKES IT SO THAT WE CAN TURN ON AND OFF THE EDITING MODE FOR THE USERS INFORMATION, WE DONT WANT THEM TO CHANGE EVERYTHING AUTOMATICALLY OR BY ACCIDENT
    // ADDRESS SHOULD HAVE AN ADD AND EDIT THAT SHOWS DIFFERENT FORMS FOR EACH ON THE SAME PAGE LIKE THE FEELGOOD USER SIGN UP POP UP
    // {/*<div>*/}
    // {/*   <h1>ORDERS</h1>*/}
    // {/*    <UserOrders username={username}/>*/}
    // {/*</div>*/}
    // {/*<div>*/}
    // {/*    <h1>PURCHASE HISTORY</h1>*/}
    // {/*    <UserPurchaseHistory username={username}/>*/}
    // {/*</div>
    // {/*{<div>USER PAYMENT OPTION **** THIS IS TO BE IMPLEMENTED LATER ON WHEN WE HAVE STRIPE UP AND RUNNING**** </div>}*/}
    return (
        <div>
            <div>
                <UserInformation username={username} />
            </div>
            <br/>
            {/*<div>*/}
            {/*    <UserAddress username={username} />*/}
            {/*</div>*/}
        </div>
    )
}
export default ProfilePage;
