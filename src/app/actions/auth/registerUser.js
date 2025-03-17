"use server";

import dbConnect, { dbName } from "@/lib/dbConnecter";
import bcrypt from "bcryptjs";

export const registerUser = async (payload) => {
  const usersCollection = await dbConnect(dbName.usersCollection);
  // validation
  const {  email, password } = payload;

  if (!email || !password) return;

  const user = await usersCollection.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10)
    payload.password = hashedPassword;
    const result = await usersCollection.insertOne(payload);

    return result;
  }
  return;
};
