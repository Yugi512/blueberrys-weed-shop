'use server';

import {userTable} from "@/database/schema";
import {AuthCredentials} from "@/types"

import { signIn } from "@/auth";
import {db} from "@/database";
import {eq} from "drizzle-orm";
import {hash} from "bcryptjs";


export const signInWithCredentials  = async (params: Pick<AuthCredentials, "email" | "password">) => {
    const {email, password} = params;

    try{

        const result = await signIn('credentials', {
            email,password, redirect: false
        })

        if(result?.error){
            return{success:false, error: result.error}
        }

        return {success:true}
    }catch(error){
        console.error("Sign in Error: ",error)
        return {success:false, error:"Sign in error"}
    }
}

export const signUp = async (params: AuthCredentials) => {
    const {username,email,password, firstName, lastName} = params

    const existingUser = await db.select()
        .from(userTable)
        .where(eq(userTable.email,email))
        .limit(1)

    if(existingUser.length > 0){
        return { success: false, error: "User already exists"};
    }

    const hashedPassword = await hash(password,16)

    try{
        await db.insert(userTable).values({
            username,
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        await signInWithCredentials({email,password});

        return {success:true}
    }catch(error){
        console.error("Sign up error: ", error)
        return { success: false, error: "Sign up error"}
    }

}