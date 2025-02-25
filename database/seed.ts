"use server"

import {productTable} from "@/database/schema";

import {
    createEffects,
    createProduct, createProductCategories, createProductInventory, db, deleteEffectsById,
    deleteProductById,
    deleteProductByName, getCategoryByName, getEffects,
    getProductByName, getProductInventory,
    getProducts, updateProduct
} from "@/database/index";
import {config} from 'dotenv'
import {eq} from "drizzle-orm"

config({path: '.env.local.local'})

//
// getProductByName('Runtz').then(product => {console.log(products);});
// getProducts().then((data) => {
//     data.map((item) => {
//         if(item.imgUrl === "https://img.freepik.com/free-psd/crystal-cannabis-leaf-green-marijuana-gemstone_632498-59748.jpg?t=st=1740395347~exp=1740398947~hmac=13dcd7aa1f5bd7fd1819be1e366bdbc536a6c003796011751d2b47818105953d&w=740") {
//             db.update(productTable)
//                 .set({
//                     imgUrl: 'https://img.freepik.com/free-vector/cannabis-leaf-icon_98292-4592.jpg?t=st=1740417533~exp=1740421133~hmac=6cca599f24ad5919eafbd8b0de2c354e5bb21d94a4fed74dee483c10d4a2b03b&w=740',
//                 })
//                 .where(eq(productTable.id,item.id))
//                 .catch(error => {console.log(error)});
//             // strains.push(item);
//         }
//         // strains.push(item);
//     })
// })

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
