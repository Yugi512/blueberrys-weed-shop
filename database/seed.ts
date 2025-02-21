import {
    createUser,
    createUserAddress,
    createUserPayment,
    createEffects,
    createShoppingSession,
    createOrderItems,
    createCartItem,
    createDiscount,
    createOrderDetails,
    createProduct,
    createPaymentDetail,
    createProductCategories,
    createProductItem,
    db
} from "@/database/index";
import fs from "fs";
import {Strain} from "@/types";


async function user() {
    const users = [{},{},{},{},{},{}]
}



async function products(){
    fs.readFile("leafly_data.json", "utf8", (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        try{
            const array = JSON.parse(data);
            const url = array.map((obj: any ) => {
                createProduct({})
            })
        } catch (error){
            console.log(error)
        }
    })

}



