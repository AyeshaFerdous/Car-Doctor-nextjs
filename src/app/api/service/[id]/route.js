import { authOptions } from "@/lib/authOptions";
import dbConnect, { dbName } from "@/lib/dbConnecter";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export const DELETE = async(req, {params})=>{
    const param = await params;
    const bookingCollection = await dbConnect(dbName.bookingCollection)
    const query = {_id : new ObjectId(param.id)}

    // Validation
    const session = await getServerSession(authOptions)
    const currentBooking = await bookingCollection.findOne(query)

    const isOwner = session?.user?.email == currentBooking?.email

    if(isOwner){
        
    // deleting user specific bookings
   
    const deleteResponse = await bookingCollection.deleteOne(query)
    revalidatePath("my-bookings")
    return NextResponse.json(deleteResponse)
    }
    else{
        return NextResponse.json({success : false, message : "forbidden access"})
    }

}

export const GET = async(req, {params})=>{
    const param = await params;
    console.log(param.id);

    const servicesCollection = await dbConnect(dbName.servicesCollection)
    const service = await servicesCollection.findOne({_id : new ObjectId(param.id)})
    
    return NextResponse.json(service)
}