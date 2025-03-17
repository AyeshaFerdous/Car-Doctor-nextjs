import dbConnect, { dbName } from "@/lib/dbConnecter";
import { NextResponse } from "next/server"

export const POST = async(req)=>{
    
    const body = await req.json();
   const bookingCollection = await dbConnect(dbName.bookingCollection)
   const result = await bookingCollection.insertOne(body)

    return NextResponse.json(result)
}