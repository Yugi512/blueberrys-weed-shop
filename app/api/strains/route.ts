import {db, getProducts} from "@/database";
import {NextResponse} from 'next/server';

export const GET = async (req: Request, res: Response) => {
    try{
        const data = await getProducts();
        return NextResponse.json(data)
    }
    catch(err){
        console.log(err)
        return NextResponse.json({status:404 ,error: err})
    }
}

export const POST = async (req: Request, res: Response) => {

}