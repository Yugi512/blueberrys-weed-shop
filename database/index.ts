import {
    cartItemTable, discountTable, effectsTable, orderDetailTable, orderItemsTable,
    paymentDetailTable, productCategoryTable, productInventoryTable, productTable,
    shoppingSessionTable,
    userAddressTable,
    userPaymentTable,
    userTable
} from "./schema";
import {config} from 'dotenv'
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

config({path: '.env.local.local'})

const sql = neon("postgresql://blueberry_owner:npg_12guSQFoJEOr@ep-flat-math-a56zax02-pooler.us-east-2.aws.neon.tech/blueberry?sslmode=require");
const db = drizzle({ client: sql });

import {eq, InferSelectModel, InferInsertModel} from "drizzle-orm"

// so when accessing the database using queries, as long as they are linked we are able to access the information that they are connected to as in check drizzle studio to see the relations and constantly debug lol
// May have to write more queries depending on the circumstance ,or I might as well do it inline tbh
// CRUD operation queries for all main tables

// *****
// any notes for later go here
// SO we need to make it so that it aborts any partial posts
// We need to convert all these queries into transactions so that they are absolute in the database
// *****


// Users
// types
export type SelectUser = InferSelectModel<typeof userTable>
export type InsertUser = InferInsertModel<typeof userTable>
// get
export const getUsers = async () =>
    await db
        .select()
        .from(userTable);

export const getUsersByUserName = async (username: string) =>
    await db
        .select()
        .from(userTable)
        .where(eq(userTable, username))
        .limit(1);

export const getUserByEmail = async (email: string) =>
    await db
        .select()
        .from(userTable)
        .where(eq(userTable.email, email))
        .limit(1);

// post
export const createUser = async (InsertUser: InsertUser)     =>
    await db
        .insert(userTable)
        .values(InsertUser)
        .onConflictDoNothing()
        .returning();

// update
export const updateUserById = async (id:string, updatedUser: SelectUser ) =>
    await db
        .update(userTable)
        .set(updatedUser)
        .where(eq(userTable.id, id))
        .returning();

// delete
export const deleteUserAndRelatedRowsById = async (id:string) =>
    await db.transaction(async (trx) => {
        await trx.delete(userTable)
            .where(eq(userTable.id, id))
        await trx.delete(userAddressTable)
            .where(eq(userAddressTable.userID, id))
        await trx.delete(userPaymentTable)
            .where(eq(userPaymentTable.userID, id))
        await trx.delete(shoppingSessionTable)
            .where(eq(shoppingSessionTable.userID, id))
        await trx.delete(orderDetailTable)
            .where(eq(orderDetailTable.userID, id))
    })

// User Address
// types
export type SelectUserAddress = InferSelectModel<typeof userAddressTable>;
export type InsertUserAddress = InferInsertModel<typeof userAddressTable>;

// get
export const getUserAddress = async (userId: string) =>
    await db
        .select()
        .from(userAddressTable)
        .where(eq(userAddressTable.userID, userId))
        .limit(1)

// post
export const createUserAddress = async (InsertUserAddress: InsertUserAddress) =>
    await db
        .insert(userAddressTable)
        .values(InsertUserAddress)
        .onConflictDoNothing()
        .returning();

// update
export const updateUserAddress = async (userId: string,SelectUserAddress: SelectUserAddress) =>
    await db
        .update(userAddressTable)
        .set(SelectUserAddress)
        .where(eq(userAddressTable.userID, userId))
        .returning();

// delete
export const deleteUserAddressById = async (id:string) =>
    await db
        .delete(userAddressTable)
        .where(eq(userAddressTable.id, id))
        .returning();

// User Payments
//types
export type SelectUserPayment = InferSelectModel<typeof userPaymentTable>;
export type InsertUserPayment = InferInsertModel<typeof userPaymentTable>;
// get
export const getUserPaymentById = async (id: string) =>
    await db
        .select()
        .from(userPaymentTable)
        .where(eq(userPaymentTable.id, id))
        .limit(1);

export const getUserPaymentsByUserId = async (userId: string) =>
    await db
        .select()
        .from(userPaymentTable)
        .where(eq(userPaymentTable.userID, userId))
        .limit(1);

// post
export const createUserPayment = async (InsertUserPayment: InsertUserPayment) =>
    await db
        .insert(userPaymentTable)
        .values(InsertUserPayment)
        .onConflictDoNothing()
        .returning();

// update
export const updateUserPayment = async (userId:string, SelectUserPayment: SelectUserPayment) =>
    await db
        .update(userPaymentTable)
        .set(SelectUserPayment)
        .where(eq(userPaymentTable.userID, userId))
        .returning();

