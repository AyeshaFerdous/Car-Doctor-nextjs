import dbConnect, { dbName } from "@/lib/dbConnecter";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(req, {params})=>{
    const param = await params;
    console.log(param.id);

    const servicesCollection = await dbConnect(dbName.servicesCollection)
    const service = await servicesCollection.findOne({_id : new ObjectId(param.id)})
    
    return NextResponse.json(service)
}