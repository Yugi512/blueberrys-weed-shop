
import NextAuth, { User } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from "bcryptjs";
import {userTable} from "@/database/schema";
import {eq} from "drizzle-orm";
import GoogleProvider from "next-auth/providers/google";

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon("postgresql://blueberry_owner:npg_12guSQFoJEOr@ep-flat-math-a56zax02-pooler.us-east-2.aws.neon.tech/blueberry?sslmode=require");
const db = drizzle({ client: sql });


export const { handlers, signIn, signOut, auth} = NextAuth({
    session: {
        strategy:'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials){
                if(!credentials.email || !credentials.password){
                    return null;
                }

                const user = await db
                    .select()
                    .from(userTable)
                    .where(eq(userTable.email, credentials.email.toString()))
                    .limit(1);

                if(user.length === 0) return null;

                const isPasswordValid = await compare(credentials.password.toString(), user[0].password)

                if(!isPasswordValid) return null;

                return {
                    id: user[0].id.toString(),
                    email: user[0].email.toString(),
                    username: user[0].username
                } as User
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET_KEY!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
            }
        })
    ],
    pages: {
        signIn: "/sign-in"
    },
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.id = user.id;
                token.name = user.name;
            }
            return token;
        },
        async session({session,token}){
            if(session.user){
                session.user.id = token.id as string;
                session.user.name = token.name as string
            }
            return session;
        },
    },
});