// delete
export const deleteUserPaymentById = async (id:string) =>
    await db
        .delete(userPaymentTable)
        .where(eq(userPaymentTable.userID, id))
        .returning();

// Payment Details
//types
export type SelectPaymentDetails = InferSelectModel<typeof paymentDetailTable>
export type InsertPaymentDetails = InferInsertModel<typeof paymentDetailTable>;
// get
export const getPaymentDetails = async () =>
    await db
        .select()
        .from(paymentDetailTable);

export const getPaymentDetailById = async (id: string) =>
    await db
        .select()
        .from(paymentDetailTable)
        .where(eq(paymentDetailTable.id, id))
        .limit(1);

export const getPaymentDetailByOrderId = async (orderId: string) =>
    await db
        .select()
        .from(paymentDetailTable)
        .where(eq(paymentDetailTable.orderID, orderId))
        .limit(1);

// post
export const createPaymentDetail = async (InsertPaymentDetail: InsertPaymentDetails) =>
    await db
        .insert(paymentDetailTable)
        .values(InsertPaymentDetail)
        .onConflictDoNothing()
        .returning();

// update
export const updatePaymentDetailById = async (id:string,SelectPaymentDetails: SelectPaymentDetails) =>
    await db
        .update(paymentDetailTable)
        .set(SelectPaymentDetails)
        .where(eq(paymentDetailTable.id, id))
        .returning();

// delete
export const deletePaymentDetailById = async (id: string) =>
    await db
        .delete(paymentDetailTable)
        .where(eq(paymentDetailTable.id, id))
        .returning();

// Shopping Session
//types
export type SelectShoppingSession = InferSelectModel<typeof shoppingSessionTable>;
export type InsertShoppingSession = InferInsertModel<typeof shoppingSessionTable>;
// get
export const getShoppingSessions = async () =>
    await db
        .select()
        .from(shoppingSessionTable);

export const getShoppingSessionById = async (id: string) =>
    await db
        .select()
        .from(shoppingSessionTable)
        .where(eq(shoppingSessionTable.id, id))
        .limit(1);

export const getShoppingSessionByUserID = async (userID: string) =>
    await db
        .select()
        .from(shoppingSessionTable)
        .where(eq(shoppingSessionTable.userID, userID))
        .limit(1);

// post
export const createShoppingSession = async (InsertShoppingSession: InsertShoppingSession) =>
    await db
        .insert(shoppingSessionTable)
        .values(InsertShoppingSession)
        .onConflictDoNothing()
        .returning();

// update
export const updateShoppingSessionById = async (id: string,SelectShoppingSession: SelectShoppingSession) =>
    await db
        .update(shoppingSessionTable)
        .set(SelectShoppingSession)
        .where(eq(shoppingSessionTable.id, id))
        .returning();

// delete
export const deleteShoppingSessionById = async (id: string) =>
    await db
        .delete(shoppingSessionTable)
        .where(eq(shoppingSessionTable.id, id))
        .returning();

// delete all related to shopping session
export const deleteShoppingSessionAndRelatedById = async (id: string) =>
    await db.transaction(async (trx) => {
        await trx.delete(shoppingSessionTable)
            .where(eq(shoppingSessionTable.id, id))
        await trx.delete(cartItemTable)
            .where(eq(cartItemTable.sessionID, id))
    })

// Cart Item
//types
export type SelectCartItem = InferSelectModel<typeof cartItemTable>;
export type InsertCartItem = InferInsertModel<typeof cartItemTable>;
// get
export const getCartItems = async () =>
    await db
        .select()
        .from(cartItemTable);

export const getCartItemById = async (id: string) =>
    await db
        .select()
        .from(cartItemTable)
        .where(eq(cartItemTable.id, id))
        .limit(1);

export const getCartItemsBySessionID = async (sessionId: string) =>
    await db
        .select()
        .from(cartItemTable)
        .where(eq(cartItemTable.sessionID, sessionId));

// post
export const createCartItem = async (InsertCartItem: InsertCartItem) =>
    await db
        .insert(cartItemTable)
        .values(InsertCartItem)
        .onConflictDoNothing()
        .returning();

// update
export const updateCartItemByID = async (id:string,SelectCartItem: SelectCartItem) =>
    await db
        .update(cartItemTable)
        .set(SelectCartItem)
        .where(eq(cartItemTable.id, id))
        .returning();

// delete
export const deleteCartItemById = async (id: string) =>
    await db
        .delete(cartItemTable)
        .where(eq(cartItemTable.id, id))
        .returning();

// Order Details
//types
export type SelectOrderDetails = InferSelectModel<typeof orderDetailTable>;
export type InsertOrderDetails = InferInsertModel<typeof orderDetailTable>;
// get
export const getOrderDetails = async () =>
    await db
        .select()
        .from(orderDetailTable);

