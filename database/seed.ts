"use server"

import {productTable} from "@/database/schema";

import {
    createEffects,
    createProduct, createProductCategories, createProductInventory, deleteEffectsById,
    deleteProductById,
    deleteProductByName, getCategoryByName, getEffects,
    getProductByName, getProductInventory,
    getProducts, updateProduct
} from "@/database/index";
import {config} from 'dotenv'
import {eq} from "drizzle-orm"

config({path: '.env.local.local'})


getProducts().then(products => {console.log(products);});

// getProducts().then((data) => {
//     const randomInt = Math.floor(Math.random() * 10) + 1;
//
//     data.map( product => {
//         // getCategoryByName("Flower").then(async (category) => {
//         //     await db
//         //         .update(productTable)
//         //         .set({categoryID: category[0].id})
//         //         .where(eq(productTable.id, product.id));
//         // })
//         // createProductInventory({
//         //     productID: product.id,
//         //     quantity: randomInt,
//         //     availability: true,
//         // }).catch(err => console.log(err))
//         // ;
//         getProductInventory()
//
//     })
// })

//

// const mapped = data.map(obj => {
//     const effect = JSON.stringify(obj.effects);
//     getProductByName(obj.name).then((item) => {
//         const objEffects = {}
//         createEffects({
//             productID: item[0].id,
//             effects: effect,
//         }).catch((err) => {console.log(err)})
//     })
//
// })

// getEffects().then((eff) =>
//     eff.map((effect) =>
//         deleteEffectsById(effect.id)
//     )
// )
