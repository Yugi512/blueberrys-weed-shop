'use server'

import {db,getUsersByUserName} from "@/database";
import {NextResponse} from "next/server";
import {eq} from "drizzle-orm";
import {userPaymentTable, userTable} from "@/database/schema";

export const GET = async (req: Request,{params} : {params: Promise<{username: string}>}) => {
    try {
        const name = (await params).username
        const user = await db
            .select()
            .from(userTable)
            .where(eq(userTable.username, name))
            .limit(1);
        const userPayment = await db
                .select()
                .from(userPaymentTable)
                .where(eq(userPaymentTable.userID,user[0].id));

        return NextResponse.json(userPayment);
    }
    catch(err){
        console.error(err);
        return NextResponse.json({status: 400, message: err});
    }
}

export const POST = async (req: Request,{params} : {params: Promise<{username: string}>}) => {}

export const PATCH = async (req: Request,{params} : {params: Promise<{username: string}>}) => {}

export const DELETE = async (req: Request,{params} : {params: Promise<{username: string}>}) => {}