export const getOrderDetailById = async (id: string) =>
    await db
        .select()
        .from(orderDetailTable)
        .where(eq(orderDetailTable.id, id))
        .limit(1);

export const getOrderByUserId = async (userId: string) =>
    await db
        .select()
        .from(orderDetailTable)
        .where(eq(orderDetailTable.userID, userId))
        .limit(1);

// post
export const createOrderDetails = async (InsertOrderDetails: InsertOrderDetails) =>
    await db
        .insert(orderDetailTable)
        .values(InsertOrderDetails)
        .onConflictDoNothing()
        .returning();

// update
export const updateOrderDetailsById = async (id:string ,SelectOrderDetails: SelectOrderDetails) =>
    await db
        .update(orderDetailTable)
        .set(SelectOrderDetails)
        .where(eq(orderDetailTable.id, id))
        .returning();

// delete
export const deleteOrderDetailsById = async (id:string) =>
    await db
        .delete(orderDetailTable)
        .where(eq(orderDetailTable.id, id))
        .returning();

// delete related
export const deleteOrderDetailAndRelatedById = async (id: string) =>
    await db.transaction(async (trx) => {
        await trx.delete(orderDetailTable)
            .where(eq(orderDetailTable.id, id))
        await trx.delete(paymentDetailTable)
            .where(eq(paymentDetailTable.orderID, id))
        await trx.delete(orderItemsTable)
            .where(eq(orderItemsTable.orderID, id))
    })


// Order Items
//types
export type SelectOrderItems = InferSelectModel<typeof orderItemsTable>;
export type InsertOrderItems = InferInsertModel<typeof orderItemsTable>;
// get
export const getOrderItems = async () =>
    await db
        .select()
        .from(orderItemsTable);

export const getOrderItemsByOrderId = async (orderId: string) =>
    await db
        .select()
        .from(orderItemsTable)
        .where(eq(orderItemsTable.orderID, orderId));

export const getOrderItemsById = async (id: string) =>
    await db
        .select()
        .from(orderItemsTable)
        .where(eq(orderItemsTable.id, id));

// post
export const createOrderItems = async (InsertOrderItems: InsertOrderItems) =>
    await db
        .insert(orderItemsTable)
        .values(InsertOrderItems)
        .onConflictDoNothing()
        .returning();

// update
export const updateOrderItems = async (id:string,SelectOrderItems: SelectOrderItems) =>
    await db
        .update(orderItemsTable)
        .set(SelectOrderItems)
        .where(eq(orderItemsTable.id,id))
        .returning();

// delete
export const deleteOrderItemsById = async (id:string) =>
    await db
        .delete(orderItemsTable)
        .where(eq(orderItemsTable.id, id))
        .returning();

// Products
//types
export type SelectProduct = InferSelectModel<typeof productTable>;
export type InsertProduct = InferInsertModel<typeof productTable>;
// get
export const getProducts = async () =>
    await db
        .select()
        .from(productTable);

export const getProductById = async (id: string) =>
    await db
        .select()
        .from(productTable)
        .where(eq(productTable.id, id))

export const getProductByName = async (name: string) =>
    await db
        .select()
        .from(productTable)
        .where(eq(productTable.name, name))
        .limit(1);
// get product effects
export const getProductsEffects = async (id: string) =>
    await db
        .select()
        .from(effectsTable)
        .innerJoin(productTable, eq(effectsTable.productID, id));

// export const getProductsEffectsWithEffectsId = async (effectsId: string) =>
//     await db
//         .select()
//         .from(productTable)
//         .innerJoin(effectsTable, eq(productTable.effectsID, effectsId))
//         .limit(1);

// get product categories
export const getProductsCategories = async () =>
    await db
        .select()
        .from(productTable)
        .innerJoin(productCategoryTable, eq(productTable.categoryID, productCategoryTable.id));

export const getProductsCategoryWithCategoryId = async (categoryId: string) =>
    await db
        .select()
        .from(productTable)
        .innerJoin(productCategoryTable, eq(productTable.categoryID, categoryId));

// get product discounts
export const getProductsDiscounts = async () =>
    await db
        .select()
        .from(productTable)
        .innerJoin(discountTable, eq(productTable.discountID, discountTable.id));

export const getProductsDiscountsWithDiscountId = async (discountId: string) =>
    await db
        .select()
        .from(productTable)
        .innerJoin(discountTable, eq(productTable.discountID, discountId));

// get product inventory
export const getProductsInventory = async (id: string) =>
    await db
        .select()
        .from(productTable)
        .innerJoin(productTable, eq(productInventoryTable.productID, id));

