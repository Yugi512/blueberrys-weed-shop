import {db, getProductByName} from "@/database";
import {NextResponse} from 'next/server';
import {effectsTable, productInventoryTable} from "@/database/schema";
import {eq} from "drizzle-orm";

export const GET = async (req: Request,{params} : {params: Promise<{name: string}>}) => {
    const name = (await params).name
    const strain = name.replace(/-/g," ")
    let data: any = {}
    try{
        await getProductByName(strain)
            .then(async (product) => {
                data.strain = product[0]
                data.inventory = await db.select().from(productInventoryTable).where(eq(productInventoryTable.productID, product[0].id))
                data.effects= await db.select().from(effectsTable).where(eq(effectsTable.productID, product[0].id))
            })
        return NextResponse.json(data)
    }
    catch(err){
        console.log(err)
        return NextResponse.json({status:404 ,error: err})
    }

}

export const PATCH = async (req: Request, { params }: { params: { name : string }}) => {

}

export const DELETE = async (req: Request, { params }: { params: { name : string }}) => {

}
