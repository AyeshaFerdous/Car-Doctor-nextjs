import { authOptions } from "@/lib/authOptions";
import dbConnect, { dbName } from "@/lib/dbConnecter";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async(req, {params})=>{
   const param = await params;
   const bookingCollection = await dbConnect(dbName.bookingCollection)
   const query = {_id : new ObjectId(param.id)}
   const singleBooking = await bookingCollection.findOne(query)

   const session = await getServerSession(authOptions)
    const email = session?.user?.email;

    const isOwnerOk = email === singleBooking?.email

    if(isOwnerOk){
        return NextResponse.json(singleBooking)
    }
    else{
        return NextResponse.json({message : "Forbidden Get Action"}, {
            status : 403
        }) 
    }

}


export const PATCH = async(req, {params})=>{
    const param = await params;
    const bookingCollection = await dbConnect(dbName.bookingCollection)
    const query = {_id : new ObjectId(param.id)}

    const session = await getServerSession(authOptions)
    const email = session?.user?.email;
    const currentBookingData = await bookingCollection.findOne(query)

    const isOwnerOk = email === currentBookingData?.email

    if(isOwnerOk){
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
    else{
        return NextResponse.json({message : "Forbidden Update Action"}, {
            status : 403
        })
    }
}