// export const getProductsInventoryWithInventoryId = async (inventoryId: string) =>
//     await db
//         .select()
//         .from(productTable)
//         .innerJoin(productInventoryTable, eq(productTable.inventoryID, inventoryId));

// post
export const createProduct = async (InsertProduct: InsertProduct) =>
    await db
        .insert(productTable)
        .values(InsertProduct)
        .returning();

// update
export const updateProduct = async (id: string, SelectProduct: { imgUrl: string }) =>
    await db
        .update(productTable)
        .set(SelectProduct)
        .where(eq(productTable.id, id))
        .returning();

// delete
export const deleteProductById = async (id: string) =>
    await db
        .delete(productTable)
        .where(eq(productTable.id, id))
        .returning();

// delete by name
export const deleteProductByName = async (name: string) =>
    await db
        .delete(productTable)
        .where(eq(productTable.name, name))
        .returning();

// delete all related to product id
export const deleteProductAndRelatedById = async (id: string) =>
    await db.transaction(async (trx) => {
        await trx.delete(productTable)
            .where(eq(productTable.id, id))
        await trx.delete(productInventoryTable)
            .where(eq(productInventoryTable.productID, id))
        await trx.delete(effectsTable)
            .where(eq(effectsTable.productID, id))
    })


// Effects
//types
export type SelectEffects = InferSelectModel<typeof effectsTable>;
export type InsertEffects = InferInsertModel<typeof effectsTable>;
// get
export const getEffects = async () =>
    await db
        .select()
        .from(effectsTable);

// post
export const createEffects = async (InsertEffects: InsertEffects) =>
    await db
        .insert(effectsTable)
        .values(InsertEffects)
        .returning();

// update
export const updateEffects = async (id:string ,SelectEffects: SelectEffects) =>
    await db
        .update(effectsTable)
        .set(SelectEffects)
        .where(eq(effectsTable.id, id))
        .returning();

// delete
export const deleteEffectsById = async (id: string) =>
    await db
        .delete(effectsTable)
        .where(eq(effectsTable.id, id))
        .returning();

// Product Category
//types
export type InsertProductCategory = InferInsertModel<typeof productCategoryTable>;
export type SelectProductCategory = InferSelectModel<typeof productCategoryTable>;
// get
export const getProductCategories = async () =>
    await db
        .select()
        .from(productCategoryTable);


// by name
export const getCategoryByName = async (name: string) =>
    await db
        .select()
        .from(productCategoryTable)
        .where(eq(productCategoryTable.name, name))
// post
export const createProductCategories = async (InsertProductCategory: InsertProductCategory) =>
    await db
        .insert(productCategoryTable)
        .values(InsertProductCategory)
        .returning();

// update
export const updateProductCategory = async (id:string ,SelectProductCategory: SelectProductCategory) =>
    await db
        .update(productCategoryTable)
        .set(SelectProductCategory)
        .where(eq(productCategoryTable.id, id))
        .returning();

// delete
export const deleteProductCategoryById = async (id: string) =>
    await db
        .delete(productCategoryTable)
        .where(eq(productCategoryTable.id, id))
        .returning();

// Product Inventory
//types
export type InsertProductItem = InferInsertModel<typeof productInventoryTable>;
export type SelectProductItem = InferSelectModel<typeof productInventoryTable>;
// get
export const getProductInventory = async () =>
    await db
        .select()
        .from(productInventoryTable);

// post
export const createProductInventory = async (InsertProductItem: InsertProductItem) =>
    await db
        .insert(productInventoryTable)
        .values(InsertProductItem)
        .returning();

// update
export const updateProductInventory = async (id:string ,SelectProductItem: SelectProductItem) =>
    await db
        .update(productInventoryTable)
        .set(SelectProductItem)
        .where(eq(productInventoryTable.id, id))
        .returning();

// delete
export const deleteProductInventoryById = async (id: string) =>
    await db
        .delete(productInventoryTable)
        .where(eq(productInventoryTable.id, id))
        .returning();

// Discount
//types
export type SelectDiscount = InferSelectModel<typeof discountTable>;
export type InsertDiscount = InferInsertModel<typeof discountTable>;

// get
export const getDiscounts = async () =>
    await db
        .select()
        .from(discountTable);

// post
export const createDiscount = async (InsertDiscount: InsertDiscount) =>
    await db
        .insert(discountTable)
        .values(InsertDiscount)
        .returning();

// update
export const updateDiscount = async (id:string ,SelectDiscount: SelectDiscount) =>
    await db
        .update(discountTable)
        .set(SelectDiscount)
        .where(eq(discountTable.id, id))
        .returning();

// delete
export const deleteDiscountById = async (id: string) =>
    await db
        .delete(discountTable)
        .where(eq(discountTable.id, id))
        .returning();

export { db };
