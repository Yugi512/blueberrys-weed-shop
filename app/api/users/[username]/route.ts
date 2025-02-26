'use server'

import {db} from "@/database";
import {NextResponse} from "next/server";
import {userTable} from "@/database/schema";
import {eq} from "drizzle-orm";


export const GET = async (req: Request,{params} : {params: Promise<{username: string}>}) => {
    try {
        const name = (await params).username
        const user = await db
            .select()
            .from(userTable)
            .where(eq(userTable.username, name))
            .limit(1);
        return NextResponse.json(user)
    }
    catch(err){
        console.error(err);
        return NextResponse.json({status: 400, message: err});
    }
}

// at the moment we only are updating the email, username, first , and last name of the user, password and other stuff is later after we are done with all the other projects
export const PATCH = async (req: Request,{params} : {params: Promise<{username: string}>}) => {
    try {
        const name = (await params).username
        const user = await db
            .select()
            .from(userTable)
            .where(eq(userTable.username, name))
            .limit(1);

        const {firstName, lastName, userName, email} =  await req.json();
        const updatedUser = await db
            .update(userTable)
            .set({
                firstName: firstName,
                lastName: lastName,
                username: userName,
                email: email,
            })
            .where(eq(userTable.id, user[0].id))
            .returning();

        return NextResponse.json(updatedUser);
    } catch (err){
        console.error(err);
        return NextResponse.json({status: 400, message: err});
    }
}

export const DELETE = async (req: Request,{params} : {params: Promise<{username: string}>}) => {

    const name = (await params).username
    const user = await db
        .select()
        .from(userTable)
        .where(eq(userTable.username, name))
        .limit(1);
    const deletedUser = await db
        .delete(userTable)
        .where(eq(userTable.id, user[0].id))
        .returning();

    return NextResponse.json(deletedUser);
}