import dbConnect, { dbName } from "@/lib/dbConnecter";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async(req, {params})=>{
   const param = await params;
   const bookingCollection = await dbConnect(dbName.bookingCollection)
   const query = {_id : new ObjectId(param.id)}
   const singleBooking = await bookingCollection.findOne(query)

   return NextResponse.json(singleBooking)

}


export const PATCH = async(req, {params})=>{
    const param = await params;
    const bookingCollection = await dbConnect(dbName.bookingCollection)
    const query = {_id : new ObjectId(param.id)}

    const body = await req.json()
    const filter = {
        $set : {...body}
    }
    const option = {
        upsert :true
    }

    const updateResponse = await bookingCollection.updateOne(query, filter, option)
      revalidatePath("/my-bookings")
    return NextResponse.json(updateResponse)
}