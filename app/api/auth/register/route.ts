import {db} from '@/drizzle'
import {userTable} from "@/database/schema";
import bcrypt from 'bcryptjs'
import {NextResponse} from "next/server";
import {eq} from "drizzle-orm";


export async function POST(req: ) {
    const { username, firstName, lastName, email, password }= req?.body;



}
