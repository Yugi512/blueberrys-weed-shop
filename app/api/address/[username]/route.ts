'use server'

import {db,getUsersByUserName} from "@/database";
import {NextResponse} from "next/server";
import {userAddressTable, userTable} from "@/database/schema";
import {eq} from "drizzle-orm";

interface userAddress{
    id: string
    addressLineOne: string
    addressLineTwo: string | null
    city: string
    state: string
    zip: string
    // telephone: string
    mobile: string
}

export const GET = async (req: Request,{params} : {params: Promise<{username: string}>}) => {
    try {
        const name = (await params).username
        const user = await db
            .select()
            .from(userTable)
            .where(eq(userTable.username, name))
            .limit(1);
        const userAddress = await db
                .select()
                .from(userAddressTable)
                .where(eq(userAddressTable.userID,user[0].id));

        return NextResponse.json(userAddress);
    }
    catch(err){
        console.error(err);
        return NextResponse.json({status: 400, message: err});
    }
}

export const POST = async (req: Request,{params} : {params: Promise<{username: string}>}) => {

    try {
        const {userID, addressLineOne, addressLineTwo, city,state,zip} = await req.json();

        const newUserAddress = await db
            .insert(userAddressTable)
            .values({
                userID: userID,
                addressLineOne: addressLineOne,
                addressLineTwo: addressLineTwo,
                city: city,
                state: state,
                zip: zip
            });

        return NextResponse.json({message: "HELLLOOOO THIS IS A POST"});
    }
    catch(err){
        console.error(err);
        return NextResponse.json({status: 400, message: err});
    }
}

export const PATCH = async (req: Request,{params} : {params: Promise<{username: string}>}) => {
    try {
        const name = (await params).username

        const {userID, addressLineOne, addressLineTwo, city, state, zip} = await req.json();

        const newUserAddress = await db
            .update(userAddressTable)
            .set({
                addressLineOne: addressLineOne,
                addressLineTwo: addressLineTwo,
                city: city,
                state: state,
                zip: zip
            })
            .where(eq(userTable.id, userID))
            .returning();

        return NextResponse.json(newUserAddress);
    }
    catch(err){
        console.error(err)
        return NextResponse.json({status: 400, message: err});
    }
}

export const DELETE = async (req: Request,{params} : {params: Promise<{username: string}>}) => {
    // const {userID, }
}