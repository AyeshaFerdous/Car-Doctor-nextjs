"use server"

import dbConnect, { dbName } from "@/lib/dbConnecter";
import bcrypt from "bcryptjs";

export const loginUser = async (payload)=>{

    const { email, password} = payload;
    const usersCollection = await dbConnect(dbName.usersCollection)
    const user = await usersCollection.findOne({email})

    if(!user) return;

    const isPassword = bcrypt.compare(user.password, password)
    if(!isPassword) return;

    return user;
}