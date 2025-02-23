import {sign, verify} from "jsonwebtoken";
import {config} from "dotenv";
import {AuthCredentials} from "@/types";

config({path:'.env.local'});

const secret = process.env.JWT_SECRET! || "fallback_secret";

export const generateToken = async (payload: {id: string})=> {
    return sign(payload, secret, {expiresIn: "1d"});
}

export const verifyToken = async (token: string)=> {
    try{
        return verify(token,secret) as {id: string};
    } catch (error){
        console.error(error);
        return null;
    }
}


export const signUp = async (params: AuthCredentials) => {

}